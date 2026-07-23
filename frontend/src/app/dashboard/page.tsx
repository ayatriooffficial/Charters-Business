"use client";

import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CounsellorContact from '@/components/dashboard/CounsellorContact';

export default function DashboardPage() {
  const { user, isLoading, applications, navigateToRemoteDashboard } = useAuth();
  const router = useRouter();
  const [showWelcome, setShowWelcome] = useState(false);

  // Redirect all users and admins to the remote dashboard
  useEffect(() => {
    if (isLoading) return;

    if (!user) {
      router.push('/login');
      return;
    }

    if (user.role === 'admin' || user.role === 'recruiter') {
      navigateToRemoteDashboard('/admin/dashboard');
      return;
    }

    navigateToRemoteDashboard('/dashboard');
  }, [user, isLoading, navigateToRemoteDashboard, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#B30437] border-r-transparent mb-4"></div>
        <p className="text-gray-600">Redirecting to Dashboard...</p>
      </div>
    </div>
  );
}
