"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogById } from "@/lib/api";
import { STATIC_BLOGS, slugify } from "@/data/staticBlogs";
import type { DisplayBlog } from "@/data/staticBlogs";

export default function BlogDetailPage({
  id,
  initialBlog,
}: {
  id: string;
  initialBlog: DisplayBlog | null;
}) {
  const [blog, setBlog] = useState<DisplayBlog | null>(initialBlog);
  const [isLoading, setIsLoading] = useState(!initialBlog);

  useEffect(() => {
    if (initialBlog) {
      setIsLoading(false);
      return;
    }

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
        console.error("Failed to load blog from database:", error);
        setBlog(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [id, initialBlog]);

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

  const BlogPromoSection = ({ data }: { data: NonNullable<typeof blog.promoData> }) => (
    <div className="my-10">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 mt-10">Program Highlights</h3>
      <ul className="list-disc pl-6 space-y-3 text-[#5f6368] text-base sm:text-lg mb-10">
        {data.highlights.map((highlight, idx) => (
          <li key={idx}>{highlight}</li>
        ))}
      </ul>

      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Top Job Roles You Can Pursue:</h3>
      <div className="overflow-x-auto mb-2">
        <table className="w-full text-left border-collapse border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="py-4 px-6 font-bold text-gray-900 border-r border-gray-200">Job Role</th>
              <th className="py-4 px-6 font-bold text-gray-900">Average Annual Salary in India</th>
            </tr>
          </thead>
          <tbody className="text-[#5f6368]">
            {data.jobs.map((job, idx) => (
              <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-6 border-r border-gray-200">{job.role}</td>
                <td className="py-3 px-6">{job.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm italic text-gray-500 mb-10">Sourced By: Ambitionbox</p>
    </div>
  );

  // Simple parser to render basic markdown paragraphs and bolding
  const renderBlogContent = (markdownText: string) => {
    if (!markdownText) return null;
    const lines = markdownText.split("\n");
    
    // Find a good place to insert the promo section (roughly in the middle, preferably at an empty line or before a header)
    const middleIndex = Math.floor(lines.length / 2);
    let insertIndex = middleIndex;
    for (let i = middleIndex; i < lines.length; i++) {
      if (lines[i].trim() === "" || lines[i].trim().startsWith("##")) {
        insertIndex = i;
        break;
      }
    }

    return lines.map((paragraph, index) => {
      const trimmed = paragraph.trim();
      let contentElement = null;

      if (!trimmed) contentElement = <div key={index} className="h-4" />;
      else if (trimmed.startsWith("## ")) {
        contentElement = (
          <h2
            key={index}
            className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-8 mb-4 border-b border-gray-100 pb-3"
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
      } else if (trimmed.startsWith("### ")) {
        contentElement = (
          <h3
            key={index}
            className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3"
          >
            {trimmed.replace("### ", "")}
          </h3>
        );
      } else if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
        contentElement = (
          <li
            key={index}
            className="text-[#5f6368] text-base sm:text-lg leading-relaxed ml-6 list-disc mb-3"
          >
            {parseBoldText(trimmed.substring(2))}
          </li>
        );
      } else {
        contentElement = (
          <p
            key={index}
            className="text-[#5f6368] text-base sm:text-lg leading-relaxed mb-4"
          >
            {parseBoldText(trimmed)}
          </p>
        );
      }

      if (index === insertIndex && blog.promoData) {
        return (
          <div key={`group-${index}`}>
            {contentElement}
            <BlogPromoSection data={blog.promoData} />
          </div>
        );
      }

      return contentElement;
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
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#B30437] hover:text-red-700 transition-colors mb-8 group"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        {/* Header Section */}
        <div className="mb-10 pb-8 border-b border-gray-100">
          <span className="inline-block bg-[#B30437]/10 text-[#B30437] text-xs sm:text-sm font-bold uppercase tracking-wider px-3 py-1.5 rounded-md mb-4">
            {blog.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm sm:text-base text-[#5f6368] font-medium">
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#80868b]"
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
                className="w-5 h-5 text-[#80868b]"
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
              <span className="flex items-center gap-2" suppressHydrationWarning>
                <svg
                  className="w-5 h-5 text-[#80868b]"
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
        </div>

        {/* Article Content */}
        <section className="prose max-w-none text-left">
          {renderBlogContent(blog.content)}
        </section>


      </div>
    </article>
  );
}
