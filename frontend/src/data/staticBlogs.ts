export interface DisplayBlog {
  _id?: string;
  title: string;
  author: string;
  readTime: string;
  category: string;
  content: string;
  tags?: string[];
  releasedAt?: string;
}

export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

export const STATIC_BLOG_CONTENTS: Record<string, string> = {};

export const STATIC_BLOGS: DisplayBlog[] = [];
