'use client';

import React from 'react';
import Link from 'next/link';
import PhoneOtpLogin from './PhoneOtpLogin';

export default function LoginForm() {
  return (
    <div className="bg-white  p-6 sm:p-8">
      <div className="mb-6">
        <div className="w-16 h-16 bg-[#B30437] rounded-full  flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Login to Your Account
        </h2>
        <p className="text-gray-600 text-center">
          Access your dashboard and track your application
        </p>
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
        <PhoneOtpLogin />
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-600 text-sm">
          Don't have an account?{' '}
          <Link
            href="/apply"
            className="text-[#B30437] hover:text-[#8B0329] font-semibold underline"
          >
            Apply Now
          </Link>
        </p>
      </div>
    </div>
  );
}

