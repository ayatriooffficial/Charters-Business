import { Metadata } from "next";
import ChartersInterviewAiPage from "@/components/auth/ChartersInterviewAiPage";

export const metadata: Metadata = {
  title: "Login | Charters' Union",
  description:
    "Login to your Charters' Union account. Access your dashboard, track application status, view counseling schedules, and manage your profile.",
  alternates: {
    canonical: "/login",
  },
  keywords: [
    "login",
    "sign in",
    "student portal",
    "dashboard access",
    "charters business login",
  ],
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-12">
      <div className="w-full max-w-5xl h-[80vh]">
        <ChartersInterviewAiPage />
      </div>
    </div>
  );
}
