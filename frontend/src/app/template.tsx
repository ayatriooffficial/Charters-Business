'use client';

import { usePathname } from 'next/navigation';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isDashboard = pathname?.startsWith('/dashboard');
  const isAuthPage = pathname === '/login' || pathname === '/signup';
  const hideBreadcrumbs = isDashboard || isAuthPage;

  return (
    <>
      {!hideBreadcrumbs && <Breadcrumbs />}
      {children}
    </>
  );
}
