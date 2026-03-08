'use client';

import { use, useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllJobs, getAllInternships } from '@/lib/api';

type PageType = 'jobs' | 'internships';

export default function CareersListingPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = use(params);

  if (type !== 'jobs' && type !== 'internships') {
    notFound();
  }

  const pageType = type as PageType;
  const isJobs = pageType === 'jobs';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [data, setData] = useState<any[]>([]);
  const [locations, setLocations] = useState<string[]>(['All']);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const params = {
          location: selectedLocation !== 'All' ? selectedLocation : undefined,
          search: searchQuery || undefined,
        };

        const response = isJobs
          ? await getAllJobs(params)
          : await getAllInternships(params);

        const items = isJobs
          ? response.data.jobPostings
          : response.data.internshipPostings;

        setData(items);

        // Extract unique locations
        const uniqueLocations = Array.from(
          new Set(items.map((item: any) => item.location))
        ) as string[];
        setLocations(['All', ...uniqueLocations]);
      } catch (err: any) {
        console.error('Error fetching data:', err);
        setError(err.message || 'Failed to load data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isJobs, selectedLocation, searchQuery]);

  const pageContent = {
    jobs: {
      title: 'Find Your Dream Job',
      subtitle: `Explore open positions and take the next step in your career`,
      searchPlaceholder: 'Search by job title or category...',
      countText: 'job',
      countTextPlural: 'jobs',
      noResultsText: 'No jobs found matching your criteria.',
    },
    internships: {
      title: 'Start Your Career Journey',
      subtitle: `Explore internship opportunities and gain valuable experience`,
      searchPlaceholder: 'Search by internship title or category...',
      countText: 'internship',
      countTextPlural: 'internships',
      noResultsText: 'No internships found matching your criteria.',
    },
  };

  const content = pageContent[pageType];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <header
        className="relative overflow-hidden py-16 sm:py-20 pt-20 sm:pt-24 -mx-[9%]"
        style={{ background: 'linear-gradient(to right, #B30437, #8B0329)' }}
      >
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {content.title}
            </h1>
            <p className="text-lg text-red-50 sm:text-xl">{content.subtitle}</p>
          </div>
        </div>
      </header>

      {/* Search and Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <form role="search" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <label htmlFor="search" className="sr-only">
                  {content.searchPlaceholder}
                </label>
                <input
                  type="search"
                  id="search"
                  name="search"
                  placeholder={content.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 pl-10 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <svg
                  className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Location Filter */}
              <div className="flex items-center gap-2">
                <label htmlFor="location" className="text-sm font-medium text-gray-700">
                  Location:
                </label>
                <select
                  id="location"
                  name="location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>

          {/* Results Count */}
          <p className="mt-4 text-sm text-gray-600">
            {isLoading
              ? 'Loading...'
              : `Showing ${data.length} ${
                  data.length === 1 ? content.countText : content.countTextPlural
                }`}
          </p>
        </div>
      </section>

      {/* Listings Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#B30437] border-r-transparent"></div>
              <p className="mt-4 text-gray-600">Loading {pageType}...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600 text-lg">{error}</p>
            </div>
          ) : data.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">{content.noResultsText}</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {data.map((item) => {
                const isJobItem = 'salary' in item;
                const detailUrl = `/careers/${pageType}/${item._id}`;

                return (
                  <li key={item._id}>
                    <Link
                      href={detailUrl}
                      className="group flex flex-col sm:flex-row items-start gap-6 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      {/* Left Side - Main Info */}
                      <div className="flex-1 w-full">
                        <div className="mb-4">
                          <h2 className="mb-2 text-2xl font-semibold text-gray-900 group-hover:text-[#B30437] transition-colors">
                            {item.title}
                          </h2>
                          <p className="text-base text-gray-600">{item.company}</p>
                        </div>

                        {/* Details Badges */}
                        <div className="mb-4 flex flex-wrap gap-2">
                          <span
                            className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-sm font-medium"
                            style={{ color: '#B30437' }}
                          >
                            {item.location}
                          </span>
                          <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
                            {isJobItem ? item.jobType : item.internshipType}
                          </span>
                          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                            {item.category}
                          </span>
                        </div>

                        {/* Description Preview - Remove HTML tags */}
                        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                          {item.description.replace(/<[^>]*>/g, '').substring(0, 150)}...
                        </p>

                        {/* Salary/Stipend & Experience/Duration */}
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="font-semibold">
                              {isJobItem ? item.salary : item.stipend}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>{isJobItem ? item.experience : item.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Action Button */}
                      <div className="flex items-center sm:flex-col sm:justify-between sm:items-end gap-4 w-full sm:w-auto">
                        <time className="text-sm text-gray-500">
                          Posted:{' '}
                          {new Date(item.createdAt).toLocaleDateString('en-IN', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </time>
                        <span
                          className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all group-hover:scale-105"
                          style={{ backgroundColor: '#B30437' }}
                        >
                          View Details
                          <svg
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
