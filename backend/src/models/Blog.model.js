import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Blog title is required'],
      trim: true,
      index: true,
    },
    content: {
      type: String,
      required: [true, 'Blog content is required'],
    },
    author: {
      type: String,
      default: 'Charters Team',
      trim: true,
    },
    readTime: {
      type: String,
      default: '10 min read',
      trim: true,
    },
    category: {
      type: String,
      default: 'Career Growth',
      trim: true,
      index: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: {
        values: ['pending', 'approved', 'rejected'],
        message: 'Status must be pending, approved, or rejected',
      },
      default: 'pending',
      index: true,
    },
    releasedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Compound indexes for common queries
blogSchema.index({ status: 1, createdAt: -1 });
blogSchema.index({ status: 1, category: 1 });

// Text index for search
blogSchema.index(
  {
    title: 'text',
    content: 'text',
    category: 'text',
  },
  {
    weights: {
      title: 10,
      category: 5,
      content: 1,
    },
  }
);

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
