"use client";

import { memo } from "react";
import Image from "next/image";
import { getCloudinaryUrl, CLOUDINARY_IMAGES } from "@/lib/cloudinary";

interface University {
  name: string;
  logoKey: keyof typeof CLOUDINARY_IMAGES.universities;
}

const universities: University[] = [
  { name: "Tecnológico de Monterrey", logoKey: "tecDeMonterrey" },
  { name: "University of Michigan", logoKey: "michigan" },
  { name: "Imperial College London", logoKey: "imperial" },
  { name: "The University of Melbourne", logoKey: "melbourne" },
  { name: "Manipal", logoKey: "manipal" },
  { name: "NMIMS", logoKey: "nmims" },
];

function BuiltByHarvard() {
  return (
    <section
      className="relative text-black py-8 sm:py-10 mt-[70px] md:py-16 mb-16"
      role="region"
      aria-labelledby="trusted-companies-heading"
    >
      {/* Full-width background */}
      <div
        className="absolute inset-0 bg-[#F4F2EE] -z-10"
        style={{
          width: "100vw",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10">
        <h2
          id="trusted-companies-heading"
          className="leading-normal text-[35px] font-semibold text-black"
        >
          The most{" "}
          <span className="relative inline-block mx-2">
            <Image
              src="/highlight line.svg"
              alt="highlight line"
              aria-hidden="true"
              width={200}
              height={40}
              className="absolute inset-0 w-full h-full scale-x-300 scale-y-155 pointer-events-none"
            />
            <span className="relative z-10 text-[#B30437] px-3 font-fraunces font-bold">
              innovative
            </span>
          </span>{" "}
          Institution
        </h2>

        <p className="text-[#5f6368] text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed px-4">
          Global leaders partner with Hardvard to drive workforce transformation
          and unlock their organization's full potential through cutting-edge
          tech skills.
        </p>
      </div>

      {/* Card */}
      <div className="bg-white p-2 sm:p-4 md:p-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x lg:divide-gray-300">
          {/* Left Section */}
          <div className="lg:pr-6 lg:pb-4">
            <h3 className="text-lg sm:text-[16px] md:text-[18px] font-semibold text-black mb-2 sm:mb-4 text-center">
              Built by alumni from {" "}
            </h3>

            <div className="grid grid-cols-3 gap-6 sm:gap-8 items-center justify-items-center">
              {universities.map((university, index) => (
                <div
                  key={`built-${index}`}
                  className="flex items-center justify-center w-full h-12 sm:h-14 relative group"
                >
                  <div className="relative w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={getCloudinaryUrl(
                        CLOUDINARY_IMAGES.universities[university.logoKey],
                        { quality: "auto", format: "auto" }
                      )}
                      alt={`${university.name} logo`}
                      width={120}
                      height={60}
                      className="max-w-full max-h-full object-contain  transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:pl-6">
            <h3 className="text-lg sm:text-[16px] md:text-[18px] font-semibold text-black mb-2 sm:mb-4 text-center">
              Curriculum design base on
            </h3>

            <div className="grid grid-cols-3 gap-6 sm:gap-8 items-center justify-items-center">
              {universities.map((university, index) => (
                <div
                  key={`curriculum-${index}`}
                  className="flex items-center justify-center w-full h-12 sm:h-14 relative group"
                >
                  <div className="relative w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={getCloudinaryUrl(
                        CLOUDINARY_IMAGES.universities[university.logoKey],
                        { quality: "auto", format: "auto" }
                      )}
                      alt={`${university.name} logo`}
                      width={120}
                      height={60}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(BuiltByHarvard);