'use client';

import Link from 'next/link';
import PhoneOtpLogin from './PhoneOtpLogin';

type LoginFormMode = 'login' | 'signup';

export default function LoginForm({
  mode = 'login',
}: {
  mode?: LoginFormMode;
}) {
  const isSignup = mode === 'signup';

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
          {isSignup ? 'Create Your Account' : 'Login to Your Account'}
        </h2>
        <p className="text-gray-600 text-center">
          {isSignup
            ? 'Verify your phone and complete your account details'
            : 'Access your dashboard and track your application'}
        </p>
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
        <PhoneOtpLogin mode={mode} />
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-600 text-sm">
          {isSignup ? (
            <>
              Already have an account?{' '}
              <Link
                href="/login"
                className="text-[#B30437] hover:text-[#8B0329] font-semibold underline"
              >
                Log In
              </Link>
            </>
          ) : (
            <>
              Don&apos;t have an account?{' '}
              <Link
                href="/signup"
                className="text-[#B30437] hover:text-[#8B0329] font-semibold underline"
              >
                Sign Up
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

