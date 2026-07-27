'use client';

import { useState } from 'react';
import type { MicaCertificateData } from '@/data/programmes-data/types';

const programHighlights = [
  'Globally recognized certificate from ChartersUnion',
  'Learn 70+ digital marketing tools',
  'Real brand case studies and live campaign practice',
  'Career mentorship with 1:1 guidance',
  'Choose from 5 in-demand specializations across key marketing domains',
  'Access to live sessions and doubt-clearing support',
  'Learn through flexible online classes designed for working professionals',
];

const idealLearners = [
  {
    label: 'Students and Fresh Graduates',
    text: 'Build strong foundations in digital marketing, branding, and analytics to start your career sooner.',
  },
  {
    label: 'Marketing Professionals',
    text: 'Upgrade your skills with advanced training in SEO, paid ads, automation, and campaign strategy.',
  },
  {
    label: 'Entrepreneurs and Business Owners',
    text: 'Learn how to grow your brand online, increase visibility, and run performance-driven campaigns.',
  },
  {
    label: 'Freelancers',
    text: 'Expand your service portfolio with skills in content marketing, social media, and performance marketing.',
  },
  {
    label: 'Career Changers',
    text: 'Shift into digital marketing roles with practical projects, exposure to real campaigns, and industry-recognized certification.',
  },
];

const keyLearningOutcomes = [
  'Create and manage high-performing Google Ads and Meta Ads campaigns.',
  'Learn advanced SEO practices for higher visibility and organic growth.',
  'Build effective social media strategies for brand engagement and audience growth.',
  'Use data and analytics tools to evaluate campaign performance.',
  'Develop a complete digital marketing plan with real case studies and simulations.',
];

const programBenefits = [
  {
    label: 'Practical Experience',
    text: 'Work on real case studies, digital campaigns, strategy-building exercises, and marketing assignments.',
  },
  {
    label: 'Expert Faculty and Mentors',
    text: 'Learn from ChartersUnion faculty and industry leaders with deep experience in digital, branding, and communication.',
  },
  {
    label: 'Flexible Learning Support',
    text: 'Get guided learning with live sessions, doubt-solving support, and offline discussions at upGrad centers.',
  },
  {
    label: 'Career Assistance',
    text: 'Receive help with resume building, mock interviews, job preparation, and industry networking.',
  },
  {
    label: 'Recognized Certification',
    text: 'Earn a prestigious certificate from ChartersUnion that strengthens your resume and professional credibility.',
  },
];

const youWillReceive = [
  {
    label: 'Certificate of Completion from ChartersUnion and upGrad',
    text: 'A globally recognized certificate that adds strong value to your resume.',
  },
  {
    label: 'Access to Career Services',
    text: 'Guidance for job applications, interview preparation, and skill improvement.',
  },
  {
    label: 'Executive Alumni Status from ChartersUnion',
    text: 'Connect with a wide network of marketing professionals and industry leaders.',
  },
];

const worthItReasons = [
  {
    label: 'Learn Key Digital Marketing Skills',
    text: 'You gain hands-on practice with SEO, social media, Google Ads, content strategy, analytics, and automation tools.',
  },
  {
    label: 'Improved Job Opportunities',
    text: 'The certification helps you stand out during job applications and shows companies that you are trained in modern marketing methods.',
  },
  {
    label: 'Career Growth Potential',
    text: 'Whether you are a fresher or a working professional, this course supports your move into digital marketing roles.',
  },
  {
    label: 'Flexible Learning Experience',
    text: 'The online format allows you to learn at your own pace while managing work, studies, or personal commitments.',
  },
  {
    label: 'Networking and Industry Exposure',
    text: 'The program offers access to expert mentors, professionals, and peers, helping you grow your network.',
  },
];

const jobRoles = [
  { role: 'Digital Marketing Executive', salary: 'INR 3.2L' },
  { role: 'SEO Specialist', salary: 'INR 5.1L' },
  { role: 'Social Media Strategist', salary: 'INR 4.7L' },
  { role: 'Performance Marketing Manager', salary: 'INR 15.3L' },
  { role: 'Brand Manager', salary: 'INR 19.3L' },
];

const hiringIndustries = [
  {
    label: 'E-Commerce',
    text: 'Focus on paid ads, SEO, social commerce, and influencer-led growth.',
  },
  {
    label: 'EdTech',
    text: 'Demand for lead generation, performance campaigns, and content-driven marketing.',
  },
  {
    label: 'BFSI',
    text: 'Branding, digital acquisition, personal finance content, and analytics-led targeting.',
  },
  {
    label: 'Healthcare',
    text: 'Awareness campaigns, reputation management, and customer education online.',
  },
  {
    label: 'Media & Entertainment',
    text: 'Content planning, audience engagement, and community growth.',
  },
  {
    label: 'Retail & D2C',
    text: 'Conversion-focused ads, product marketing, and customer retention.',
  },
];

