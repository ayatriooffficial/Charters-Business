import type { Programme, CurriculumSectionData } from "./types";
import { dgmStudentCategories, dgmStudents } from "@/data/students";
import { facultyMembers } from "@/data/faculty";

const dgmCurriculumSection: CurriculumSectionData = {
  eyebrow: "WORLD-CLASS EDUCATION",
  titleHighlight: "AI-Ready:",
  titleRest: "Hands-on Learning",
  subtitle: "We trained to contribute in real business environments—earning recognition from managers",
  tabOrder: [
    "courses",
    "collaboration",
    "cultural",
    "business",
  ],
  skillsData: {
    previewSkills: ["Data-Driven Marketing", "SEO, GEO & AEO and ASO", "AI-Powered Content Strategy", "Growth Hack Strategy", "Social Media Strategy",
      "Google/Meta Ads - Scale & Measure ROI", "Google My Business Profile", "Pear publishing", "Email & Whatsapp Automation",
      "Analytics with Excel & Power BI", "Prompt Patterns", "Interviewing Skills", "Loyalty Programs", "Performance Measurement"],
    modalTitle: "Skills and tools you'll learn",
    modalSkillsGain: {
      title: "Skills you'll gain",
      skills: [
        "Data-Driven Marketing", "Marketing", "Data Storytelling", "Social Media Strategy",
        "Spreadsheet Software", "Campaign Management", "Paid media", "Email Marketing",
        "Online Advertising", "Social Media Marketing", "Prompt Patterns", "Interviewing Skills",
        "Social Media Management", "Order Fulfillment", "Search Engine Optimization",
        "Media Planning", "Loyalty Programs", "Performance Measurement", "E-Commerce"
      ]
    },
    modalToolsLearn: {
      title: "Tools you'll learn",
      tools: ["Google Ads", "Google Analytics", "Canva"]
    }
  },
  tabLabels: { cultural: "Tools & Technology" },
  items: [
    {
      id: "dubai",
      term: "Month 01",
      title: "Digital Marketing Foundation",
      termImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784609214/Charters-classroom_g8znqy.avif",
      badges: [
        { text: "Beginner", className: "bg-black text-white text-xs px-2 py-1 font-semibold ml-2" },
      ],
      outcome: "Understanding AI impact on Marketing & Customer persona, Build a website + write SEO content, Google ranking best practices",
      project: undefined,
      courses: {
        initial: [
          { code: "MAST 101", title: "Digital Marketing Orientation & Consumer Sentiments, sales funnel & 4Ps/7Ps" },
          { code: "MAST 201", title: "Understanding AI - Gen AI and Agentic AI; Assistive and Autonomous Marketing (ChatGPT, Claude and Priplexity)" },
          { code: "MAST 301", title: "Introduction of ai-driven customer understanding & journey mapping" },
          { code: "MAST 401", title: "Website UX Principles + Tools, domains, hosting, DNS, browsers - Designing Landing Pages that Convert" },
          { code: "MAST 501", title: "AI-Powerd Graphic design for websites & social media calender (Canva, adobe)" },
        ],
        more: [
          { code: "SAMA 101", title: "Website plugins - Ai-chatbot, lead form, WhatsApp button" },
          { code: "SAMA 201", title: "Introduction of SEO, AEO & GEO difference with ranking factors" },
          { code: "SAMA 301", title: "On-Page SEO — Titles, Meta, Topic Clusters, internal links" },
          { code: "SAMA 401", title: "Keyword research & Search-intent mapping, Google trands analysis" },
          { code: "FIFI 101", title: "AI-Powerd compititor Analysis, google (E-E-A-T) model & google penalizetion" },
          { code: "PRTC 101", title: "Corporate english specking" },
          { code: "COMM 101", title: "Profesonal personal branding" },
          { code: "COMM 201", title: "Profesonal digital Networking" },
        ],
      },
      business: [
        { title: "Discuss sustainable solutions, renewable energy, green technology with world leaders, businesses, and investors.", subtitle: "The World Green Economy Summit" },
        { title: "Delve into the private luxury aviation market and understand the ins and outs of a $100B exclusive industry.", subtitle: "Middle East Business Aviation Summit" },
        { title: "Explore the niche laboratory and instrumentation industry and see how high-tech industries work.", subtitle: "ArabLAB Expo" },
        { title: "Get a taste of the global sweet, confectionery, bakery, and snack food industry.", subtitle: "Yummex Food Exhibition, Middle East" },
        { title: "Visit YallaMarket, which is redefining the grocery shopping experience, & Huspy, which is transforming the real estate landscape." },
        { title: "Learn about the Emirates airline's operations, logistics, and customer service strategies.", subtitle: "Emirates Airline Headquarters" },
      ],
      cultural: [
        { title: "Take a thrilling desert safari through the Dubai Desert & live the traditional Arabic life.", subtitle: "Dubai Inner Desert" },
        { title: "Cruise in a traditional wooden boat and witness the historical landmarks.", subtitle: "Dhow Cruise" },
        { title: "Soak in the history of Dubai from its beginnings as a fishing village to its modern metropolis.", subtitle: "Dubai Museum, Al Fahidi Fort" },
        { title: "Bargain for gold jewelry, learn about goldsmithing at the largest gold market in the world.", subtitle: "Dubai Gold Souk" },
        { title: "Get the inside hook on how the world's tallest building was planned, & constructed.", subtitle: "Burj Khalifa" },
      ],
      culturalVariant: "orange",
      culturalImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784830095/chartersunion-digital-marketing-standard-tools_w8pezj.avif",
    },
    {
      id: "india",
      term: "Month 02",
      title: "AI-Powered SEO, GEO & AEO and ASO",
      termImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786642832/chartersunion-student-hand-on-project_zguqdf.avif",
      badges: [],
      outcome: "Rank content on Google, grow organic social following",
      project: undefined,
      courses: {
        initial: [
          { code: "MAST 102", title: "Technical SEO, SERP, Keywords, On-Page SEO, Crawl engineering, Rendering,  Schema markup site speed, Core Web Vitals, sitemaps" },
          { code: "MAST 202", title: "Off-Page SEO, SEO Analytics & Reporting, SEO-Led Growth, Knowledge graph, EEAT engineering, Topical maps, Compititor web analysis with AI" },
          { code: "MAST 302", title: "Google Search Console & Tag Manager setup" },
          { code: "MAST 402", title: "Backlink building: white hat strategies" },
          { code: "MAST 502", title: "Locazation architecture & GBP domination" },
        ],
        more: [
          { code: "SAMA 102", title: "Instagram Marketing - Reels, hashtags, algorithm" },
          { code: "SAMA 202", title: "Facebook Page & Group marketing" },
          { code: "SAMA 302", title: "YouTube channel setup & video SEO" },
          { code: "SAMA 402", title: "LinkedIn for personal branding & B2B" },
          { code: "FIFI 102", title: "Structure thinking" },
          { code: "PRTC 102", title: "Personal Video creator studio" },
          { code: "COMM 102", title: "Body lunguage tranning" },
        ],
      },
      collaboration: [
        { title: "Data-driven decision making" },
        { title: "Genetic engineering" },
      ],
      business: [
        { title: "See what makes Indian Unicorns truly special.", subtitle: "StartUp Grind New Delhi" },
        { title: "See how street vendors of India make more money than Silicon Valley startUps.", subtitle: "Gurgaon's Banjara Market" },
        { title: "Explore fashion & business at one of the largest leather fairs in Asia.", subtitle: "The Indian Leather Fair (May)" },
        { title: "Discover global F&B trends at India's largest food ingredients & flavoring fairs.", subtitle: "The Flagship AAHAR 204" },
        { title: "Visit Zomato, which is redefining the Food Delivery market, & PayTM, which is bringing electronic banking to 1B+ Indians" },
        { title: "Get up close with the management and see how the largest Indian conglomerates actually work.", subtitle: "Reliance & Tata HQs." },
      ],
      cultural: [
        { title: "Witness the spectacular military parade and cultural pageantry on India's Republic Day.", subtitle: "Republic Day Parade (New Delhi, Jan 26)" },
        { title: "Immerse in the vibrant Holi festivities, a celebration of spring with colorful powders, music, and dance.", subtitle: "Holi Festival of Colors (Pan-India)" },
        { title: "Travel through India's villages to uncover grassroot innovations.", subtitle: "'Shodh Yatra'" },
        { title: "Witness the majestic elephants participating in processions at this unique festival.", subtitle: "Elephant Festival, Jaipur" },
        { title: "Visit the landmark literature festival featuring talks, and readings by global authors.", subtitle: "Jaipur Literature Festival" },
      ],
      culturalImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784830095/chartersunion-digital-marketing-ai-tools_vexjae.avif",
    },
    {
      id: "singapore",
      term: "Month 03",
      title: "AI-Poweard Marketing Analytics with Excel & Power BI",
      termImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786642832/chartersunion-student-build-ai-agent-for-scale_ifrulw.avif",
      badges: [
        { text: "Intermediate", className: "bg-black text-white text-xs px-2 py-1 font-semibold ml-2" },
      ],
      project: undefined,
      courses: {
        initial: [
          { code: "MAST 103", title: "Developing a Content with Flywheel Strategy, Goals, User Personas, Content Types, Channel Selection & Distributing and Promoting Content" },
          { code: "MAST 203", title: "Content Calendar creation & Optimization, Content Performance analysis Post, Email, WhatsApp(30-day plan)" },
          { code: "MAST 303", title: "Google Tag Manager and Google Analytics 4 — setup, events, goals" },
          { code: "MAST 403", title: "Whatsapp growth marketing & automation— list building, segmentation" },
          { code: "MAST 503", title: "Bulk Email marketing strategy, automation, analysis" },
        ],
        more: [
          { code: "SAMA 103", title: "ABM strategy + Campaign Content Calendar creation — subject lines, CTAs, design" },
          { code: "SAMA 203", title: "Conversion Rate Optimisation (CRO) & heatmaps" },
          { code: "SAMA 303", title: "Marketing funnel mapping (TOFU/MOFU/BOFU)" },
          { code: "SAMA 403", title: "Google Data Studio dashboards & reporting" },
          { code: "FIFI 103", title: "Mobile Marketing" },
          { code: "PRTC 103", title: "Viral Grwoth hack Gtrategy" },
          { code: "COMM 103", title: "Leadershiph social impact tranning" },
          { code: "COMM 203", title: "Personal Video grwoth strategy creator studio" },
        ],
      },
      moreCoursesGray: true,
      collaboration: [{ title: "Angel investing & alternate investments" }],
      business: [
        { title: "See how innovation meets inspiration in Singapore.", subtitle: "Singapore MetaExpo 2025." },
        { title: "Visit the world's leading Fintech company and step into the future of Finance.", subtitle: "Paypal Innovation Lab." },
        { title: "Unravel Financial Insights at IRAS Singapore.", subtitle: "Inland Revenue Authority of Singapore." },
        { title: "Discover Vertical Farming where Innovation meets Sustainability and experience the future of food.", subtitle: "Sky Greens Farm Tour." },
        { title: "Explore tomorrow's technology where ideas become reality.", subtitle: "Microsoft Technology Centre." },
      ],
      cultural: [
        { title: "Witness grand parades on Singapore National Day.", subtitle: "Singapore National Day (August 9)" },
        { title: "Immerse yourself in the history and heritage of Singapore.", subtitle: "Singapore National Museum." },
        { title: "Discover Asia's cultural mosaic at the", subtitle: "Asian Civilisations Museum." },
        { title: "Visit Singapore's cultural heartbeat where tradition meets modernity.", subtitle: "Chinatown Singapore." },
        { title: "Discover Singapore's military legacy.", subtitle: "Fort Siloso" },
      ],
      culturalImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784830095/chartersunion-digital-marketing-ai-tools_vexjae.avif",
    },
    {
      id: "ghana",
      term: "Month 04",
      title: "Google/Meta Ads - Architecture, Plan, Validate, Auction, Bidding, Scale & Measure ROI ",
      termImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784609214/Charters-classroom_g8znqy.avif",
      badges: [
        { text: "Advanced", className: "bg-black text-white text-xs px-3 py-1 font-semibold" },
      ],
      highlight: "Faculty Guided Internship Program ",
      outcome: "Set up & manage paid campaigns with real budgets",
      project: undefined,
      courses: {
        initial: [
          { code: "MAST 104", title: "Introduction to PPC: how ad auctions work" },
          { code: "MAST 204", title: "Google Search Ads: structure, match types, extensions, Account architecture for automation" },
          { code: "MAST 304", title: "Auction mechanics, Quality Score deep dive, Smart Bidding (tCPA, tROAS, MaxConv, MaxConvValue)" },
          { code: "MAST 404", title: "Portfolio strategies, Bid strategy testing, Budget pacing, Conversion value rules" },
          { code: "MAST 504", title: "Advanced Search (RSA pinning, AI Max, negatives, search themes)" },
        ],
        more: [
          { code: "SAMA 104", title: "Shopping feed engineering, custom labels, PMax asset groups" },
          { code: "SAMA 204", title: "Audience signals, Brand exclusions, PMax + Standard Shopping hybrid, Scripts for placement & search-term mining" },
          { code: "SAMA 304", title: "YouTube ABCDs creative framework, Video Reach, Video Action, Demand Gen campaigns, Display & Discovery" },
          { code: "SAMA 404", title: "Customer match + lookalikes, App Campaigns (ACi/ACe), Brand Lift & Search Lift studies, Full-funnel attribution" },
          { code: "FIFI 104", title: "Meta Ads Manager - Facebook & Instagram Account simplification" },
          { code: "PRTC 104", title: "Meta auction dynamics, Advantage+ Shopping (ASC) vs BAU, Advantage+ App, CBO vs ABO, Ad set consolidation" },
          { code: "COMM 104", title: "Learning phase exit, Cost cap vs bid cap vs lowest cost, ROAS-based scaling, Audience consolidation" },
          { code: "COMM 204", title: "Creative concept vs iteration framework, UGC pipeline & hook libraries, Dynamic creative" },
          { code: "COMM 304", title: "Frequency & CPMr management, CAPI + server-side GTM, Event Match Quality (EMQ)" },
          { code: "COMM 404", title: "Aggregated Event Measurement, iOS 17/18 attribution, Geo holdout testing" },
          { code: "COMM 504", title: "Custom audiences, lookalike, and retargeting, Ad copywriting - hook, body, CTA frameworks" },
          { code: "COMM 604", title: "Google partner Display & YouTube Ads" },
        ],
      },
      moreCoursesGray: true,
      business: [
        { title: "Understand how trade in Africa unfolds at a world record pace!", subtitle: "Ghana International Trade Fair" },
        { title: "Witness Africa's cutting edge agricultural technology and unique innovations.", subtitle: "AgriTech Ghana" },
        { title: "Meet early stage startups at MEST Accra, Meltwater Incubator & BlueSpace Ghana, pan-African incubators supporting tech startups" },
        { title: "Learn how Ghana's cocoa & cashews industry is thriving.", subtitle: "Nestle HQs, Accra" },
        { title: "Meet global investors bullish on Africa.", subtitle: "Ghana Investment Forum" },
      ],
      businessNote: "Summer: Teaching Fellowship or Internship",
      cultural: [
        { title: "Explore Ghana's vibrant second hand market.", subtitle: "Kantamanto Market, Accra" },
        { title: "Walk the British colonial history of Ghana on an Independence Tour.", subtitle: "Accra, Ghana" },
        { title: "See how small businesses become energy self-sufficient using BioGas plants.", subtitle: "Kumasi, Ghana" },
      ],
      culturalImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784830094/chartersunion-digital-marketing-analysis-tool_eucpz5.avif",
    },
    {
      id: "usa",
      term: "Month 05",
      title: "CRM & Internship",
      termImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786642832/chartersunion-student-build_-personal-brand_d135q4.avif",
      badges: [
        { text: "In-Class Faculty-Guided Internship", className: "bg-black text-white text-xs px-2 py-1 font-semibold" },
        { text: "PRO", className: "bg-black text-white text-xs px-2 py-1 font-semibold ml-2" },
      ],
      project: undefined,
      courses: {
        initial: [
          { code: "MAST 105", title: "E-Commerce landscape in India — Amazon, Flipkart, Shopify" },
          { code: "MAST 205", title: "Product listing optimization — titles, images, A+ content" },
          { code: "MAST 305", title: "Performance marketing for e-commerce (Shopping Ads)" },
          { code: "MAST 405", title: "Meta Catalog & dynamic product ads" },
          { code: "MAST 505", title: "Influencer marketing & Pear Publishing — micro vs macro, ROI" },
        ],
        more: [
          { code: "SAMA 105", title: "AI tools — ChatGPT, Canva AI, Jasper, Copy.ai" },
          { code: "SAMA 205", title: "Video marketing & Reels strategy" },
          { code: "SAMA 305", title: "Online Reputation Management (ORM)" },
          { code: "SAMA 405", title: "App Marketing & ASO basics" },
        ],
      },
      moreCoursesGray: true,
      collaboration: [
        { title: "AI driven entrepreneurship" },
        { title: "Healthcare management" },
      ],
      business: [
        { title: "Get a glimpse into new research and products at Google's HQ.", subtitle: "Googleplex" },
        { title: "See how animated blockbusters come to life at VFX studio Pixar.", subtitle: "Pixar HQs" },
        { title: "Get the BTS on Silicon Valley's top incubator behind Airbnb & Dropbox.", subtitle: "Y Combinator's Demo Day" },
        { title: "Get an immersive insight into cutting-edge space technology.", subtitle: "Space X HQs" },
        { title: "Delve into hackers' minds at the world's top hackers' conference.", subtitle: "Black Hat USA" },
        { title: "Dive into the latest in the world of Robots, AI, Metaverse, & Green tech.", subtitle: "Consumer Electronics Show, Vegas" },
      ],
      cultural: [
        { title: "Witness a live IPO at the", subtitle: "NASDAQ, New York" },
        { title: "Experience the historic American power centers.", subtitle: "Pentagon, & Capitol" },
        { title: "Experience the intersection of art and technology.", subtitle: "Berkeley Art Museum" },
        { title: "Traverse the American colonial & civil war history across the eat coast.", subtitle: "Various Cities (east coast)" },
        { title: "Volunteer at the world's largest music stage.", subtitle: "Ultra Music Festival" },
      ],
      culturalImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784830095/chnarterunion-automation-tool_tvwboh.avif",
    },
    {
      id: "argentina",
      term: "Month 06",
      title: "Growth Engineer, PRO & Faculty guided internship",
      termImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1786642832/chartersunion-student-at-networking-events_iutdjm.avif",
      badges: [
        { text: "On Campus", className: "bg-black text-white text-xs px-2 py-1 font-semibold" },
        { text: "PRO", className: "bg-black text-white text-xs px-2 py-1 font-semibold ml-2" },
      ],
      project: undefined,
      courses: {
        initial: [
          { code: "MAST 106", title: "Full-funnel 360° campaign strategy" },
          { code: "MAST 206", title: "Digital marketing for local businesses" },
          { code: "MAST 306", title: "The Growth Engineer and growth hack" },
          { code: "MAST 406", title: "Freelancing — platforms, pricing, proposals" },
          { code: "MAST 506", title: "Portfolio building — case studies, personal brand" },
        ],
        more: [
          { code: "SAMA 106", title: "Agency model — client management, retainers" },
          { code: "SAMA 206", title: "Resume + LinkedIn optimization for DM jobs" },
          { code: "SAMA 306", title: "Interview preparation — mock rounds" },
          { code: "SAMA 406", title: "Emerging trends 2025 — AI, voice, short video" },
          { code: "FIFI 106", title: "CAPSTONE: Full campaign presentation" },
        ],
      },
      moreCoursesGray: true,
      business: [
        { title: "Learn how agribusiness is driving innovation at", subtitle: "Los Grobo Group's headquarters" },
        { title: "Understand Argentina's renewable energy transition at", subtitle: "YPF Luz" },
        { title: "Explore the entrepreneurial ecosystem of", subtitle: "Buenos Aires' Distrito Arcos and Palermo Soho." },
      ],
      cultural: [
        { title: "Experience the traditions of the", subtitle: "Pampas region, Argentina's agricultural heartland." },
        { title: "Immerse yourself in the passion of Argentine football at", subtitle: "La Bombonera Stadium." },
        { title: "Discover the artistic and cultural vibrancy of", subtitle: "San Telmo and La Boca." },
      ],
      culturalImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784830095/chnarterunion-automation-tool_tvwboh.avif",
    },
    {
      id: "europe",
      term: "Month 07",
      title: "Capstone: Build & Launch a Digital Marketing Agency",
      termImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784609214/Charters-classroom_g8znqy.avif",
      badges: [
        { text: "PRO", className: "bg-black text-white text-xs px-2 py-1 font-semibold ml-2" },
      ],
      outcome: "Pai-Lam help to build won digital company",
      project: undefined,
      courses: {
        initial: [],
        more: [],
      },
      moreCoursesGray: true,
      collaboration: [
        { title: "International trade & business" },
        { title: "Business of chemicals & bio-technology" },
      ],
      collaborationTextBlack: true,
      business: [
        { title: "Learn how Spain is innovating in renewable energy and sustainability at a global leader in clean power.", subtitle: "Iberdrola Headquarters, Madrid" },
        { title: "Immerse yourself in entrepreneurial creativity and emerging startups at Madrid's leading innovation hub.", subtitle: "La Nave Innovation Hub, Madrid" },
        { title: "Explore cutting-edge retail innovation and operations at Spain's largest department store group.", subtitle: "El Corte Inglés Headquarters, Madrid" },
      ],
      cultural: [
        { title: "Immerse yourself in Spain's rich artistic heritage at two of the world's most renowned museums.", subtitle: "Prado Museum and Reina Sofia Museum, Madrid, Spain" },
        { title: "Discover Madrid's vibrant street art, bohemian culture, and countercultural energy.", subtitle: "Lavapiés and Malasaña Districts, Madrid" },
        { title: "Step into royalty and explore Spain's rich history at the largest functioning palace in Europe.", subtitle: "Royal Palace of Madrid, Madrid" },
      ],
      culturalImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784830095/chnarterunion-automation-tool_tvwboh.avif",
    },

  ],
};

