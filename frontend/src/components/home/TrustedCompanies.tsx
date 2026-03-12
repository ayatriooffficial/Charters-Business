"use client";

import React, { memo, useRef } from "react";
import Image from "next/image";
import { getCloudinaryUrl } from "@/lib/cloudinary";
import useInViewPlay from "@/components/micro/useInViewPlay";

const POPULAR_COMPANIES = [
  {
    name: "Square",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Square_Inc_logo.svg/200px-Square_Inc_logo.svg.png",
    caseStudy: {
      quote: "Square has enabled our merchants to easily adopt omnichannel strategies that drive higher conversion and satisfaction rates across all our diverse consumer touchpoints.",
      author: "Jane Doe",
      role: "Head of Payments",
      avatar: "https://i.pravatar.cc/150?u=square"
    }
  },
  {
    name: "Amplitude",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Amplitude_logo.svg/300px-Amplitude_logo.svg.png",
    caseStudy: {
      quote: "Amplitude has been central to building a more holistic view of the customer and gaining better control of our data to understand customers' mobile journeys, flows, and funnels.",
      author: "Sherry Thomas-Zon",
      role: "Director of Mobile Marketing",
      avatar: "https://i.pravatar.cc/150?u=amplitude"
    }
  },
  {
    name: "Walmart",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/200px-Walmart_logo.svg.png",
    caseStudy: {
      quote: "Walmart's supply chain relies heavily on data-driven models for efficiency. Our team relies on this data for making our delivery fleet performant.",
      author: "John Smith",
      role: "VP of Engineering",
      avatar: "https://i.pravatar.cc/150?u=walmart"
    }
  },
  {
    name: "DoorDash",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/DoorDash_Logo.svg/200px-DoorDash_Logo.svg.png",
    caseStudy: {
      quote: "Rapid delivery isn't just a promise, it's a lifestyle we maintain through data, real-time analytics, and efficient ML models.",
      author: "Sarah Conner",
      role: "Logistics Lead",
      avatar: "https://i.pravatar.cc/150?u=doordash"
    }
  },
  {
    name: "Atlassian",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Atlassian_logo_2017.svg/200px-Atlassian_logo_2017.svg.png",
    caseStudy: {
      quote: "Our collaboration processes have improved vastly since the integration, giving teams a clearer view into their ongoing progress and metrics.",
      author: "Alice Johnson",
      role: "Product Manager",
      avatar: "https://i.pravatar.cc/150?u=atlassian"
    }
  },
  {
    name: "Zoom",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/200px-Zoom_Communications_Logo.svg.png",
    caseStudy: {
      quote: "Creating seamless video connections at scale is harder than it looks, and robust infrastructure provides our main competitive advantage.",
      author: "Alex Morgan",
      role: "Infrastructure Lead",
      avatar: "https://i.pravatar.cc/150?u=zoom"
    }
  },
  {
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/200px-Adidas_Logo.svg.png",
    caseStudy: {
      quote: "Innovation in athletic wear requires understanding our athletes better than anyone else, relying on continuous data flows.",
      author: "Emma Wilson",
      role: "Head of Product",
      avatar: "https://i.pravatar.cc/150?u=adidas"
    }
  },
  {
    name: "Capital One",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Capital_One_logo.svg/200px-Capital_One_logo.svg.png",
    caseStudy: {
      quote: "Financial technology moves fast, and our tooling must keep up to ensure reliability, security, and top-notch user experiences for our customers.",
      author: "David Chen",
      role: "VP Engineering",
      avatar: "https://i.pravatar.cc/150?u=capitalone"
    }
  },
  {
    name: "NBCUniversal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/NBCUniversal_logo.svg/200px-NBCUniversal_logo.svg.png",
    caseStudy: {
      quote: "Media delivery at scale requires extremely robust backend architectures, especially when broadcasting major live events worldwide.",
      author: "Tom Baker",
      role: "Director of Media Tech",
      avatar: "https://i.pravatar.cc/150?u=nbc"
    }
  },
  {
    name: "Qualtrics",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Qualtrics_logo.svg/200px-Qualtrics_logo.svg.png",
    caseStudy: {
      quote: "Experience management relies heavily on precise survey data and fast processing. The platform provides insights at unprecedented speeds.",
      author: "Olivia Clark",
      role: "Data Scientist",
      avatar: "https://i.pravatar.cc/150?u=qualtrics"
    }
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png",
    caseStudy: {
      quote: "Our massive-scale applications rely on well-architected systems to deliver sub-second responses globally, improving our overall user experience.",
      author: "Sundar Chen",
      role: "Engineering Director",
      avatar: "https://i.pravatar.cc/150?u=google"
    }
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png",
    caseStudy: {
      quote: "Cloud infrastructure is at the core of our business, and ensuring 99.999% uptime requires incredibly talented engineers and rigorous processes.",
      author: "Satya Nadella",
      role: "VP of Cloud",
      avatar: "https://i.pravatar.cc/150?u=microsoft"
    }
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png",
    caseStudy: {
      quote: "Connecting billions of people requires innovative data structures and networking protocols that push the boundaries of modern computing.",
      author: "Mark Evans",
      role: "Technical Lead",
      avatar: "https://i.pravatar.cc/150?u=meta"
    }
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png",
    caseStudy: {
      quote: "Delivering high-quality video content to every device across the globe seamlessly relies heavily on our advanced content delivery networks.",
      author: "Reed Hastings",
      role: "Director of Streaming",
      avatar: "https://i.pravatar.cc/150?u=netflix"
    }
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png",
    caseStudy: {
      quote: "From e-commerce to cloud computing, operational efficiency is our main priority, driven by data science and machine learning models.",
      author: "Jeff Wilke",
      role: "Head of Operations",
      avatar: "https://i.pravatar.cc/150?u=amazon"
    }
  }
];

