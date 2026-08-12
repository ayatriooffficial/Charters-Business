'use client';

import React from 'react';
import { ProgramInfoData } from '@/data/programmes';

interface ProgramInfoProps {
  data: ProgramInfoData;
}

const ProgramInfo: React.FC<ProgramInfoProps> = ({ data }) => {
  return (
    <>
      <section className='w-auto mt-2 bg-white text-black relative overflow-hidden'>


        {/* Transition row — white curves into gray side panels */}
        <div className="flex flex-row mt-4">
          <div className="flex-1 bg-gray-200 h-12 hidden md:block">
            <div className="flex-1 bg-white rounded-br-xl h-12" />
          </div>

          <div className="w-full md:w-[90%] max-w-[85rem] h-12 bg-gray-200 relative">
            <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-gray-50 to-gray-200" />
            <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-gray-50 to-gray-200" />
            <div className="bg-white rounded-bl-xl rounded-br-xl h-12" />
          </div>

          <div className="flex-1 bg-gray-200 h-12 hidden md:block">
            <div className="flex-1 bg-white rounded-bl-xl h-12" />
          </div>
        </div>

        {/* Stats row with gray side panels */}
        <div className="flex flex-row w-full border-gray-200 bg-gray-200">
          <div className="flex-1 hidden md:block">
            <div className="relative bg-white w-full h-full rounded-tr-xl">
              <div className="absolute top-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-gray-50 to-gray-200" />
            </div>
          </div>

          {/* Stats content */}
          <div className="md:w-[90%] max-w-[85rem] w-full border-x border-gray-200 rounded-t-xl bg-white border-y">
            <dl className="flex flex-row sm:grid sm:grid-cols-5 gap-x-3 gap-y-4 sm:gap-x-6 lg:gap-x-8 py-4 sm:py-6 px-3 sm:px-4 lg:px-4 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none">

              {/* Dynamic Details */}
              {data.details.map((item, index) => (
                <div key={index} className="flex-shrink-0 text-center min-w-[50%] max-w-[50%] sm:min-w-0 sm:max-w-none snap-start">
                  <div className="flex flex-col items-center gap-1 sm:gap-2">
                    <div className="flex align-top items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                      <dt className="text-gray-600 text-[10px] sm:text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
                        {item.label}
                      </dt>
                    </div>

                    <div className="text-black text-[12px] sm:text-[14px] lg:text-[14px] font-bold">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}

            </dl>
          </div>

          <div className="flex-1 hidden md:block">
            <div className="relative bg-white w-full h-full rounded-tl-xl">
              <div className="absolute top-0 left-0 w-full h-[0.5px] bg-gradient-to-l from-gray-50 to-gray-200" />
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default ProgramInfo;
