import programsData from "@/lib/data/programs.json";
import institute from "@/lib/data/institute.json";
import faculty from "@/lib/data/faculty.json";
import homeData from "@/lib/data/home.json";

// Additional page-specific data
import { programmes } from "@/data/programmes";
import { jobs } from "@/data/jobs";
import { internships } from "@/data/internships";
import { careerPageData } from "@/data/careers";
import testimonials from "@/data/testimonials.json";
import { STATIC_BLOGS } from "@/data/staticBlogs";
import { 
  programs as applyPrograms,
  scholarships as applyScholarships,
  counsellors,
  applicationSteps,
  pageContent as applyPageContent
} from "@/data/applyPageData";

const programs = programsData.programs;

/* ---------------- FOOTER ---------------- */
function admissionFooter() {
  return `

---

💬 **Need personalized career guidance?**

Our admission experts can help you choose the right path.

 [📞 WhatsApp](https://wa.me/91XXXXXXXXXX)
 
 [Apply Now](https://chartersunion.com/apply)
`;
}

/* ---------------- FIND PROGRAM ---------------- */
function findProgram(question) {
  const q = question.toLowerCase();

  return programs.find(
    (p) =>
      q.includes(p.id) ||
      q.includes(p.name.toLowerCase()) ||
      (p.id === "mba" && (q.includes("cba") || q.includes("certified business accountant"))) ||
      (p.id === "pgdm" && (q.includes("dgm") || q.includes("digital growth") || q.includes("post graduate"))) ||
      (p.id === "executive" && (q.includes("tbm") || q.includes("technology") || q.includes("product growth")))
  );
}

/* ---------------- PROGRAM LIST ---------------- */
function buildProgramList() {
  return programs.map((p) => `• **${p.name}**`).join("\n");
}

/* ---------------- FACT REPLIES ---------------- */
function getFactReply(question, program) {
  const q = question.toLowerCase();
  if (!program) return null;

  // FEES
  if (q.includes("fee") || q.includes("cost") || q.includes("emi")) {
    return `
## 💰 ${program.name} — Fee Details

• **EMI Starts:** ${program.fees.emi_start}  
• **EMI Duration:** ${program.fees.emi_duration}  
• **No-Cost EMI:** ${program.fees.no_cost_emi}  
• **Scholarship:** ${program.fees.scholarship}

${admissionFooter()}
`;
  }

  // DURATION
  if (q.includes("duration")) {
    return `
## ⏱ ${program.name}

The program duration is **${program.duration}**.
`;
  }

  // ELIGIBILITY
  if (q.includes("eligibility")) {
    return `
## 📝 Eligibility — ${program.name}

${program.eligibility}

${admissionFooter()}
`;
  }

  // PLACEMENT SUPPORT
  if (q.includes("placement support")) {
    return `
## 📊 ${program.name} — Placement Support

Yes 👍 placement assistance is available.

• Resume building  
• Mock interviews  
• Career coaching  
• Placement drives & recruiter access

${admissionFooter()}
`;
  }

  // PLACEMENT STATS
  if (q.includes("placement") || q.includes("salary") || q.includes("ctc")) {
    const p = program.placement || program.career_growth;

    return `
## 📈 ${program.name} — Placement Highlights

• **Placement Rate:** ${p.placement_rate || p.promotion_rate}  
• **Average CTC:** ${p.average_ctc}  
• **Salary Range:** ${p.salary_range}

${admissionFooter()}
`;
  }

  // FORMAT
  if (q.includes("format") || q.includes("online") || q.includes("offline")) {
    return `
## 💻 Program Format

${program.name} is conducted in **${program.format}** format.
`;
  }

  return null;
}

