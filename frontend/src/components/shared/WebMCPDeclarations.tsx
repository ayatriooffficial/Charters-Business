"use client";

import { useEffect } from "react";

/**
 * WebMCP (Web Model Context Protocol) Declarations
 * Exposes machine-actionable tools to AI Agents for Agentic Browsing audits.
 */
export default function WebMCPDeclarations() {
  useEffect(() => {
    // Imperative WebMCP tool registration when browser supports navigator.modelContext
    if (typeof window !== "undefined" && "modelContext" in navigator) {
      try {
        const mc = (navigator as any).modelContext;
        if (mc?.registerTool) {
          mc.registerTool({
            name: "searchProgrammes",
            description: "Search job-ready training programmes at Charters' Union Kolkata",
            parameters: {
              type: "object",
              properties: {
                query: {
                  type: "string",
                  description: "Course or domain e.g. Accounting, Digital Marketing, Tech",
                },
              },
            },
          });

          mc.registerTool({
            name: "requestCareerCounselling",
            description: "Book a free 1:1 career counseling demo class with Charters' Union",
            parameters: {
              type: "object",
              properties: {
                studentName: { type: "string" },
                phone: { type: "string" },
              },
            },
          });
        }
      } catch {
        // Silently continue if experimental API flag is off
      }
    }
  }, []);

  return (
    <div aria-hidden="true" className="hidden pointer-events-none opacity-0 select-none">
      {/* Declarative WebMCP Tool 1: Programme Search */}
      <form
        // @ts-ignore
        toolname="searchProgrammes"
        tooldescription="Search job-ready training programmes including Certified Business Accountant, Digital Marketing, and Tech Business Management"
        action="/#programmes"
        method="GET"
      >
        <input
          type="text"
          name="query"
          // @ts-ignore
          toolparamdescription="Search term for courses or skills"
        />
        <button type="submit">Search</button>
      </form>

      {/* Declarative WebMCP Tool 2: Free 1:1 Career Counselling */}
      <form
        // @ts-ignore
        toolname="requestCareerCounselling"
        tooldescription="Request a 1:1 career counselling session or demo class with CareerPathx"
        action="/career-path"
        method="GET"
      >
        <input
          type="text"
          name="interest"
          // @ts-ignore
          toolparamdescription="Target career track or field of study"
        />
        <button type="submit">Request Demo</button>
      </form>
    </div>
  );
}
