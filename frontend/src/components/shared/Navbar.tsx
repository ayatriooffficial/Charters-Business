"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback, memo } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import UserDropdown from "@/components/dashboard/UserDropdown";
import AcademicsDropdown from "./AcademicsDropdown";


function Navbar() {
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSecondaryVisible, setIsSecondaryVisible] = useState(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [selectedSecondaryTab, setSelectedSecondaryTab] = useState("for-you");
  const [dropdownTop, setDropdownTop] = useState(0);

  const { user } = useAuth();

  const headerRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);
  const primaryRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const academicsButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const dashboardUrl =
    user?.role === "admin" || user?.role === "recruiter"
      ? "/admin/dashboard"
      : "/dashboard";

  const dashboardText =
    user?.role === "admin" || user?.role === "recruiter"
      ? "Admin Dashboard"
      : "Dashboard";

  const handleCourseClick = useCallback(
    (sectionId: string) => {
      setIsAcademicsOpen(false);
      setIsMobileMenuOpen(false);
      router.push(`/courses#${sectionId}`);
    },
    [router],
  );

  const handleLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const calculateDropdownPosition = useCallback(() => {
    if (!primaryRef.current) return;

    const primaryRect = primaryRef.current.getBoundingClientRect();
    let totalTop = primaryRect.bottom;

    if (isSecondaryVisible && secondaryRef.current) {
      const secondaryRect = secondaryRef.current.getBoundingClientRect();
      totalTop = secondaryRect.bottom;
    }

    setDropdownTop(totalTop);
  }, [isSecondaryVisible]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        academicsButtonRef.current &&
        academicsButtonRef.current.contains(target)
      ) {
        return;
      }

      if (dropdownRef.current && dropdownRef.current.contains(target)) {
        return;
      }

      if (isAcademicsOpen) {
        setIsAcademicsOpen(false);
      }
    };

    if (isAcademicsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAcademicsOpen]);

  useEffect(() => {
    calculateDropdownPosition();
  }, [calculateDropdownPosition, isSecondaryVisible, isNavbarVisible]);

  useEffect(() => {
    const handleResize = () => {
      calculateDropdownPosition();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [calculateDropdownPosition]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          if (scrollY <= 10) {
            setIsNavbarVisible(true);
            setIsSecondaryVisible(true);
          } else if (scrollY > lastScrollY && scrollY > 100) {
            setIsNavbarVisible(false);
            setIsSecondaryVisible(false);
          } else if (scrollY < lastScrollY) {
            setIsNavbarVisible(true);
            setIsSecondaryVisible(false);
          }

          setLastScrollY(scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isAcademicsOpen) {
      calculateDropdownPosition();
    }
  }, [isAcademicsOpen, calculateDropdownPosition]);

  return (
    <div
      ref={headerRef}
      className={`fixed left-0 right-0 z-[100] bg-white text-gray-900 md:w-full w-fit font-sans navbar-transition ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      style={{ top: 0 }}
      role="banner"
    >
      <div className="flex flex-col md:w-full  w-fit">
        {/* Secondary Navigation */}
        <div
          ref={secondaryRef}
          className={`border-none hidden sm:flex items-center navbar-secondary-transition bg-[#f5f5f7] ${isSecondaryVisible
            ? "h-[30px] opacity-100 transform translate-y-0"
            : "h-0 opacity-0 transform -translate-y-full overflow-hidden"
            }`}
          style={{
            transitionDelay: isSecondaryVisible ? "0ms" : "0ms",
          }}
        >
          <div className="w-full max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-1 w-full flex justify-between items-center">
              <nav aria-label="Secondary navigation">
                <ul className="flex text-[13px] text-[#0F1419] font-semibold items-center space-x-3 sm:space-x-4 lg:space-x-6">
                  <li>
                    <a
                      href="/for-you"
                      className={`cursor-pointer hover:text-[#B30437] transition-colors ${selectedSecondaryTab === "for-you"
                        ? "border-b-3 border-[#B30437] text-[#B30437]"
                        : ""
                        }`}
                      onClick={() => setSelectedSecondaryTab("for-you")}
                    >
                      For Individuals
                    </a>
                  </li>
                  <li>
                    <a
                      href="/for-companies"
                      className={`cursor-pointer hover:text-[#B30437] transition-colors ${selectedSecondaryTab === "for-companies"
                        ? "border-b-3 border-[#B30437] text-[#B30437]"
                        : ""
                        }`}
                      onClick={() => setSelectedSecondaryTab("for-companies")}
                    >
                      Companies + Recruiters
                    </a>
                  </li>
                </ul>
              </nav>

              <nav aria-label="Quick links">
                <ul className="flex text-[13px] font-medium text-[#000] items-center space-x-3 sm:space-x-4 lg:space-x-6">
                  <li>
                    <a
                      href="/careers/internships"
                      className={`cursor-pointer hover:text-[#B30437] transition-colors ${selectedSecondaryTab === "internships"
                        ? "border-b-2 border-[#B30437] text-[#B30437] pb-1"
                        : ""
                        }`}
                      onClick={() => setSelectedSecondaryTab("internships")}
                    >
                      Find Internship
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers/jobs"
                      className={`cursor-pointer hover:text-[#B30437] transition-colors ${selectedSecondaryTab === "jobs"
                        ? "border-b-2 border-[#B30437] text-[#B30437] pb-1"
                        : ""
                        }`}
                      onClick={() => setSelectedSecondaryTab("jobs")}
                    >
                      Find Jobs
                    </a>
                  </li>
                  <li>
                    <a
                      href="/events"
                      className={`cursor-pointer hover:text-[#B30437] transition-colors ${selectedSecondaryTab === "events"
                        ? "border-b-2 border-[#B30437] text-[#B30437] pb-1"
                        : ""
                        }`}
                      onClick={() => setSelectedSecondaryTab("events")}
                    >
                      Events
                    </a>
                  </li>

                  {user ? (
                    <li>
                      <UserDropdown />
                    </li>
                  ) : (
                    <li>
                      <a
                        href="/login"
                        className={`cursor-pointer hover:text-[#B30437] transition-colors ${selectedSecondaryTab === "login"
                          ? "border-b-2 border-[#B30437] text-[#B30437] pb-1"
                          : ""
                          }`}
                        onClick={() => setSelectedSecondaryTab("login")}
                      >
                        Login
                      </a>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Primary Navigation */}
        <nav
          ref={primaryRef}
          className={`border-b border-[#efefef] border-solid navbar-primary-slide bg-white relative z-[110] ${isNavbarVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0"
            }`}
          style={{
            transitionDelay:
              isNavbarVisible && isSecondaryVisible ? "100ms" : "0ms",
          }}
          aria-label="Main navigation"
        >
          <div className="max-w-[88rem] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2 sm:py-2 w-[94vw]">
              <div
                className="w-28 sm:w-36 md:w-40 h-6 sm:h-7 md:h-8 relative cursor-pointer hover:opacity-80 transition-opacity duration-200 shrink-0"
                onClick={handleLogoClick}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === "Enter" && handleLogoClick()}
              >
                <Image
                  src="/Chaters_Union.webp"
                  alt="Charters Union of Business - Home"
                  fill
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 160px"
                  className="object-contain object-left"
                  priority
                />
              </div>

              <ul className="hidden lg:flex text-[14px] uppercase font-semibold justify-start text-[#000] items-center space-x-4 xl:space-x-6 2xl:space-x-8">
                {/* <li>
                  <a href="/about" className="gap-2 hover:text-[#B30437] transition-colors duration-300 cursor-pointer">
                    <span>ABOUT</span>
                  </a>
                </li> */}
                <li className="relative">
                  <button
                    ref={academicsButtonRef}
                    className="flex items-center justify-start gap-2 hover:text-[#B30437] transition-colors duration-300 cursor-pointer bg-transparent border-none"
                    aria-expanded={isAcademicsOpen}
                    aria-haspopup="true"
                    onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                  >
                    <span>ACADEMICS</span>
                    <ChevronDown
                      className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-200 ${isAcademicsOpen ? "rotate-180" : ""
                        }`}
                      aria-hidden="true"
                    />
                  </button>
                </li>

                <li>
                  <a
                    href="/faculties"
                    className="gap-2 hover:text-[#B30437] transition-colors duration-300 cursor-pointer"
                  >
                    <span>FACULTY + RESEARCH</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/faculties"
                    className="gap-2 hover:text-[#B30437] transition-colors duration-300 cursor-pointer"
                  >
                    <span>STUDENT LIFE </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="gap-2 hover:text-[#B30437] transition-colors duration-300 cursor-pointer"
                  >
                    <span>PLACEMENTS++</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/community"
                    className="gap-2 hover:text-[#B30437] transition-colors duration-300 cursor-pointer"
                  >
                    <span>COMMUNITY</span>
                  </a>
                </li>
              </ul>

              {/* Mobile Apply Button and Menu */}
              <div className="lg:hidden flex items-center gap-2">
                <a
                  href="/apply"
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-[#B30437] hover:bg-[#8B0329] rounded-md transition-colors"
                >
                  APPLY
                </a>
                <button
                  className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-150 relative z-[9999]"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-expanded={isMobileMenuOpen}
                  aria-label="Toggle navigation menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 text-gray-700" />
                  ) : (
                    <Menu className="w-5 h-5 text-gray-700" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Academics Dropdown Component */}
        <AcademicsDropdown
          ref={dropdownRef}
          isOpen={isAcademicsOpen}
          dropdownTop={dropdownTop}
          onCourseClick={handleCourseClick}
          isSecondaryVisible={isSecondaryVisible}
        />

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 z-[50] navbar-mobile-transition ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          style={{ top: `${dropdownTop}px` }}
        >
          <div
            className="absolute inset-0 backdrop-blur-sm bg-white/95"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            className={`relative bg-white w-full min-h-screen navbar-mobile-slide ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
              }`}
          >
            <nav className="px-4 sm:px-6 py-6" aria-label="Mobile navigation">
              <ul className="space-y-4">
                <li>
                  <a
                    href="/about"
                    className="block py-3 text-sm font-medium text-gray-900 hover:text-[#B30437] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <button
                    className="w-full flex items-center justify-between py-3 text-sm font-medium text-gray-900 hover:text-[#B30437] transition-colors"
                    onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                  >
                    <span>ACADEMICS</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${isAcademicsOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {isAcademicsOpen && (
                    <div className="pl-4 pb-2 space-y-2">
                      <button
                        onClick={() => handleCourseClick("curriculum-section")}
                        className="block py-2 text-xs text-gray-600 hover:text-[#B30437] w-full text-left"
                      >
                        Business Strategy
                      </button>
                      <button
                        onClick={() =>
                          handleCourseClick("google-workspace-education")
                        }
                        className="block py-2 text-xs text-gray-600 hover:text-[#B30437] w-full text-left"
                      >
                        Financial Management
                      </button>
                      <button
                        onClick={() => handleCourseClick("week-at-tetr")}
                        className="block py-2 text-xs text-gray-600 hover:text-[#B30437] w-full text-left"
                      >
                        Marketing Management
                      </button>
                      <button
                        onClick={() =>
                          handleCourseClick("learn-apply-reflect-repeat")
                        }
                        className="block py-2 text-xs text-gray-600 hover:text-[#B30437] w-full text-left"
                      >
                        Operations Management
                      </button>
                    </div>
                  )}
                </li>
                <li>
                  <a
                    href="/faculties"
                    className="block py-3 text-sm font-medium text-gray-900 hover:text-[#B30437] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    FACULTY + RESEARCH
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="block py-3 text-sm font-medium text-gray-900 hover:text-[#B30437] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    CAREERS
                  </a>
                </li>
                <li>
                  <a
                    href="/community"
                    className="block py-3 text-sm font-medium text-gray-900 hover:text-[#B30437] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    COMMUNITY
                  </a>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/for-you"
                      className={`block py-2 text-xs text-gray-600 hover:text-[#B30437] ${selectedSecondaryTab === "for-you"
                        ? "text-[#B30437] font-medium"
                        : ""
                        }`}
                      onClick={() => {
                        setSelectedSecondaryTab("for-you");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      For Individuals
                    </a>
                  </li>
                  <li>
                    <a
                      href="/for-companies"
                      className={`block py-2 text-xs text-gray-600 hover:text-[#B30437] ${selectedSecondaryTab === "for-companies"
                        ? "text-[#B30437] font-medium"
                        : ""
                        }`}
                      onClick={() => {
                        setSelectedSecondaryTab("for-companies");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      For Companies
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers/internships"
                      className={`block py-2 text-xs text-gray-600 hover:text-[#B30437] ${selectedSecondaryTab === "internships"
                        ? "text-[#B30437] font-medium"
                        : ""
                        }`}
                      onClick={() => {
                        setSelectedSecondaryTab("internships");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Find Internship
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers/jobs"
                      className={`block py-2 text-xs text-gray-600 hover:text-[#B30437] ${selectedSecondaryTab === "jobs"
                        ? "text-[#B30437] font-medium"
                        : ""
                        }`}
                      onClick={() => {
                        setSelectedSecondaryTab("jobs");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Find Jobs
                    </a>
                  </li>
                  <li>
                    <a
                      href="/events"
                      className={`block py-2 text-xs text-gray-600 hover:text-[#B30437] ${selectedSecondaryTab === "events"
                        ? "text-[#B30437] font-medium"
                        : ""
                        }`}
                      onClick={() => {
                        setSelectedSecondaryTab("events");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Events
                    </a>
                  </li>

                  {user ? (
                    <>
                      <li>
                        <a
                          href={dashboardUrl}
                          className="block py-2 text-xs text-gray-600 hover:text-[#B30437]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dashboardText}
                        </a>
                      </li>
                      {user.role !== "admin" && user.role !== "recruiter" && (
                        <li>
                          <a
                            href="/dashboard/profile"
                            className="block py-2 text-xs text-gray-600 hover:text-[#B30437]"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Profile
                          </a>
                        </li>
                      )}
                    </>
                  ) : (
                    <li>
                      <a
                        href="/login"
                        className={`block py-2 text-xs text-gray-600 hover:text-[#B30437] ${selectedSecondaryTab === "login"
                          ? "text-[#B30437] font-medium"
                          : ""
                          }`}
                        onClick={() => {
                          setSelectedSecondaryTab("login");
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        Login
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Navbar);
