import Image from "next/image";

// DATA

const SECTION_HEADING = {
  title: "Career Launches for PGP TBM YLC",
  transitionsTitle: "Career Transitions For PGP TBM (Pre-MBA to Post-MBA)",
};

const ICON_BUILDING =
  "https://files.mastersunion.link/resources/svg/building.svg";

const YLC_LAUNCHES = [
  {
    category: "Career Advancement",
    items: [
      { from: "Delhi College of Arts and Commerce", to: "Associate, EY-P" },
      { from: "Hans Raj College", to: "Associate Program Manager, Zomato" },
      {
        from: "Narsee Monjee Institute Of Management Studies",
        to: "Deputy Manager, Founders' Office, Tata 1mg",
      },
      {
        from: "Savitribai Phule Pune University, Maharashtra",
        to: "Manager-EIR, Ozone",
      },
      {
        from: "Delhi College of Arts and Commerce",
        to: "Analytics- ADSK, Bloomberg",
      },
      {
        from: "Fr Conceicao Rodrigues Institute of Technology",
        to: "Project Manager (Intern), SuperK",
      },
    ],
  },
  {
    category: "Career Advancement",
    items: [
      { from: "Miranda House", to: "Assistant Program Manager, Zomato" },
      {
        from: "Guru Gobind Singh Indraprastha University",
        to: "Band Manager, Nivea",
      },
      {
        from: "Cluster Innovation Centre, Delhi University",
        to: "Founders' Office, Anveshan",
      },
      {
        from: "Miranda House",
        to: "Business Analyst Strategy Office, Lissun App",
      },
      { from: "Dr. A.P.J. Abdul Kalam University", to: "CoS, ConsultAdd" },
    ],
  },
];

const TBM_TRANSITIONS = [
  {
    category: "Industry Transition",
    items: [
      {
        from: "Business Development, Fortitude Marketing",
        to: "Sr. Consulting Associate, BCG",
      },
      {
        from: "Fresher, Kirori Mal College",
        to: "Sr. Consulting Associate, BCG",
      },
      { from: "Brand Marketing Assoc., Lbb", to: "VC Consultant, Antler" },
      { from: "Product Manager, Finoloy", to: "Founder's Office, Zerodha" },
      { from: "Analyst, Spinny", to: "Founder's Office, Zepto" },
      { from: "Senior Analyst, Schneider", to: "Consultant, Samagra" },
      {
        from: "Software Engineer, Hewlett Packard Ent.",
        to: "Management Trainee, Aditya Birla Capital",
      },
      { from: "Founder's Office, Piblitz", to: "Product Management, Zomato" },
      { from: "Scientist Engineer, ISRO", to: "Consultant, Avalon Consulting" },
      {
        from: "Founder, Buzzinga Eco Foods",
        to: "Product Design, Aditya Birla Capital",
      },
    ],
  },
  {
    category: "Career Advancement",
    items: [
      {
        from: "Senior Software Engineer, Honeywell",
        to: "Product Manager, CISCO",
      },
      {
        from: "Business Development Specialist, Mediu.net",
        to: "Strategic Partnerships Associate, CRED",
      },
      {
        from: "Project Associate, Env. Protection Society",
        to: "Data Research Analyst, Trilogy Inc.",
      },
      {
        from: "Analyst COE, Blackstone",
        to: "Senior VC Analyst, Stride Ventures",
      },
      {
        from: "Product Specialist, Sabre Travel",
        to: "Category Manager, Make My Trip",
      },
      { from: "Associate Consultant, ZS", to: "Consultant, BCG" },
      { from: "Associate, ZS", to: "Senior Manager, Cars 24" },
      {
        from: "Intern, Free Pads For India (NGO)",
        to: "Central Operations, Aditya Birla Capital",
      },
      {
        from: "Marketing Intern, eBay India",
        to: "Strategy Manager, HT Media",
      },
    ],
  },
];

export default function CareerTransitions() {
  return (
    <>
      {/* Career Launches for YLC */}
      <section
        id="transitions"
        aria-label="Transitions"
        className="w-full py-16"
      >
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-12">
            {SECTION_HEADING.title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2  divide-x divide-gray-300">
            {YLC_LAUNCHES.map((column, colIndex) => (
              <div key={colIndex} className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-3 pb-6 border-b border-gray-200 pl-2">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <Image
                      src={ICON_BUILDING}
                      alt="building"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {column.category}
                  </span>
                </div>

                {/* Items */}
                <div className="space-y-5 pt-2 px-5">
                  {column.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-4">
                      <div className="flex-1 text-sm text-gray-700">
                        {item.from}
                      </div>
                      <div className="flex-shrink-0 flex items-center w-20">
                        <div className="flex-1 border-t-2 border-dotted border-gray-300" />
                        <svg
                          className="w-4 h-4 text-gray-400 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 text-sm font-semibold text-gray-900">
                        {item.to}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Career Transitions for PGP TBM */}
      <section className="w-full py-16">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-2">
            Career Transitions For PGP TBM
          </h2>
          <p className="text-lg text-gray-700 mb-12">(Pre-MBA to Post-MBA)</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 divide-x divide-gray-300  ">
            {TBM_TRANSITIONS.map((column, colIndex) => (
              <div key={colIndex} className="space-y-6">
                {/*  Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-gray-300 pl-2">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                    <Image
                      src={ICON_BUILDING}
                      alt="building"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {column.category}
                  </span>
                </div>
                <div className="flex items-center gap-4 pb-3 px-5 ">
                  <div className="flex-1 text-sm font-semibold text-gray-600">
                    From
                  </div>
                  <div className="flex-shrink-0 w-20" />
                  <div className="flex-1 text-sm font-semibold text-gray-600">
                    To
                  </div>
                </div>

                {/* Items */}
                <div className="space-y-5 pt-2 px-5">
                  {column.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-4">
                      <div className="flex-1 text-sm text-gray-700">
                        {item.from}
                      </div>
                      <div className="flex-shrink-0 flex items-center w-20">
                        <div className="flex-1 border-t-2 border-dotted border-gray-300" />
                        <svg
                          className="w-4 h-4 text-gray-400 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 text-sm font-semibold text-gray-900">
                        {item.to}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
