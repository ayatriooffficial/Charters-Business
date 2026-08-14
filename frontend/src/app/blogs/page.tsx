import { getApprovedBlogs } from "@/lib/api";
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
  const blogs = await fetchAllBlogs();

  return <BlogsClient initialBlogs={blogs} />;
}
