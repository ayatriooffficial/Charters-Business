"use client";

import Image from "next/image";

export default function Diversity() {
    return (
        <section className="bg-white">
            <div className="w-full border-t border-gray-200 overflow-hidden">
                <Image
                    src="https://res.cloudinary.com/ducgcl4dg/image/upload/v1793814531/chartersunion-diversity_oyelxd.avif"
                    alt="Charters Union Classroom and Student Diversity"
                    width={2482}
                    height={1054}
                    className="w-full h-auto object-cover block"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    priority
                />
            </div>
        </section>
    );
}
