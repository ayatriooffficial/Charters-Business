  'use client';
  
  import { useCallback, useEffect, useRef, useState } from 'react';
  import Image from 'next/image';
  import Link from 'next/link';
  import { ArrowRight } from 'lucide-react';
  
  interface CommunityCard {
    id: number;
    image: string;
    alt: string;
    title: string;
    description: string;
    members: string;
    location: string;
  }
  
  const COMMUNITY_CARDS: CommunityCard[] = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Community group photo with people raising hands',
      title: 'Community Celebration',
      description: 'Annual gathering of 1000   ambitious learners',
      members: '250   attendees',
      location: 'Global Campus',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Team collaboration meeting',
      title: 'Collaboration Sessions',
      description: 'Weekly team building and project work',
      members: '15-20 per group',
      location: 'Study Halls',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Conference presentation',
      title: 'Industry Talks',
      description: 'Expert sessions with business leaders',
      members: '100   participants',
      location: 'Main Auditorium',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Workshop session',
      title: 'Skill Workshops',
      description: 'Hands-on learning experiences',
      members: '25-30 learners',
      location: 'Workshop Labs',
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Team building activity',
      title: 'Team Building',
      description: 'Fun activities to strengthen bonds',
      members: '50   participants',
      location: 'Outdoor Campus',
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Networking event',
      title: 'Networking Mixer',
      description: 'Connect with peers and mentors',
      members: '80   professionals',
      location: 'Community Lounge',
    },
  ];
  
  const TOTAL = COMMUNITY_CARDS.length;
  
  export default function CommunitySection() {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const cachedHeightRef = useRef(0);
    const [currentCard, setCurrentCard] = useState(0);
  
    useEffect(() => {
      const node = scrollerRef.current;
      if (!node) return;
  
      cachedHeightRef.current = node.offsetHeight;
  
      const observer = new ResizeObserver(([entry]) => {
        cachedHeightRef.current = entry.contentRect.height;
      });
  
      observer.observe(node);
  
      return () => observer.disconnect();
    }, []);
  
    const handleScroll = useCallback(() => {
      const node = scrollerRef.current;
      if (!node) return;
  
      const rect = node.getBoundingClientRect();
      const elementHeight = cachedHeightRef.current;
      const windowHeight = window.innerHeight;
      const scrollTop = -rect.top;
      const maxScroll = Math.max(elementHeight - windowHeight, 1);
      const progress = Math.max(0, Math.min(1, scrollTop / maxScroll));
      const scrollZoneSize = 1 / (TOTAL - 1);
  
      const newIndex =
        progress >= 1
          ? TOTAL - 1
          : Math.min(Math.floor(progress / scrollZoneSize), TOTAL - 1);
  
      setCurrentCard((prev) => (prev !== newIndex ? newIndex : prev));
    }, []);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);
  
    useEffect(() => {
      const interval = window.setInterval(() => {
        setCurrentCard((prev) => (prev + 1) % TOTAL);
      }, 5000);
  
      return () => window.clearInterval(interval);
    }, []);
  
    const card = COMMUNITY_CARDS[currentCard];
  
    return (
      <>
        <div
          ref={scrollerRef}
          className="relative w-full"
          style={{ height: `${TOTAL * 100}vh` }}
        >
          <div className="sticky top-[var(--navbar-height,86px)] h-[calc(100vh-var(--navbar-height,86px))] overflow-hidden">
            <div className="relative mx-2 flex h-full items-start py-4 sm:mx-4 sm:items-center sm:py-8 lg:py-16">
              <section
                className="w-full bg-white px-4 py-4 sm:px-6 sm:py-6 lg:px-12 lg:py-8 xl:px-16"
                aria-labelledby="community-heading"
              >
                <div className="mx-auto max-w-7xl">
                  <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-4 sm:space-y-6 md:space-y-8">
                      <header>
                        <p className="mb-2 text-xs font-semibold tracking-wider text-[#B30437] sm:mb-3 sm:text-sm">
                          MASTER UNION COMMUNITY
                        </p>
                        <h2
                          id="community-heading"
                          className="mb-4 text-2xl font-light leading-tight text-black sm:mb-6 sm:text-3xl md:mb-8 md:text-4xl lg:text-5xl xl:text-6xl"
                        >
                          A ready-made
                          <br />
                          <span className="font-serif italic text-[#B30437]">
                            community
                          </span>{' '}
                          for life.
                        </h2>
                        <p className="mb-6 max-w-3xl text-base leading-relaxed text-black sm:mb-8 sm:text-lg md:mb-10 md:text-xl lg:text-2xl">
                          We&apos;re a 1000   bunch of ambitious go-getters from
                          all walks of life. Here&apos;s a slice of what it&apos;s
                          like within.
                        </p>
                      </header>
  
                      <nav
                        aria-label="Community links"
                        className="space-y-3 sm:space-y-4"
                      >
                        <a
                          href="https://instagram.com/masterunion"
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-center gap-2 font-medium text-[#B30437] transition-colors hover:text-black sm:gap-3"
                        >
                          <span className="text-sm uppercase tracking-wide sm:text-base md:text-lg">
                            @MASTERUNION ON INSTAGRAM
                          </span>
                          <ArrowRight
                            className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
                            aria-hidden="true"
                          />
                        </a>
  
                        <Link
                          href="/community"
                          className="group flex items-center gap-2 font-medium text-[#B30437] transition-colors hover:text-black sm:gap-3"
                        >
                          <span className="text-sm uppercase tracking-wide sm:text-base md:text-lg">
                            COMMUNITY DIGEST
                          </span>
                          <ArrowRight
                            className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
                            aria-hidden="true"
                          />
                        </Link>
  
                        <Link
                          href="/apply"
                          className="group flex items-center gap-2 font-medium text-[#B30437] transition-colors hover:text-black sm:gap-3"
                        >
                          <span className="text-sm uppercase tracking-wide sm:text-base md:text-lg">
                            JOIN THE PROGRAM
                          </span>
                          <ArrowRight
                            className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
                            aria-hidden="true"
                          />
                        </Link>
                      </nav>
                    </div>
  
                    <div className="relative">
                      <div className="relative h-[280px] w-full overflow-hidden rounded-xl sm:h-[350px] md:h-[400px] lg:h-[480px] xl:h-[550px]">
                        <Image
                          src={card.image}
                          alt={card.alt}
                          fill
                          priority={currentCard === 0}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-center transition-opacity duration-500"
                        />
  
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                          aria-hidden="true"
                        />
  
                        <div className="absolute bottom-4 left-4 right-4 text-white sm:bottom-6 sm:left-6 sm:right-6">
                          <div className="mb-1 flex items-center gap-2 sm:mb-2">
                            <div
                              className="h-2 w-2 rounded-full bg-[#B30437]"
                              aria-hidden="true"
                            />
                            <span className="text-[10px] font-medium uppercase tracking-wide sm:text-xs">
                              {card.location}
                            </span>
                          </div>
                          <h3 className="mb-1 text-base font-bold sm:mb-2 sm:text-lg md:text-xl lg:text-2xl">
                            {card.title}
                          </h3>
                          <p className="mb-2 text-xs text-gray-200 sm:mb-3 sm:text-sm md:text-base">
                            {card.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-300 sm:text-sm">
                              {card.members}
                            </span>
  
                            <div
                              className="flex items-center gap-1"
                              role="tablist"
                              aria-label="Community photos"
                            >
                              {COMMUNITY_CARDS.map((item, index) => (
                                <button
                                  key={item.id}
                                  type="button"
                                  role="tab"
                                  aria-selected={index === currentCard}
                                  aria-label={`View ${item.title}`}
                                  onClick={() => setCurrentCard(index)}
                                  className={`h-2 w-2 rounded-full transition-colors ${
                                    index === currentCard
                                      ? 'bg-[#B30437]'
                                      : 'bg-white/40'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
  
        <div className="relative mx-2 mb-4 mt-6 sm:mx-4 sm:mb-6 sm:mt-10 md:mb-10 md:mt-16">
          <section
            className="rounded-xl bg-[#B30437] px-4 py-6 text-center sm:px-6 sm:py-8 md:py-10 lg:px-12 lg:py-12 xl:px-16"
            aria-labelledby="cta-heading"
          >
            <div className="mx-auto max-w-4xl">
              <h3
                id="cta-heading"
                className="mb-3 text-xl font-light leading-tight text-white sm:mb-4 sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl xl:text-5xl"
              >
                Love what you see?
                <br />
                Join the program to be a part of it!
              </h3>
  
              <p className="mx-auto mb-4 max-w-2xl text-sm text-white/90 sm:mb-6 sm:text-base md:mb-8 md:text-lg">
                Become part of our thriving community of entrepreneurs,
                innovators, and changemakers who are building the future
                together.
              </p>
  
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/programs"
                  className="group inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 font-semibold text-[#B30437] transition-colors hover:bg-gray-100 sm:gap-3 sm:px-8 sm:py-4"
                >
                  <span className="text-sm uppercase tracking-wide sm:text-base">
                    ABOUT THE PROGRAM
                  </span>
                  <ArrowRight
                    className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
                    aria-hidden="true"
                  />
                </Link>
  
                <Link
                  href="/apply"
                  className="group inline-flex items-center gap-2 rounded-sm border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[#B30437] sm:gap-3 sm:px-8 sm:py-4"
                >
                  <span className="text-sm uppercase tracking-wide sm:text-base">
                    APPLY NOW
                  </span>
                  <ArrowRight
                    className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
