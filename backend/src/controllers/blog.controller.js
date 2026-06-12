import Blog from '../models/Blog.model.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';

/**
 * Get all approved blogs for the public feed.
 */
export const getApprovedBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({ status: 'approved' })
    .sort({ releasedAt: -1, createdAt: -1 })
    .lean();

  res.status(200).json(
    new ApiResponse(200, blogs, 'Approved blogs retrieved successfully')
  );
});

export default {
  getApprovedBlogs,
};
