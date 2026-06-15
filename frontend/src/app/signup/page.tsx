import type { Metadata } from "next";
import ChartersInterviewAiPage from "@/components/auth/ChartersInterviewAiPage";

export const metadata: Metadata = {
  title: "Sign Up | Charters Business",
  description:
    "Create your Charters Business account to apply, track your progress, and choose the course you're interested in.",
  alternates: {
    canonical: "/signup",
  },
  keywords: [
    "signup",
    "register",
    "create account",
    "charters business signup",
    "student registration",
  ],
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-12">
      <div className="w-full max-w-5xl h-[80vh]">
        <ChartersInterviewAiPage />
      </div>
    </main>
  );
}
