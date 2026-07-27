import React from "react";
import Image from "next/image";

interface BannerBlockProps {
  imageSrc?: string;
  imageAlt?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actionButton: React.ReactNode;
}

const BannerBlock: React.FC<BannerBlockProps> = ({
  imageSrc,
  imageAlt = "",
  title,
  subtitle,
  actionButton,
}) => {
  return (
    <div className="mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 flex-grow text-center md:text-left min-w-0">
        {/* Logo */}
        {imageSrc && (
          <div className="w-14 sm:w-14 h-20 relative shrink-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="70px"
              className="object-contain object-left"
              priority
            />
          </div>
        )}

        {/* Texts */}
        <div className="flex-grow min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug truncate whitespace-normal">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs sm:text-sm text-gray-600 font-medium mt-1">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="w-full md:w-auto mt-6 md:mt-0 flex justify-center md:justify-end">
        {actionButton}
      </div>
    </div>
  );
};

export default BannerBlock;
