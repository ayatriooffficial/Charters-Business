import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white text-gray-900 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
        <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-gray-900 sm:border-r sm:border-gray-200 sm:pr-6">
          404
        </h1>
        <p className="text-base text-gray-500 font-medium">
          This page could not be found.
        </p>
      </div>
      <Link
        href="/"
        className="px-6 py-3 bg-[#B30437] hover:bg-[#8B0329] text-white font-bold rounded-xl shadow-lg shadow-red-100 transition-all hover:scale-105 duration-200 text-sm"
      >
        Go back to home page
      </Link>
    </div>
  );
}
