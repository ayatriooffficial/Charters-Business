"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isDashboard = pathname?.startsWith("/dashboard");
  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const iscareers = pathname?.startsWith("/careers/");
  const isadmin = pathname?.startsWith("/admin/");
  const hideNavFooter = isDashboard || isAuthPage || iscareers || isadmin;

  return (
    <>
      {!hideNavFooter && <Navbar />}
      {hideNavFooter ? (
        children
      ) : (
        <main className="flex-grow">
          {children}
        </main>
      )}
      {!hideNavFooter && <Footer />}
    </>
  );
}


