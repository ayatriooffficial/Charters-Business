import Blog from '../models/Blog.model.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';
import ApiError from '../utils/ApiError.js';
import {
  getContentAgentBlogs,
  getContentAgentBlogById,
  mapAgentBlog,
} from '../config/contentAgentDb.js';

function normalizeTitle(title) {
  return String(title || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/**
 * Get all approved blogs for the public feed.
 * Merges Old Blog DB (status: approved) + New Blog DB (status: published),
 * dedupes by normalized title, sorts by releasedAt desc.
 */
export const getApprovedBlogs = asyncHandler(async (req, res) => {
  const oldBlogs = await Blog.find({ status: 'approved' })
    .sort({ releasedAt: -1, createdAt: -1 })
    .lean();

  const agentBlogs = await getContentAgentBlogs();

  // Merge + dedupe by normalized title (newer releasedAt wins)
  const byTitle = new Map();
  for (const blog of oldBlogs) {
    byTitle.set(normalizeTitle(blog.title), blog);
  }
  for (const blog of agentBlogs) {
    const key = normalizeTitle(blog.title);
    const existing = byTitle.get(key);
    if (!existing) {
      byTitle.set(key, blog);
    } else {
      const existingDate = new Date(existing.releasedAt || existing.createdAt || 0);
      const newDate = new Date(blog.releasedAt || blog.createdAt || 0);
      if (newDate > existingDate) byTitle.set(key, blog);
    }
  }

  const merged = [...byTitle.values()].sort(
    (a, b) =>
      new Date(b.releasedAt || b.createdAt || 0) -
      new Date(a.releasedAt || a.createdAt || 0)
  );

  res.status(200).json(
    new ApiResponse(200, merged, 'Approved blogs retrieved successfully')
  );
});

/**
 * Get a single blog by ID.
 * Checks Old Blog DB first, then New Blog DB (published only).
 */
export const getBlogById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id).lean();

  if (blog) {
    return res.status(200).json(
      new ApiResponse(200, blog, 'Blog retrieved successfully')
    );
  }

  const agentBlog = await getContentAgentBlogById(id);
  if (agentBlog) {
    return res.status(200).json(
      new ApiResponse(200, agentBlog, 'Blog retrieved successfully')
    );
  }

  throw new ApiError(404, 'Blog not found');
});

export default {
  getApprovedBlogs,
  getBlogById,
};
