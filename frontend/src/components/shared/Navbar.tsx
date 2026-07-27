"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback, memo } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { getCountdownData, type CountdownData } from "@/lib/utils/timer";
import UserDropdown from "@/components/dashboard/UserDropdown";
const AcademicsDropdown = dynamic(() => import("./AcademicsDropdown"), { ssr: false });
import { createPortal } from "react-dom";
const ChartersInterviewAi = dynamic(() => import("../home/Chartersinterview_ai"), { ssr: false });
import ModalBackdrop from "@/components/shared/ModalBackdrop";
import styles from "./Navbar.module.css";


function Navbar() {
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSecondaryVisible, setIsSecondaryVisible] = useState(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [selectedSecondaryTab, setSelectedSecondaryTab] = useState("for-you");
  const [dropdownTop, setDropdownTop] = useState(0);
  const [showInterviewAI, setShowInterviewAI] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const [countdown, setCountdown] = useState<CountdownData | null>(null);



  const { user, navigateToRemoteDashboard } = useAuth();

  const headerRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);
  const primaryRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const academicsButtonRef = useRef<HTMLButtonElement>(null);
  const mobileAcademicsButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const dashboardUrl =
    user?.role === "admin" || user?.role === "recruiter"
      ? "/admin/dashboard"
      : "/dashboard";

  const dashboardText =
    user?.role === "admin" || user?.role === "recruiter"
      ? "Admin Dashboard"
      : "Dashboard";

  const programmeSlugs = new Set([
    "certified-business-accountant",
    "digital-growth-&-marketing",
    "technology-&-business-management",
  ]);

  const isAcademicsActive = isMounted && pathname ? programmeSlugs.has(pathname.split("/")[1]) : false;

  const isNavActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/careers") return pathname.startsWith("/careers");
    return pathname === href || pathname.startsWith(href + "/");
  };

  const linkClass = (href: string) =>
    [
      "gap-2 hover:underline decoration-black hover:text-[#B30437] transition-colors duration-300 cursor-pointer",
      (isMounted && isNavActive(href)) ? "underline decoration-black" : "",
    ].join(" ");

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

    // The secondary bar sits above the primary bar in normal document flow,
    // so primaryRect.bottom already accounts for the secondary bar's height
    // (including when it's collapsed/hidden) — no need to read secondaryRef.
    const primaryRect = primaryRef.current.getBoundingClientRect();
    setDropdownTop(primaryRect.bottom);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const getActiveSlug = (path: string) => {
      const decoded = decodeURIComponent(path);
      if (decoded.includes("certified-business-accountant")) return "certified-business-accountant";
      if (decoded.includes("digital-growth-&-marketing")) return "digital-growth-&-marketing";
      if (decoded.includes("technology-&-business-management")) return "technology-&-business-management";
      return "certified-business-accountant"; // default
    };

    const activeSlug = getActiveSlug(pathname);

    const updateNavbarTimer = () => {
      setCountdown(getCountdownData(activeSlug));
    };

    updateNavbarTimer();
    const interval = setInterval(updateNavbarTimer, 1000);
    return () => clearInterval(interval);
  }, [pathname, isMounted]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        (academicsButtonRef.current &&
          academicsButtonRef.current.contains(target)) ||
        (mobileAcademicsButtonRef.current &&
          mobileAcademicsButtonRef.current.contains(target))
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

  // Cache navbar heights — zero-cost reads in scroll handler
  const navbarHeightsCache = useRef({ primary: 0, secondary: 0 });

  useEffect(() => {
    const updateNavbarHeight = () => {
      const primaryHeight = primaryRef.current?.offsetHeight || 0;
      const secondaryHeight = secondaryRef.current?.offsetHeight || 0;
      navbarHeightsCache.current = { primary: primaryHeight, secondary: secondaryHeight };
      document.documentElement.style.setProperty('--navbar-height', `${primaryHeight + secondaryHeight}px`);
    };

    const onResize = () => {
      calculateDropdownPosition();
      updateNavbarHeight();
    };

    const roRef = { id: null as number | null };
    const resizeObserver = new ResizeObserver(() => {
      if (roRef.id !== null) cancelAnimationFrame(roRef.id);
      roRef.id = requestAnimationFrame(() => {
        onResize();
        roRef.id = null;
      });
    });

    onResize();
    if (primaryRef.current) resizeObserver.observe(primaryRef.current);
    if (secondaryRef.current) resizeObserver.observe(secondaryRef.current);

    return () => {
      if (roRef.id !== null) cancelAnimationFrame(roRef.id);
      resizeObserver.disconnect();
    };
  }, [calculateDropdownPosition]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const rafRef = { id: null as number | null };

    const handleScroll = () => {
      if (typeof window === "undefined") return;
      const currentScrollY = window.scrollY;

      // Batch reads/writes inside rAF
      if (rafRef.id !== null) return;
      rafRef.id = requestAnimationFrame(() => {
        const scrollingDown = currentScrollY > lastScrollY;
        const atTop = currentScrollY < 10;

        // Read from cache — no layout forced in scroll handler
        const { primary: primaryHeight, secondary: secondaryHeight } = navbarHeightsCache.current;

        if (atTop) {
          setIsNavbarVisible(true);
          setIsSecondaryVisible(true);
          document.documentElement.style.setProperty('--navbar-height', `${primaryHeight + secondaryHeight}px`);
        } else if (scrollingDown) {
          setIsNavbarVisible(false);
          setIsSecondaryVisible(false);
          document.documentElement.style.setProperty('--navbar-height', `0px`);
        } else {
          setIsNavbarVisible(true);
          setIsSecondaryVisible(false);
          document.documentElement.style.setProperty('--navbar-height', `${primaryHeight}px`);
        }

        lastScrollY = currentScrollY;
        rafRef.id = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      if (rafRef.id !== null) cancelAnimationFrame(rafRef.id);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isAcademicsOpen) {
      calculateDropdownPosition();
    }
  }, [isAcademicsOpen, calculateDropdownPosition]);

  return (
    <header
      ref={headerRef}
      className={`fixed left-0 right-0 z-[100] text-gray-900 w-full font-sans ${styles.navbarTransition} ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      style={{ top: 0 }}
    >
      <div className="flex flex-col w-full">
        {/* Secondary Navigation */}
        <div
          ref={secondaryRef}
          className={`border-none hidden sm:flex items-center ${styles.navbarSecondaryTransition} bg-[#f5f5f7] ${isSecondaryVisible
            ? "h-[30px] opacity-100 transform translate-y-0"
            : "h-0 opacity-0 transform -translate-y-full overflow-hidden"
            }`}
          style={{
            transitionDelay: isSecondaryVisible ? "0ms" : "0ms",
          }}
        >
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-1 w-full flex items-center relative">
              {/* Left nav */}
              <nav aria-label="Secondary navigation">
                <ul className="flex text-[13px] text-[#0F1419] font-semibold items-center space-x-3 sm:space-x-4 lg:space-x-6">
                  <li>
                    <Link href="/for-companies"
                      className={`cursor-pointer hover:text-[#B30437] transition-colors ${selectedSecondaryTab === "for-companies"
                        ? "border-b-3 border-[#B30437] text-[#B30437]"
                        : ""
                        }`}
                      onClick={() => setSelectedSecondaryTab("for-companies")}
                    >
                      Companies + Recruiters
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Center text */}
              <div
                onClick={() => {
                  setShowInterviewAI(true);
                  document.body.style.overflow = 'hidden';
                }}
                className="absolute left-1/2 -translate-x-1/2 flex text-[13px] text-[#0F1419] font-semibold items-center whitespace-nowrap cursor-pointer"
              >
                {countdown ? (
                  <div className="flex items-center gap-1">
                    <span>Final Deadline:</span>
                    <span>{countdown.dateStr}</span>
                    <span className="font-medium text-black ml-1">Ends In:</span>
                    <div className="flex items-center gap-0.5 font-bold">
                      <span className="text-[#ff3b30] font-medium text-[14px]">{countdown.days}</span>
                      <span className="text-black text-[13px] font-medium mr-0.5">D</span>
                      <span className="text-black font-light text-[11px]">:</span>
                      <span className="text-[#ff3b30] font-medium text-[14px]">{countdown.hours}</span>
                      <span className="text-black text-[13px] font-medium mr-0.5">H</span>
                      <span className="text-black font-light text-[11px]">:</span>
                      <span className="text-[#ff3b30] font-medium text-[14px]">{countdown.minutes}</span>
                      <span className="text-black text-[13px] font-medium mr-0.5">M</span>
                      <span className="text-black font-light text-[11px]">:</span>
                      <span className="text-[#ff3b30] font-medium text-[14px]">{countdown.seconds}</span>
                      <span className="text-black text-[13px] font-medium">S</span>
                    </div>
                    <span className="mx-1.5 text-black text-[13px] font-medium">|</span>
                    <span>Talk to Us:</span>
                    <a
                      href="tel:+919836465083"
                      className="text-gray-900 hover:text-[#ff3b30] transition-colors font-bold"
                      onClick={(e) => e.stopPropagation()}
                    >
                      +91 9836465083
                    </a>
                  </div>
                ) : (
                  <p className="m-0">Loading Deadline...</p>
                )}
              </div>

              {/* Right nav */}
              <nav aria-label="Quick links" className="ml-auto">
                <ul className="flex text-[13px] font-semibold text-[#000] items-center space-x-1 sm:space-x-2 lg:space-x-2">
                  <li>
                    <a
                      href="/careers/internships"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`cursor-pointer hover:text-[#B30437] transition-colors ${selectedSecondaryTab === "internships"
                        ? "border-b-2 border-[#B30437] text-[#B30437] pb-1"
                        : ""
                        }`}
                      onClick={() => setSelectedSecondaryTab("internships")}
                    >
                      Find Internship
                    </a>
                  </li>
                  <li className="flex items-center"><span className="mx-1.5 text-black opacity-[0.5] font-normal text-[13px]">|</span></li>
                  <li>
                    <a
                      href="/careers/jobs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`cursor-pointer hover:text-[#B30437] transition-colors ${selectedSecondaryTab === "jobs"
                        ? "border-b-2 border-[#B30437] text-[#B30437] pb-1"
                        : ""
                        }`}
                      onClick={() => setSelectedSecondaryTab("jobs")}
                    >
                      Find Jobs
                    </a>
                  </li>
                  <li className="flex items-center"><span className="mx-1.5 font-normal text-black text-[13px]">|</span></li>
                  {isMounted && user ? (
                    <li><UserDropdown /></li>
                  ) : (
                    <li>
                      <button
                        onClick={() => {
                          setShowInterviewAI(true);
                          document.body.style.overflow = 'hidden';
                        }}
                        className={`cursor-pointer hover:text-[#B30437] transition-colors ${selectedSecondaryTab === "login"
                          ? "border-b-2 border-[#B30437] text-[#B30437] pb-1"
                          : ""
                          }`}
                      >
                        Login
                      </button>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Primary Navigation*/}
        <nav
          ref={primaryRef}
          className={`border-white/30 ${styles.navbarPrimarySlide} relative z-[110] ${isNavbarVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0"
            }`}
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            transitionDelay:
              isNavbarVisible && isSecondaryVisible ? "100ms" : "0ms",
          }}
          aria-label="Main navigation"
        >
          <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2 sm:py-2 w-full">
              <div
                className="w-28 sm:w-36 md:w-40 h-6 sm:h-7 md:h-8 relative cursor-pointer transition-opacity duration-200 shrink-0"
                onClick={handleLogoClick}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === "Enter" && handleLogoClick()}
              >
                <Image
                  src="/Chaters_Union.avif"
                  alt="Charters Union of Business - Home"
                  fill
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 160px"
                  className="object-contain object-left"
                  quality={50}
                  priority
                />
              </div>

              <ul className="hidden lg:flex text-[14px] uppercase font-semibold justify-start text-[#000] items-center space-x-4 xl:space-x-6 2xl:space-x-8">
                <li className="relative">
                  <button
                    ref={academicsButtonRef}
                    className={`flex items-center justify-start gap-2 hover:underline decoration-black hover:text-[#B30437] transition-colors duration-300 cursor-pointer bg-transparent border-none ${isAcademicsActive ? "underline decoration-black" : ""}`}
                    aria-expanded={isAcademicsOpen}
                    aria-haspopup="true"
                    onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                  >
                    <span>ACADEMICS</span>

                    <Image src="/Charters-icon/Dropdown.svg"
                      alt="dropdown"
                      width={12}
                      height={12}
                      className={`w-2 h-2 lg:w-3 lg:h-3 transition-transform duration-200 ${isAcademicsOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </li>

                <li>
                  <Link
                    href="/faculties"
                    className={linkClass("/faculties")}
                  >
                    <span>FACULTY + RESEARCH</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/student-life"
                    className={linkClass("/student-life")}
                  >
                    <span>STUDENT LIFE</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className={linkClass("/careers")}
                  >
                    <span>PLACEMENTS++</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className={linkClass("/community")}
                  >
                    <span>COMMUNITY</span>
                  </Link>
                </li>
              </ul>

              {/* Mobile Apply Button and Menu */}
              <div className="lg:hidden flex items-center gap-2">
                <button
                  onClick={() => {
                    if (user) {
                      navigateToRemoteDashboard("/dashboard");
                    } else {
                      setShowInterviewAI(true);
                      document.body.style.overflow = 'hidden';
                    }
                  }}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-[#B30437] hover:bg-[#8B0329] rounded-md transition-colors"
                >
                  APPLY
                </button>
                <button
                  className="p-2 rounded-md hover:bg-gray-100/60 transition-colors duration-150 relative z-[9999]"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-expanded={isMobileMenuOpen}
                  aria-label="Toggle navigation menu"
                >
                  {isMobileMenuOpen ? (
                    <Image src="/Charters-icon/Cancel.svg"
                      alt="dropdown"
                      width={14}
                      height={14} className="w-4 h-4 text-[#5f6368]" />
                  ) : (
                    <Image src="/Charters-icon/manu.svg"
                      alt="dropdown"
                      width={14}
                      height={14}
                      className="w-5 h-5 text-[#5f6368]" />
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
          className={`lg:hidden fixed inset-0 z-[50] ${styles.navbarMobileTransition} ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          style={{ top: `${dropdownTop}px` }}
        >
          <div
            className="absolute inset-0 backdrop-blur-sm bg-white/95"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            className={`relative bg-white w-full min-h-screen ${styles.navbarMobileSlide} ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
              }`}
          >
            <nav className="px-4 sm:px-6 py-6" aria-label="Mobile navigation">
              <ul className="space-y-4">
                <li>
                  <button
                    ref={mobileAcademicsButtonRef}
                    className={`w-full flex items-center justify-between py-3 text-sm font-medium ${isAcademicsActive ? "underline" : "text-gray-900"} hover:text-[#B30437] transition-colors`}
                    aria-expanded={isAcademicsOpen}
                    aria-haspopup="true"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsAcademicsOpen(true);
                    }}
                  >
                    <span>ACADEMICS</span>
                    <Image src="/Charters-icon/Dropdown.svg"
                      alt="dropdown"
                      width={16}
                      height={16}
                      className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-200 ${isAcademicsOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </li>
                <li>
                  <Link
                    href="/faculties"
                    className={`block py-3 text-sm font-medium text-gray-900 hover:text-[#B30437] transition-colors ${isNavActive("/faculties") ? "underline" : ""}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    FACULTY + RESEARCH
                  </Link>
                </li>
                <li>
                  <Link
                    href="/student-life"
                    className={`block py-3 text-sm font-medium text-gray-900 hover:text-[#B30437] transition-colors ${isNavActive("/student-life") ? "underline" : ""}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    STUDENT LIFE
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className={`block py-3 text-sm font-medium text-gray-900 hover:text-[#B30437] transition-colors ${isNavActive("/careers") ? "underline" : ""}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    PLACEMENTS++
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className={`block py-3 text-sm font-medium text-gray-900 hover:text-[#B30437] transition-colors ${isNavActive("/community") ? "underline" : ""}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    COMMUNITY
                  </Link>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <ul className="space-y-3">
                  <li>
                    <Link
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
                    </Link>
                  </li>
                  <li>
                    <Link
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
                    </Link>
                  </li>
                  <li>
                    <Link
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
                    </Link>
                  </li>
                  <li>
                    <Link
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
                    </Link>
                  </li>
                  <li>
                    <Link
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
                    </Link>
                  </li>

                  {isMounted && user ? (
                    <>
                      <li>
                        <button
                          className="block w-full text-left py-2 text-xs text-gray-600 hover:text-[#B30437]"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            navigateToRemoteDashboard(dashboardUrl);
                          }}
                        >
                          {dashboardText}
                        </button>
                      </li>
                      {user.role !== "admin" && user.role !== "recruiter" && (
                        <li>
                          <button
                            className="block w-full text-left py-2 text-xs text-gray-600 hover:text-[#B30437]"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              navigateToRemoteDashboard('/profile');
                            }}
                          >
                            Profile
                          </button>
                        </li>
                      )}
                    </>
                  ) : (
                    <li>
                      <button
                        className={`block py-2 text-xs text-gray-600 hover:text-[#B30437] ${selectedSecondaryTab === "login"
                          ? "text-[#B30437] font-medium"
                          : ""
                          }`}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setShowInterviewAI(true);
                          document.body.style.overflow = 'hidden';
                        }}
                      >
                        Login
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {isMounted && showInterviewAI && createPortal(
        <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-[rgba(0,0,0,0.2)]">
          <ModalBackdrop onClick={() => {
            setShowInterviewAI(false);
            document.body.style.overflow = '';
          }} />
          <div className="w-[80%] max-w-[1200px] h-[80%] max-h-[900px] relative z-[99999]">
            <button
              onClick={() => {
                setShowInterviewAI(false);
                document.body.style.overflow = '';
              }}
              className="absolute cursor-pointer top-3 right-3 z-50 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all border border-gray-100"
            >
              <Image src="/Charters-icon/Cancel.svg" alt="Close" width={24} height={24} className="opacity-70 hover:opacity-100 transition-opacity" />
            </button>
            <div className="w-full h-full overflow-hidden rounded-xl shadow-2xl bg-white">
              <ChartersInterviewAi />
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}

export default memo(Navbar);