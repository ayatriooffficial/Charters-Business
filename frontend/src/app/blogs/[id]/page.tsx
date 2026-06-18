"use client";

import { use, useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogById } from "@/lib/api";
import { STATIC_BLOGS, slugify } from "@/data/staticBlogs";
import type { DisplayBlog } from "@/data/staticBlogs";

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [blog, setBlog] = useState<DisplayBlog | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      setIsLoading(true);
      
      // 1. Check if ID matches a static blog slug
      const matchedStatic = STATIC_BLOGS.find(
        (sb) => slugify(sb.title) === id
      );

      if (matchedStatic) {
        setBlog(matchedStatic);
        setIsLoading(false);
        return;
      }

      // 2. Fetch from DB
      try {
        const response = await getBlogById(id);
        if (response && response.success && response.data) {
          setBlog({
            _id: response.data._id,
            title: response.data.title,
            author: response.data.author,
            readTime: response.data.readTime,
            category: response.data.category,
            content: response.data.content,
            tags: response.data.tags,
            releasedAt: response.data.releasedAt
              ? String(response.data.releasedAt)
              : undefined,
          });
        } else {
          // Fallback if success isn't true or data is empty
          setBlog(null);
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : "";
        if (message.toLowerCase().includes("not found") || message.includes("404")) {
          console.warn(`Blog not found: ${id}`);
        } else {
          console.error("Failed to load blog from database:", error);
        }
        setBlog(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#B30437] border-r-transparent"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading Article...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    notFound();
  }

  // Simple parser to render basic markdown paragraphs and bolding
  const renderBlogContent = (markdownText: string) => {
    if (!markdownText) return null;
    return markdownText.split("\n").map((paragraph, index) => {
      const trimmed = paragraph.trim();
      if (!trimmed) return <div key={index} className="h-4" />;

      // Header 2 (##)
      if (trimmed.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-8 mb-4 border-b border-gray-100 pb-3"
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
      }

      // Header 3 (###)
      if (trimmed.startsWith("### ")) {
        return (
          <h3
            key={index}
            className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3"
          >
            {trimmed.replace("### ", "")}
          </h3>
        );
      }

      // Bullet points (* or -)
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        return (
          <li
            key={index}
            className="text-gray-700 text-base sm:text-lg leading-relaxed ml-6 list-disc mb-3"
          >
            {parseBoldText(trimmed.substring(2))}
          </li>
        );
      }

      return (
        <p
          key={index}
          className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4"
        >
          {parseBoldText(trimmed)}
        </p>
      );
    });
  };

  const parseBoldText = (text: string) => {
    const parts = text.split(/\*\*([\s\S]*?)\*\*/g);
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="font-bold text-gray-950">
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  const formattedDate = blog.releasedAt
    ? new Date(blog.releasedAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <article className="min-h-screen bg-white text-black py-16 sm:py-24">
      <div className="max-w-4xl w-full mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-8 font-medium">
          <Link href="/" className="hover:text-[#B30437] transition-colors">
            Home
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-gray-950 font-semibold">Blogs</span>
        </div>

        {/* Header Section */}
        <header className="mb-10 pb-8 border-b border-gray-100">
          <span className="inline-block bg-[#B30437]/10 text-[#B30437] text-xs sm:text-sm font-bold uppercase tracking-wider px-3 py-1.5 rounded-md mb-4">
            {blog.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm sm:text-base text-gray-500 font-medium">
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              By <span className="text-gray-900">{blog.author}</span>
            </span>

            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {blog.readTime}
            </span>

            {formattedDate && (
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Published on {formattedDate}
              </span>
            )}
          </div>
        </header>

        {/* Article Content */}
        <section className="prose max-w-none text-left">
          {renderBlogContent(blog.content)}
        </section>


      </div>
    </article>
  );
}
