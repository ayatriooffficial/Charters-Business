'use client';

import Link from 'next/link';

export default function TrustedCompanies() {
    return (
        <section className="w-full bg-white pt-5 sm:pt-7 lg:pt-10">
            <div className="max-w-[85rem] mx-auto">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8 mb-10 sm:mb-14 px-4 sm:px-6 lg:px-8">
                    <p className="text-gray-800 font-semibold text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px] leading-snug max-w-3xl">
                        Our campus is nestled within the vibrant <strong>Sintiniketon Cyberpark</strong>, located in
                        Park Street. You&apos;ll find yourself in close proximity to
                        leading <strong>Fortune 500 firms</strong>, creating unparalleled opportunities for
                        networking and growth.
                    </p>

                    <div className="flex-shrink-0 lg:pt-1">
                        <Link
                            href="#campus-tour"
                            className="inline-flex bg-[#222222] items-center gap-2 px-8 sm:px-8 py-1 sm:py-2 text-white text-xs sm:text-sm font-semibold "
                        >
                            Book a Campus Tour

                        </Link>
                    </div>
                </div>

                {/* Company Logos */}
                <div className="text-center" aria-labelledby="companies-heading">
                    <div className="flex flex-wrap gap-3 sm:gap-5 md:gap-6 lg:gap-8 justify-center items-center">
                        <div className="flex items-center justify-center w-full h-full">
                            <img
                                src="/images/program-placements/CBA_Hired_Company.avif"
                                alt=""
                                className="w-full sm:h-[50px] md:h-[70px] lg:h-[120px] object-contain"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}