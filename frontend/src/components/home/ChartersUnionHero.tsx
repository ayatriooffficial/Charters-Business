import Image from "next/image";
import { getCloudinaryUrl } from "@/lib/cloudinary";

const heroData = {
  availableBadge: "Available Now",
  title: "Professional Accountant Training in Kolkata",
  titleHighlight: "with 100% Paid Internship",
  description:
    "Learn Professional Accounting in Kolkata with 3-month foundation + 4-month paid internship. Work with top companies from USA, Canada, Qatar, Singapore, Australia & UK. Join now!",

  backgroundImage: getCloudinaryUrl("charters-business/background", {
    width: 1920,
    quality: "auto:eco",
    format: "auto",
    dpr: "auto",
  }),

  mobileBackgroundImage: getCloudinaryUrl("charters-business/Background-M", {
    width: 750,
    quality: "auto:eco",
    format: "auto",
    dpr: "auto",
  }),

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

      {/* Desktop Background Image */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <Image
          src={heroData.backgroundImage}
          alt="Professional Accountant Training in Kolkata"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Mobile Background Image */}
      <div className="absolute inset-0 -z-10 md:hidden">
        <Image
          src={heroData.mobileBackgroundImage}
          alt="Professional Accountant Training in Kolkata Mobile Background"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Content Container */}
      <div className="relative h-full w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Content */}
        <div className="md:hidden h-full flex flex-col items-center justify-center text-center py-8 px-4">
          <div className="flex-1 flex flex-col items-center justify-end space-y-3 max-w-2xl">
            {/* Badge */}
            <span className="inline-block bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold shadow-md">
              {heroData.availableBadge}
            </span>

            {/* Title */}
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {heroData.title}
              </h2>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#B30437] leading-tight italic">
                {heroData.titleHighlight}
              </h2>
            </div>

            {/* Divider */}
            <div className="w-12 h-0.5 bg-white"></div>

            {/* Description */}
            <p className="text-white/90 text-sm leading-relaxed max-w-xl px-4">
              {heroData.description}
            </p>
          </div>

          {/* CTA Button */}
          <button
            type="button"
            aria-label={heroData.cta.buttonAriaLabel}
            className="mt-6 bg-[#B30437] hover:bg-[#8B0329] text-white py-3 px-8 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent w-full max-w-xs"
          >
            {heroData.cta.buttonText}
          </button>
        </div>

        {/* Desktop CTA */}
        <div className="relative h-full w-full md:absolute md:inset-0">
          <div className="h-full flex items-end justify-center pb-[10vh] md:pb-[14vh] py-8 md:py-0">
            <button
              type="button"
              aria-label={heroData.cta.buttonAriaLabel}
              className="bg-black hover:bg-black text-white py-1 px-4 sm:py-2 sm:px-6 rounded-lg text-[16px] font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#B30437]"
            >
              {heroData.cta.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChartersUnionHero;