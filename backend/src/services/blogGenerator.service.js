import Blog from '../models/Blog.model.js';

// Predefined high-quality articles to use as fallback or testing (strictly commerce/business)
const PRESET_BLOGS = [
  {
    title: 'The Future of Corporate Accounting: Career Pathways in CBA®',
    author: 'Charters Finance Team',
    readTime: '15 min read',
    category: 'Corporate Finance',
    tags: ['cba', 'accounting', 'finance', 'career growth'],
    content: `## The Modern Corporate Accountant
    
In 2026, corporate accounting has transformed from simple bookkeeping to a core strategic function. Modern companies are looking for **Certified Business Accountants (CBA®)** who understand advanced analytical models, automation, and global compliance systems.

### What is the CBA® Specialization?

The CBA® path combines rigorous theoretical standards with live corporate case studies (aligned with Harvard, Columbia, and ACCA systems) to build finance leaders. Essential modules include:
1. **Financial Planning & Analysis (FP&A)**: Mapping budgets, cashflows, and corporate investments.
2. **AI-Led Corporate Accounting**: Utilizing modern ERPs and analytical tools to streamline compliance.
3. **Global Tax & GCC Readiness**: Preparing for cross-border financial systems across Singapore, Dubai, and the USA.

### Career Opportunities for CBA® Graduates
Graduates of this program enter highly lucrative roles such as:
* **FP&A Analyst**: Reviewing financial health and forecasting revenue.
* **Fintech Specialist**: Navigating digital banking and payment structures.
* **Internal Auditor**: Designing risk mitigation models for multinational enterprises.
`,
  },
  {
    title: 'How Digital Growth & Marketing (DGM™) is Redefining Brand Scaling',
    author: 'Vatsal Mehta',
    readTime: '12 min read',
    category: 'Growth Marketing',
    tags: ['dgm', 'digital marketing', 'user acquisition', 'brand strategy'],
    content: `## The Era of Performance Marketing
    
Traditional branding is no longer sufficient to scale businesses in 2026. Companies are looking for **Digital Growth & Marketing (DGM™)** experts who can bridge product management, consumer psychology, and data-driven user acquisition.

### Core Pillars of Digital Growth
To successfully scale a brand today, professionals focus on three pillars:
1. **Customer Acquisition Cost (CAC) Optimization**: Leveraging programmatic ads and viral loops to keep marketing costs efficient.
2. **Conversion Rate Optimization (CRO)**: Redesigning user experiences to ensure visitors convert into active customers.
3. **Retention & Content Commerce**: Building long-term user communities that buy repeatedly.

### Career Roles in DGM™
* **Performance Marketing Manager**: Scaling ad budgets and analyzing channel ROI.
* **Growth Product Manager**: Aligning product features with user growth strategy.
* **Brand Strategist**: Developing high-level omnichannel narratives.
`,
  },
  {
    title: 'Bridging Tech & Leadership: Why TBM™ is the C-Suite Fast-Track',
    author: 'Aparna Sen',
    readTime: '18 min read',
    category: 'Business Strategy',
    tags: ['tbm', 'management', 'leadership', 'tech business'],
    content: `## The Rise of Technical Business Managers
    
As technology dominates every industry, companies face a bottleneck: tech teams don't speak business, and business leaders don't speak tech. The **Technology & Business Management (TBM™)** program is designed to bridge this divide.

### Executive Skills for Modern Leaders
TBM™ prepares senior managers and aspiring executives through:
1. **CXO Mentorship**: Real-world strategic leadership advice from industry veterans.
2. **Product Growth Engineering**: Managing tech-driven product launches without needing to write code.
3. **Strategic Portfolios**: Assessing mergers, acquisitions, and technological integrations.

### Strategic Career Paths
TBM™ is built for C-suite preparation, leading to positions like:
* **Vice President of Operations**: Overseeing large-scale business integrations.
* **Strategic Growth Director**: Designing corporate expansion roadmaps.
* **C-Suite Executive**: Leading companies through digital transformation.
`,
  },
  {
    title: 'Demystifying ROI in Professional Business Education',
    author: 'Charters Team',
    readTime: '14 min read',
    category: 'Professional Skills',
    tags: ['roi', 'business school', 'career tips', 'mba'],
    content: `## Evaluating the Returns of Your Education
    
When choosing a professional course or MBA, the single most important metric is the **Return on Investment (ROI)**. Aspiring students must look beyond simple degree labels and analyze the actual financial and career outcomes of their investment.

### Key Factors for ROI Calculations
1. **Opportunity Cost & Duration**: Longer programs mean more time out of the job market. Accelerated programs (like 7-month DGM™ or 12-month TBM™) minimize this cost.
2. **Flexible Financing**: Low upfront seat bookings paired with EMI options (e.g. ₹5,555/month) keep student debt minimal.
3. **Average Post-Program CTC**: Comparing program fees to the average starting salary (like **24.5 LPA** for PGDM or **26.5 LPA** for MBA) provides a clear picture of how fast you recoup your education expenses.

Investing in industry-aligned certifications guarantees you enter high-impact corporate roles equipped with modern business skills.
`,
  }
];

