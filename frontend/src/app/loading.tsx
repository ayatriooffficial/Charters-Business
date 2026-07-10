import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="w-64 h-16 relative animate-skeletonFade">
        <Image
          src="/Chaters_Union.avif"
          alt="Charters Union of Business"
          fill
          className="object-contain"
          priority
          unoptimized
        />
      </div>
    </div>
  );
}