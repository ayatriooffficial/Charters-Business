import { getCloudinarySrcSet, getCloudinaryUrl } from "@/lib/cloudinary";

const heroData = {
  availableBadge: "Available Now",
  title: "Professional Accountant Training in Kolkata",
  titleHighlight: "with 100% Paid Internship",
  description:
    "Learn Professional Accounting in Kolkata with 3-month foundation + 4-month paid internship. Work with top companies from USA, Canada, Qatar, Singapore, Australia & UK. Join now!",
  backgroundImage: getCloudinaryUrl("charters-business/background", {
    width: 1536,
    quality: "auto:eco",
    format: "auto",
  }),
  backgroundImageSrcSet: getCloudinarySrcSet(
    "charters-business/background",
    [828, 1080, 1366, 1536, 1920],
    { quality: "auto:eco" },
  ),
  mobileBackgroundImage: getCloudinaryUrl("charters-business/Background-M", {
    width: 640,
    quality: "auto:eco",
    format: "auto",
  }),
  mobileBackgroundImageSrcSet: getCloudinarySrcSet(
    "charters-business/Background-M",
    [320, 390, 412, 515, 640],
    { quality: "auto:eco" },
  ),
  cta: {
    buttonText: "Join Webinar",
    buttonAriaLabel: "Join Mastering the Management webinar",
  },
};

function ChartersUnionHero() {
  return (
    <section
      className="relative w-full h-[86vh] md:h-[100vh] overflow-hidden"
      role="banner"
      aria-labelledby="hero-heading"
    >
      <h1 id="hero-heading" className="sr-only">
        {heroData.title} {heroData.titleHighlight}
      </h1>

      <div className="absolute inset-0 -z-10">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={heroData.backgroundImageSrcSet}
            sizes="100vw"
          />
          {/* Use art-directed sources so the browser fetches only one hero image per viewport. */}
          <img
            src={heroData.mobileBackgroundImage}
            srcSet={heroData.mobileBackgroundImageSrcSet}
            sizes="100vw"
            alt="Professional Accountant Training in Kolkata Background"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="h-full w-full object-contain object-center"
          />
        </picture>
      </div>

      {/* Mobile Content — hidden on md+ */}
      <div className="md:hidden relative h-full w-full px-4 flex flex-col items-center justify-center pb-10">
        <div className="flex flex-col items-center text-center space-y-3 w-full max-w-sm">
          {/* Badge */}
          <span className="inline-block bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold shadow-md">
            {heroData.availableBadge}
          </span>

          {/* Title */}
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              {heroData.title}
            </h2>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#B30437] leading-tight italic">
              {heroData.titleHighlight}
            </h2>
          </div>

          {/* Divider */}
          <div className="w-12 h-0.5 bg-white" />

          {/* Description */}
          <p className="text-white/90 text-sm leading-relaxed">
            {heroData.description}
          </p>

          {/* CTA Button */}
          <button
            type="button"
            aria-label={heroData.cta.buttonAriaLabel}
            className="w-full mt-2 bg-[#B30437] hover:bg-[#8B0329] text-white py-3 px-8 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {heroData.cta.buttonText}
          </button>
        </div>
      </div>

      {/* Desktop Button — hidden on mobile */}
      <div className="hidden md:flex absolute inset-0 items-end justify-center pb-[14vh]">
        <button
          className="bg-black hover:bg-gray-900 text-white py-2 px-6 rounded-lg text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          type="button"
          aria-label={heroData.cta.buttonAriaLabel}
        >
          {heroData.cta.buttonText}
        </button>
      </div>
    </section>
  );
}

export default ChartersUnionHero;
