'use client';

import React from 'react';
import { ProgramInfoData } from "@/lib/server/programmes";

interface ProgramInfoProps {
  data: ProgramInfoData;
}

const ProgramInfo: React.FC<ProgramInfoProps> = ({ data }) => {
  return (
    <div className="mx-[0%] md:mx-[5%] w-full mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20" aria-labelledby="program-info-heading">
      <h2 id="program-info-heading" className="sr-only">Programme Information</h2>

      <div className="bg-white border border-gray-200">
        <dl className="flex flex-wrap justify-center sm:justify-between items-center gap-x-4 gap-y-6 sm:gap-x-6 lg:gap-x-8 py-6 sm:py-8 px-4 sm:px-10 lg:px-16">
          {/* Duration */}
          <div className="flex-shrink-0 text-center">
            <div className="flex flex-col items-center gap-1 sm:gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-sm flex-shrink-0" aria-hidden="true"></div>
                <dt className="text-gray-600 text-[10px] sm:text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
                  Duration
                </dt>
              </div>
              <dd className="text-black text-lg sm:text-xl lg:text-2xl font-bold">
                {data.duration}
              </dd>
            </div>
          </div>

          {/* Dynamic Details */}
          {data.details.map((item, index) => (
            <div key={index} className="flex-shrink-0 text-center">
              <div className="flex flex-col items-center gap-1 sm:gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                  <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-sm flex-shrink-0 ${item.dotColor}`} aria-hidden="true"></div>
                  <dt className="text-gray-600 text-[10px] sm:text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
                    {item.label}
                  </dt>
                </div>
                <dd className="text-black text-lg sm:text-xl lg:text-2xl font-bold">
                  {item.value}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default ProgramInfo;
