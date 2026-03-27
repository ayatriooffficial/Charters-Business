'use client';
import Image from 'next/image';
import { useState } from 'react';

const skills = [
    'Full Stack Development',
    'Machine Learning',
    'System Design',
    'Data Structures & Algorithms',
    'React / Next.js',
    'Java Backend',
    'DevOps & Cloud',
    'Product Management',
];

export default function ChartersInterviewAi() {
    const [form, setForm] = useState({
        skill: '',
        name: '',
        email: '',
        gradYear: '',
        phone: '',
        whatsapp: false,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (form.name && form.email && form.skill) {
            setSubmitted(true);
        }
    };

    return (
        <div className="min-h-screen w-full bg-white flex items-start justify-center">
            <div className="w-full">

                <div className="overflow-hidden flex flex-col lg:flex-row">

                    {/* LEFT*/}
                    <div className="w-full lg:w-1/2 relative min-h-[250px] sm:min-h-[350px] lg:min-h-screen">
                        <Image
                            src="/home/ai_interview_leftPic.jpeg"
                            alt="AI Interview"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    {/* RIGHT*/}
                    <div className="w-full lg:w-1/2 bg-white p-8 sm:p-10 flex flex-col justify-center">
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
                                <h4 className="text-lg font-semibold text-black mb-1">Test your skills for FREE!</h4>
                                <p className="text-gray-400 text-sm mb-6">with Charters AI-Powered Mock Interview</p>

                                <div className="space-y-3">
                                    {/* Skill select */}
                                    <div className="relative">
                                        <select
                                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white appearance-none focus:outline-none focus:border-[#B30437] transition-colors"
                                            value={form.skill}
                                            onChange={(e) => setForm({ ...form, skill: e.target.value })}
                                        >
                                            <option value="" disabled>Select Interview Skill</option>
                                            {skills.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                        <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>

                                    {/* Name */}
                                    <input
                                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#B30437] transition-colors"
                                        placeholder="Full Name"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    />

                                    {/* Email */}
                                    <input
                                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#B30437] transition-colors"
                                        placeholder="Email Address"
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    />

                                    {/* Grad year */}
                                    <input
                                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#B30437] transition-colors"
                                        placeholder="Graduation Year (e.g., 2026)"
                                        value={form.gradYear}
                                        onChange={(e) => setForm({ ...form, gradYear: e.target.value })}
                                    />

                                    {/* Phone */}
                                    <div className="flex gap-2">
                                        <div className="border border-gray-200 rounded-lg px-3 py-3 flex items-center gap-1 text-sm text-gray-600 shrink-0">
                                            <span>+91</span>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                        <input
                                            className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#B30437] transition-colors"
                                            placeholder="Phone number"
                                            type="tel"
                                            value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        />
                                    </div>

                                    {/* WhatsApp checkbox */}
                                    <label className="flex items-center gap-2 cursor-pointer mt-1">
                                        <input
                                            type="checkbox"
                                            className="accent-[#B30437] w-3.5 h-3.5"
                                            checked={form.whatsapp}
                                            onChange={(e) => setForm({ ...form, whatsapp: e.target.checked })}
                                        />
                                        <span className="text-xs text-gray-500">I wish to receive updates & confirmation via WhatsApp</span>
                                    </label>

                                    {/* Divider */}
                                    <div className="h-px bg-gray-100 my-1" />

                                    {/* CTA */}
                                    <button
                                        onClick={handleSubmit}
                                        className="w-full bg-[#B30437] hover:bg-[#960330] text-white font-semibold text-sm py-3.5 rounded-lg transition-colors duration-200"
                                    >
                                        Continue
                                    </button>

                                    {/* Social proof */}
                                    <p className="text-center text-xs text-gray-400 pt-1">
                                        <span className="font-medium text-gray-600">10K+</span> working professionals already enrolled
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
}