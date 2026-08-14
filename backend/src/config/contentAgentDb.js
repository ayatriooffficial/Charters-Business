import '../config/loadEnv.js';

/**
 * Content-Agent blog fetcher — pulls published blogs from the deployed
 * content-agent backend API (on-demand, no cron — Render free-tier safe).
 *
 * The live content-agent (blog-automation-1-afvy.onrender.com) serves 41
 * blogs with this schema (NO status field):
 *   _id, title, slug, excerpt, summary, content (Markdown), category,
 *   likes, dislikes, featuredImage, createdAt
 *
 * All blogs returned by that API are considered published. Graceful by
 * design: on any failure we return []/null so the client falls back to
 * the Old Blog DB + static blogs.
 */

const API_BASE = (process.env.CONTENT_AGENT_API_URL || 'https://blog-automation-1-afvy.onrender.com').replace(/\/+$/, '');

function computeReadTime(content) {
  const words = String(content || '').trim().split(/\s+/).filter(Boolean).length;
  if (!words) return '10 min read';
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

/**
 * Maps a raw cloud content-agent blog doc into the client's Blog shape.
 * Strips stray surrounding double quotes some agent titles carry.
 */
export function mapAgentBlog(doc) {
  if (!doc) return null;

  const cleanTitle = String(doc.title || '')
    .trim()
    .replace(/^"|"$/g, '')
    .trim();

  return {
    _id: doc._id,
    title: cleanTitle,
    content: doc.content || '',
    author: 'Charters Team',
    readTime: computeReadTime(doc.content),
    category: doc.category || 'Career Growth',
    tags: Array.isArray(doc.tags) ? doc.tags : [],
    status: 'approved',
    releasedAt: doc.createdAt || new Date(),
    createdAt: doc.createdAt || new Date(),
    updatedAt: doc.createdAt || new Date(),
    source: 'content-agent',
  };
}

/**
 * Fetches all blogs from the content-agent API (already published).
 * Returns mapped docs or [] on any error.
 */
export async function getContentAgentBlogs() {
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
 * Fetches a single blog by ID from the content-agent API.
 * Returns a mapped doc or null.
 */
export async function getContentAgentBlogById(id) {
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
