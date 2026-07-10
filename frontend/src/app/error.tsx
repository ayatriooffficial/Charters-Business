'use client'

import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.error('Error occurred:', error);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 px-4">
      <div className="max-w-md w-full text-center bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="inline-flex p-4 bg-red-50 rounded-full text-[#B30437] mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h2 className="text-2xl font-black tracking-tight text-gray-900 mb-2">Something went wrong!</h2>
        <p className="text-gray-500 text-sm mb-6">
          An unexpected error occurred. Don&apos;t worry, our team has been notified.
        </p>

        <div className="flex flex-col gap-3 mb-8">
          <button
            onClick={reset}
            className="w-full py-3 bg-[#B30437] hover:bg-[#8B0329] text-white font-bold rounded-xl shadow-md shadow-red-100 transition-colors"
          >
            Try again
          </button>
          
          <Link
            href="/"
            className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors text-sm block"
          >
            Go back Home
          </Link>
        </div>

        <div className="border-t border-gray-100 pt-6">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Or explore other pages</p>
          <div className="flex justify-center gap-4 text-sm font-semibold text-[#B30437]">
            <Link href="/career-path" className="hover:underline">Career Quiz</Link>
            <span className="text-gray-300">•</span>
            <Link href="/careers" className="hover:underline">Careers</Link>
            <span className="text-gray-300">•</span>
            <Link href="/student-life" className="hover:underline">Student Life</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
