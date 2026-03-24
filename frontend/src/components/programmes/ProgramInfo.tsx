'use client';

import React from 'react';
import { ProgramInfoData } from '@/data/programmes';

interface ProgramInfoProps {
  data: ProgramInfoData;
}

const ProgramInfo: React.FC<ProgramInfoProps> = ({ data }) => {
  return (
    <>
      <section className='w-auto border-b border-gray-200 mt-2'>
        <div className="flex-col justify-center items-center mx-auto sm:mx-[2%] md:mx-[5%] pt-4">
          <h2
            id="program-info-heading"
            className="text-xl sm:text-2xl font-bold text-gray-900 text-center"
          >
            Programme Information
          </h2>
          <div className="border-x border-gray-200 h-12 " />
        </div>
      </section>
      <div className="bg-white border-b border-l border-r border-gray-200 sm:mx-[2%] md:mx-[5%]">
        <dl className="flex flex-wrap justify-center sm:justify-between items-center gap-x-3 gap-y-4 sm:gap-x-6 lg:gap-x-8 py-4 sm:py-6 px-3 sm:px-8 lg:px-12">
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
    </>
  );
};

export default ProgramInfo;
