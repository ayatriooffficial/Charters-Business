import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';
import ApiError from '../utils/ApiError.js';
import {
  getContentAgentBlogs,
  getContentAgentBlogById,
} from '../config/contentAgentDb.js';

function normalizeTitle(title) {
  return String(title || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/**
 * Interleaves blogs by category (round-robin) so two blogs of the same
 * category do NOT sit next to each other, unless only one category remains.
 */
function interleaveByCategory(blogs) {
  const groups = new Map();
  for (const blog of blogs) {
    const key = String(blog.category || 'Uncategorized').trim();
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(blog);
  }

  const buckets = [...groups.values()];
  const result = [];

  let added = true;
  while (added) {
    added = false;
    for (const bucket of buckets) {
      if (bucket.length) {
        result.push(bucket.shift());
        added = true;
      }
    }
  }

  return result;
}

/**
 * Get all blogs for the public feed.
 * Content-agent blogs only (fetched from the deployed agent API),
 * interleaved by category so the same category doesn't repeat adjacently.
 */
export const getApprovedBlogs = asyncHandler(async (req, res) => {
  const agentBlogs = await getContentAgentBlogs();

  // Dedupe by normalized title
  const byTitle = new Map();
  for (const blog of agentBlogs) {
    const key = normalizeTitle(blog.title);
    if (!byTitle.has(key)) byTitle.set(key, blog);
  }

  const sorted = [...byTitle.values()].sort(
    (a, b) =>
      new Date(b.releasedAt || b.createdAt || 0) -
      new Date(a.releasedAt || a.createdAt || 0)
  );

  const interleaved = interleaveByCategory(sorted);

  res.status(200).json(
    new ApiResponse(200, interleaved, 'Blogs retrieved successfully')
  );
});

/**
 * Get a single blog by ID from the content-agent.
 */
export const getBlogById = asyncHandler(async (req, res) => {
  const { id } = req.params;

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
