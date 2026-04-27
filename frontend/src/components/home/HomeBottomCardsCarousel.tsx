'use client';

type PartnershipCard = {
  id: number;
  title: string;
  description: string;
  logos: { name: string; src: string }[];
};

type InsightCard = {
  id: number;
  title: string;
  author: string;
  readTime: string;
  href: string;
};

const insightCards: InsightCard[] = [
  {
    id: 1,
    title: 'AI Agent Frameworks: What It Is & How It Works',
    author: 'Agnish Rawat',
    readTime: '20 min read',
    href: '#',
  },
  {
    id: 2,
    title: 'Will AI Replace Software Engineers? Truth, Opinions and Career Impact',
    author: 'Team Scaler',
    readTime: '14 min read',
    href: '#',
  },
  {
    id: 3,
    title: 'SQL Roadmap 2026: Learning Paths, Career Roles and Tools',
    author: 'Tushar Bisht',
    readTime: '18 min read',
    href: '#',
  },
];

const partnershipCards: PartnershipCard[] = [
  {
    id: 1,
    title: 'Enterprise AI delivery',
    description:
      "We run custom AI training and capability programs for some of the world's largest engineering and product teams.",
    logos: [
      { name: 'Google', src: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/google.svg' },
      { name: 'Amazon', src: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/amazon.svg' },
      { name: 'Meta', src: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/meta.svg' },
      { name: 'Microsoft', src: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/microsoft.svg' },
    ],
  },
  {
    id: 2,
    title: 'Institutional partnerships',
    description:
      "We co-create programs with India's top institutions, blending academic rigor with AI-era industry relevance.",
    logos: [
      { name: 'NPTEL', src: 'https://upload.wikimedia.org/wikipedia/en/8/87/NPTEL_logo.png' },
      { name: 'IIT', src: 'https://upload.wikimedia.org/wikipedia/en/5/58/IIT_Kanpur_Logo.svg' },
      { name: 'IIM', src: 'https://upload.wikimedia.org/wikipedia/en/e/e8/IIM_Ahmedabad_Logo.svg' },
      { name: 'NPTEL', src: 'https://upload.wikimedia.org/wikipedia/en/8/87/NPTEL_logo.png' },
    ],
  },
  {
    id: 3,
    title: 'Government AI training',
    description:
      "We partnered with ADGM Academy to train citizens of Abu Dhabi in the future of AI, extending impact beyond India.",
    logos: [
      { name: 'Google', src: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/google.svg' },
      { name: 'Amazon', src: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/amazon.svg' },
      { name: 'Meta', src: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/meta.svg' },
      { name: 'Microsoft', src: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/microsoft.svg' },
    ],
  },
];

export default function HomeBottomCardsCarousel() {
  return (
    <section className="w-full py-8 sm:py-10 border-t border-gray-200 bg-white">
      <div className="max-w-[85rem] w-full md:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory custom-x-scrollbar" style={{ touchAction: 'pan-x pan-y' }}>
            {insightCards.map((card) => (
              <a
                key={card.id}
                href={card.href}
                className="snap-start shrink-0 w-[88%] sm:w-[62%] lg:w-[32%] bg-white border border-gray-200 rounded-sm shadow-sm p-5"
              >
                <h3 className="text-2xl font-semibold text-gray-900 leading-snug mb-4 line-clamp-3">
                  {card.title}
                </h3>
                <div className="h-px w-full bg-gray-200 mb-4" />
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{card.author}</span>
                  <span>{card.readTime}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div
          className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory custom-x-scrollbar"
          style={{ touchAction: 'pan-x pan-y' }}
        >
          {partnershipCards.map((card) => (
            <article
              key={card.id}
              className="snap-start shrink-0 w-[88%] sm:w-[62%] lg:w-[32%] bg-[#F5F5F5] border border-gray-200 rounded-sm shadow-sm p-5"
            >
              <h3 className="leading-snug text-xl font-semibold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">{card.description}</p>

              <div className="overflow-hidden border-t border-gray-200 pt-3">
                <div className="flex w-max marquee-track">
                  {[...card.logos, ...card.logos].map((logo, index) => (
                    <div key={`${card.id}-${logo.name}-${index}`} className="mr-6 shrink-0">
                      <img
                        src={logo.src}
                        alt={logo.name}
                        loading="lazy"
                        className="h-6 w-auto object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                          if (fallback) fallback.style.display = 'inline-flex';
                        }}
                      />
                      <span className="hidden items-center rounded-full border border-gray-300 px-2 py-0.5 text-xs font-semibold text-gray-700">
                        {logo.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
