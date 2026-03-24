'use client';

import React, { useState, useRef, useEffect } from 'react';
import { signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth, setupRecaptcha } from '@/lib/firebase';
import { countryCodes } from '@/data/applyPageData';
import { useAuth } from '@/context/AuthContext';

type Step = 'phone' | 'otp' | 'details';

export default function PhoneOtpLogin({ onSuccess }: { onSuccess?: () => void }) {
    const { loginWithPhone, signupWithPhone } = useAuth();
    const router = useRouter();

    const [step, setStep] = useState<Step>('phone');
    const [countryCode, setCountryCode] = useState('+91');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [idToken, setIdToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
    const [resendTimer, setResendTimer] = useState(0);

    const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
    const recaptchaVerifierRef = useRef<any>(null);

    // Countdown timer for resend
    useEffect(() => {
        if (resendTimer <= 0) return;
        const interval = setInterval(() => {
            setResendTimer((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [resendTimer]);

    // Cleanup recaptcha on unmount
    useEffect(() => {
        return () => {
            if (recaptchaVerifierRef.current) {
                recaptchaVerifierRef.current.clear();
            }
        };
    }, []);

    const handleSendOtp = async () => {
        setError('');

        const cleaned = phoneNumber.replace(/\D/g, '');
        if (cleaned.length < 7 || cleaned.length > 15) {
            setError('Please enter a valid phone number');
            return;
        }

        setIsLoading(true);

        try {
            if (!recaptchaVerifierRef.current) {
                recaptchaVerifierRef.current = setupRecaptcha('recaptcha-container');
            }
            const fullNumber = `${countryCode}${cleaned}`;
            const result = await signInWithPhoneNumber(auth, fullNumber, recaptchaVerifierRef.current);
            setConfirmationResult(result);
            setStep('otp');
            setResendTimer(30);
        } catch (err: any) {
            console.error('OTP send error:', err);
            if (err.code === 'auth/too-many-requests') {
                setError('Too many attempts. Please try again later.');
            } else if (err.code === 'auth/invalid-phone-number') {
                setError('Invalid phone number. Please check and try again.');
            } else {
                setError(err.message || 'Failed to send OTP. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleOtpChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 5) {
            otpRefs.current[index + 1]?.focus();
        }
    };

    const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            otpRefs.current[index - 1]?.focus();
        }
    };

    const handleOtpPaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
        if (pastedData.length === 0) return;

        const newOtp = [...otp];
        for (let i = 0; i < pastedData.length && i < 6; i++) {
            newOtp[i] = pastedData[i];
        }
        setOtp(newOtp);

        // Focus the next empty input or the last one
        const nextEmpty = newOtp.findIndex((v) => !v);
        otpRefs.current[nextEmpty === -1 ? 5 : nextEmpty]?.focus();
    };

    const handleVerifyOtp = async () => {
        setError('');

        const otpCode = otp.join('');
        if (otpCode.length !== 6) {
            setError('Please enter the complete 6-digit OTP');
            return;
        }

        if (!confirmationResult) {
            setError('Session expired. Please resend the OTP.');
            return;
        }

        setIsLoading(true);

        let token: string | null = null;
        try {
            // Verify OTP with Firebase
            const credential = await confirmationResult.confirm(otpCode);
            token = await credential.user.getIdToken();

            // Send the Firebase ID token to our backend
            const role = await loginWithPhone(token);

            if (onSuccess) {
                onSuccess();
            } else {
                if (role === 'admin' || role === 'recruiter') {
                    router.push('/admin/dashboard');
                } else {
                    router.push('/dashboard');
                }
            }
        } catch (err: any) {
            console.error('OTP verify error:', err);

            // If user not found (404), proceed to signup details step
            if (err.status === 404) {
                if (token) {
                    setIdToken(token);
                    setStep('details');
                    setError('');
                } else {
                    setError('Authentication completed but user data missing. Please try again.');
                }
            } else if (err.code === 'auth/invalid-verification-code') {
                setError('Incorrect OTP. Please check and try again.');
            } else if (err.code === 'auth/code-expired') {
                setError('OTP has expired. Please resend.');
            } else {
                setError(err.message || 'Verification failed. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignup = async () => {
        setError('');

        if (!name.trim() || !email.trim()) {
            setError('Please enter your name and email');
            return;
        }

        if (!idToken) {
            setError('Session expired. Please try logging in again.');
            setStep('phone');
            return;
        }

        setIsLoading(true);

        try {
            const role = await signupWithPhone(idToken, name, email);

            if (onSuccess) {
                onSuccess();
            } else {
                if (role === 'admin' || role === 'recruiter') {
                    router.push('/admin/dashboard');
                } else {
                    router.push('/dashboard');
                }
            }
        } catch (err: any) {
            console.error('Signup error:', err);
            setError(err.message || 'Signup failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleResend = async () => {
        if (resendTimer > 0) return;
        setOtp(['', '', '', '', '', '']);
        setStep('phone');
        setError('');
    };

    return (
        <div>
            {/* reCAPTCHA container (invisible) */}
            <div id="recaptcha-container"></div>

            {step === 'phone' ? (
                /* ── Step 1: Phone Number Input ── */
                <div className="space-y-4">
                    <div>
                        <label htmlFor="phone-country" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number *
                        </label>
                        <div className="flex gap-2">
                            <select
                                id="phone-country"
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                className="w-28 px-2 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B30437] focus:border-transparent bg-white text-sm"
                            >
                                {countryCodes.map((cc) => (
                                    <option key={cc.code} value={cc.code}>
                                        {cc.flag} {cc.code}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="tel"
                                id="phone-number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="Enter phone number"
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B30437] focus:border-transparent"
                                autoComplete="tel"
                            />
                        </div>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                            <p className="text-sm text-red-800">{error}</p>
                        </div>
                    )}

                    {/* Send OTP Button */}
                    <button
                        type="button"
                        onClick={handleSendOtp}
                        disabled={isLoading || !phoneNumber.trim()}
                        className="w-full bg-[#B30437] hover:bg-[#8B0329] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending OTP...
                            </span>
                        ) : (
                            <span className="flex items-center justify-center gap-2">
                                Send OTP
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        )}
                    </button>
                </div>
            ) : step === 'otp' ? (
                /* ── Step 2: OTP Verification ── */
                <div className="space-y-4">
                    {/* Info */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-sm text-blue-800">
                            OTP sent to <strong>{countryCode} {phoneNumber}</strong>
                        </p>
                    </div>

                    {/* OTP Inputs */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Enter 6-digit OTP *
                        </label>
                        <div className="flex gap-2 justify-center" onPaste={handleOtpPaste}>
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => { otpRefs.current[index] = el; }}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleOtpChange(index, e.target.value)}
                                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                    className="w-12 h-14 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B30437] focus:border-transparent"
                                    autoFocus={index === 0}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                            <p className="text-sm text-red-800">{error}</p>
                        </div>
                    )}

                    {/* Verify Button */}
                    <button
                        type="button"
                        onClick={handleVerifyOtp}
                        disabled={isLoading || otp.join('').length !== 6}
                        className="w-full bg-[#B30437] hover:bg-[#8B0329] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Verifying...
                            </span>
                        ) : (
                            'Verify & Login'
                        )}
                    </button>

                    {/* Resend */}
                    <div className="text-center">
                        {resendTimer > 0 ? (
                            <p className="text-sm text-gray-500">
                                Resend OTP in <span className="font-semibold text-[#B30437]">{resendTimer}s</span>
                            </p>
                        ) : (
                            <button
                                type="button"
                                onClick={handleResend}
                                className="text-sm text-[#B30437] hover:text-[#8B0329] font-medium underline"
                            >
                                Resend OTP
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                /* ── Step 3: User Details (Signup) ── */
                <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                        <p className="text-sm text-green-800">
                            Phone verified! Please complete your profile.
                        </p>
                    </div>

                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B30437] focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B30437] focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                            <p className="text-sm text-red-800">{error}</p>
                        </div>
                    )}

                    {/* Complete Signup Button */}
                    <button
                        type="button"
                        onClick={handleSignup}
                        disabled={isLoading || !name.trim() || !email.trim()}
                        className="w-full bg-[#B30437] hover:bg-[#8B0329] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Creating Account...
                            </span>
                        ) : (
                            'Complete Signup'
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}
