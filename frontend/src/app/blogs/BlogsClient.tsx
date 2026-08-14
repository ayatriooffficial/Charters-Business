"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { slugify } from "@/data/staticBlogs";
import type { BlogCardData } from "./page";

const PAGE_SIZE = 9;

function excerptFromContent(content?: string): string {
  if (!content) return "";
  const text = content
    .replace(/[#*`>\-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > 160 ? `${text.slice(0, 160)}…` : text;
}

function BlogCard({ blog }: { blog: BlogCardData }) {
  const href = blog._id ? `/blogs/${blog._id}` : `/blogs/${slugify(blog.title)}`;
  const excerpt =
    blog.description ||
    excerptFromContent(blog.content) ||
    "Read more about this topic.";

  return (
    <Link
      href={href}
      className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="p-6">
        <span className="inline-block bg-[#B30437]/10 text-[#B30437] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-3">
          {blog.category || "Career Growth"}
        </span>
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug group-hover:text-[#B30437] transition-colors mb-2">
          {blog.title}
        </h2>
        <p className="text-sm text-[#5f6368] leading-relaxed mb-4">{excerpt}</p>
        <div className="flex items-center gap-4 text-xs sm:text-sm text-[#80868b] font-medium">
          <span>By {blog.author}</span>
          <span>·</span>
          <span>{blog.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogsClient({
  initialBlogs,
}: {
  initialBlogs: BlogCardData[];
}) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Simulated progressive reveal with a short loading shimmer on "Load More"
  const loadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((c) => c + PAGE_SIZE);
      setIsLoadingMore(false);
    }, 450);
  };

  const visibleBlogs = initialBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < initialBlogs.length;

  return (
    <main className="min-h-screen bg-white text-black py-16 sm:py-24">
      <div className="max-w-6xl w-full mx-auto px-4">
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Blogs & Insights
          </h1>
          <p className="text-base sm:text-lg text-[#5f6368] max-w-2xl mx-auto">
            Career roadmaps, industry updates, and practical guidance from
            Charters Union of Business.
          </p>
        </div>

        {visibleBlogs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleBlogs.map((blog, idx) => (
                <BlogCard key={blog._id || slugify(blog.title) || idx} blog={blog} />
              ))}
            </div>

            {hasMore && (
              <div className="text-center mt-12">
                <button
                  onClick={loadMore}
                  disabled={isLoadingMore}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#B30437] text-white font-bold rounded-xl shadow-lg hover:bg-[#8B0329] transition-colors disabled:opacity-60"
                >
                  {isLoadingMore ? (
                    <>
                      <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white border-r-transparent" />
                      Loading…
                    </>
                  ) : (
                    `Load More (${initialBlogs.length - visibleCount} remaining)`
                  )}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#B30437] border-r-transparent mb-4" />
            <p className="text-[#5f6368]">Loading blogs…</p>
          </div>
        )}
      </div>
    </main>
  );
}
