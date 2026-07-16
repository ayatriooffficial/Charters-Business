import type { CategoryKey, ProgramData } from "./types";

export type { CategoryKey, ProgramData };

export const categories: CategoryKey[] = [
  "No-code AI Development",
  "Creator Challenge",
  "Specialization",
  "CXO Mentorship Programme",
  "Dropshipping Challenge",
];

export const contentData: Record<string, ProgramData> = {
  "Dropshipping Challenge": {
    title: "Launch & Run an E-commerce Store",
    description:
      "From running marketing campaigns to managing supply chains, students build their own websites and compete for revenue.",
    achievement:
      "Students have dropshipped products ranging from pet supplies to green stationery worth over INR 2 Cr.",
    linkText: "Shop At Our Students' Stores",
    image:
      "https://res.cloudinary.com/ducgcl4dg/image/upload/v1778081795/vgq4vkzkcvefkpv1lss2_h6ydos.avif",
    specializations: [
      "Foundations of AI & No-Code Product Building",
      "Voice, Multimodal & Agentic AI",
      "AI Automation & Workflow Design",
      "AI SaaS Prototyping",
    ],
    tools: [
      { name: "Make", icon: "/Charters-icon/Cancel.svg" },
      { name: "OpenAI", icon: "/Charters-icon/Cancel.svg" },
      { name: "Canva", icon: "/Charters-icon/Cancel.svg" },
      { name: "Zapier", icon: "/Charters-icon/Cancel.svg" },
      { name: "Typedream", icon: "/Charters-icon/Cancel.svg" },
      { name: "Airtable", icon: "/Charters-icon/Cancel.svg" },
      { name: "Cloud", icon: "/Charters-icon/Cancel.svg" },
      { name: "Bolt", icon: "/Charters-icon/Cancel.svg" },
      { name: "Descript", icon: "/Charters-icon/Cancel.svg" },
      { name: "Notion", icon: "/Charters-icon/Cancel.svg" },
    ],
    techniques: [
      { name: "Prompt Engineering", icon: "/Charters-icon/Cancel.svg" },
      { name: "Reading API Docs", icon: "/Charters-icon/Cancel.svg" },
      { name: "Voice Transcription", icon: "/Charters-icon/Cancel.svg" },
      { name: "No-code Deployment", icon: "/Charters-icon/Cancel.svg" },
    ],
    projects: [
      {
        name: "Blockchain Decentralized Marketplace",
        description:
          "Create a blockchain-based marketplace with custom tokens and NFT integration",
        icon: "₿",
        color: "bg-yellow-100",
      },
      {
        name: "Fake News Detection",
        description:
          "Develop an AI model to identify and filter fake news using NLP",
        icon: "📰",
        color: "bg-pink-100",
      },
      {
        name: "Text Summarisation",
        description: "Build an NLP-powered tool for summarising large texts",
        icon: "📄",
        color: "bg-purple-100",
      },
    ],
  },
  "Creator Challenge": {
    title: "Become a Creator-preneur",
    description:
      "From identifying a content niche to building an audience, students are trained to grow their personal brands on Youtube, Instagram, and LinkedIn.",
    achievement: "Meet Our Resident Influencers",
    linkText: "Meet Our Resident Influencers",
    image:
      "https://res.cloudinary.com/ducgcl4dg/image/upload/v1778081795/pnh1arwigr92tkawxv6t_wetftd.avif",
    specializations: [
      "Foundations of AI & No-Code Product Building",
      "Voice, Multimodal & Agentic AI",
      "AI Automation & Workflow Design",
      "AI SaaS Prototyping",
    ],
    tools: [
      { name: "Make", icon: "/Charters-icon/Cancel.svg" },
      { name: "OpenAI", icon: "/Charters-icon/Cancel.svg" },
      { name: "Canva", icon: "/Charters-icon/Cancel.svg" },
      { name: "Zapier", icon: "/Charters-icon/Cancel.svg" },
      { name: "Typedream", icon: "/Charters-icon/Cancel.svg" },
      { name: "Airtable", icon: "/Charters-icon/Cancel.svg" },
      { name: "Cloud", icon: "/Charters-icon/Cancel.svg" },
      { name: "Bolt", icon: "/Charters-icon/Cancel.svg" },
      { name: "Descript", icon: "/Charters-icon/Cancel.svg" },
      { name: "Notion", icon: "/Charters-icon/Cancel.svg" },
    ],
    techniques: [
      { name: "Prompt Engineering", icon: "/Charters-icon/Cancel.svg" },
      { name: "Reading API Docs", icon: "/Charters-icon/Cancel.svg" },
      { name: "Voice Transcription", icon: "/Charters-icon/Cancel.svg" },
      { name: "No-code Deployment", icon: "/Charters-icon/Cancel.svg" },
    ],
    projects: [
      {
        name: "Blockchain Decentralized Marketplace",
        description:
          "Create a blockchain-based marketplace with custom tokens and NFT integration",
        icon: "₿",
        color: "bg-yellow-100",
      },
      {
        name: "Fake News Detection",
        description:
          "Develop an AI model to identify and filter fake news using NLP",
        icon: "📰",
        color: "bg-pink-100",
      },
      {
        name: "Text Summarisation",
        description: "Build an NLP-powered tool for summarising large texts",
        icon: "📄",
        color: "bg-purple-100",
      },
    ],
  },
  Specialization: {
    title: "Specialization",
    description:
      "After mastering the fundamentals, students choose a specialization and build real-world, scalable systems.",
    image:
      "https://res.cloudinary.com/ducgcl4dg/image/upload/v1778081795/m64yqpshdiwiztfj3xry_e03vqn.avif",
    specializationTracks: [
      "Software Development",
      "Artificial Intelligence & Machine Learning",
      "Blockchain & Cybersecurity",
      "Algorithmic Trading (High-Frequency Trading)",
    ],
    projects: [
      {
        name: "Blockchain Decentralized Marketplace",
        description:
          "Build a decentralized marketplace with smart contracts, custom tokens, and NFT integration.",
        icon: "₿",
        color: "bg-yellow-100",
      },
      {
        name: "Fake News Detection System",
        description:
          "Design an NLP-powered AI system to detect misinformation across news platforms.",
        icon: "📰",
        color: "bg-pink-100",
      },
      {
        name: "Text Summarisation Engine",
        description:
          "Create an NLP-based engine to summarize large documents and research papers.",
        icon: "📄",
        color: "bg-purple-100",
      },
    ],
    skills: [
      "Blockchain Fundamentals",
      "Cloud Computing",
      "Deep Learning",
      "Natural Language Processing (NLP)",
      "Cybersecurity",
      "Algorithmic Trading",
      "Low-Level Design (LLD)",
      "High-Level Design (HLD)",
      "Microservices Architecture",
      "Generative AI",
    ],
    subjectsLink: "/curriculum/local-consulting",
  },
  "CXO Mentorship Programme": {
    title: "Get Mentored by Top CXOs",
    description:
      "Experience one-on-one mentorship, coaching and guidance from CXOs across industries.",
    achievement: "Our Mentors Include",
    linkText: "Meet Our Mentors",
    image:
      "https://res.cloudinary.com/ducgcl4dg/image/upload/v1778081794/k9yb4pex58iqxdce2zru_xjcckt.avif",
    specializations: [
      "Foundations of AI & No-Code Product Building",
      "Voice, Multimodal & Agentic AI",
      "AI Automation & Workflow Design",
      "AI SaaS Prototyping",
    ],
    tools: [
      { name: "Make", icon: "/Charters-icon/Cancel.svg" },
      { name: "OpenAI", icon: "/Charters-icon/Cancel.svg" },
      { name: "Canva", icon: "/Charters-icon/Cancel.svg" },
      { name: "Zapier", icon: "/Charters-icon/Cancel.svg" },
      { name: "Typedream", icon: "/Charters-icon/Cancel.svg" },
      { name: "Airtable", icon: "/Charters-icon/Cancel.svg" },
      { name: "Cloud", icon: "/Charters-icon/Cancel.svg" },
      { name: "Bolt", icon: "/Charters-icon/Cancel.svg" },
      { name: "Descript", icon: "/Charters-icon/Cancel.svg" },
      { name: "Notion", icon: "/Charters-icon/Cancel.svg" },
    ],
    techniques: [
      { name: "Prompt Engineering", icon: "/Charters-icon/Cancel.svg" },
      { name: "Reading API Docs", icon: "/Charters-icon/Cancel.svg" },
      { name: "Voice Transcription", icon: "/Charters-icon/Cancel.svg" },
      { name: "No-code Deployment", icon: "/Charters-icon/Cancel.svg" },
    ],
    projects: [
      {
        name: "Blockchain Decentralized Marketplace",
        description:
          "Create a blockchain-based marketplace with custom tokens and NFT integration",
        icon: "₿",
        color: "bg-yellow-100",
      },
      {
        name: "Fake News Detection",
        description:
          "Develop an AI model to identify and filter fake news using NLP",
        icon: "📰",
        color: "bg-pink-100",
      },
      {
        name: "Text Summarisation",
        description: "Build an NLP-powered tool for summarising large texts",
        icon: "📄",
        color: "bg-purple-100",
      },
    ],
  },
  "No-code AI Development": {
    title: "AI-Powerd Job-Ready Foundation on Curriculum",
    description:
      "After mastering the basics, it's time to choose your path and specialize.",
    image:
      "https://res.cloudinary.com/ducgcl4dg/image/upload/v1778081794/dmmnhtok1iwgjpzvzgjw_l3zfw9.avif",
    specializations: [
      "Foundations of AI & No-Code Product Building",
      "Voice, Multimodal & Agentic AI",
      "AI Automation & Workflow Design",
      "AI SaaS Prototyping",
    ],
    tools: [
      { name: "Make", icon: "/Charters-icon/Cancel.svg" },
      { name: "OpenAI", icon: "/Charters-icon/Cancel.svg" },
      { name: "Canva", icon: "/Charters-icon/Cancel.svg" },
      { name: "Zapier", icon: "/Charters-icon/Cancel.svg" },
      { name: "Typedream", icon: "/Charters-icon/Cancel.svg" },
      { name: "Airtable", icon: "/Charters-icon/Cancel.svg" },
      { name: "Cloud", icon: "/Charters-icon/Cancel.svg" },
      { name: "Bolt", icon: "/Charters-icon/Cancel.svg" },
      { name: "Descript", icon: "/Charters-icon/Cancel.svg" },
      { name: "Notion", icon: "/Charters-icon/Cancel.svg" },
    ],
    techniques: [
      { name: "Prompt Engineering", icon: "/Charters-icon/Cancel.svg" },
      { name: "Reading API Docs", icon: "/Charters-icon/Cancel.svg" },
      { name: "Voice Transcription", icon: "/Charters-icon/Cancel.svg" },
      { name: "No-code Deployment", icon: "/Charters-icon/Cancel.svg" },
    ],
    projects: [
      {
        name: "Blockchain Decentralized Marketplace",
        description:
          "Create a blockchain-based marketplace with custom tokens and NFT integration",
        icon: "₿",
        color: "bg-yellow-100",
      },
      {
        name: "Fake News Detection",
        description:
          "Develop an AI model to identify and filter fake news using NLP",
        icon: "📰",
        color: "bg-pink-100",
      },
      {
        name: "Text Summarisation",
        description: "Build an NLP-powered tool for summarising large texts",
        icon: "📄",
        color: "bg-purple-100",
      },
    ],
  },
};

export const specializationToolMap: Record<string, string[]> = {
  "Foundations of AI & No-Code Product Building": [
    "OpenAI",
    "Canva",
    "Notion",
    "Typedream",
  ],
  "Voice, Multimodal & Agentic AI": ["OpenAI", "Descript", "Cloud", "Bolt"],
  "AI Automation & Workflow Design": [
    "Make",
    "Zapier",
    "Airtable",
    "Notion",
  ],
  "AI SaaS Prototyping": ["Typedream", "Bolt", "Cloud", "OpenAI"],
};

export const specializationTechniqueMap: Record<string, string[]> = {
  "Foundations of AI & No-Code Product Building": [
    "Prompt Engineering",
    "Reading API Docs",
    "No-code Deployment",
  ],
  "Voice, Multimodal & Agentic AI": [
    "Prompt Engineering",
    "Voice Transcription",
  ],
  "AI Automation & Workflow Design": [
    "Reading API Docs",
    "No-code Deployment",
  ],
  "AI SaaS Prototyping": [
    "Prompt Engineering",
    "Reading API Docs",
    "No-code Deployment",
  ],
};
