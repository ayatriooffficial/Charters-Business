'use client';



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
      {
        name: 'Reliance',
        src: '/logos/student-at-reliance.avif',
      },
      {
        name: 'TCS',
        src: '/logos/student-at-tcs.avif',
      },
      {
        name: 'Aditya Birla',
        src: '/logos/student-at-aditya-birla.avif'
      },
      {
        name: 'Genpact',
        src: '/logos/student-at-genpact.avif',
      },
    ],
  },
  {
    id: 2,
    title: 'Institutional partnerships',
    description:
      "We co-create programs with India's top institutions, blending academic rigor with AI-era industry relevance.",
    logos: [
      {
        name: 'NPTEL',
        src: '/images/brands/nptel.avif',
      },
      {
        name: 'IMA',
        src: '/images/brands/ima.avif'
      },
      {
        name: 'GNAM',
        src: '/images/brands/GNAM-stack.avif'
      },
    ],
  },
  {
    id: 3,
    title: 'Government AI training',
    description:
      "We partnered with ADGM Academy to train citizens of Abu Dhabi in the future of AI, extending impact beyond India.",
    logos: [],
  },
];

export default function HomeBottomCardsCarousel() {
  return (
    <section className="w-full pt-[70px] bg-white">
      <div className="max-w-[85rem] w-full mx-auto">


        <div className="flex overflow-x-auto scrollbar-none md:grid md:grid-cols-3 border-t border-b border-gray-200">
          {partnershipCards.map((card, index) => (
            <article
              key={card.id}
              className={`flex-shrink-0 w-[85vw] md:w-auto bg-white p-6 min-h-[200px] border-r border-gray-200 ${index === partnershipCards.length - 1 ? "border-r-0" : ""
                }`}              >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>

              <p className="text-[14px] text-[#5f6368] leading-relaxed mb-5">
                {card.description}
              </p>

              <div className="overflow-hidden">
                <div className="flex w-max animate-logo-scroll gap-6">
                  {[...card.logos, ...card.logos].map((logo, index) => (
                    <div
                      key={`${card.id}-${logo.name}-${index}`}
                      className="px-2 flex items-center justify-center min-w-[80px] h-[40px]"      >
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {/* animation moved to globals.css as .animate-logo-scroll */}
    </section>

  );
}