/* ---------------- AI SAFE REPLY ---------------- */
async function getAIReply(question, program) {
  try {
    const programFocus = program 
      ? `The user is specifically asking about/referring to the following program: ${program.name}. Prioritize details of this program in your response while answering.`
      : "";

    const context = `
You have access to the complete database and page contents of Charters Union. Use ONLY the following details to answer the user's questions. Do not make up, assume, or invent details that are not present in this data.

### 🎓 PROGRAMS & COURSES AVAILABLE
${JSON.stringify(programsData.programs, null, 2)}

### 🏢 INSTITUTE OVERVIEW & DETAILS
${JSON.stringify(institute, null, 2)}

### 🎓 FACULTY, MENTORSHIP & NETWORKING
${JSON.stringify(faculty, null, 2)}

### 📈 INSTITUTE-WIDE PLACEMENT & HOME PAGE STATS
${JSON.stringify(homeData, null, 2)}

### 📚 DETAILED MODULES, CURRICULUMS, SEMESTERS, FEES & FAQS OF CORE PROGRAMMES
${JSON.stringify(programmes, null, 2)}

### 💼 CAREERS & OPEN POSITIONS AT CHARTERS BUSINESS
${JSON.stringify(jobs, null, 2)}

### 🎓 INTERNSHIPS AVAILABLE
${JSON.stringify(internships, null, 2)}

### 🏢 CAREERS OVERVIEW, GENERAL BENEFITS & FAQS
${JSON.stringify(careerPageData, null, 2)}

### 💬 ALUMNI & STUDENT TESTIMONIALS
${JSON.stringify(testimonials, null, 2)}

### 📰 PORTAL BLOG ARTICLES (STANDALONE NEWS & CAREER GUIDES)
${JSON.stringify(STATIC_BLOGS, null, 2)}

### 📝 ADMISSION & APPLICATION DETAIL DATA (STEPS, SCHOLARSHIPS, COUNSELLORS)
- **Degrees Levels Offered:** ${JSON.stringify(applyPrograms, null, 2)}
- **Scholarships details:** ${JSON.stringify(applyScholarships, null, 2)}
- **Admission Counsellors contact details:** ${JSON.stringify(counsellors, null, 2)}
- **Detailed Step-by-Step Admission Process:** ${JSON.stringify(applicationSteps, null, 2)}
- **Apply page configuration details:** ${JSON.stringify(applyPageContent, null, 2)}

${programFocus}
`;

    const systemPrompt = `
You are Ragini, the AI Admission Counselor for Charters Union (also referred to as Charters Business College).

STRICT RULES:
• Only answer using the provided context/data. Do NOT assume, invent, or make up facts.
• Keep replies structured, concise, and easy to read.
• Use headings (##) and subheadings (###) for structure.
• Highlight important values (like fees, CTC, durations, percentages, ROI) using **bold**.
• If asked about availability/options, answer clearly.
• Answer general questions (e.g. "fees", "placements", "ROI", "salary", "admission process", "eligibility") by comparing/summarizing info across ALL available programs (MBA/CBA, PGDM/DGM, and Executive/TBM) to provide a complete and informative answer. Do not say information is not available when general fees/placements/ROI are asked; extract them from the database and compare them.
• Specifically:
  - **ROI (Return on Investment):** If the user asks about ROI, MBA ROI, or PGDM ROI, explain it clearly using the program fee/EMI structure (EMI starts at ₹5,555/month, up to ₹16,000 scholarships, success fee, and seat booking ₹2,000) versus the outstanding placement outcomes (Average CTC: MBA/CBA is **26.5 LPA** with 3.05x average jump; PGDM/DGM is **24.5 LPA** with 2.5x hike; Executive/TBM is **38.5 LPA** with 1.8x increase). Point out the program durations: PGDM/DGM is **7 months**, MBA/CBA is **2 years**, Executive/TBM is **12 months**. Highlight that the short durations paired with high salaries yield an outstanding ROI.
  - **Fees:** Outline the EMI structure, no-cost EMI options, seat booking, scholarships, and success fees for each program.
  - **Placements:** Show placement rates (95% for MBA/CBA, 92% for PGDM/DGM, 98% promotion rate for Executive/TBM) and Average CTCs/Salary ranges.
• If the information is not present in the context at all, politely state: "I can help with programs, fees, placements, or admissions."

STRICT FORMAT RULES:
• Use markdown headings:
   ## Main Heading
   ### Sub Heading
• Use bullet lists:
   - Point 1
   - Point 2
• Do NOT write plain text headings.
• Keep structure clean.

${context}
`;

    let res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.GEMINI_API || ""}`,
        },
        body: JSON.stringify({
          model: "gemini-3.1-flash-lite",
          messages: [
            {
              role: "system",
              content: systemPrompt
            },
            {
              role: "user",
              content: question
            }
          ],
          temperature: 0.2
        }),
      }
    );

    let data = await res.json();
    
    // Fallback to gemini-2.5-flash-lite if the primary model fails
    if (!res.ok || data?.error) {
      console.warn("Primary model failed, falling back to gemini-2.5-flash-lite...");
      res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.GEMINI_API || ""}`,
          },
          body: JSON.stringify({
            model: "gemini-2.5-flash-lite",
            messages: [
              {
                role: "system",
                content: systemPrompt
              },
              {
                role: "user",
                content: question
              }
            ],
            temperature: 0.2
          }),
        }
      );
      data = await res.json();
    }
    
    if (data?.error) {
      console.error("Gemini API Error:", data.error.message);
      return "I can help with programs, fees, placements, or admissions." + admissionFooter();
    }

    const reply = data?.choices?.[0]?.message?.content || 
                  "I can help with programs, fees, placements, or admissions.";

    return reply + admissionFooter();
  } catch (err) {
    console.error("Chatbot Error:", err);
    return "Please contact our counselor for more details.";
  }
}

/* ---------------- MAIN FUNCTION ---------------- */
export default async function askBot(question) {
  const q = question.toLowerCase().trim();

  if (/^(hi|hello|hey|hii|namaste)/.test(q)) {
    return `
👋 Hello! Welcome to **Charters Union**.

I can help you with:
• Programs  
• Fees  
• Placements  
• Admissions  

How can I assist you today?
`;
  }

  const program = findProgram(q);

  if (!program && (q.includes("program") || q.includes("course") || q.includes("offer")) && q.split(" ").length <= 6) {
    return `
## 🎓 Available Programs

- **CBA™ (Certified Business Accountant)**
- **DGM™(Digital Growth & Marketing)**
- **TBM™(Technology & Business Management)**

Reply with a program name to get details.
`;
  }

  const factReply = getFactReply(q, program);
  if (factReply) return factReply;

  if (!program && /(bba|bcom|bca|phd|degree)/i.test(q)) {
    return `
We currently offer:

${buildProgramList()}

Would you like details about one of these?
`;
  }

  return await getAIReply(question, program);
}

//What is the overall ROI of the CBA program compared to DGM?