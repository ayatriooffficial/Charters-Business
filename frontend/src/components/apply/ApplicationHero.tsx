'use client';

import React from 'react';
import Image from 'next/image';
import ApplicationForm from './ApplicationForm';
import { heroGalleryItems, pageContent } from '@/data/applyPageData';

export default function ApplicationHero() {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
          {/* Image Section - Hidden on Mobile */}
          <div className="hidden lg:block space-y-6 lg:space-y-8 pt-5">
            <header>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {pageContent.hero.title}{' '}
                <em className="italic text-gray-800">{pageContent.hero.titleItalic}</em>
              </h1>
            </header>

            <div className="flex flex-wrap">
              <figure className="relative w-full h-[100vh] overflow-hidden group">
                <Image
                  src={heroGalleryItems[0].image}
                  alt={heroGalleryItems[0].alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent p-3 sm:p-4">
                  <p className="text-white text-sm sm:text-base font-semibold">
                    {heroGalleryItems[0].caption}
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Form Section - Always Visible */}
          <aside className="w-full lg:sticky lg:top-24">
            <ApplicationForm />
          </aside>
        </div>
      </div>
    </section>
  );
}
