import mongoose from 'mongoose';
import '../config/loadEnv.js';

/**
 * Content-Agent blog fetcher — pulls published/approved blogs directly from
 * the Content-Agent MongoDB database (0ms Render sleep latency).
 *
 * Falls back gracefully to HTTP API if DB is unreachable.
 */

const CONTENT_AGENT_MONGO_URI = (process.env.CONTENT_AGENT_MONGO_URI || '').trim();

const API_BASE = (
  process.env.CONTENT_AGENT_API_URL ||
  'https://content-agent-u1on.onrender.com'
).replace(/\/+$/, '');

let agentDbConnection = null;
let AgentBlogModel = null;

function getAgentBlogModel() {
  if (AgentBlogModel) return AgentBlogModel;
  if (!CONTENT_AGENT_MONGO_URI) return null;

  if (!agentDbConnection) {
    agentDbConnection = mongoose.createConnection(CONTENT_AGENT_MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    agentDbConnection.on('error', (err) => {
      console.warn(`⚠️ Content-Agent MongoDB connection error: ${err.message}`);
    });
  }

  const blogSchema = new mongoose.Schema(
    {
      title: String,
      content: String,
      summary: String,
      metaDescription: String,
      h1: String,
      h2s: [String],
      category: String,
      status: String,
      tags: [String],
      faq: [{ question: String, answer: String, _id: false }],
      cta: String,
      wordCount: Number,
      readingTime: Number,
      course: String,
      seoKeywords: [String],
      dayOffset: Number,
      releaseDate: Date,
      createdAt: Date,
      updatedAt: Date,
    },
    { collection: 'blogs' }
  );

  AgentBlogModel = agentDbConnection.model('ContentAgentBlog', blogSchema);
  return AgentBlogModel;
}

function computeReadTime(content) {
  const words = String(content || '').trim().split(/\s+/).filter(Boolean).length;
  if (!words) return '10 min read';
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

/**
 * Maps a raw content-agent blog doc into the client's Blog shape.
 */
export function mapAgentBlog(doc) {
  if (!doc) return null;
  const raw = doc.toObject ? doc.toObject() : doc;

  const cleanTitle = String(raw.title || '')
    .trim()
    .replace(/^"|"$/g, '')
    .trim();

  const cleanCategory = String(raw.category || '')
    .trim()
    .replace(/^"|"$/g, '')
    .trim();

  const publishTimestamp = raw.releaseDate || raw.createdAt || new Date();

  return {
    _id: String(raw._id),
    title: cleanTitle,
    content: raw.content || '',
    author: 'Charters Team',
    readTime: raw.readingTime ? `${raw.readingTime} min read` : computeReadTime(raw.content),
    category: cleanCategory || 'Career Growth',
    tags: Array.isArray(raw.tags) ? raw.tags : [],
    status: raw.status || 'approved',
    releasedAt: publishTimestamp,
    createdAt: raw.createdAt || publishTimestamp,
    updatedAt: raw.updatedAt || raw.createdAt || publishTimestamp,
    source: 'content-agent',
  };
}

/**
 * Fetches all approved/published blogs that have reached their scheduled releaseDate.
 */
export async function getContentAgentBlogs() {
  // 1. Direct MongoDB fetch (instant, zero Render sleep latency)
  try {
    const Model = getAgentBlogModel();
    if (Model) {
      const now = new Date();
      const query = {
        $and: [
          {
            $or: [
              { status: { $in: ['approved', 'published'] } },
              { status: { $exists: false } },
              { status: null },
            ],
          },
          {
            $or: [
              { releaseDate: { $lte: now } },
              { releaseDate: { $exists: false } },
              { releaseDate: null },
            ],
          },
        ],
      };
      const docs = await Model.find(query).sort({ releaseDate: -1, createdAt: -1 }).lean().exec();
      if (docs && docs.length > 0) {
        return docs.map(mapAgentBlog);
      }
    }
  } catch (dbErr) {
    console.warn(`⚠️ Direct Content-Agent DB fetch notice: ${dbErr.message} — falling back to API`);
  }

  // 2. HTTP Fallback
  try {
    const res = await fetch(`${API_BASE}/api/blogs`, {
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return [];

    const data = await res.json();
    const blogs = Array.isArray(data?.blogs) ? data.blogs : [];
    return blogs.map(mapAgentBlog);
  } catch (err) {
    console.warn(`⚠️ Content-Agent API fetch failed: ${err.message}`);
    return [];
  }
}

/**
 * Fetches a single blog by ID directly from MongoDB (fallback to API).
 */
export async function getContentAgentBlogById(id) {
  // 1. Direct MongoDB fetch
  try {
    const Model = getAgentBlogModel();
    if (mongoose.Types.ObjectId.isValid(id)) {
      const doc = await Model.findById(id).lean().exec();
      if (doc) return mapAgentBlog(doc);
    }
  } catch (dbErr) {
    console.warn(`⚠️ Direct Content-Agent DB fetch by id notice: ${dbErr.message}`);
  }

  // 2. HTTP Fallback
  try {
    const res = await fetch(`${API_BASE}/api/blogs/${id}`, {
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;

    const data = await res.json();
    return mapAgentBlog(data?.blog || null);
  } catch (err) {
    console.warn(`⚠️ Content-Agent blog by id failed: ${err.message}`);
    return null;
  }
}

export default {
  getContentAgentBlogs,
  getContentAgentBlogById,
};
