import Link from "next/link";
import { getApprovedBlogs } from "@/lib/api";
import { STATIC_BLOGS, slugify } from "@/data/staticBlogs";
import type { DisplayBlog } from "@/data/staticBlogs";
import BlogsClient from "./BlogsClient";

export const metadata = {
  title: "Blogs | Charters Union",
  description:
    "Career insights, education guides, and industry updates from Charters Union of Business.",
};

export interface BlogCardData {
  _id?: string;
  title: string;
  author: string;
  readTime: string;
  category: string;
  content?: string;
  releasedAt?: string;
  description?: string;
}

async function fetchAllBlogs(): Promise<BlogCardData[]> {
  try {
    const response = await getApprovedBlogs();
    if (response && response.success && Array.isArray(response.data)) {
      return response.data as BlogCardData[];
    }
    return [];
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}

export default async function BlogsPage() {
  const dbBlogs = await fetchAllBlogs();

  // Merge static blogs (fallback + legacy) with DB blogs, dedupe by title
  const merged: BlogCardData[] = [];
  const seen = new Set<string>();
  const normalize = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

  for (const blog of dbBlogs) {
    const key = normalize(blog.title);
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(blog);
  }

  for (const staticBlog of STATIC_BLOGS as DisplayBlog[]) {
    const key = normalize(staticBlog.title);
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push({
      _id: undefined,
      title: staticBlog.title,
      author: staticBlog.author,
      readTime: staticBlog.readTime,
      category: staticBlog.category,
      content: staticBlog.content,
      releasedAt: staticBlog.releasedAt ? String(staticBlog.releasedAt) : undefined,
      description: staticBlog.description,
    });
  }

  return <BlogsClient initialBlogs={merged} />;
}
