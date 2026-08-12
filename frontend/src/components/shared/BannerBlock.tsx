import React from "react";
import styles from "./BannerBlock.module.css";

interface BannerBlockProps {
  imageSrc?: string;
  imageAlt?: string;
  imageHoverLabel?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actionButton: React.ReactNode;
}

const BannerBlock: React.FC<BannerBlockProps> = ({
  imageSrc,
  imageAlt = "",
  imageHoverLabel,
  title,
  subtitle,
  actionButton,
}) => {
  return (
    <div className="mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between w-full">
      <div className="flex flex-row items-start gap-4 md:gap-6 flex-grow text-left min-w-0">

        {/* ── Book 3D hover animation ── exact Scaler DOM structure ── */}
        {imageSrc && (
          /* framer-O1RKz equivalent: outer wrapper, box-shadow transitions */
          <div className={`${styles.bookOuter} mt-1.5 md:mt-0`}>

            {/* framer-j2p1jj: Book — has perspective() transform + preserve-3d, pops forward on hover */}
            <div className={styles.book}>

              {/* framer-1fh6zdn: Paper — translateZ(-10px), revealed when cover opens */}
              <div className={styles.bookPaper}>
                <p className={styles.bookPaperTitle}>
                  {imageHoverLabel ?? "Charters' Report"}
                </p>
                <p className={styles.bookPaperSub}>Download to know more</p>
              </div>

              {/* framer-14eanjd: Cover — hinges open from left spine on hover */}
              <div className={styles.bookCover}>
                {/* framer-ggywk6: inner cover wrapper */}
                <div className={styles.bookCoverInner}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className={styles.bookCoverImg}
                  />
                </div>
                {/* framer-lovuz6: stripe shine */}
                <div className={styles.bookLight2} />
                {/* framer-1ekj6e9: diagonal highlight */}
                <div className={styles.bookLight1} />
              </div>

            </div>
          </div>
        )}

        {/* Texts */}
        <div className="flex-grow min-w-0">
          <h3 className="text-[14px] sm:text-[16px] md:text-[16px] font-semibold text-gray-900 whitespace-normal">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs sm:text-sm text-gray-600 font-medium mt-1">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="w-full md:w-auto mt-4 md:mt-0 flex justify-center md:justify-end">
        {actionButton}
      </div>
    </div>
  );
};

export default BannerBlock;