function TrustedCompanies() {

  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useInViewPlay(sectionRef, "200px", 0.1);

  const mobileImageUrl = getCloudinaryUrl('hiring-companies-mobile_htt4q8', {
    quality: 'auto',
    format: 'auto',
  });

  return (
    <section ref={sectionRef} className="mx-[0%] relative z-10 bg-white pb-8 overflow-visible">

      {isVisible && (

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">

        <header className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-base sm:text-lg lg:text-xl text-black mx-auto">
            Our graduates work at the world&apos;s most innovative companies
          </p>
        </header>

        <div className="w-full mb-12 sm:mb-16">

          <div className="hidden md:flex flex-wrap justify-center items-center gap-x-12 lg:gap-x-16 gap-y-12 lg:gap-y-16 max-w-6xl mx-auto px-10">

            {POPULAR_COMPANIES.map((company, index) => (

              <div key={index} className="relative group flex flex-col items-center justify-end cursor-pointer z-10 hover:z-50 w-[140px] h-20">

                <div className="h-10 flex items-center justify-center mb-3 w-full">
                  <img src={company.logo} alt={company.name} className="max-h-full max-w-full object-contain" />
                </div>

                <div className="bg-[#f3f4f6] text-[#4b5563] text-[11px] font-medium px-4 py-1.5 rounded-full whitespace-nowrap group-hover:bg-[#e5e7eb] transition-colors border border-transparent group-hover:border-gray-200">
                  Case Study
                </div>

                <div className="absolute bottom-[calc(100%+12px)] w-[340px] left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 text-left border border-gray-100 pointer-events-none group-hover:pointer-events-auto">
                  <p className="text-[#374151] text-[15px] leading-relaxed mb-6 font-medium">
                    "{company.caseStudy.quote}"
                  </p>
                  <div className="flex items-center gap-3 relative z-10">
                    <img src={company.caseStudy.avatar} className="w-10 h-10 rounded-full bg-gray-100 object-cover border border-gray-100" alt={company.caseStudy.author} />
                    <div>
                      <div className="text-sm font-semibold text-gray-900 leading-tight">{company.caseStudy.author}</div>
                      <div className="text-[13px] text-gray-500 mt-0.5">{company.caseStudy.role}</div>
                    </div>
                  </div>

                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 -mt-[9px] shadow-[4px_4px_10px_rgba(0,0,0,0.03)] border-r border-b border-gray-100 z-0"></div>

                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-full h-8 bg-transparent z-0"></div>
                </div>

              </div>

            ))}

          </div>

          <div className="flex justify-center md:hidden px-4">
            <Image
              src={mobileImageUrl}
              alt="Hiring companies logos grid"
              width={448}
              height={300}
              className="w-full max-w-md h-auto"
              loading="lazy"
              sizes="(max-width: 768px) 448px, 0vw"
            />
          </div>

        </div>

        <div className="flex justify-center">
          <button
            className="px-6 py-3 bg-[#B30437] hover:bg-[#8B0329] text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            onClick={() => {
              window.open('https://spangled-cardinal-ac7.notion.site/2fe34c26081b800fb860c41b85555e68?v=393d012ded8a4a589d3a2d09872a78cc', '_blank', 'noopener,noreferrer');
            }}
          >
            See All Companies
          </button>
        </div>

      </div>

      )}

    </section>
  );
}

export default memo(TrustedCompanies);