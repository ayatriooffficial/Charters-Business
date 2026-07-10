export interface DisplayBlog {
  _id?: string;
  title: string;
  author: string;
  readTime: string;
  category: string;
  content: string;
  tags?: string[];
  releasedAt?: string;
}

export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

export const STATIC_BLOG_CONTENTS: Record<string, string> = {
  "AI Agent Frameworks: What It Is & How It Works": `## The Rise of Agentic Workflows

In 2026, the discussion around Artificial Intelligence has shifted from simple chatbots to autonomous agents. Unlike traditional AI applications that respond to single prompts, **AI Agent Frameworks** allow systems to plan, execute multi-step workflows, handle tools, and self-correct their outputs.

### What is an AI Agent Framework?

An AI Agent Framework is a software framework that helps developers build autonomous systems. These systems possess:
1. **Memory**: Long-term and short-term memory to keep track of conversations and tasks.
2. **Planning**: The ability to break down complex tasks into smaller, manageable steps.
3. **Tools**: Capabilities to query databases, call external APIs, or execute code.

### Core Frameworks in 2026

Several frameworks have emerged as industry standards:
* **LangGraph**: Excellent for building cyclical and stateful multi-agent workflows.
* **CrewAI**: Designed for orchestrating group tasks where different AI agents play distinct roles (e.g., researcher, writer, validator).
* **AutoGen**: Microsoft's framework that enables multi-agent conversations to solve complex programming tasks.

## Why Businesses are Adopting AI Agents

AI Agents are transforming operations because they don't just answer questions; they complete jobs. For example, a customer support agent can retrieve user info, check refund eligibility rules, call the payment processor API to trigger a refund, and send a confirmation email—all without human intervention.`,

  "Will AI Replace Software Engineers? Truth, Opinions and Career Impact": `## The Software Engineering Shift

As generative AI models become increasingly proficient at writing, debugging, and refactoring code, many aspiring developers are asking a critical question: **Will AI replace software engineers?**

The short answer is **no, but it will fundamentally redefine what a software engineer does.**

### From Syntax Writers to System Architects

AI tools like GitHub Copilot, Cursor, and custom coding agents are highly efficient at generating boilerplate code and fixing syntax errors. However, they lack:
1. **Deep Business Context**: Understanding why a feature is being built and how it aligns with user needs.
2. **System Design & Architecture**: Designing scalable, distributed systems that integrate securely.
3. **Complex Debugging**: Troubleshooting edge-case race conditions in large legacy codebases.

### The Rise of the "AI-Augmented" Engineer

In 2026, the most successful engineers are those who know how to collaborate with AI. By offloading repetitive coding tasks to AI agents, human developers can focus on:
* **System Design & Security**
* **Product Management and UX**
* **Ensuring Data Privacy and Compliance**

Rather than shrinking, the software engineering field is expanding for developers who elevate their skills from syntax writing to high-level system engineering.`,

  "SQL Roadmap 2026: Learning Paths, Career Roles and Tools": `## Why SQL Remains King in 2026

Despite the proliferation of NoSQL, vector databases, and AI-driven data extraction tools, Structured Query Language (SQL) remains the absolute foundation of data handling. Whether you are building a backend application, performing data analytics, or training machine learning models, SQL is an indispensable skill.

### The 2026 SQL Learning Path

To master SQL today, you should follow this structured roadmap:

### Phase 1: Basic Queries
* **Basic Syntax**: SELECT, WHERE, ORDER BY, LIMIT.
* **Aggregations**: GROUP BY, HAVING, and standard aggregation functions like SUM, AVG, COUNT.

### Phase 2: Joins & Relational Design
* **Joins**: INNER JOIN, LEFT/RIGHT JOIN, FULL OUTER JOIN.
* **Relationships**: One-to-One, One-to-Many, and Many-to-Many relational designs.

### Phase 3: Advanced SQL
* **Window Functions**: ROW_NUMBER(), RANK(), DENSE_RANK(), and cumulative statistics.
* **Common Table Expressions (CTEs)**: Writing readable, modular queries using the \`WITH\` clause.
* **Performance Tuning**: Indexes, execution plans, and query optimization.

## Relevant Roles for SQL Experts
SQL is a core requirement for several high-paying roles:
1. **Data Analyst**: Querying relational databases to build business reports.
2. **Backend Engineer**: Managing system databases and database migrations.
3. **Data Engineer**: Constructing data pipelines and managing data warehouses (e.g., Snowflake, BigQuery).`,

  "Top AI Skills Every Student Should Learn in 2026": `## The New AI Literacy

Being "computer literate" is no longer enough. In 2026, employers expect a level of **AI literacy** across almost all business and technology domains. For students preparing to enter the job market, mastering these skills is key to securing competitive positions.

### Essential AI Skills to Master

### 1. Advanced Prompt Engineering
Moving beyond simple questions. Learn how to use **few-shot prompting**, **chain-of-thought prompting**, and **structured output parsing** to get reliable outputs from LLMs.

### 2. Retrieval-Augmented Generation (RAG)
Learn how businesses feed proprietary data to AI models securely. Understanding how document chunking, embeddings, and vector databases (like Pinecone or Chroma) work will make you a highly valuable hire in any tech-adjacent team.

### 3. Workflow Automation
Understand how to connect AI models with tools like Zapier, Make, or custom python scripts to automate manual tasks such as content creation, database entry, and report aggregation.

## How to Showcase Your AI Skills
Don't just write "AI" on your resume. Build projects:
* Automate a daily task and write a case study.
* Build a simple Q&A chatbot using a custom knowledge base.
* Integrate an AI translation or summarization API into a web project.`,

  "How to Build a Career in Data Analytics from Scratch": `## The Roadmap to Data Analytics

Data is often called the new oil, and companies are searching for professionals who can extract actionable insights from raw data. If you have no background in programming, entering **Data Analytics** is one of the most accessible routes into technology.

### Step-by-Step Learning Path

### Step 1: Advanced Excel
Excel is still the world's most popular data tool. Master VLOOKUP/XLOOKUP, Pivot Tables, Power Query, and basic statistical analysis.

### Step 2: SQL (Structured Query Language)
Learn to retrieve data directly from database systems. This is the single most critical technical skill for any data analyst.

### Step 3: BI & Visualization Tools
Master **Power BI** or **Tableau** to build interactive business dashboards that help leadership make decisions.

### Step 4: Python Foundations (Optional but Recommended)
Learn basic Python libraries like **Pandas** and **NumPy** for advanced data manipulation and cleaning.

## Preparing Your Portfolio
The best way to get hired is to prove you can do the work. Build 3 projects:
* A public dashboard analyzing open-source data (e.g., Kaggle datasets).
* An analysis query cleaning a messy raw database.
* A written presentation explaining the business insights derived from your project.`
};

