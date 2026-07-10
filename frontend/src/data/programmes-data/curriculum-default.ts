import type { CurriculumSectionData } from "./types";

// Extracted verbatim from the previous hardcoded CurriculumSection.tsx.
// Each programme gets its own deep copy (see cba.ts / dgm.ts / tbm.ts) so
// editing one course's curriculum never affects another.
export const defaultCurriculumSection: CurriculumSectionData = {
  eyebrow: "WORLD-CLASS EDUCATION",
  titleHighlight: "AI-Ready:",
  titleRest: "Hands-on Learning",
  subtitle:
    "We trained to contribute in real business environments—earning recognition from managers, team leaders, and directors through practical performance, professional behavior, and measurable workplace",
  items: [
    {
      id: "dubai",
      term: "TERM 1",
      title: "Dubai",
      badges: [
        {
          text: "Tetr Base Camp",
          className:
            "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold",
        },
      ],
      project: {
        description:
          "Build an eCommerce 'dropshipping' business selling globally sourced products to audiences in the Middle East. Target a revenue of $10,000.",
      },
      courses: {
        initial: [
          { code: "MAST 101", title: "How to work effectively in teams" },
          { code: "MAST 201", title: "How to build a global supply chain" },
          { code: "MAST 301", title: "How to write a comprehensive business plan" },
          { code: "MAST 401", title: "How to create a winning fundraising Deck" },
          { code: "MAST 501", title: "How to network effortlessly" },
        ],
        more: [
          { code: "SAMA 101", title: "How to advertise without spending money" },
          {
            code: "SAMA 201",
            title: "How to run digital ads on TikTok, Meta, & Google",
          },
          {
            code: "SAMA 301",
            title:
              "How to leverage marketplaces like Amazon to sell your products",
          },
          { code: "SAMA 401", title: "How to execute CRO and increase AOV" },
          {
            code: "FIFI 101",
            title: "How to understand basic financial terminology",
          },
          {
            code: "FIFI 102",
            title: "How to read and analyse financial statements",
          },
          { code: "PRTC 101", title: "How to use stats to build a better business" },
          { code: "PRTC 201", title: "How to get comfortable with excel" },
          {
            code: "PRTC 301",
            title: "How to smartly leverage tech to grow your business",
          },
          { code: "PRTC 401", title: "How to set up an e-commerce website" },
          {
            code: "AIML 101",
            title: "How to master prompt engineering to leverage generative AI",
          },
          { code: "COMM 101", title: "How to give an inspiring speech" },
          { code: "COMM 201", title: "How to write persuasively" },
          {
            code: "FIFI 201",
            title: "How to read and analyse financial statements",
          },
        ],
      },
      business: [
        {
          title:
            "Discuss sustainable solutions, renewable energy, green technology with world leaders, businesses, and investors.",
          subtitle: "The World Green Economy Summit",
        },
        {
          title:
            "Delve into the private luxury aviation market and understand the ins and outs of a $100B exclusive industry.",
          subtitle: "Middle East Business Aviation Summit",
        },
        {
          title:
            "Explore the niche laboratory and instrumentation industry and see how high-tech industries work.",
          subtitle: "ArabLAB Expo",
        },
        {
          title:
            "Get a taste of the global sweet, confectionery, bakery, and snack food industry.",
          subtitle: "Yummex Food Exhibition, Middle East",
        },
        {
          title:
            "Visit YallaMarket, which is redefining the grocery shopping experience, & Huspy, which is transforming the real estate landscape.",
        },
        {
          title:
            "Learn about the Emirates airline's operations, logistics, and customer service strategies.",
          subtitle: "Emirates Airline Headquarters",
        },
      ],
      cultural: [
        {
          title:
            "Take a thrilling desert safari through the Dubai Desert & live the traditional Arabic life.",
          subtitle: "Dubai Inner Desert",
        },
        {
          title:
            "Cruise in a traditional wooden boat and witness the historical landmarks.",
          subtitle: "Dhow Cruise",
        },
        {
          title:
            "Soak in the history of Dubai from its beginnings as a fishing village to its modern metropolis.",
          subtitle: "Dubai Museum, Al Fahidi Fort",
        },
        {
          title:
            "Bargain for gold jewelry, learn about goldsmithing at the largest gold market in the world.",
          subtitle: "Dubai Gold Souk",
        },
        {
          title:
            "Get the inside hook on how the world's tallest building was planned, & constructed.",
          subtitle: "Burj Khalifa",
        },
      ],
      culturalVariant: "orange",
    },
    {
      id: "india",
      term: "TERM 2",
      title: "India",
      badges: [
        {
          text: "Tetr Base Camp",
          className:
            "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold",
        },
        {
          text: "FITT-IIT",
          className:
            "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold ml-2",
        },
      ],
      project: {
        description:
          "Launch a Consumer brand in food, clothing, or accessories catering to the suburban audiences in India. Target 5 SKUs, $25,000 in revenue & a margin of 30%.",
      },
      courses: {
        initial: [
          {
            code: "MAST 102",
            title: "How to analyse markets & identify new business opportunities",
          },
          { code: "MAST 202", title: "How to identify & track key business metrics" },
          { code: "MAST 302", title: "How to manage & optimise inventory" },
          { code: "MAST 402", title: "How to motivate your teams & give feedback" },
          {
            code: "SAMA 102",
            title:
              "How to position your brand using consumer psychology & behavior",
          },
        ],
        more: [
          {
            code: "SAMA 202",
            title: "How to build a brand story (Voice, tone, identity)",
          },
          { code: "SAMA 302", title: "How to develop a GTM strategy" },
          { code: "SAMA 402", title: "How to price your products strategically" },
          { code: "FIFI 201", title: "How to allocate budgets and control costs" },
          { code: "FIFI 202", title: "How to understand taxes and compliances" },
          { code: "PRTC 102", title: "How to read and write code" },
          { code: "PRTC 202", title: "How to build dashboards & use advanced Excel" },
          { code: "PRTC 302", title: "How to develop a product mindset" },
          {
            code: "AIML 102",
            title: "How to leverage AI to automate content creation",
          },
          { code: "COMM 102", title: "How to use mental models to solve problems" },
          { code: "COMM 202", title: "How to manage personal finances" },
        ],
      },
      collaboration: [
        { title: "Data-driven decision making" },
        { title: "Genetic engineering" },
      ],
      business: [
        {
          title: "See what makes Indian Unicorns truly special.",
          subtitle: "StartUp Grind New Delhi",
        },
        {
          title:
            "See how street vendors of India make more money than Silicon Valley startUps.",
          subtitle: "Gurgaon's Banjara Market",
        },
        {
          title:
            "Explore fashion & business at one of the largest leather fairs in Asia.",
          subtitle: "The Indian Leather Fair (May)",
        },
        {
          title:
            "Discover global F&B trends at India's largest food ingredients & flavoring fairs.",
          subtitle: "The Flagship AAHAR 204",
        },
        {
          title:
            "Visit Zomato, which is redefining the Food Delivery market, & PayTM, which is bringing electronic banking to 1B+ Indians",
        },
        {
          title:
            "Get up close with the management and see how the largest Indian conglomerates actually work.",
          subtitle: "Reliance & Tata HQs.",
        },
      ],
      cultural: [
        {
          title:
            "Witness the spectacular military parade and cultural pageantry on India's Republic Day.",
          subtitle: "Republic Day Parade (New Delhi, Jan 26)",
        },
        {
          title:
            "Immerse in the vibrant Holi festivities, a celebration of spring with colorful powders, music, and dance.",
          subtitle: "Holi Festival of Colors (Pan-India)",
        },
        {
          title: "Travel through India's villages to uncover grassroot innovations.",
          subtitle: "'Shodh Yatra'",
        },
        {
          title:
            "Witness the majestic elephants participating in processions at this unique festival.",
          subtitle: "Elephant Festival, Jaipur",
        },
        {
          title:
            "Visit the landmark literature festival featuring talks, and readings by global authors.",
          subtitle: "Jaipur Literature Festival",
        },
      ],
    },
    {
      id: "singapore",
      term: "TERM 3",
      title: "Singapore & Malaysia",
      badges: [
        {
          text: "Tetr Base Camp",
          className:
            "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold",
        },
      ],
      project: {
        description:
          "Start a Kickstarter campaign to sell a hardware product that you've designed to solve a critical problem identified using design thinking. Target to raise a minimum of $20,000 from a minimum of 100 backers.",
      },
      courses: {
        initial: [
          {
            code: "PRTC 203",
            title:
              "How to use design thinking to build effective products & solutions",
          },
          { code: "AIML 103", title: "How LLMs & AI actually work" },
          {
            code: "FIFI 203",
            title: "How to innovate on monetisation techniques",
          },
          { code: "SAMA 303", title: "How to build a personal brand" },
          { code: "COMM 103", title: "How to find your voice" },
        ],
        more: [
          {
            code: "FIFI 303",
            title: "How to leverage DeFi and Crypto in Business",
          },
          {
            code: "SAMA 103",
            title: "How to nail content marketing to grow your business",
          },
          { code: "PRTC 103", title: "How to read and write code (Part 2)" },
          {
            code: "SAMA 203",
            title:
              "How to script, record & release content for Youtube & Instagram",
          },
          { code: "SAMA 403", title: "How to decode social media algorithms" },
          { code: "MAST 103", title: "How the (micro) economy works" },
          { code: "COMM 203", title: "How to be productive & get things done" },
          { code: "FIFI 103", title: "How to navigate corporate finance" },
          { code: "MAST 303", title: "How to think strategically about your business" },
          { code: "MAST 203", title: "How to identify and forecast macro trends" },
        ],
      },
      moreCoursesGray: true,
      collaboration: [{ title: "Angel investing & alternate investments" }],
      business: [
        {
          title: "See how innovation meets inspiration in Singapore.",
          subtitle: "Singapore MetaExpo 2025.",
        },
        {
          title:
            "Visit the world's leading Fintech company and step into the future of Finance.",
          subtitle: "Paypal Innovation Lab.",
        },
        {
          title: "Unravel Financial Insights at IRAS Singapore.",
          subtitle: "Inland Revenue Authority of Singapore.",
        },
        {
          title:
            "Discover Vertical Farming where Innovation meets Sustainability and experience the future of food.",
          subtitle: "Sky Greens Farm Tour.",
        },
        {
          title: "Explore tomorrow's technology where ideas become reality.",
          subtitle: "Microsoft Technology Centre.",
        },
      ],
      cultural: [
        {
          title: "Witness grand parades on Singapore National Day.",
          subtitle: "Singapore National Day (August 9)",
        },
        {
          title: "Immerse yourself in the history and heritage of Singapore.",
          subtitle: "Singapore National Museum.",
        },
        {
          title: "Discover Asia's cultural mosaic at the",
          subtitle: "Asian Civilisations Museum.",
        },
        {
          title:
            "Visit Singapore's cultural heartbeat where tradition meets modernity.",
          subtitle: "Chinatown Singapore.",
        },
        {
          title: "Discover Singapore's military legacy.",
          subtitle: "Fort Siloso",
        },
      ],
    },
    {
      id: "ghana",
      term: "TERM 4",
      title: "Ghana",
      badges: [
        {
          text: "Tetr Base Camp",
          className:
            "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold",
        },
      ],
      project: {
        description:
          "Pilot an NGO focused on addressing a local cause in Ghana, emphasising community engagement, and positive impact. Target to touch at least 200 local lives through partnerships, & fundraising.",
      },
      courses: {
        initial: [
          { code: "MAST 104", title: "How a country's economy works" },
          {
            code: "MAST 204",
            title:
              "How to bring innovation to public policies (Global Case Studies)",
          },
          { code: "MAST 304", title: "How to manage social ventures" },
          {
            code: "MAST 404",
            title:
              "How to build solutions for Global Problems (Large Systems Thinking)",
          },
          { code: "SAMA 104", title: "How to fundraise capital for social projects" },
        ],
        more: [
          {
            code: "SAMA 204",
            title: "How to position & market your non-profit brand",
          },
          {
            code: "SAMA 304",
            title: "How to market & sell to the bottom of the pyramid",
          },
          { code: "SAMA 404", title: "How to follow up & close deals" },
          {
            code: "FIFI 104",
            title: "How to invest in capital markets & build a portfolio",
          },
          { code: "FIFI 204", title: "How to build Financial Models" },
          {
            code: "PRTC 104",
            title: "How to design surveys to conduct primary research",
          },
          {
            code: "PRTC 304",
            title:
              "How to leverage Machine Learning to build business solutions",
          },
          {
            code: "PRTC 304",
            title:
              "How to leverage gamification and behavioural design to build successful products",
          },
          { code: "AIML 104", title: "How to build AI Powered Products" },
          { code: "COMM 104", title: "How to craft a compelling personal portfolio" },
          { code: "COMM 204", title: "How to master power writing & deep reading" },
        ],
      },
      moreCoursesGray: true,
      business: [
        {
          title: "Understand how trade in Africa unfolds at a world record pace!",
          subtitle: "Ghana International Trade Fair",
        },
        {
          title:
            "Witness Africa's cutting edge agricultural technology and unique innovations.",
          subtitle: "AgriTech Ghana",
        },
        {
          title:
            "Meet early stage startups at MEST Accra, Meltwater Incubator & BlueSpace Ghana, pan-African incubators supporting tech startups",
        },
        {
          title: "Learn how Ghana's cocoa & cashews industry is thriving.",
          subtitle: "Nestle HQs, Accra",
        },
        {
          title: "Meet global investors bullish on Africa.",
          subtitle: "Ghana Investment Forum",
        },
      ],
      businessNote: "Summer: Teaching Fellowship or Internship",
      cultural: [
        {
          title: "Explore Ghana's vibrant second hand market.",
          subtitle: "Kantamanto Market, Accra",
        },
        {
          title: "Walk the British colonial history of Ghana on an Independence Tour.",
          subtitle: "Accra, Ghana",
        },
        {
          title:
            "See how small businesses become energy self-sufficient using BioGas plants.",
          subtitle: "Kumasi, Ghana",
        },
      ],
    },
    {
      id: "usa",
      term: "TERM 5",
      title: "United States",
      badges: [
        {
          text: "Tetr Base Camp",
          className:
            "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold",
        },
        {
          text: "Cornell University",
          className:
            "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold ml-2",
        },
      ],
      project: {
        description:
          "Build SaaS tools, marketplaces, and AI solutions while studying at Cornell University and experiencing Silicon Valley innovation.",
      },
      courses: {
        initial: [
          { code: "MAST 105", title: "How to never lose a customer" },
          {
            code: "MAST 205",
            title: "How to use Game Theory for business and life",
          },
          {
            code: "MAST 305",
            title: "How to use KPIs & KRAs to improve org. alignment",
          },
          {
            code: "SAMA 105",
            title: "How to use marketing analytics to optimise conversion",
          },
          { code: "SAMA 205", title: "How to leverage design to inspire trust" },
        ],
        more: [
          { code: "SAMA 305", title: "How to craft a winning sales pitch" },
          { code: "SAMA 405", title: "How to use & manage CRM tools" },
          { code: "FIFI 105", title: "How M&A works" },
          { code: "FIFI 205", title: "How to value business" },
          { code: "FIFI 305", title: "How to raise debt & equity capital" },
          { code: "PRTC 105", title: "How to build an app using No-Code" },
          { code: "PRTC 205", title: "How to manage developers effectively" },
          { code: "PRTC 305", title: "How to design UI/UX using Figma" },
          { code: "PRTC 405", title: "How to build habit-forming products" },
          { code: "AIML105", title: "How to use big data to drive decision making" },
          { code: "COMM 105", title: "How to master the craft of storytelling" },
          {
            code: "COMM 205",
            title: "How to run effective meetings & motivate teams",
          },
          {
            code: "MAST 405",
            title: "How to understand current trends in retail market",
          },
        ],
      },
      moreCoursesGray: true,
      collaboration: [
        { title: "AI driven entrepreneurship" },
        { title: "Healthcare management" },
      ],
      business: [
        {
          title: "Get a glimpse into new research and products at Google's HQ.",
          subtitle: "Googleplex",
        },
        {
          title: "See how animated blockbusters come to life at VFX studio Pixar.",
          subtitle: "Pixar HQs",
        },
        {
          title:
            "Get the BTS on Silicon Valley's top incubator behind Airbnb & Dropbox.",
          subtitle: "Y Combinator's Demo Day",
        },
        {
          title: "Get an immersive insight into cutting-edge space technology.",
          subtitle: "Space X HQs",
        },
        {
          title: "Delve into hackers' minds at the world's top hackers' conference.",
          subtitle: "Black Hat USA",
        },
        {
          title:
            "Dive into the latest in the world of Robots, AI, Metaverse, & Green tech.",
          subtitle: "Consumer Electronics Show, Vegas",
        },
      ],
      cultural: [
        { title: "Witness a live IPO at the", subtitle: "NASDAQ, New York" },
        {
          title: "Experience the historic American power centers.",
          subtitle: "Pentagon, & Capitol",
        },
        {
          title: "Experience the intersection of art and technology.",
          subtitle: "Berkeley Art Museum",
        },
        {
          title:
            "Traverse the American colonial & civil war history across the eat coast.",
          subtitle: "Various Cities (east coast)",
        },
        {
          title: "Volunteer at the world's largest music stage.",
          subtitle: "Ultra Music Festival",
        },
      ],
    },
    {
      id: "argentina",
      term: "TERM 6",
      title: "Argentina",
      badges: [
        {
          text: "Tetr Base Camp",
          className:
            "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold",
        },
      ],
      highlight: "Summer Break: Internship",
      project: {
        description:
          "Launch a green initiatives to further sustainable practices or products within the realm of renewables, electric vehicles, carbon credits, or wildlife conservation. Target to offset at least 1000 Kgs of CO2.",
      },
      courses: {
        initial: [
          { code: "MAST 106", title: "How the carbon credits economy works" },
          {
            code: "MAST 206",
            title: "How to conduct Environmental Impact Assessments",
          },
          {
            code: "MAST 306",
            title:
              "How to build a Sustainability First Culture in your company",
          },
          { code: "MAST 406", title: "How the renewable energy market works" },
          { code: "SAMA 106", title: "How to measure brand asset value" },
        ],
        more: [
          {
            code: "SAMA 206",
            title: "How to negotiate deals that create a win-win",
          },
          { code: "SAMA 306", title: "How to do community-driven marketing" },
          { code: "SAMA 406", title: "How to do B2B marketing?" },
          { code: "FIFI 106", title: "How do PE and VC firms work" },
          { code: "FIFI 206", title: "How IPOs work" },
          { code: "FIFI 306", title: "How to understand the Triple Bottom Line" },
          { code: "PRTC 106", title: "How to use Power BI to visualize data" },
          { code: "AIML 106", title: "How to deploy AI in agritech" },
          { code: "COMM106", title: "How to write emails that get responses" },
          { code: "COMM206", title: "How to hack your hormones" },
        ],
      },
      moreCoursesGray: true,
      business: [
        {
          title: "Learn how agribusiness is driving innovation at",
          subtitle: "Los Grobo Group's headquarters",
        },
        {
          title: "Understand Argentina's renewable energy transition at",
          subtitle: "YPF Luz",
        },
        {
          title: "Explore the entrepreneurial ecosystem of",
          subtitle: "Buenos Aires' Distrito Arcos and Palermo Soho.",
        },
      ],
      cultural: [
        {
          title: "Experience the traditions of the",
          subtitle: "Pampas region, Argentina's agricultural heartland.",
        },
        {
          title: "Immerse yourself in the passion of Argentine football at",
          subtitle: "La Bombonera Stadium.",
        },
        {
          title: "Discover the artistic and cultural vibrancy of",
          subtitle: "San Telmo and La Boca.",
        },
      ],
    },
    {
      id: "europe",
      term: "TERM 7",
      title: "Europe",
      badges: [
        {
          text: "Tetr Base Camp",
          className:
            "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold",
        },
        {
          text: "INSEAD",
          className:
            "bg-[#B30437] text-white text-xs px-2 py-1 rounded font-semibold ml-2",
        },
      ],
      project: {
        description:
          "Build a YouTube channel in a niche of your choice, create a loyal community, build creator partnerships and strike brand deals. Target at least 50 content pieces, 20,000 subscribers, & 2 brand deals.",
      },
      courses: {
        initial: [
          {
            code: "MAST 107",
            title: "How to protect your ideas using Intellectual Property Law",
          },
          {
            code: "MAST 207",
            title: "How to use mathematical models for business optimisation",
          },
          { code: "MAST 307", title: "How to build a business in manufacturing" },
          { code: "MAST 407", title: "How to manage a crisis" },
          {
            code: "SAMA 107",
            title: "How to craft compelling copy to maximise sales",
          },
        ],
        more: [
          {
            code: "SAMA 207",
            title: 'How to spark a product-led growth using "Nudge" theory',
          },
          { code: "SAMA 307", title: "How to motivate & incentivize sales teams" },
          { code: "FIFI 107", title: "How to manage risk and optimise returns" },
          { code: "FIFI 207", title: "How does the global banking system work" },
          { code: "FIFI 307", title: "How to leverage DeFi and Crypto in Business" },
          { code: "PRTC 107", title: "How to build hardware prototypes" },
          { code: "PRTC 207", title: "How to leverage neuroscience in business" },
          { code: "AIML107", title: "How LLMs & AI actually work" },
          { code: "COMM 107", title: "How to influence people without authority" },
          { code: "COMM207", title: "How to be productive & get things done" },
          { code: "PRTC 307", title: "How to use product analytics for deeper insights" },
        ],
      },
      moreCoursesGray: true,
      collaboration: [
        { title: "International trade & business" },
        { title: "Business of chemicals & bio-technology" },
      ],
      collaborationTextBlack: true,
      business: [
        {
          title:
            "Learn how Spain is innovating in renewable energy and sustainability at a global leader in clean power.",
          subtitle: "Iberdrola Headquarters, Madrid",
        },
        {
          title:
            "Immerse yourself in entrepreneurial creativity and emerging startups at Madrid's leading innovation hub.",
          subtitle: "La Nave Innovation Hub, Madrid",
        },
        {
          title:
            "Explore cutting-edge retail innovation and operations at Spain's largest department store group.",
          subtitle: "El Corte Inglés Headquarters, Madrid",
        },
      ],
      cultural: [
        {
          title:
            "Immerse yourself in Spain's rich artistic heritage at two of the world's most renowned museums.",
          subtitle: "Prado Museum and Reina Sofia Museum, Madrid, Spain",
        },
        {
          title:
            "Discover Madrid's vibrant street art, bohemian culture, and countercultural energy.",
          subtitle: "Lavapiés and Malasaña Districts, Madrid",
        },
        {
          title:
            "Step into royalty and explore Spain's rich history at the largest functioning palace in Europe.",
          subtitle: "Royal Palace of Madrid, Madrid",
        },
      ],
    },
    {
      id: "internship",
      term: "TERM 8",
      title: "Internship",
      badges: [],
      internship: {
        paragraphs: [
          "Enrol in a full time paid internship in a large company. Ideally choose a sector that is closest to where you want to build a career & a company who's culture most closely matches your identity.",
          "Or students have an option to:",
        ],
        options: [
          "Do Capstone projects on-campus at UBI",
          "Complete academic courses of their chosen track",
        ],
      },
    },
  ],
};
