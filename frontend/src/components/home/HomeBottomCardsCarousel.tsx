'use client';

import { useRef } from 'react';

type PartnershipCard = {
  id: number;
  title: string;
  description: string;
  logos: { name: string; src: string }[];
};

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
  const capabilityRef = useRef<HTMLDivElement>(null);

  const scrollCapability = () => {
    if (!capabilityRef.current) return;

    capabilityRef.current.scrollBy({
      left: 420,
      behavior: 'smooth',
    });
  };

  return (
    <section className="w-full py-12 border-t border-gray-200 bg-white">
      <div className="max-w-[85rem] w-full mx-auto">
        <div className="text-center mb-10 px-4">
          <p className="text-sm font-semibold text-[#B30437] tracking-wider mb-3">
            OUR CAPABILITIES
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-[35px] font-bold text-black">
            What makes us{' '}
            <span className="bg-green-200 px-2 italic">
              industry ready
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-3 border-t border-b border-gray-200">
            {partnershipCards.map((card, index) => (
              <article
                key={card.id}
className={`bg-[#F5F5F5] p-6 min-h-[220px] border-r border-gray-200 ${
        index === partnershipCards.length - 1 ? "border-r-0" : ""
      }`}              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>

                <p className="text-base text-gray-700 leading-relaxed mb-5">
                  {card.description}
                </p>

                <div className="border-t border-gray-200 pt-4 flex items-center gap-5 overflow-hidden">
                  {card.logos.map((logo) => (
                    <img
                      key={logo.name}
                      src={logo.src}
                      alt={logo.name}
                      className="h-6 w-auto object-contain"
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
    </section>
  );
}