const topCompanies = [
  'Google',
  'Meta',
  'Amazon',
  'Deloitte',
  'Zomato',
  'Nykaa',
  'Adobe',
  'Tata Digital',
  'Accenture',
  'Ogilvy',
];

interface Props {
  data: MicaCertificateData;
}

function ChartersUnionDigitalMarketingCertificate({ data }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-white py-10 sm:py-14" aria-labelledby="ChartersUnion-certificate-heading">
      <div className="w-full">
        <div className="relative bg-white p-5 sm:p-8">
          <div
            className={`relative overflow-hidden transition-[max-height] duration-500 ${expanded ? 'max-h-none' : 'max-h-[640px]'
              }`}
          >
            <h2
              id="ChartersUnion-certificate-heading"
              className="text-lg sm:text-xl font-bold text-black mb-3 leading-snug"
            >
              What is the DGM™ (Digital Growth & Marketing) from ChartersUnion?
            </h2>

            <p className="text-sm sm:text-base text-gray-900 leading-relaxed mb-4">
              Today, brands use search engines, social media, paid advertising, email marketing, and content marketing to reach the right audience and drive business growth. Digital Marketing has changed the way businesses operate.
            </p>
            <p className="text-sm sm:text-base text-gray-900 leading-relaxed mb-4">
              The Job-Ready AI-Powered Certificate in DGM™ (Digital Growth & Marketing) at the Chartersunion Learning Support Centre helps learners build Job-ready skills through instructor-led digital marketing classes, Harvard Level Case Study, Live projects, in-class faculty Guided internship and CareerPathx™ AI-Powered English Communication, Personal Branding, Corporate Body Language and AI-Powered Mock Interview, AI-ready Profile Based Jobs Search Engine.
            </p>

            <p className="text-sm sm:text-base text-gray-900 leading-relaxed mb-4">
              3-month theory foundation + 4-month inclass faculty guided internship program teaches modern ai-readay marketing strategies using real brand projects, marketing tools, and live campaign experience.. so that learners can confidently apply their knowledge in professional roles.
            </p>

            <div>
              <h3>
                Why Choose the Advanced Certificate in DGM™ (Digital Growth & Marketing)?
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Right now, there is a huge demand for digital marketing professionals in the market. Those with the right skills can enter a dynamic marketing field. This program helps learners understand complete digital marketing skills while gaining practical experience with industry tools and live projects.
              </p>
              <div className="overflow-x-auto mb-1">
                <table className="w-full text-sm sm:text-base border-collapse border border-gray-300 mb-2">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                        Job Role
                      </th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                        Average Annual Salary in India
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.table1.map((row) => (
                      <tr key={row.role}>
                        <td className="border border-gray-300 px-3 py-2 text-gray-700">
                          {row.role}
                        </td>
                        <td className="border border-gray-300 px-3 py-2 text-gray-700">
                          {row.salary}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                From building a strong foundation to running performance campaigns, every module combines theory with practical implementation. This curriculum combines the top digital marketing skills which the industry hires for.
              </p>
            </div>


            <div>
              <h3 className="text-base sm:text-lg font-semibold text-black mt-6 mb-2">
                Online vs Offline Digital Marketing Course: Why Classroom Training Works
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                Although both offline learning and online learning carry their own advantages, they suit people differently. For learners who prefer practical training and immediate feedback, classroom sessions can make learning more engaging and effective.
              </p>
              <div className="overflow-x-auto mb-1">
                <table className="w-full text-sm sm:text-base border-collapse border border-gray-300 mb-2">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                        Job Role
                      </th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                        Average Annual Salary in India
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.table2.map((row) => (
                      <tr key={row.role}>
                        <td className="border border-gray-300 px-3 py-2 text-gray-700">
                          {row.role}
                        </td>
                        <td className="border border-gray-300 px-3 py-2 text-gray-700">
                          {row.salary}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                From building a strong foundation to running performance campaigns, every module combines theory with practical implementation. This curriculum combines the top digital marketing skills which the industry hires for.
              </p>
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-black mt-6 mb-2">
              Many learners prefer offline digital marketing classes because they offer:
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-gray-700 mb-4">
              {programHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-black mt-6 mb-2">
                Syllabus & Curriculum of the DGM™ (Digital Growth & Marketing)
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                From building a strong foundation to running performance campaigns, every module combines theory with practical implementation. This curriculum combines the top digital marketing skills which the industry hires for.
              </p>
              <div className="overflow-x-auto mb-1">
                <table className="w-full text-sm sm:text-base border-collapse border border-gray-300 mb-2">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                        Job Role
                      </th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                        Average Annual Salary in India
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.table3.map((row) => (
                      <tr key={row.role}>
                        <td className="border border-gray-300 px-3 py-2 text-gray-700">
                          {row.role}
                        </td>
                        <td className="border border-gray-300 px-3 py-2 text-gray-700">
                          {row.salary}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                From building a strong foundation to running performance campaigns, every module combines theory with practical implementation. This curriculum combines the top digital marketing skills which the industry hires for.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-black mt-6 mb-2">
                Skills You Will Learn in the DGM™ (Digital Growth & Marketing)
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                The program helps learners build both technical marketing skills and business skills that are useful across industries.
              </p>
              <div className="overflow-x-auto mb-1">
                <table className="w-full text-sm sm:text-base border-collapse border border-gray-300 mb-2">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                        Job Role
                      </th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                        Average Annual Salary in India
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.table4.map((row) => (
                      <tr key={row.role}>
                        <td className="border border-gray-300 px-3 py-2 text-gray-700">
                          {row.role}
                        </td>
                        <td className="border border-gray-300 px-3 py-2 text-gray-700">
                          {row.salary}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                From building a strong foundation to running performance campaigns, every module combines theory with practical implementation. This curriculum combines the top digital marketing skills which the industry hires for.
              </p>
            </div>



            <h3 className="text-base sm:text-lg font-semibold text-black mt-6 mb-2">
              Career Opportunities After Completing the DGM™ (Digital Growth & Marketing)
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
              Digital marketing has become one of the fastest-growing career fields in India. Today, every business wants to invest in their online presence to get leads.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
              As a result, skilled digital marketers are in demand all over India. You’ll find a huge number of opportunities in this vast field.
            </p>
            <p className="text-sm sm:text-base font-semibold text-black mb-2">
              Job Roles:
            </p>
            <p>Digital Marketing in India is amongst the top skills you can master. Some popular career opportunities after completing this digital marketing course include:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-gray-700 mb-4">
              {idealLearners.map((item) => (
                <li key={item.label}>
                  <span className="font-semibold text-black">{item.label}:</span>{' '}
                  {item.text}
                </li>
              ))}
            </ul>

            <p className="text-sm sm:text-base font-semibold text-black mb-2">
              Top Job Roles You Can Pursue:
            </p>
            <div className="overflow-x-auto mb-1">
              <table className="w-full text-sm sm:text-base border-collapse border border-gray-300 mb-2">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                      Job Role
                    </th>
                    <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-black bg-gray-50">
                      Average Annual Salary in India
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.table5.map((row) => (
                    <tr key={row.role}>
                      <td className="border border-gray-300 px-3 py-2 text-gray-700">
                        {row.role}
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-700">
                        {row.salary}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>



            <h2 className="text-lg sm:text-xl font-bold text-black mt-8 mb-3">
              Certification and Recognition
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              When you complete the Advanced Certificate in AI-Powered
              Digital Marketing &amp; Communication from ChartersUnion, you earn a
              respected qualification that highlights your understanding of
              digital marketing strategies, tools, and real-world
              applications.
            </p>
            <p className="text-sm sm:text-base font-semibold text-black mb-2">
              You Will Receive:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-gray-700 mb-4">
              {youWillReceive.map((item) => (
                <li key={item.label}>
                  <span className="font-semibold text-black">{item.label}:</span>{' '}
                  {item.text}
                </li>
              ))}
            </ul>

            <h2 className="text-lg sm:text-xl font-bold text-black mt-8 mb-3">
              Is this Certification Worth It?
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
              Many learners want to grow in digital marketing, and this
              certificate is one of the most trusted ways to build strong
              skills.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
              But is it truly worth investing in?
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
              Here are the reasons why this program can be a valuable choice
              for your career:
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-sm sm:text-base text-gray-700 mb-4">
              {worthItReasons.map((item) => (
                <li key={item.label}>
                  <span className="font-semibold text-black">{item.label}:</span>{' '}
                  {item.text}
                </li>
              ))}
            </ol>


            <p className="text-xs italic text-gray-500 mb-4">
              Sourced By: Ambitionbox
            </p>

            <h3 className="text-base sm:text-lg font-semibold text-black mt-6 mb-2">
              Industries Hiring Digital Marketing Professionals
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-gray-700 mb-4">
              {hiringIndustries.map((item) => (
                <li key={item.label}>
                  <span className="font-semibold text-black">{item.label}:</span>{' '}
                  {item.text}
                </li>
              ))}
            </ul>

            <h3 className="text-base sm:text-lg font-semibold text-black mt-6 mb-2">
              Top Companies Hiring
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
              Graduates with strong digital skills are in demand across
              startups, agencies, and global tech giants.
            </p>
            <p className="text-sm sm:text-base font-semibold text-black mb-2">
              Companies hiring certified marketers include:
            </p>
            <ul className="flex flex-nowrap items-center gap-3 overflow-x-auto text-sm sm:text-base text-gray-700 mb-2 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {topCompanies.map((company) => (
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
              className="text-[#B30437] text-sm sm:text-base font-semibold underline underline-offset-2 hover:text-red-800 transition-colors"
            >
              {expanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChartersUnionDigitalMarketingCertificate;
