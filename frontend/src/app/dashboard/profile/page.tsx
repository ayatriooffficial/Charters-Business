"use client";

/*
import { useAuth } from '@/context/AuthContext';

export default function ProfilePage() {
    const { user } = useAuth();
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <div className="max-w-5xl mx-auto space-y-6 ">
            <div className="bg-white   ">
                <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
                <p className="text-gray-600 mt-1">Manage your account information</p>
            </div>

            <div className="bg-white  p-6 sm:p-8 ">
                <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                    <div className="w-24 h-24 rounded-full bg-[#B30437] text-white flex items-center justify-center text-3xl font-bold">
                        {user?.avatar ? (
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-full h-full rounded-full object-cover"
                            />
                        ) : (
                            getInitials(user?.name ?? '')
                        )}
                    </div>

                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl font-bold text-gray-900">{user?.name}</h2>
                        <p className="text-gray-600">{user?.email}</p>
                    </div>
                </div>
            </div>

            <div className="bg-white  p-6 ">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Account Information</h2>
                <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Account Status</span>
                        <span className="font-semibold text-green-600">Active</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Member Since</span>
                        <span className="font-semibold text-gray-900" suppressHydrationWarning>
                            {new Date().toLocaleDateString()}
                        </span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="text-gray-600">Account Type</span>
                        <span className="font-semibold text-gray-900 capitalize">{user?.role}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
*/

import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function ProfilePage() {
  const { navigateToRemoteDashboard } = useAuth();

  useEffect(() => {
    navigateToRemoteDashboard('/profile');
  }, [navigateToRemoteDashboard]);

  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#B30437] border-r-transparent mb-4"></div>
        <p className="text-gray-600">Redirecting to Profile...</p>
      </div>
    </div>
  );
}
