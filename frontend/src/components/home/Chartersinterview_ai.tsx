'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import {
    signInWithPhoneNumber,
    ConfirmationResult,
    RecaptchaVerifier,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth, setupRecaptcha } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';

const skills = [
    'Buisness Management',
    'Buisness Studies',
    'Buisness Analytics',
];

type AuthError = Error & { code?: string; status?: number };

function getAuthError(error: unknown): AuthError {
    if (error instanceof Error) return error as AuthError;
    return new Error('Unexpected error') as AuthError;
}

export default function ChartersInterviewAi() {
    const { loginWithPhone } = useAuth();
    const router = useRouter();

    const [form, setForm] = useState({ skill: '', name: '', email: '', phone: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (form.name && form.email && form.skill) {
            setSubmitted(true);
        }
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginPhone, setLoginPhone] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState('');

    const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
    const [resendTimer, setResendTimer] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);

    // Countdown timer for resend
    useEffect(() => {
        if (resendTimer <= 0) return;
        const interval = setInterval(() => setResendTimer((p) => p - 1), 1000);
        return () => clearInterval(interval);
    }, [resendTimer]);

    // Cleanup reCAPTCHA on unmount
    useEffect(() => {
        return () => {
            recaptchaVerifierRef.current?.clear();
        };
    }, []);

    const handleSendOtp = async () => {
        setError('');
        const cleaned = loginPhone.replace(/\D/g, '');
        if (!cleaned || cleaned.length < 7) return;

        setIsLoading(true);
        try {
            if (!recaptchaVerifierRef.current) {
                recaptchaVerifierRef.current = setupRecaptcha('recaptcha-container');
            }
            const result = await signInWithPhoneNumber(
                auth,
                `+91${cleaned}`,
                recaptchaVerifierRef.current
            );
            setConfirmationResult(result);
            setOtpSent(true);
            setResendTimer(30);
        } catch (err) {
            const e = getAuthError(err);
            if (e.code === 'auth/too-many-requests') {
                setError('Too many attempts. Please try again later.');
            } else if (e.code === 'auth/invalid-phone-number') {
                setError('Invalid phone number. Please check and try again.');
            } else {
                setError(e.message || 'Failed to send OTP. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOtp = async () => {
        setError('');
        if (!otp || otp.length < 6) return;
        if (!confirmationResult) {
            setError('Session expired. Please resend the OTP.');
            return;
        }

        setIsLoading(true);
        try {
            const credential = await confirmationResult.confirm(otp);
            const token = await credential.user.getIdToken();
            await loginWithPhone(token);

            // Pre-fill phone into form and mark logged in
            setForm((prev) => ({ ...prev, phone: loginPhone }));
            setIsLoggedIn(true);
        } catch (err) {
            const e = getAuthError(err);
            if (e.code === 'auth/invalid-verification-code') {
                setError('Incorrect OTP. Please check and try again.');
            } else if (e.code === 'auth/code-expired') {
                setError('OTP has expired. Please resend.');
            } else {
                setError(e.message || 'Verification failed. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="w-full h-full flex items-center justify-center"
            style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
            }}
        >
            {/* invisible reCAPTCHA */}
            <div id="recaptcha-container"></div>

            <div className="w-full h-full flex flex-col sm:flex-row overflow-hidden">

                {/* LEFT Image */}
                <div className="w-full h-[40%] sm:w-1/2 sm:h-full relative">
                    <Image
                        src="/home/ai_interview_leftPic.jpeg"
                        alt="AI Interview"
                        fill
                        priority
                        className="object-cover"
                        sizes="50vw"
                    />
                </div>

                {/* RIGHT Form */}
                <div className="w-full h-[60%] sm:w-1/2 sm:h-full flex flex-col justify-center overflow-y-auto">
                    {submitted ? (
                        //Success screen
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

                    ) : !isLoggedIn ? (
                        // LOGIN
                        <div className="flex flex-col h-full justify-center px-4 sm:px-6 lg:px-12">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-[#6D6DCE] flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 mx-auto">
                                <img src="/Charters-icon/profile.svg" alt="profile" className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 invert" />
                            </div>

                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight mb-1.5 sm:mb-2 text-center">
                                Login to Your Account
                            </h2>
                            <p className="text-gray-500 text-sm sm:text-base mb-5 sm:mb-6 lg:mb-8 text-center">
                                Access your dashboard and track your application
                            </p>

                            <div className="space-y-4 sm:space-y-5">
                                {/* Phone */}
                                <div>
                                    <label className="block text-sm sm:text-base font-medium text-black mb-1.5 sm:mb-2">
                                        Phone Number*
                                    </label>
                                    <div className="flex">
                                        <div className="bg-white border border-gray-300 px-3 sm:px-4 py-2.5 sm:py-3 lg:py-3.5 flex items-center gap-1.5 text-sm sm:text-base text-gray-600 shrink-0 border-r-0">
                                            <span>+91</span>
                                            <img src="/Charters-icon/uparrow.svg" alt="arrow" width={14} height={14} className="opacity-55" />
                                        </div>
                                        <input
                                            className="bg-white flex-1 border border-gray-300 px-4 py-2.5 sm:py-3 lg:py-3.5 text-sm sm:text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#6D6DCE] transition-colors"
                                            placeholder="Enter phone number"
                                            type="tel"
                                            value={loginPhone}
                                            onChange={(e) => setLoginPhone(e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* OTP field */}
                                {otpSent && (
                                    <div>
                                        <label className="block text-sm sm:text-base font-medium text-black mb-1.5 sm:mb-2">
                                            Enter OTP*
                                        </label>
                                        <input
                                            className="bg-white w-full border border-gray-300 px-4 py-2.5 sm:py-3 lg:py-3.5 text-sm sm:text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#6D6DCE] transition-colors"
                                            placeholder="Enter 6-digit OTP"
                                            type="text"
                                            maxLength={6}
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                        />
                                        <p className="text-xs sm:text-sm text-gray-400 mt-1.5">
                                            OTP sent to +91 {loginPhone}
                                        </p>
                                    </div>
                                )}

                                {/* Error display */}
                                {error && (
                                    <p className="text-sm text-red-600">{error}</p>
                                )}

                                {/* Buttons */}
                                {!otpSent ? (
                                    <button
                                        onClick={handleSendOtp}
                                        disabled={isLoading || loginPhone.replace(/\D/g, '').length < 7}
                                        className="w-full bg-[#6D6DCE] hover:bg-[#5252B0] text-white font-bold text-sm sm:text-base tracking-widest py-3 sm:py-3.5 lg:py-4 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? 'SENDING...' : 'SEND OTP →'}
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            onClick={handleVerifyOtp}
                                            disabled={isLoading || otp.length < 6}
                                            className="w-full bg-[#6D6DCE] hover:bg-[#5252B0] text-white font-bold text-sm sm:text-base tracking-widest py-3 sm:py-3.5 lg:py-4 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isLoading ? 'VERIFYING...' : 'VERIFY & CONTINUE →'}
                                        </button>

                                        {/* Resend timer */}
                                        <p className="text-xs text-center text-gray-400">
                                            {resendTimer > 0 ? (
                                                <>Resend OTP in <span className="text-[#6D6DCE] font-semibold">{resendTimer}s</span></>
                                            ) : (
                                                <button
                                                    type="button"
                                                    onClick={() => { setOtp(''); setOtpSent(false); setError(''); }}
                                                    className="text-[#6D6DCE] underline font-medium"
                                                >
                                                    Resend OTP
                                                </button>
                                            )}
                                        </p>
                                    </>
                                )}

                                {/* Sign Up*/}
                                <p className="text-sm sm:text-base text-gray-500 text-center pt-1">
                                    Don't have an account?{' '}
                                    <a href="/signup" className="text-[#6D6DCE] font-semibold underline underline-offset-2 hover:text-[#5252B0] transition-colors">
                                        Sign Up
                                    </a>
                                </p>
                            </div>
                        </div>

                    ) : (
                        //MAIN FORM after login
                        <div className="flex flex-col h-full justify-center px-2 sm:px-3 lg:px-6">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black leading-tight mb-4 lg:mb-6">
                                Get 1:1 Expert Guidance &<br />FREE Roadmap to stay ahead
                            </h2>

                            <div className="space-y-3">
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

                                <input
                                    className="bg-white w-full border border-gray-300 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                                    placeholder="Enter Name"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                />

                                <input
                                    className="bg-white w-full border border-gray-300 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                                    placeholder="Enter Email"
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                />

                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-[#E91E8C] hover:bg-[#c9177a] text-white font-bold text-sm tracking-widest py-3 transition-colors duration-200 mt-1"
                                >
                                    CONTINUE
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}