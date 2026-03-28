'use client';
import Image from 'next/image';
import { useState } from 'react';

const skills = [
    'Buisness Management',
    'Buisness Studies',
    'Buisness Analytics',
];

export default function ChartersInterviewAi() {
    const [form, setForm] = useState({
        skill: '',
        name: '',
        email: '',
        phone: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (form.name && form.email && form.skill) {
            setSubmitted(true);
        }
    };

    return (
        <div
            className="w-full h-full flex items-center justify-center"
            style={{
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
            }}
        >
            <div className="w-full h-full flex flex-col lg:flex-row overflow-hidden">

                {/* LEFT - Image */}
                <div className="hidden lg:block lg:w-1/2 h-full relative">
                    <Image
                        src="/home/ai_interview_leftPic.jpeg"
                        alt="AI Interview"
                        fill
                        priority
                        className="object-cover"
                        sizes="50vw"
                    />
                </div>

                {/* RIGHT - Form */}
                <div
                    className="w-full lg:w-1/2 h-full flex flex-col justify-center px-6 sm:px-8 lg:px-10 py-4 overflow-y-auto"
                >
                    {submitted ? (
                        <div className="text-center py-8">
                            <div className="w-14 h-14 rounded-full bg-[#B30437] flex items-center justify-center mx-auto mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-black mb-2">You are all set!</h3>
                            <p className="text-gray-500 text-sm">
                                We will send your interview link to{' '}
                                <span className="text-[#B30437]">{form.email}</span> shortly.
                            </p>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black leading-tight mb-4 lg:mb-6">
                                Get 1:1 Expert Guidance &<br />FREE Roadmap to stay ahead
                            </h2>

                            <div className="space-y-3">
                                {/* Skill select */}
                                <div>
                                    <label className="block text-sm font-medium text-black mb-1.5">
                                        Your Topic of Interest*
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="w-full border border-gray-300 px-4 py-2.5 text-sm text-gray-700 bg-white appearance-none focus:outline-none focus:border-black transition-colors"
                                            value={form.skill}
                                            onChange={(e) => setForm({ ...form, skill: e.target.value })}
                                        >
                                            <option value="" disabled>Select Program</option>
                                            {skills.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                        <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Name */}
                                <input
                                        className="bg-white w-full border border-gray-300 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                                    placeholder="Enter Name"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                />

                                {/* Email */}
                                <input
                                        className="bg-white w-full border border-gray-300 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                                    placeholder="Enter Email"
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                />

                                {/* Phone */}
                                <div className="flex gap-0">
                                        <div className="bg-white border border-gray-300 px-4 py-2.5 flex items-center gap-1 text-sm text-gray-600 shrink-0 border-r-0">
                                        <span>+91</span>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>
                                    <input
                                            className="bg-white flex-1 border border-gray-300 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                                        placeholder="Enter Phone"
                                        type="tel"
                                        value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    />
                                </div>

                                {/* CTA */}
                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-[#E91E8C] hover:bg-[#c9177a] text-white font-bold text-sm tracking-widest py-3 transition-colors duration-200 mt-1"
                                >
                                    CONTINUE
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}