'use client';

import { useState } from 'react';
import type { CertificateOverviewData } from '@/data/programmes-data/types';

interface Props {
  data: CertificateOverviewData;
}

function CertificateOverview({ data }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-white py-10 sm:py-14" aria-labelledby="ChartersUnion-certificate-heading">
      <div className="w-full">
        <div className="relative bg-white p-5 sm:p-8">
          <div
            className={`relative overflow-hidden transition-[max-height] duration-500 ${expanded ? 'max-h-none' : 'max-h-[640px]'}`}
          >
            <h2
              id="ChartersUnion-certificate-heading"
              className="text-lg sm:text-xl font-bold text-black mb-3 leading-snug"
            >
              {data.title}
            </h2>

            {data.descriptionParagraphs.map((para, idx) => (
              <p key={idx} className="text-sm sm:text-base text-gray-900 leading-relaxed mb-4">
                {para}
              </p>
            ))}

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-black mt-6 mb-2">{data.whyChooseTitle}</h3>
              <p className="text-sm sm:text-base text-gray-900 leading-relaxed mb-4">
                {data.whyChooseDescription}
              </p>
              <div className="overflow-x-auto mb-1">
                <table className="w-full table-fixed text-sm sm:text-base border-collapse border border-gray-300 mb-2">
                  <thead>
                    <tr>
                      <th className="w-1/2 border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                        Program Highlights
                      </th>
                      <th className="w-1/2 border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.table1.map((row) => (
                      <tr key={row.role}>
                        <td className="border border-gray-300 px-3 py-2 text-gray-700">{row.role}</td>
                        <td className="border border-gray-300 px-3 py-2 text-gray-700">{row.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                {data.whyChoosePostTableDescription}
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-black mt-6 mb-2">
                {data.offlineVsOnlineTitle}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                {data.offlineVsOnlineDescription}
              </p>
              <div className="overflow-x-auto mb-1">
                <table className="w-full table-fixed text-sm sm:text-base border-collapse border border-gray-300 mb-2">
                  <thead>
                    <tr>
                      <th className="w-1/2 border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                        Offline Classroom Learning
                      </th>
                      <th className="w-1/2 border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                        Self-Paced Online Learning
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.table2.map((row) => (
                      <tr key={row.role}>
                        <td className="border border-gray-300 px-3 py-2 text-gray-700">{row.role}</td>
                        <td className="border border-gray-300 px-3 py-2 text-gray-700">{row.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                {data.offlineVsOnlinePostTableDescription}
              </p>
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-black mt-6 mb-2">
              {data.offlineReasonsTitle}
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-gray-700 mb-4">
              {data.programHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-black mt-6 mb-2">
                {data.syllabusTitle}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                {data.syllabusDescription}
              </p>
              <div className="overflow-x-auto mb-1">
                <table className="w-full table-fixed text-sm sm:text-base border-collapse border border-gray-300 mb-2">
                  <thead>
                    <tr>
                      <th className="w-1/2 border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                        Module
                      </th>
                      <th className="w-1/2 border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                        What You'll Learn
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.table3.map((row) => (
                      <tr key={row.role}>
                        <td className="border border-gray-300 px-3 py-2 text-gray-700">{row.role}</td>
                        <td className="border border-gray-300 px-3 py-2 text-gray-700">{row.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                {data.syllabusPostTableDescription}
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-black mt-6 mb-2">
                {data.skillsTitle}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                {data.skillsDescription}
              </p>
              <div className="overflow-x-auto mb-1">
                <table className="w-full table-fixed text-sm sm:text-base border-collapse border border-gray-300 mb-2">
                  <thead>
                    <tr>
                      <th className="w-1/2 border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                        Technical Skills
                      </th>
                      <th className="w-1/2 border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                        Professional Skills
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.table4.map((row) => (
                      <tr key={row.role}>
                        <td className="border border-gray-300 px-3 py-2 text-gray-700">{row.role}</td>
                        <td className="border border-gray-300 px-3 py-2 text-gray-700">{row.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                {data.skillsPostTableDescription}
              </p>
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-black mt-6 mb-2">
              {data.careerTitle}
            </h3>
            {data.careerDescriptionParagraphs.map((para, idx) => (
              <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                {para}
              </p>
            ))}

            <p className="text-sm sm:text-base font-semibold text-black mb-2">
              {data.careerJobRolesTitle}
            </p>
            <p>{data.careerJobRolesDescription}</p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-gray-700 mb-4">
              {data.idealLearners.map((item) => (
                <li key={item.label}>
                  <span className="font-semibold text-black">{item.label}:</span>{' '}
                  {item.text}
                </li>
              ))}
            </ul>

            <p className="text-sm sm:text-base font-semibold text-black mb-2">
              {data.careerTopJobRolesTitle}
            </p>
            <div className="overflow-x-auto mb-1">
              <table className="w-full table-fixed text-sm sm:text-base border-collapse border border-gray-300 mb-2">
                <thead>
                  <tr>
                    <th className="w-1/2 border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                      Job Role
                    </th>
                    <th className="w-1/2 border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                      Average Annual Salary in India
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.table5.map((row) => (
                    <tr key={row.role}>
                      <td className="border border-gray-300 px-3 py-2 text-gray-700">{row.role}</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-700">{row.salary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-black mt-6 mb-2">
                {data.receivebenefitTitle}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                {data.programreceivebenefit}
              </p>

              <div className="overflow-x-auto mb-4">
                <table className="w-full table-fixed text-sm sm:text-base border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="w-1/2 border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                        What You Receive
                      </th>
                      <th className="w-1/2 border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                        Benefit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.table6?.map((row) => (
                      <tr key={row.role}>
                        <td className="border border-gray-300 px-3 py-2 text-gray-700">{row.role}</td>
                        <td className="border border-gray-300 px-3 py-2 text-gray-700">{row.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                {data.receivebenefitTitlePostTableDescription}
              </p>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-black mt-8 mb-3">
              {data.certificationTitle}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              {data.certificationDescription}
            </p>
            <p className="text-sm sm:text-base font-semibold text-black mb-2">
              {data.youWillReceiveTitle}
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-gray-700 mb-4">
              {data.youWillReceive.map((item) => (
                <li key={item.label}>
                  <span className="font-semibold text-black">{item.label}:</span>{' '}
                  {item.text}
                </li>
              ))}
            </ul>

            {/* <h2 className="text-lg sm:text-xl font-bold text-black mt-8 mb-3">
              {data.worthItTitle}
            </h2>
            {data.worthItDescriptionParagraphs.map((para, idx) => (
              <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                {para}
              </p>
            ))} */}
            {/* <ol className="list-decimal pl-5 space-y-1 text-sm sm:text-base text-gray-700 mb-4">
              {data.worthItReasons.map((item) => (
                <li key={item.label}>
                  <span className="font-semibold text-black">{item.label}:</span>{' '}
                  {item.text}
                </li>
              ))}
            </ol> */}

            <p className="text-xs italic text-gray-500 mb-4">
              {data.sourcedBy}
            </p>

            <h3 className="text-base sm:text-lg font-semibold text-black mt-6 mb-2">
              {data.hiringIndustriesTitle}
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-gray-700 mb-4">
              {data.hiringIndustries.map((item) => (
                <li key={item.label}>
                  <span className="font-semibold text-black">{item.label}:</span>{' '}
                  {item.text}
                </li>
              ))}
            </ul>

            <h3 className="text-base sm:text-lg font-semibold text-black mt-6 mb-2">
              {data.topCompaniesTitle}
            </h3>
            {data.topCompaniesDescriptionParagraphs.map((para, idx) => (
              <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                {para}
              </p>
            ))}
            <p className="text-sm sm:text-base font-semibold text-black mb-2">
              {data.topCompaniesSubtitle}
            </p>
            <ul className="flex flex-nowrap items-center gap-3 overflow-x-auto text-sm sm:text-base text-gray-700 mb-2 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {data.topCompanies.map((company) => (
                <li
                  key={company}
                  className="shrink-0 whitespace-nowrap px-4 py-1.5 rounded-full border border-gray-300 bg-gray-50 font-medium"
                >
                  {company}
                </li>
              ))}
            </ul>

            {!expanded && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
            )}
          </div>

          <div className="flex justify-end pt-3">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="text-[#B30437] text-sm sm:text-base cursor-pointer font-semibold underline underline-offset-2 hover:text-red-800 transition-colors"
            >
              {expanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificateOverview;