export const STATIC_BLOGS: DisplayBlog[] = [
  {
    title: "AI Agent Frameworks: What It Is & How It Works",
    author: "Agnish Rawat",
    readTime: "20 min read",
    category: "Technology",
    content: STATIC_BLOG_CONTENTS["AI Agent Frameworks: What It Is & How It Works"],
  },
  {
    title: "Will AI Replace Software Engineers? Truth, Opinions and Career Impact",
    author: "Team Scaler",
    readTime: "14 min read",
    category: "Career Roadmaps",
    content: STATIC_BLOG_CONTENTS["Will AI Replace Software Engineers? Truth, Opinions and Career Impact"],
  },
  {
    title: "SQL Roadmap 2026: Learning Paths, Career Roles and Tools",
    author: "Tushar Bisht",
    readTime: "18 min read",
    category: "Career Roadmaps",
    content: STATIC_BLOG_CONTENTS["SQL Roadmap 2026: Learning Paths, Career Roles and Tools"],
  },
  {
    title: "Top AI Skills Every Student Should Learn in 2026",
    author: "Charters Team",
    readTime: "12 min read",
    category: "Professional Skills",
    content: STATIC_BLOG_CONTENTS["Top AI Skills Every Student Should Learn in 2026"],
  },
  {
    title: "How to Build a Career in Data Analytics from Scratch",
    author: "Career Desk",
    readTime: "16 min read",
    category: "Career Roadmaps",
    content: STATIC_BLOG_CONTENTS["How to Build a Career in Data Analytics from Scratch"],
  },
];
