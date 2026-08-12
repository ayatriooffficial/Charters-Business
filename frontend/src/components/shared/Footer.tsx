"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerSections = [

    {
      title: "Academics",
      links: [
        "CBA™ (Certified Business Accountant)",
        "DGM™ (Digital Growth & Marketing)",
        "TBM™ (Technology & Business Management)",
      ],
    },
    {
      title: "Innovation",
      links: ["On-class internship", "i-Lab Entrepreneurship", "Student research program"],
    },
    {
      title: "About us",
      links: [
        "For Companies",
        "Events",
        "Jobs",
        "Blog",
      ],
    },
  ];

  const socialLinks = [
    { name: "Twitter", icon: "/Charters-icon/social-icon/twitter.svg", href: "twitter" },
    { name: "Instagram", icon: "/Charters-icon/social-icon/instagram.svg", href: "instagram" },
    { name: "LinkedIn", icon: "/Charters-icon/social-icon/linkedln.svg", href: "linkedin" },
    { name: "YouTube", icon: "/Charters-icon/social-icon/youtube.svg", href: "youtube" },
  ];

  return (
    <footer
      className="relative z-[5] pt-[50px] mt-[70px] bg-[#fafafa] text-black"
      role="contentinfo"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Level Container */}
        <div className="flex flex-col lg:flex-row justify-between gap-9">
          {/* Logo Section  */}
          <div className="flex-shrink-0 w-full lg:w-auto mb-6 lg:mb-0">
            <div className="flex items-center gap-2 mb-2 lg:mb-4">
              <Image
                src="/Chaters_Union.avif"
                alt="Chaters' Union - Business Education Excellence"
                width={150}
                height={80}
                quality={50}
                sizes="(max-width: 640px) 80px, 150px"
                className="w-auto h-auto"
              />
            </div>
            <p className="text-sm text-[#222222] leading-relaxed max-w-xs">
              Shantiniketan Building, 8 Camac St, Elgin, {" "} Kolkata, West Bengal 700017.
            </p>
            <section aria-labelledby="partners-heading">
              <h3 id="partners-heading" className="sr-only">
                Our Accreditation Partners
              </h3>
              <div className="flex flex-wrap items-center pt-[10px] gap-4 sm:gap-6 lg:gap-8">
                {/* EFMD Logo */}
                <div className="relative w-[270px] max-w-full h-[60px]">
                  <Image
                    src="https://res.cloudinary.com/ducgcl4dg/image/upload/v1784550674/charters-partners_ufcct9.avif"
                    alt=" Global - Educational accreditation and quality assurance partner"
                    fill
                    sizes="270px"
                    quality={60}
                    className="object-contain"
                  />
                </div>

              </div>
            </section>
          </div>

          {/* Navigation Sections Wrapper */}
          <div className=" flex-col lg:flex-row lg:gap-9">
            {/* Navigation Sections Container */}
            <div className="flex flex-wrap justify-between lg:justify-start gap-6 lg:gap-9 w-full lg:w-auto">
              {footerSections.map((section, index) => (
                <nav
                  key={index}
                  className="min-w-[140px] lg:min-w-[160px] flex-shrink-0 mb-6 lg:mb-0"
                  aria-labelledby={`footer-nav-${index}`}
                >
                  <h2
                    id={`footer-nav-${index}`}
                    className="text-[#222222] font-semibold text-base sm:text-[16px] mb-4 lg:mb-6"
                  >
                    {section.title}
                  </h2>
                  <ul className="space-y-2 lg:space-y-3" role="list">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} role="listitem">
                        <a
                          href="#"
                          className="text-[#222222] hover:text-[#000000] transition-colors text-sm block"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Logos and Contact Section */}
        <address className="mt-8 sm:mt-12 lg:mt-16 pt-6 lg:pt-8 not-italic">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8">
            {/* Partner Logos */}


            {/* Contact Information */}
            <section
              className="space-y-2 text-left lg:text-right"
              aria-labelledby="contact-heading"
            >
              <h3 id="contact-heading" className="sr-only">
                Contact Information
              </h3>
            </section>
          </div>
        </address>
      </div>

      {/* Bottom Bar */}
      <div>
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mx-auto py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
            <div
              className="text-gray-600 text-xs sm:text-sm order-2 lg:order-1"
              role="text"
            >
              Copyright © 2025{" "}
              <span className="text-[#B30437] font-medium">
                Charters&apos; Union
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 order-1 lg:order-2">
              <nav
                className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm"
                aria-label="Legal and policy links"
              >
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-[#B30437] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-600 hover:text-[#B30437] transition-colors"
                >
                  Terms & Conditions
                </Link>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#B30437] transition-colors"
                >
                  Cookie Policy
                </a>
              </nav>

              <nav
                className="flex items-center gap-2 sm:gap-3"
                aria-label="Social media links"
              >
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 hover:bg-[#B30437] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                    aria-label={`Follow us on ${social.name}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="relative w-4 h-4">
                      <Image
                        src={social.icon}
                        alt={social.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