/**
 * Calls the Gemini API to write a dynamic blog post.
 * Returns structured JSON.
 */
const generateDynamicBlogAI = async (apiKey) => {
  const promptText = `
You are a world-class content writer and career counselor for "Charters Business", a premier business and career education platform in India.
Write a highly engaging, professional, and educational blog post. 
The article must be tailored to commerce, corporate finance, accounting, growth marketing, or business management students looking for career growth.

STRICT FOCUS RULES:
• Only write about business, accounting, corporate finance, digital growth marketing, and tech-business management.
• Specifically align with these areas:
  - CBA® (Certified Business Accountant) / Corporate Finance & FP&A.
  - DGM™ (Digital Growth & Marketing) / Brand Strategy & Performance Marketing.
  - TBM™ (Technology & Business Management) / Executive Business Strategy & Leadership.
• Do NOT write software-related blogs (such as software development, coding, SQL, programming languages, web development, or software engineering).
• Focus on career roadmaps, interview prep, industry trends, and business skills in these domains.

You must output ONLY a valid JSON object matching this schema (do NOT include markdown code blocks like \`\`\`json, no trailing comments, just pure parseable JSON):
{
  "title": "A catchy, click-worthy, and SEO-friendly article title",
  "author": "Choose a realistic writer name or 'Charters Team'",
  "content": "Full article body in Markdown format, using ## for H2 subheadings, ### for H3 details, bold text, and bullet points. Write 4-5 substantial paragraphs. Make it highly educational, practical, and inspiring.",
  "readTime": "Calculated read time (e.g., '12 min read')",
  "category": "Choose one from: Business Strategy, Corporate Finance, Growth Marketing, Professional Skills",
  "tags": ["3 to 5 lowercase tags relevant to the topic"]
}
`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: promptText,
              },
            ],
          },
        ],
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    const errorMsg = data?.error?.message || 'Gemini API error';
    throw new Error(`Gemini generation failed: ${errorMsg}`);
  }

  const generatedText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!generatedText) {
    throw new Error('Gemini API returned an empty text content');
  }

  // Parse the output
  const cleaned = generatedText.replace(/```json|```/g, '').trim();
  const parsed = JSON.parse(cleaned);

  if (!parsed.title || !parsed.content) {
    throw new Error('Generated content structure is invalid');
  }

  return {
    title: parsed.title,
    content: parsed.content,
    author: parsed.author || 'Charters Team',
    readTime: parsed.readTime || '10 min read',
    category: parsed.category || 'Career Growth',
    tags: Array.isArray(parsed.tags) ? parsed.tags : ['career'],
  };
};

/**
 * Core Service to generate next pending blog.
 * Uses Gemini if configured, otherwise cycles through presets.
 */
export const generateNextBlog = async () => {
  console.log('🤖 Content Agent: Triggering blog generation...');

  const apiKey = (process.env.GEMINI_API_KEY || '').trim();
  let blogData = null;

  if (apiKey && apiKey !== 'your_gemini_api_key') {
    try {
      console.log('✨ Content Agent: Attempting dynamic AI generation via Gemini...');
      blogData = await generateDynamicBlogAI(apiKey);
      console.log('✅ Content Agent: Dynamic AI generation successful!');
    } catch (err) {
      console.error('⚠️ Content Agent: Dynamic AI generation failed. Falling back to preset blogs.', err.message);
    }
  } else {
    console.log('ℹ️ Content Agent: Gemini API key not set. Using preset fallback blogs.');
  }

  // Fallback if AI was skipped or failed
  if (!blogData) {
    const blogCount = await Blog.countDocuments();
    const preset = PRESET_BLOGS[blogCount % PRESET_BLOGS.length];
    blogData = {
      ...preset,
      title: `${preset.title} (Draft #${blogCount + 1})`,
    };
    console.log(`✅ Content Agent: Selected preset article "${blogData.title}"`);
  }

  // Save the blog in pending status
  const newBlog = await Blog.create({
    title: blogData.title,
    content: blogData.content,
    author: blogData.author,
    readTime: blogData.readTime,
    category: blogData.category,
    tags: blogData.tags,
    status: 'pending',
  });

  console.log(`💾 Content Agent: Draft blog saved in database (ID: ${newBlog._id})`);
  return newBlog;
};

export default {
  generateNextBlog,
};