// DGM — Digital Growth & Marketing course data
export const dgm: Programme = {
  id: "2",
  slug: "digital-growth-&-marketing",
  // Dropdown Data
  dropdown: {
    title: "DGM™ (Digital Growth & Marketing)",
    description:
      "Industry-focused program that bridges the gap between academic learning and corporate requirements. Emphasis on practical skills, live projects, and leadership development through hands-on experience with real business challenges.",
    duration: "7 Months Full-time",
    stats: [
      { value: "24", label: "MONTHS" },
      { value: "200+", label: "CASE STUDIES" },
      { value: "250+", label: "COMPANIES" },
      { value: "92%", label: "SUCCESS RATE" },
    ],
    link: "/post-graduate-diploma-in-management",
    imageUrl: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784310639/class-of-DGM_Digital_Growth_Marketing_kilwdn.avif",
  },

  // Card Data
  card: {
    image: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784310639/class-of-DGM_Digital_Growth_Marketing_kilwdn.avif",
    hasVideo: false,
    rating: { score: 4.7, reviews: 1876 },
    title: "DGM™(Digital Growth & Marketing)",
    level: "Certified",
    certificateType: "Corporate Certificate",
    description:
      "Master AI-driven performance marketing, SEO, social media, e-commerce growth, brand strategy, and media planning with top industry mentors.",
    format: { type: "On Campus" },
    eligibility: { type: "12 Pass-out & Early under graduates." },
    duration: { type: "~3 Months Foundation + 4 Months Paid Internship" },
    deadline: { type: "Round 1: 30th Oct '25" },
    careerOutcomes: [
      "Fundamentals of AI-Reday Digital Marketing, Data-Draven Marketing and Growth Engineer Framework of Goggle Digital/Meta blueprint/Hubspot/Growth School",
      "Foundation of SEO/AEO/GEO - Gen AI and Agentic AI; Marketing Autonomous  with (ChatGPT, Claude & Gemini).",
      "AI-Poweard Marketing Analytics(GA, Pixel) with Excel & Power BI.",
      "Google/Meta Ads - Architecture, Plan, Validate, Auction, Bidding, Scale & Measure ROI.",
      "In-class faculty guided intranship with top Startup & MNC from India, USA, CANADA, SAUDI, QATAR and Singapore.",
      "Personal devlopment prep with English communication, Personal Branding, Corporate Bodylangusge and Placement cell.",

    ],
    jobOpenings: "175912 (kolkata)",
    expectedCtc: {
      traditional: "₹1.8L",
      cmp: "₹835,500",
      label: "DGM™",
    },
  },
  // Hero Data
  hero: {
    badge: "100% job guarantee program",
    categoryLabel: "Digital Marketing",
    title: {
      main: "AI-Ready, Internship-Driven Training for Digital Marketing",
    },
    description:
      "Learn AI-Ready SEO, Email Marketing, Data Driven Growth, Run a Live Paid Campaign for a Real Business + Google Digital | Meta Blueprint | HubSpot - Framework Aligned Curriculum + 4-Month Paid Internship.",
    stats: [
      { label: "99.3% Avg Placement", value: "7.5 LPA" },
      { label: "+3X Internship Offer Per Student", value: "95%" },
    ],
    alumniLabel: "Find our student at -",
    alumniCompanies: [
      { name: "KPMG", logo: "/images/companies/kpmg.png" },
      { name: "TCS", logo: "/images/companies/tcs.png" },
      { name: "Infosys", logo: "/images/companies/infosys.png" },
    ],
    actions: {
      primaryText: "Apply Now",
      secondaryText: "Download Brochure",
    },
    enrolledCount: "1,127",
    instructors: {
      badge: "India's top 1%",
      title: "CMO/Sr Ads Specialist/Growth Hacker Industry Leaders",
      aiSkills: {
        title: "New AI skills",
        description: "This Professional Certificate includes new videos on how to use AI in digital marketing & e-commerce.",
        skills: [
          "Boost your digital marketing skills with AI",
          "Use AI to help you understand your audience",
          "Kickstart marketing strategy ideas with AI",
          "Use AI to compare two campaign proposals",
          "Improve your email marketing using AI",
          "Brainstorm website copy ideas with AI"
        ]
      }
    },
    heroImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784641527/DGM_sashank-_dabjani-place-top-company_h8okn7.avif",
    floatingCards: {
      topRight: {
        badge: "Live Sessions",
        students: "1,800+",
        rating: 4.7,
        stars: "★★★★★",
      },
      bottomLeft: {
        label: "Placement Rate",
        percentage: "92%",
        subLabel: "Career Growth",
        ctcIncrease: "↗ 2.5x Salary Hike",
      },
    },
  },
  // Program Info
  programInfo: {
    duration: "7 Month",
    details: [
      { label: "DURATION", value: "7 Month (~3 Months Foundation + 4 Months Internship)", dotColor: "bg-cyan-500" },
      { label: "FORMAT", value: "~9 hrs/week, In-Class Tranning", dotColor: "bg-yellow-500" },
      {
        label: "ELIGIBILITY",
        value: "12th/Undergraduate(B.Tech, B.Sc, B.Com, B.A., BBA, BCA). No age limit",
        dotColor: "bg-pink-500",
      },
      { label: "INTERNSHIP", value: "100% Faculty guided internship", dotColor: "bg-yellow-500" },
      { label: "PROGRAM FEES", value: "Zero Cost EMI Easy Monthly Installments", dotColor: "bg-green-500" },
    ],
  },

  // Track Record
  trackRecord: {
    stats: [
      { value: "24.5", unit: "LPA", label: "Average CTC" },
      { value: "2.5", unit: "x", label: "Average CTC Jump" },
      { value: "15-40", unit: "LPA", label: "CTC Salary Range" },
      { value: "92", unit: "%", label: "Students Placed" },
    ],
    experienceData: [
      { label: "0-1 YRS", value: 12, percentage: "12%" },
      { label: "1-3 YRS", value: 45, percentage: "45%" },
      { label: "3-5 YRS", value: 28, percentage: "28%" },
      { label: "5-8 YRS", value: 10, percentage: "10%" },
      { label: "8-10YR", value: 3, percentage: "3%" },
      { label: "10+ YRS", value: 2, percentage: "2%" },
    ],
    backgroundData: [
      { label: "GENERALISTS", value: 28, percentage: "28%" },
      { label: "MARKETING", value: 18, percentage: "18%" },
      { label: "SALES_DEV", value: 16, percentage: "16%" },
      { label: "ENTREPRENEURS", value: 12, percentage: "12%" },
      { label: "ENGINEERING", value: 9, percentage: "9%" },
      { label: "FINANCE", value: 10, percentage: "10%" },
      { label: "PRODUCT", value: 7, percentage: "7%" },
    ],
    impactCards: [
      {
        title: "Fast-track career growth through practical learning",
        description:
          "Management Trainee, Project Manager, Business Development roles designed for rapid career progression in leading companies.",
      },
      {
        title: "Industry-ready skills through live projects",
        description:
          "Work on real business challenges with 200+ live projects, case studies, and hands-on assignments that prepare you for corporate roles.",
      },
      {
        title: "Strong industry network and placement support",
        description:
          "Connect with 250+ recruiting companies, industry mentors, and successful alumni network for career opportunities.",
      },
    ],
    companyLogos: [

    ],
  },

  degreeProgram: {
    badge: "CERTIFICATION & ACCREDITATION",
    title: {
      prefix: "Global Recognized",
      highlight: "DGM™",
      suffix: "Certification",
    },
    auditorText: "Our placement reports are audited by <strong>Zivanta Analytics</strong>, auditor for IIM and follow the IPRS Revision 2.2 framework for transparent and consistent compensation data.",
    accordions: [
      {
        id: "placement",
        title: "Outstanding Placement Record and Career Support",
        items: [
          "**99.3% placement** rate with top companies across diverse industries",
          "**2.5x average salary** jump DGM™ Certified with CTC ranging from 5-12.7 LPA",
          "Alumni at **Flipkart, TCS, Infosys, Wipro, Zomato, Ayatrio** in managerial roles",
          "**250+ recruiting partners** including IT giants, consulting firms, and FMCG companies",
          "**100% placement assistance** with dedicated support until job placement",
        ],
      },
      {
        id: "practical",
        title: "Industry-Focused Practical Learning Approach",
        items: [
          "**100+ live projects** with real companies providing practical management experience",
          "**Mandatory summer internship** with stipend at leading companies",
          "**Industry mentorship program** - learn from practicing managers and business leaders",
          "**Guest lectures** by 50+ CMOs, entrepreneurs, and senior executives annually",
          "**Simulation exercises** for supply chain, finance, marketing, and operations management",
        ],
      },
      {
        id: "curriculum",
        title: "Flexible and Industry-Relevant Curriculum",
        items: [
          "**Internship base curriculum** - updated every 6 months based on industry requirements",
          "**Specialization tracks** in AI in Marketing, Paid Ads, Marketing Operations & Analytics",
          "**Skill development modules** in Excel, PowerBI, SQL, Python, and business tools",
          "**Soft skills training** - communication, leadership, negotiation, presentation skills",
          "**Capstone project** in final term solving real business problems",
        ],
      },
      {
        id: "recognition",
        title: "Global Recognition and Career Advantages",
        items: [
          "*7 globally recognized bodies Patnard** DGM™(Digital Growth & Marketing)",
          "**Equivalent to MBA** as per AICTE and accepted by all employers",
          "**Industry preferred** due to practical focus and updated curriculum",
          "**Fast career growth** - DGM™ Certified reach managerial positions 20% faster",
          "**Higher education ready** - eligible for PGDM and executive programs",
        ],
      },
    ],
    academicPartners: [{ name: "ChartersUnion Business School" }],
    immersions: [{ name: "Industry Visits" }],
    campusImage: {
      src: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784840455/Sanjana-recived-digital-growth-_-marketing-certification_z2hkzv.avif",
      alt: "How weeks look like at Charters'Union",
    },
  },
  // Curriculum Section (per-programme, isolated copy)
  curriculumSection: dgmCurriculumSection,

  // Curriculum
  curriculum: {
    categories: [
      { id: "core", label: "CORE", title: "Core Management Courses" },
      { id: "specialization", label: "SPEC", title: "Specialization Tracks" },
    ],
    courseData: {
      core: [
        {
          term: "TERM 1",
          location: "India",
          courses: [
            { code: "PGDM 101", title: "Principles of Management" },
            { code: "PGDM 102", title: "Business Economics" },
            { code: "PGDM 103", title: "Accounting for Managers" },
            { code: "PGDM 104", title: "Marketing Fundamentals" },
            { code: "PGDM 105", title: "Organizational Behavior" },
          ],
        },
        {
          term: "TERM 2",
          location: "India",
          courses: [
            { code: "PGDM 201", title: "Financial Management" },
            { code: "PGDM 202", title: "Operations & Supply Chain" },
            { code: "PGDM 203", title: "Business Analytics" },
            { code: "PGDM 204", title: "Human Resource Management" },
            { code: "PGDM 205", title: "Strategic Management" },
          ],
        },
      ],
      specialization: [
        {
          term: "TERM 3",
          location: "Mumbai",
          courses: [
            { code: "SPEC 301", title: "Advanced Marketing Strategy" },
            { code: "SPEC 302", title: "Financial Analysis & Planning" },
            { code: "SPEC 303", title: "Operations Excellence" },
            { code: "SPEC 304", title: "HR Analytics" },
          ],
        },
      ],
    },
  },

  // Learn Apply
  learnApply: {
    title: {
      prefix: "Learn. Apply. Reflect.",
      highlight: "Repeat.",
    },
    subtitle: `Hands-on courses and workshops designed to build real businesses—<br class="hidden sm:block" />because real learning comes from real applications.`,
    categories: [
      { id: "strategy", label: "AIDMF", title: "Strategy & Leadership" },
      { id: "finance", label: "SAG", title: "Finance & Analytics" },
      { id: "marketing", label: "DGA", title: "Marketing & Sales" },
      { id: "operations", label: "ADGM", title: "Operations & Supply Chain" },
      { id: "tech", label: "TECH", title: "Technology & Digital Business" },
      {
        id: "entrepreneur",
        label: "PRG",
        title: "Entrepreneurship & Innovation",
      },

    ],
    courseData: {
      strategy: [
        {
          term: "WEEK 1",
          location: "Mumbai Startup",
          courses: [
            {
              code: "AIDMF 101",
              title: "How to build a comprehensive business strategy",
            },
            {
              code: "AIDMF 102",
              title: "How to lead high-performing teams effectively",
            },
            {
              code: "AIDMF 103",
              title: "How to analyze competitive landscapes",
            },
            {
              code: "AIDMF 104",
              title: "How to create sustainable competitive advantages",
            },
            {
              code: "AIDMF 105",
              title: "How to drive organizational change",
            },
          ],
        },
        {
          term: "WEEK2",
          location: "Kolkata Startup",
          courses: [
            {
              code: "STRAT 201",
              title: "How to make strategic decisions under uncertainty",
            },
            {
              code: "STRAT 202",
              title: "How to manage corporate portfolios",
            },
            {
              code: "STRAT 203",
              title: "How to build strategic alliances and partnerships",
            },
            {
              code: "STRAT 204",
              title: "How to lead digital transformation initiatives",
            },
            {
              code: "STRAT 205",
              title: "How to develop growth strategies for emerging markets",
            },
          ],
        },
        {
          term: "TERM 3",
          location: "Bangalore Startup",
          courses: [
            {
              code: "STRAT 301",
              title: "How to manage mergers and acquisitions",
            },
            {
              code: "STRAT 302",
              title: "How to create blue ocean strategies",
            },
            {
              code: "STRAT 303",
              title: "How to implement strategic initiatives",
            },
            {
              code: "STRAT 304",
              title: "How to build resilient organizations",
            },
            {
              code: "STRAT 305",
              title: "How to develop crisis management frameworks",
            },
          ],
        },
      ],
      finance: [
        {
          term: "TERM 1",
          location: "Mumbai",
          courses: [
            {
              code: "FIN 101",
              title: "How to analyze financial statements comprehensively",
            },
            {
              code: "FIN 102",
              title: "How to value companies using DCF models",
            },
            {
              code: "FIN 103",
              title: "How to build financial forecasting models",
            },
            {
              code: "FIN 104",
              title: "How to manage working capital efficiently",
            },
            {
              code: "FIN 105",
              title: "How to understand corporate finance fundamentals",
            },
          ],
        },
        {
          term: "TERM 2",
          location: "Delhi",
          courses: [
            {
              code: "FIN 201",
              title: "How to structure investment portfolios",
            },
            {
              code: "FIN 202",
              title: "How to assess and manage financial risks",
            },
            {
              code: "FIN 203",
              title: "How to analyze mergers and acquisitions deals",
            },
            { code: "FIN 204", title: "How to raise capital for businesses" },
            {
              code: "FIN 205",
              title: "How to conduct due diligence for investments",
            },
          ],
        },
        {
          term: "TERM 3",
          location: "Singapore",
          courses: [
            {
              code: "FIN 301",
              title: "How to structure private equity deals",
            },
            { code: "FIN 302", title: "How to manage hedge fund strategies" },
            {
              code: "FIN 303",
              title: "How to analyze derivatives and options",
            },
            {
              code: "FIN 304",
              title: "How to implement treasury management systems",
            },
            { code: "FIN 305", title: "How to prepare companies for IPOs" },
          ],
        },
      ],
      marketing: [
        {
          term: "TERM 1",
          location: "Mumbai",
          courses: [
            {
              code: "MKT 101",
              title: "How to build compelling brand narratives",
            },
            {
              code: "MKT 102",
              title: "How to design customer acquisition funnels",
            },
            {
              code: "MKT 103",
              title: "How to conduct market research effectively",
            },
            {
              code: "MKT 104",
              title: "How to develop product positioning strategies",
            },
            {
              code: "MKT 105",
              title: "How to create integrated marketing campaigns",
            },
          ],
        },
        {
          term: "TERM 2",
          location: "Bangalore",
          courses: [
            {
              code: "MKT 201",
              title: "How to master digital marketing channels",
            },
            {
              code: "MKT 202",
              title: "How to optimize conversion rates systematically",
            },
            {
              code: "MKT 203",
              title: "How to build social media strategies that work",
            },
            {
              code: "MKT 204",
              title: "How to create viral content campaigns",
            },
            {
              code: "MKT 205",
              title: "How to implement marketing automation tools",
            },
          ],
        },
        {
          term: "TERM 3",
          location: "Dubai",
          courses: [
            {
              code: "MKT 301",
              title: "How to expand into international markets",
            },
            {
              code: "MKT 302",
              title: "How to build influencer partnerships",
            },
            {
              code: "MKT 303",
              title: "How to create omnichannel customer experiences",
            },
            {
              code: "MKT 304",
              title: "How to measure and optimize marketing ROI",
            },
            {
              code: "MKT 305",
              title: "How to manage brand portfolios effectively",
            },
          ],
        },
      ],
      operations: [
        {
          term: "TERM 1",
          location: "Mumbai",
          courses: [
            {
              code: "OPS 101",
              title: "How to build efficient supply chains",
            },
            {
              code: "OPS 102",
              title: "How to optimize production processes",
            },
            {
              code: "OPS 103",
              title: "How to implement lean manufacturing principles",
            },
            { code: "OPS 104", title: "How to manage inventory effectively" },
            { code: "OPS 105", title: "How to design service operations" },
          ],
        },
        {
          term: "TERM 2",
          location: "Delhi",
          courses: [
            {
              code: "OPS 201",
              title: "How to implement Six Sigma methodologies",
            },
            {
              code: "OPS 202",
              title: "How to manage global supply chain networks",
            },
            {
              code: "OPS 203",
              title: "How to optimize logistics and distribution",
            },
            {
              code: "OPS 204",
              title: "How to implement quality management systems",
            },
            {
              code: "OPS 205",
              title: "How to manage supplier relationships",
            },
          ],
        },
        {
          term: "TERM 3",
          location: "Singapore",
          courses: [
            {
              code: "OPS 301",
              title: "How to build resilient supply chains",
            },
            {
              code: "OPS 302",
              title: "How to implement Industry 4.0 technologies",
            },
            { code: "OPS 303", title: "How to manage project portfolios" },
            {
              code: "OPS 304",
              title: "How to optimize warehouse operations",
            },
            {
              code: "OPS 305",
              title: "How to implement sustainable operations",
            },
          ],
        },
      ],
      entrepreneur: [
        {
          term: "TERM 1",
          location: "Bangalore",
          courses: [
            {
              code: "ENT 101",
              title: "How to identify and validate business ideas",
            },
            {
              code: "ENT 102",
              title: "How to create minimum viable products",
            },
            { code: "ENT 103", title: "How to write winning business plans" },
            {
              code: "ENT 104",
              title: "How to pitch to investors effectively",
            },
            { code: "ENT 105", title: "How to build founding teams" },
          ],
        },
        {
          term: "TERM 2",
          location: "Mumbai",
          courses: [
            {
              code: "ENT 201",
              title: "How to raise seed and Series A funding",
            },
            { code: "ENT 202", title: "How to achieve product-market fit" },
            { code: "ENT 203", title: "How to scale startups rapidly" },
            {
              code: "ENT 204",
              title: "How to build startup culture and values",
            },
            { code: "ENT 205", title: "How to manage startup finances" },
          ],
        },
        {
          term: "TERM 3",
          location: "Silicon Valley",
          courses: [
            {
              code: "ENT 301",
              title: "How to navigate exits and acquisitions",
            },
            {
              code: "ENT 302",
              title: "How to build venture-backable businesses",
            },
            { code: "ENT 303", title: "How to create innovation frameworks" },
            {
              code: "ENT 304",
              title: "How to manage high-growth organizations",
            },
            {
              code: "ENT 305",
              title: "How to build sustainable competitive advantages",
            },
          ],
        },
      ],
      tech: [
        {
          term: "TERM 1",
          location: "Bangalore",
          courses: [
            {
              code: "TECH 101",
              title: "How to understand technology trends",
            },
            {
              code: "TECH 102",
              title: "How to build digital business models",
            },
            {
              code: "TECH 103",
              title: "How to implement cloud computing solutions",
            },
            {
              code: "TECH 104",
              title: "How to leverage artificial intelligence",
            },
            { code: "TECH 105", title: "How to design user experiences" },
          ],
        },
        {
          term: "TERM 2",
          location: "Mumbai",
          courses: [
            {
              code: "TECH 201",
              title: "How to build data analytics capabilities",
            },
            {
              code: "TECH 202",
              title: "How to implement blockchain solutions",
            },
            { code: "TECH 203", title: "How to manage cybersecurity risks" },
            {
              code: "TECH 204",
              title: "How to develop mobile-first strategies",
            },
            {
              code: "TECH 205",
              title: "How to implement agile methodologies",
            },
          ],
        },
        {
          term: "TERM 3",
          location: "Singapore",
          courses: [
            { code: "TECH 301", title: "How to build IoT ecosystems" },
            {
              code: "TECH 302",
              title: "How to implement machine learning models",
            },
            { code: "TECH 303", title: "How to manage API economies" },
            {
              code: "TECH 304",
              title: "How to scale technical infrastructure",
            },
            { code: "TECH 305", title: "How to build platform businesses" },
          ],
        },
      ],
    },
  },

  // Scholarships
  scholarshipConfig: {
    subtitle: "Financial Aid",
    title: { prefix: "Empowering Dreams Through ", highlight: "Scholarships" },
    description: "We never let financial hardships stand in the way of quality education. Scholarships cover up to 100% of the tuition."
  },
  scholarships: [
    {
      id: "merit",
      title: "The Merit Scholarship",
      description:
        "For outstanding academic achievers with exceptional entrance exam scores and strong academic records.",
      eligibility: "High entrance exam scores",
    },
    {
      id: "diversity",
      title: "The Diversity Scholarship",
      description:
        "Supporting diverse backgrounds and perspectives in management education.",
      eligibility: "Underrepresented backgrounds",
    },
    {
      id: "women",
      title: "Women Leadership Scholarship",
      description:
        "Empowering women to take leadership roles in business and management.",
      eligibility: "Women candidates with leadership potential",
    },
  ],
  // FAQ
  faq: {
    subtitle: "FAQS",
    title: "Have more Questions?",
    categories: [
      {
        id: "program",
        name: "Program",
        faqs: [
          {
            id: "what-is-pgdm",
            question: "Who can apply for the DGM™(Digital Growth & Marketing)?",
            answer:
              "Anyone who has completed graduation in any stream such as B.E., B.Tech, B.Sc, B.Com, B.A., BBA, or BCA can apply. Students who are currently pursuing graduation are also eligible. This course is suitable for freshers and working professionals. No prior experience in marketing is required.",
          },
          {
            id: "pgdm-vs-mba",
            question: "What are the top digital marketing skills I will learn in this course?",
            answer:
              "The program covers SEO, Paid Ads, Social Media Marketing, Email Marketing, Content Marketing, and Marketing Analytics. You will also learn to use Generative AI for content and performance optimization. The curriculum includes campaign planning and execution. It is designed as per current industry needs.",
          },
          {
            id: "eligibility",
            question: "Is technical or coding knowledge required?",
            answer:
              "No coding or technical background is needed for this course. The focus is on marketing tools, platforms, and campaign execution. You will learn how to use tools with guided practice. Basic internet knowledge is helpful but not mandatory.",
          },
          {
            id: "practical-learning",
            question: "Can I join the digital marketing course as a working professional?",
            answer:
              "Yes, this program is designed for both students and working professionals. Flexible batch options such as morning, evening, and weekend classes are available. This allows learners to balance work and study. The course helps professionals switch to Digital Marketing roles.",
          },
        ],
      },
      {
        id: "admission",
        name: "Admission",
        faqs: [
          {
            id: "how-to-apply",
            question: "How do I apply for DGM™(Digital Growth & Marketing)?",
            answer:
              "Applications can be submitted online through our admission portal. The process includes entrance exam scores, group discussion, and personal interview.",
          },
          {
            id: "entrance-exams",
            question: "can i do digital marketing course after 12th?",
            answer:
              "Yes, if you are currently pursuing your graduation (final year), you can apply for Chartersunion DGM™(Digital Growth & Marketing). The program is open to graduates from any discipline as well as final-year undergraduate students. No prior digital marketing experience is required. It is not available for students who have only completed Class 12 and are not enrolled in a graduation program.",
          },
        ],
      },
      {
        id: "placement",
        name: "Placement",
        faqs: [
          {
            id: "placement-record",
            question: "What is the placement record?",
            answer:
              "97.3% of our certified DGM™(Digital Growth & Marketing) receive job offers with an average CTC of ₹10.4 LPA and average salary jump of 2.5x. Top recruiters include Zomato, TCS, PhonePe, and leading startups.",
          },
          {
            id: "internships",
            question: "Are internships provided?",
            answer:
              "Yes, 100% internships are mandatory between 3month to 7th month. Our placement cell facilitates internships with 250+ partner companies offering stipends ranging from ₹8,000 to ₹55,000 per month.",
          },
        ],
      },
      {
        id: "fees",
        name: "Fees",
        faqs: [
          {
            id: "fee-structure",
            question: "What is the fee structure?",
            answer:
              "The program fee is competitive with flexible payment options including month-wise installments and EMI plans. Scholarships are available for meritorious students covering up to 100% tuition. Contact admissions for detailed fee information.",
          },
        ],
      },
    ],
  },
  students: {
    eyebrow: "OUR STUDENTS",
    title: { prefix: "Meet our", highlight: "Achievers" },
    subtitle: "Real students. Real placements. See where our graduates are working today.",
    categories: dgmStudentCategories,
    students: dgmStudents,
  },
  faculty: {
    eyebrow: "INSTRUCTORS & MENTORS at CHARTERs’ UNION",
    title: { prefix: "Learn from", highlight: "Top 0.1% of Practitioners" },
    subtitle: "At Charters' Union, your classroom is powered by top 1% business leaders, from Hardvard IIMC to Flipkart, from Hardvard MBA to Google. Our Mentors don't just teach the playbook. They help to build it.",
    categories: [
      { id: "leadership", name: "AI-Fast Digital Marketing" },
      { id: "finance", name: "Digital Growth & Scale" },
      { id: "consulting", name: "Leadership & Branding" },
    ],
    faculty: [
      // Map 'technology' (Digital Marketing) to the 'leadership' tab
      ...facultyMembers.filter(m => m.category === 'technology').map(m => ({ ...m, category: 'leadership' })),

      // Map 'consulting' (Digital Growth Engineer) to the 'finance' tab
      ...facultyMembers.filter(m => m.category === 'consulting').map(m => ({ ...m, category: 'finance' })),

      // Map 'leadership' (Accountancy) to the 'consulting' tab (since consulting data is missing)
      ...facultyMembers.filter(m => m.category === 'leadership').map(m => ({ ...m, category: 'consulting' })),
    ],
  },

  // =========================================================================
  // DIGITAL GROWTH & MARKETING (DGM) LAYOUT ASSETS CONFIGURATION
  // Renders on: /digital-growth-&-marketing
  // =========================================================================
  assets: {
    // Renders as the main student hero cover image in ProgramHero
    heroImage: "/images/certified-business-accountant-student-sunitha-raj-got-jobs.png",

    // Renders under "Find our faculty at -" banner in ProgramHero
    internshipPartnerLogo: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784554664/digital_growth_marketing_internship_partner_dwus3s.avif",

    // Renders as the industrial faculty partnership logo badge in ProgramHero
    industrialFacultyLogo: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784539836/charters-faculty-member_tlvkib.avif",

    // Renders as the list of placement partner logos in TrackRecord
    hiredCompaniesBanner: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784891196/DGM_Hired_Company_me01cr.avif",
    campusImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784840455/Sanjana-recived-digital-growth-_-marketing-certification_z2hkzv.avif",
    academicPartnerLogo: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784554663/digital_growth_marketing_curriculum_partner_x7c7y3.avif",
    disclaimerText: "Every DGM™ (Digital Growth & Marketing) completed student who fulfils the minimum requirements will be eligible to apply for professional certifications, international marketing credentials, and global job placement opportunities.",
    timetableImage: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784606398/day_to_day_at_charters-digital_marketing_f4kdtc.avif",

    // Renders cityscapes in CurriculumSection
    curriculumCityscapes: {
      dubai: "/images/dgm-tools/Charters-classroom.avif",
      india: "/images/dgm-tools/Charters-classroom.avif",
      singapore: "/images/dgm-tools/Charters-classroom.avif",
      ghana: "/images/dgm-tools/Charters-classroom.avif",
      usa: "/images/dgm-tools/Charters-classroom.avif",
      argentina: "/images/dgm-tools/Charters-classroom.avif",
      europe: "/images/dgm-tools/Charters-classroom.avif",
      internship: "/images/dgm-tools/Charters-classroom.avif",
    },

    // Renders as ChartCard headers in TrackRecord
    chartTitles: {
      card1: "Paid Internship in 557+ Companies Across 7 Countries",
      card2: "87% student got full time jobs offer before end intrashiph"
    },

    // Renders the EMI value, payment months, and career tracks inside PricingTabs
    pricing: {
      emiLabel: "Starting at",
      primaryButton: { text: "Book a Free Demo" },
      emiAmount: "₹6430",
      emiMonths: "total ₹45000",
      secondaryButton: { text: "VIEW EMI" },
      emiPlans: [
        { tenure: 12, type: "No Cost", loanAmount: 379000, rate: "0%", emi: 31583, totalLoanAmount: 379000 },
        { tenure: 18, type: "No Cost", loanAmount: 379000, rate: "0%", emi: 21056, totalLoanAmount: 379000 },
        { tenure: 24, type: "Low Cost", loanAmount: 379000, rate: "4%", emi: 16423, totalLoanAmount: 394160 },
        { tenure: 36, type: "Flat 11%", loanAmount: 379000, rate: "11%", emi: 14002, totalLoanAmount: 504070 },
        { tenure: 48, type: "Flat 11%", loanAmount: 379000, rate: "11%", emi: 11370, totalLoanAmount: 545760 },
        { tenure: 60, type: "Flat 11%", loanAmount: 379000, rate: "11%", emi: 9791, totalLoanAmount: 587450 },
      ],
      jobTracks: [
        { name: "SEO & Growth Marketing" },
        { name: "Brand & Product Management" },
        { name: "Marketing Analytics & Automation", badge: "Seats filled. Next batch starts on", badgeDate: "01 Jul 2026" }
      ],
      title: "Admission Process & Course Included ",
      features: {
        fundamentals: "Fundamentals",
        classes: "3 Hours classes and 3 Hours Labs Everyday",
        trainers: "Trainers: IIM alumni and Ex-Flipkart/Zomato/Phonepe"
      },
      placementSupport: {
        title: "100% Placement Support",
        items: [
          "Aptitude Training",
          "Soft Skills Training",
          "Resume Preparation",
          "AI-Powered Mock Interviews",
          "Mock Interviews by Tech and HR Panels",
          "300+ Senior Interview Experiences",
          "Scheduling Interviews",
          "Access to Placement Portal",
          "Mega Offline Placement Drives",
          "Negotiation with companies for higher salaries"
        ]
      },
      benefits: [
        { text: "9AM - 9PM Doubt Clarification. 100+ Mentors to help you." },
        { text: "10+ Real-time Projects for strong resume" },
        { text: "24/7 Online CareerPathx™ Access" },
        { text: "Charters' 100% Job Ready Program.", isDisclaimer: true }
      ],
      cardFeatures: {
        freeTrial: { title: "A Free Trial Session", subtitle: "No Fee Required" },
        scholarships: { title: "Assured Scholarships", subtitle: "After Free Trial" }
      }
    }
  },
  weekAtUnion: {
    title: "What's a Week at Charters' Union Like?",
    subtitle: "Start your day with ambition and end it with impact. At Charters' Union, every week pushes boundaries.",
  },
  learningOutcomes: {
    eyebrow: "WHAT YOU'LL MASTER",
    sidebarTitle: "LEARNING OUTCOMES",
    sidebarSubtitle: "Navigate through our mastery areas",

    comparisonTable: {
      title: "What Makes This Program Stand Out?",
      subtitle: "DGM™(Digital Growth & Marketing) VS TRADITIONAL EDUCATION",
      headers: ["", "DGM™ (Digital Growth & Marketing)", "Other Digital Marketing Courses"],
      rows: [
        { icon: "/Charters-icon/fundamental.svg", parameter: "Learning Focus", column1: "✓ End-to-end campaign execution with measurable ROI + AI", column2: "Theory-heavy modules" },
        { icon: "/Charters-icon/study.svg", parameter: "Coverage", column1: "✓ SEO, Paid Ads, Social Media, Automation, Analytics, GenAI", column2: "Limited platform exposure" },
        { icon: "/Charters-icon/institution-partner.svg", parameter: "Hands-on Depth", column1: "✓ 12+ live campaigns with Harvard case studies", column2: "Assignment-based learning" },
        { icon: "/Charters-icon/libaberyicon.svg", parameter: "Tools Exposure", column1: "✓ 15+ industry tools including Google Ads, Meta & GA4", column2: "Basic tool walkthroughs" },
        { icon: "/Charters-icon/careerroadmap.svg", parameter: "Industry Alignment", column1: "✓ Paid-Internship Aligned Curriculum ", column2: "Outdated or generic syllabus" },
        { icon: "/Charters-icon/jobs.svg", parameter: "Internship & Live Experience", column1: "✓ Faculty Guided in-class internship with real campaign", column2: "Simulated projects only" },
        { icon: "/Charters-icon/lifetime.svg", parameter: "Career Support", column1: "✓ 360° career support with 1:1 mock interviews & placement assistance", column2: "Limited placement guidance" },
        { icon: "/Charters-icon/graduate.svg", parameter: "Outcome", column1: "✓ 100% Job-Ready Digital Marketing Professional", column2: "Concept familiarity" }
      ]
    },
    title: {
      prefix: "The",
      highlight: "7 Learning Outcomes",
      suffix: ""
    },
    description: "We interviewed 100+ founders, CEO, CXOs,COO with one question: What makes someone genuinely useful in a Top Company globally within 5–7 months?\n\nTheir answers became 7 core outcomes that now shape every Charter course, project and pathway.",
    items: [
      {
        title: 'Data-driven decision making',
        description: "In today's digital age, data and the digital footprint it leaves are everywhere. The ability to use it effectively for evidence-backed decisions can truly set you apart.",
        highlight: 'The ability to use it effectively for evidence-backed decisions can truly set you apart.',
        subtitle: 'At Charters, by the end of the program, you will:',
        outcomes: [
          'Identify relevant data to solve problems, extract and analyze datasets, and generate actionable insights',
          'Effectively communicate insights through clear visualizations and a compelling narrative',
          'Align business decisions, experiments, or hypotheses with data-driven insights for impactful outcomes.',
        ],
        images: [
          {
            src: '',
            caption: 'Learn tools like Excel, Powerquery, SQL, Python and PowerBI',
          },
          {
            src: '',
            caption: 'Work on 25+ real-world startup datasets and get your hands dirty',
          },
          {
            src: '',
            caption: 'Get regular 1:1 mentorship, support and practice',
          },
        ],
        salaryTable: {
          headers: ["Job Role", "Entry-Level Salary", "Mid-Level Salary", "Senior / Lead Salary"],
          rows: [
            { role: "Digital Marketing Executive", entry: "~₹3 L – ₹6 L per year", mid: "~₹6 L – ₹12 L per year", senior: "₹12 L – ₹20 L+ per year" },
            { role: "Performance Marketing Specialist", entry: "~₹4 L – ₹8 L per year", mid: "~₹8 L – ₹18 L per year", senior: "₹18 L – ₹30 L+ per year" },
            { role: "SEO Specialist", entry: "~₹3 L – ₹7 L per year", mid: "~₹7 L – ₹15 L per year", senior: "₹15 L – ₹25 L+ per year" },
            { role: "Social Media Manager", entry: "~₹3 L – ₹6 L per year", mid: "~₹6 L – ₹14 L per year", senior: "₹14 L – ₹25 L+ per year" }
          ]
        },
      },
      {
        title: 'Customer Obsession',
        description: "One of Amazon's key leadership principles is deeply understanding your customer—their pain points, motivations, and alternatives—as the foundation for building effective solutions.",
        highlight: 'deeply understanding your customer',
        subtitle: 'At Charters, by the end of the program, you will:',
        outcomes: [
          'Define and communicate clear customer personas for a product or service',
          'Conduct thorough user research, interpret insights, and understand customer messaging',
          'Use frameworks like JTBD (Job-To-Be-Done), User Stories, and User Quotes to define user requirements',
        ],
        images: [
          {
            src: '',
            caption: 'Learn marketing and user research from top professors',
          },
          {
            src: '',
            caption: 'Interact with real customers while building a business',
          },
          {
            src: '',
            caption: 'Conduct customer discovery with early-stage startups',
          },
        ],
        mainImage: "",
      },
      {
        title: 'Effective Communication',
        description: 'Effective communication with team members, senior leadership, and external stakeholders is the most important predictor of career growth—especially as automation increases.',
        highlight: 'most important predictor of career growth',
        subtitle: 'At Charters, by the end of the program, you will:',
        outcomes: [
          'Confidently represent yourself and your ideas with clear and concise articulation',
          'Write compelling, brief and purpose driven documents',
          'Influence without authority at the workplace',
        ],
        images: [
          {
            src: '',
            caption: 'Learn the art of business storytelling, negotiations and presentations',
          },
          {
            src: '',
            caption: 'Gain 50+ public speaking opportunities and present ideas to top startup leaders',
          },
          {
            src: '',
            caption: 'Receive 1:1 coaching on executive presence and crafting your elevator pitch',
          },
        ],
        salaryTable: {
          headers: ["Job Role", "Entry-Level Salary", "Mid-Level Salary", "Senior / Lead Salary"],
          rows: [
            { role: "Digital Marketing Executive", entry: "~₹3 L – ₹6 L per year", mid: "~₹6 L – ₹12 L per year", senior: "₹12 L – ₹20 L+ per year" },
            { role: "Performance Marketing Specialist", entry: "~₹4 L – ₹8 L per year", mid: "~₹8 L – ₹18 L per year", senior: "₹18 L – ₹30 L+ per year" },
            { role: "SEO Specialist", entry: "~₹3 L – ₹7 L per year", mid: "~₹7 L – ₹15 L per year", senior: "₹15 L – ₹25 L+ per year" },
            { role: "Social Media Manager", entry: "~₹3 L – ₹6 L per year", mid: "~₹6 L – ₹14 L per year", senior: "₹14 L – ₹25 L+ per year" }
          ]
        },
      },
      {
        title: 'First Principles Problem Solving',
        description: 'As Elon Musk says, this is "the only thing worth mastering." Understanding problems at their core and building solutions is vital in startups\' ambiguous environments.',
        highlight: 'the only thing worth mastering',
        subtitle: 'At Charters, by the end of the program, you will:',
        outcomes: [
          'Deeply understand and communicate core problems',
          'Break down problems using frameworks like MECE and 80/20',
          'Identify key problem-solving levers and prioritize efforts on identified issues',
        ],
        images: [
          {
            src: '',
            caption: 'Analyze & break 100+ real startup business cases',
          },
          {
            src: '',
            caption: 'Access 50+ hours of workshops on structured problem-solving with examples',
          },
          {
            src: '',
            caption: 'Join bi-monthly moderated group discussions on trending business topics',
          },
        ],
        mainImage: "",
      },
      {
        title: 'Business Acumen',
        description: '"What will it really take for this business to be successful?" is a nuanced question that lies at the intersection of core business domains like marketing, finance, operations, and strategy.',
        highlight: 'What will it really take for this business to be successful?',
        subtitle: 'At Charters, by the end of the program, you will:',
        outcomes: [
          'Grasp and apply essential business frameworks and concepts',
          'Understand core business models, metrics, and flywheels',
          'Analyze revenue, cost, LTV, CAC and other levers that move the needle',
        ],
        images: [
          {
            src: '',
            caption: 'Attend 500+ hours of lectures by top B-school professors',
          },
          {
            src: '',
            caption: 'Work on live startup projects with leadership on real-world business challenges',
          },
          {
            src: '',
            caption: 'Solve 100+ renowned business cases in teams of 3-4',
          },
        ],
        mainImage: "",
      },
      {
        title: 'Agile Product Thinking',
        description: 'To succeed in high-growth startups, the key is to launch fast, fail fast; listen to customers, and continuously iterate on your product. This agile approach is fundamental to startup success.',
        highlight: 'launch fast, fail fast',
        subtitle: 'At Charters, by the end of the program, you will:',
        outcomes: [
          'Define hypotheses, launch experiments, and build solutions based on customer needs',
          'Develop a Minimum Viable Product and craft a GTM strategy to secure your first 100 customers',
          'Create clear success metrics, track them and iterate solutions based on feedback',
        ],
        images: [
          {
            src: '',
            caption: 'Attend 40+ hours of Product Management coursework',
          },
          {
            src: '',
            caption: 'Launch real products and go to market with Charters Startup Lab',
          },
          {
            src: '',
            caption: 'Gain an Agile scrum certification',
          },
        ],
        mainImage: "",
      },
      {
        title: 'Sales',
        description: 'The ability to effectively sell products or services is crucial for any business success. Understanding customer psychology, building relationships, and closing deals are essential startup skills.',
        highlight: 'crucial for any business success',
        subtitle: 'At Charters, by the end of the program, you will:',
        outcomes: [
          'Understand the process of selling in both B2C & B2B contexts',
          'Work backwards from an audience and product to create an efficient sales funnel',
          'Create a sales strategy for acquiring the first 100 customers for any product/service',
        ],
        images: [
          {
            src: '',
            caption: 'Undergo 40+ hours of sales coursework',
          },
          {
            src: '',
            caption: 'Get real exposure to selling via 1-day sales challenges with popular brands',
          },
          {
            src: '',
            caption: 'Make upwards of 5L in revenue via the dropshipping challenge in Term 1',
          },
        ],
        mainImage: "",
      },
      {
        title: 'Process Thinking',
        description: 'The ability to plan, execute and monitor a process is often overlooked. It is a key muscle to build if you want to be indispensable at the workplace and deliver end outcomes.',
        highlight: 'indispensable at the workplace',
        subtitle: 'At Charters, our goal is that by the end of the program every student will be able to:',
        outcomes: [
          'Understand what goes behind setting up business processes from scratch',
          'Deconstruct a customer journey funnel, conversion metrics and interventions required at every stage',
          'Build comprehensive trackers, define micro success metrics and create task distributions',
        ],
        images: [
          {
            src: '',
            caption: '25+ hours of workshops on program managing processes',
          },
          {
            src: '',
            caption: 'Internships at startups where you get to own a process end-to-end',
          },
          {
            src: '',
            caption: 'Manage business processes for your small business in term 1',
          },
        ],
        mainImage: "",
      },
    ]
  },
  layoutBanner: {
    placement: {
      imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784656491/charters-placement-report_yj1uj9.avif",
      imageAlt: "Charters Union Career Report 2025",
      heading: {
        highlight1: " 97%'",
        text1: " of students secured full time job offer by their ",
        highlight2: "4",
        text2: "th month of Internship, with \nthe highest CTC being ",
        highlight3: " ₹12",
        text3: "lakhs/month."
      },
      subtext: "100% Internship Rate • Average Salary Jump 2.35x • Proven track record verified by MarketQuation.",
      buttonText: "Placement Report",
      downloadUrl: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784656491/charters-placement-report_yj1uj9.avif",
      downloadFilename: "charters-placement-report-2025.jpg"
    },
    brochure: {
      imageSrc: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784840455/digital-growth-_-marketing-brochure_egxnfk.avif",
      imageAlt: "Charters'Union Brochure",
      programName: "Digital Growth & Marketing (DGM™)",
      subtext: "AI-First Curriculums • 4-6 Month Paid Internships • Global Placements",
      buttonText: "Download Brochure",
      downloadUrl: "https://res.cloudinary.com/ducgcl4dg/image/upload/v1784840455/digital-growth-_-marketing-brochure_egxnfk.avif",
      downloadFilename: "charters-dgm-brochure.avif"
    },
    advisor: {
      heading: "Ready to join ChartersUnion and take your first step towards success?",
      buttonText: "Talk to an advisor",
      phoneNumber: "+919836465083"
    }
  },
  certificateOverviewData: {
    title: "What is the DGM™ (Digital Growth & Marketing) from ChartersUnion?",
    descriptionParagraphs: [
      "Today, brands use search engines, social media, paid advertising, email marketing, and content marketing to reach the right audience and drive business growth. Digital Marketing has changed the way businesses operate.",
      "The Job-Ready AI-Poward Certificate in  DGM™ (Digital Growth & Marketing) at the Chartersunion Learning Support Centre helps learners build Job-ready skills through instructor-led digital marketing classes, Hardvard Level Case Study, Live projects, in-class faculty Guided internship and CareerPathx™ AI-Poward English Communication, Personal Branding, Corporate Bodylangusge and AI-poward Mock-interview, AI-ready Profile Base Jobs Search Engine.",
      "3-month theory foundation + 4-month inclass faculty guided internship program teaches modern ai-readay marketing strategies using real brand projects, marketing tools, and live campaign experience.. so that learners can confidently apply their knowledge in professional roles."
    ],
    whyChooseTitle: "Why Choose the Advanced Certificate in DGM™ (Digital Growth & Marketing)?",
    whyChooseDescription: "Right now, there is a huge demand for digital marketing professionals in the market. Those with the right skills can enter a dynamic marketing field. This program helps learners understand complete digital marketing skills while gaining practical experience with industry tools and live projects.",
    whyChoosePostTableDescription: "From building a strong foundation to running performance campaigns, every module combines theory with practical implementation. This curriculum combines the top digital marketing skills which the industry hires for.",
    offlineVsOnlineTitle: "Online vs Offline Digital Marketing Course: Why Classroom Training Works",
    offlineVsOnlineDescription: "Although both offline learning and online learning carry their own advantages, they suit people differently. For learners who prefer practical training and immediate feedback, classroom sessions can make learning more engaging and effective.",
    offlineVsOnlinePostTableDescription: "From building a strong foundation to running performance campaigns, every module combines theory with practical implementation. This curriculum combines the top digital marketing skills which the industry hires for.",
    offlineReasonsTitle: "Many learners prefer offline digital marketing classes because they offer:",
    programHighlights: [
      "Globally recognized certificate from ChartersUnion",
      "Learn 70+ digital marketing tools",
      "Real brand case studies and live campaign practice",
      "Career mentorship with 1:1 guidance",
      "Choose from 5 in-demand specializations across key marketing domains",
      "Access to live sessions and doubt-clearing support",
      "Learn through flexible online classes designed for working professionals"
    ],

    syllabusTitle: "Syllabus & Curriculum of the DGM™ (Digital Growth & Marketing)",
    syllabusDescription: "From building a strong foundation to running performance campaigns, every module combines theory with practical implementation. This curriculum combines the top digital marketing skills which the industry hires for.",
    syllabusPostTableDescription: "From building a strong foundation to running performance campaigns, every module combines theory with practical implementation. This curriculum combines the top digital marketing skills which the industry hires for.",
    skillsTitle: "Skills You Will Learn in the DGM™ (Digital Growth & Marketing)",
    skillsDescription: "The program helps learners build both technical marketing skills and business skills that are useful across industries.",
    skillsPostTableDescription: "From building a strong foundation to running performance campaigns, every module combines theory with practical implementation. This curriculum combines the top digital marketing skills which the industry hires for.",
    careerTitle: "Career Opportunities After Completing the DGM™ (Digital Growth & Marketing)",
    careerDescriptionParagraphs: [
      "Digital marketing has become one of the fastest-growing career fields in India. Today, every business wants to invest in their online presence to get leads.",
      "As a result, skilled digital marketers are in demand all over India. You’ll find a huge number of opportunities in this vast field."
    ],
    careerJobRolesTitle: "Job Roles:",
    careerJobRolesDescription: "Digital Marketing in India is amongst the top skills you can master. Some popular career opportunities after completing this digital marketing course include:",
    idealLearners: [
      {
        label: "Students and Fresh Graduates",
        text: "Build strong foundations in digital marketing, branding, and analytics to start your career sooner."
      },
      {
        label: "Marketing Professionals",
        text: "Upgrade your skills with advanced training in SEO, paid ads, automation, and campaign strategy."
      },
      {
        label: "Entrepreneurs and Business Owners",
        text: "Learn how to grow your brand online, increase visibility, and run performance-driven campaigns."
      },
      {
        label: "Freelancers",
        text: "Expand your service portfolio with skills in content marketing, social media, and performance marketing."
      },
      {
        label: "Career Changers",
        text: "Shift into digital marketing roles with practical projects, exposure to real campaigns, and industry-recognized certification."
      }
    ],
    careerTopJobRolesTitle: "Top Job Roles You Can Pursue:",
    certificationTitle: "Certification and Recognition",
    certificationDescription: "When you complete the Advanced Certificate in AI-Powered Digital Marketing & Communication from ChartersUnion, you earn a respected qualification that highlights your understanding of digital marketing strategies, tools, and real-world applications.",
    youWillReceiveTitle: "You Will Receive:",
    youWillReceive: [
      {
        label: "Certificate of Completion from ChartersUnion",
        text: "A globally recognized certificate that adds strong value to your resume."
      },
      {
        label: "Access to Career Services",
        text: "Guidance for job applications, interview preparation, and skill improvement."
      },
      {
        label: "Executive Alumni Status from ChartersUnion",
        text: "Connect with a wide network of marketing professionals and industry leaders."
      }
    ],
    // worthItTitle: "Is this Certification Worth It?",
    // worthItDescriptionParagraphs: [
    //   "Many learners want to grow in digital marketing, and this certificate is one of the most trusted ways to build strong skills.",
    //   "But is it truly worth investing in?",
    //   "Here are the reasons why this program can be a valuable choice for your career:"
    // ],
    receivebenefitTitle: "Why Choose Charters'Union Learning Support Centre for the DGM™(Digital Growth & Marketing)?",
    programreceivebenefit: "The Advanced Certificate in Digital Growth & Marketing focuses on practical learning through classroom sessions, industry projects, and mentor guidance. Every module is designed to help learners build skills that can be applied in real marketing campaigns.",
    receivebenefitTitlePostTableDescription: "Along with practical digital marketing classes, you will also build a portfolio through projects and campaign-based assignments. The program also helps learners prepare for interviews and entry-level marketing roles through dedicated career support.",

    // worthItReasons: [
    //   {
    //     label: "Learn Key Digital Marketing Skills",
    //     text: "You gain hands-on practice with SEO, social media, Google Ads, content strategy, analytics, and automation tools."
    //   },
    //   {
    //     label: "Improved Job Opportunities",
    //     text: "The certification helps you stand out during job applications and shows companies that you are trained in modern marketing methods."
    //   },
    //   {
    //     label: "Career Growth Potential",
    //     text: "Whether you are a fresher or a working professional, this course supports your move into digital marketing roles."
    //   },
    //   {
    //     label: "Flexible Learning Experience",
    //     text: "The online format allows you to learn at your own pace while managing work, studies, or personal commitments."
    //   },
    //   {
    //     label: "Networking and Industry Exposure",
    //     text: "The program offers access to expert mentors, professionals, and peers, helping you grow your network."
    //   }
    // ],

    hiringIndustriesTitle: "Industries Hiring Digital Marketing Professionals",
    hiringIndustries: [
      {
        label: "E-Commerce",
        text: "Focus on paid ads, SEO, social commerce, and influencer-led growth."
      },
      {
        label: "EdTech",
        text: "Demand for lead generation, performance campaigns, and content-driven marketing."
      },
      {
        label: "BFSI",
        text: "Branding, digital acquisition, personal finance content, and analytics-led targeting."
      },
      {
        label: "Healthcare",
        text: "Awareness campaigns, reputation management, and customer education online."
      },
      {
        label: "Media & Entertainment",
        text: "Content planning, audience engagement, and community growth."
      },
      {
        label: "Retail & D2C",
        text: "Conversion-focused ads, product marketing, and customer retention."
      }
    ],
    topCompaniesTitle: "Top Companies Hiring",
    topCompaniesDescriptionParagraphs: [
      "Graduates with strong digital skills are in demand across startups, agencies, and global tech giants."
    ],
    topCompaniesSubtitle: "Companies hiring certified marketers include:",
    topCompanies: [
      "Google",
      "Meta",
      "Amazon",
      "Deloitte",
      "Zomato",
      "Nykaa",
      "Adobe",
      "Tata Digital",
      "Accenture",
      "Ogilvy"
    ],
    table1: [
      {
        role: "Learning Format",
        salary: "Offline classroom training"
      },
      {
        role: "Duration",
        salary: "7 Months"
      },
      {
        role: "Learning Approach",
        salary: "~3 Months Foundation + 4 Months Internship, Harvard case studies, live projects, Local MSME project"
      },
      {
        role: "Projects",
        salary: "Real company campaign-based learning"
      },
      {
        role: "Career Support",
        salary: "CareerPathx™: Career Identity Engineering, Corporate English & Presentation Training, Paid internship in 7 countries, Jobs search engine"
      },
      {
        role: "Skills Covered",
        salary: "AI Powered-SEO, Google/Meta Ads, Customer Acquisition & A/B test, Viral Marketing Campaigns, Social Media Marketing, Growth Engineering, Performance Marketing, AI Powered-Content Marketing, Whatsapp/Email Automation, Marketing Analytics,"
      }
    ],
    table2: [
      {
        role: "Live instructor-led sessions",
        salary: "Mostly recorded lectures"
      },
      {
        role: "Real-time doubt solving",
        salary: "Limited live interaction"
      },
      {
        role: "Practical campaign activities",
        salary: "Individual learning"
      },
      {
        role: "Corporate Personality Development",
        salary: "Self-paced progress"
      },
      {
        role: "Faculty guide in-class internship",
        salary: "Independent practice"
      },
      {
        role: "1:1 with CareerLab on profile base career preparation ",
        salary: "Limited collaboration"
      },
    ],
    table3: [
      {
        role: "Marketing Fundamentals",
        salary: "Consumer behaviour, digital marketing ecosystem, branding fundamentals"
      },
      {
        role: " Search Engine Optimisation (SEO) ",
        salary: "Keyword research, on-page SEO, off-page SEO, technical SEO"
      },
      {
        role: "Search Engine Marketing (SEM)",
        salary: "Google Ads, paid campaigns, bidding strategies"
      },
      {
        role: "Social Media Marketing",
        salary: "Meta Ads, Instagram, LinkedIn, YouTube marketing"
      },
      {
        role: "Performance Marketing",
        salary: "Campaign optimisation, lead generation, conversion tracking"
      },
      {
        role: "Content & Email Marketing",
        salary: "Content strategy, copywriting, email campaigns"
      },
      {
        role: "Marketing Analytics & AI",
        salary: "Google Analytics, reporting dashboards, AI-powered marketing tools"
      },
    ],
    table4: [
      {
        role: "Search Engine Optimization (SEO)",
        salary: "Communication"
      },
      {
        role: "Google/Meta Ads",
        salary: "Strategic Thinking"
      },
      {
        role: "Performance Marketing",
        salary: "Problem Solving"
      },
      {
        role: "Social Media Marketing",
        salary: "Campaign Planning"
      },
      {
        role: "AI-Poward Content Marketing",
        salary: "Business Understanding"
      },
      {
        role: "Marketing Analytics",
        salary: "Data Interpretation"
      },
      {
        role: "Email Marketing",
        salary: "Collaboration"
      },
      {
        role: "AI-powered Marketing Tools",
        salary: "Presentation Skills"
      }
    ],
    table5: [
      {
        role: "Digital Marketing Executive",
        salary: "INR 5.2L"
      },
      {
        role: "SEO Specialist",
        salary: "INR 5.1L"
      },
      {
        role: "Social Media Strategist",
        salary: "INR 4.7L"
      },
      {
        role: "Performance Marketing Manager",
        salary: "INR 8.3L"
      },
      {
        role: "Growth Manager",
        salary: "INR 10.3L"
      }
    ],
    table6: [
      { role: "Instructor-led classroom sessions", salary: "Learn directly from experienced trainers" },
      { role: "Practical projects", salary: "Apply concepts through live campaigns" },
      { role: "Industry case studies", salary: "Understand real business scenarios" },
      { role: "Career support", salary: "Resume building, interview preparation, placement assistance" },
      { role: "Learning platform access", salary: "Revise lessons and practice anytime" },
      { role: "Mentor guidance", salary: "Continuous support throughout the digital marketing course" }
    ],
  },
};
