import { NextResponse } from "next/server";
import programsData from "@/lib/data/programs.json";
import institute from "@/lib/data/institute.json";
import faculty from "@/lib/data/faculty.json";
import homeData from "@/lib/data/home.json";
import { programmes } from "@/data/programmes";
import { homeStudents, cbaStudents, dgmStudents, tbmStudents } from "@/data/students";
import { facultyMembers } from "@/data/faculty";
import { jobs } from "@/data/jobs";
import { internships } from "@/data/internships";
import { careerPageData } from "@/data/careers";
import testimonials from "@/data/testimonials.json";
import {
  programs as applyPrograms,
  scholarships as applyScholarships,
  counsellors,
  applicationSteps,
  pageContent as applyPageContent,
} from "@/data/applyPageData";
import { COURSE_OPTIONS } from "@/data/courseOptions";

/**
 * GET /api/website-data
 * Serves the Charters Union website's live data as JSON for the
 * content-agent pipeline (messages, emails, blogs).
 *
 * NOTE: staticBlogs is intentionally EXCLUDED — the content-agent now
 * generates fresh blogs, so the old static ones are legacy.
 */
export async function GET() {
  return NextResponse.json({
    success: true,
    updatedAt: new Date().toISOString(),
    data: {
      courses: COURSE_OPTIONS,
      programs: programsData.programs,
      programmes: programmes,
      students: {
        home: homeStudents,
        cba: cbaStudents,
        dgm: dgmStudents,
        tbm: tbmStudents
      },
      institute,
      faculty,
      facultyMembers,
      home: homeData,
      jobs,
      internships,
      careers: careerPageData,
      testimonials,
      admissions: {
        programs: applyPrograms,
        scholarships: applyScholarships,
        counsellors,
        applicationSteps,
        pageContent: applyPageContent,
      },
    },
  });
}
