'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import {
    signInWithPhoneNumber,
    ConfirmationResult,
    RecaptchaVerifier,
} from 'firebase/auth';
import { auth, setupRecaptcha } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';
import { COURSE_OPTIONS } from '@/data/courseOptions';
type AuthStep = 'phone' | 'password' | 'otp' | 'details' | 'done';

type AuthError = Error & { code?: string; status?: number };
function getAuthError(error: unknown): AuthError {
    if (error instanceof Error) return error as AuthError;
    return new Error('Unexpected error') as AuthError;
}

export default function ChartersInterviewAi() {
    const { user, loginWithPhone, signupWithPhone, login, quickLogin, navigateToRemoteDashboard } = useAuth();
    const [authStep, setAuthStep] = useState<AuthStep>('phone');
    const [loginPhone, setLoginPhone] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
    const [idToken, setIdToken] = useState<string | null>(null);
    const [signupPassword, setSignupPassword] = useState('');
    const [resendTimer, setResendTimer] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isQuickLoggingIn, setIsQuickLoggingIn] = useState(true); // start true to block OTP flash
    const [error, setError] = useState('');

    const [signupName, setSignupName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupProgram, setSignupProgram] = useState('');

    const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
    const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);
    const hasAttemptedQuickLogin = useRef(false);
    // If already logged in, mark as done immediately
    useEffect(() => {
        if (user) {
            setAuthStep('done');
            // Automatically redirect to remote dashboard based on role
            if (user.role === 'admin' || user.role === 'recruiter') {
                navigateToRemoteDashboard('/admin/dashboard');
            } else {
                navigateToRemoteDashboard('/dashboard');
            }
        }
    }, [user, navigateToRemoteDashboard]);

    // Attempt silent quick login on mount (trustedDevice cookie)
    useEffect(() => {
        if (user) {
            setIsQuickLoggingIn(false);
            return;
        }

        if (!hasAttemptedQuickLogin.current) {
            hasAttemptedQuickLogin.current = true;

            quickLogin()
                .catch(() => { })
                .finally(() => setIsQuickLoggingIn(false));
        }
    }, [user]);

    useEffect(() => {
        if (resendTimer <= 0) return;
        const interval = setInterval(() => setResendTimer((p) => p - 1), 1000);
        return () => clearInterval(interval);
    }, [resendTimer]);

    // Setup RecaptchaVerifier ONLY ONCE after component mounts.
    // DO NOT call .render() here — Firebase calls it automatically inside signInWithPhoneNumber.
    // The container is created dynamically on document.body by setupRecaptcha — outside React's tree.
    // Setup RecaptchaVerifier - Commented out per OTP bypass design
    /*
    useEffect(() => {
        if (!recaptchaVerifierRef.current) {
            console.log('[ChartersInterviewAi] Initializing RecaptchaVerifier...');
            try {
                recaptchaVerifierRef.current = setupRecaptcha();
                console.log('[ChartersInterviewAi] RecaptchaVerifier instance created successfully.');
            } catch (err) {
                console.error('[ChartersInterviewAi] Failed to setup RecaptchaVerifier:', err);
            }
        }
        // Cleanup on unmount
        return () => {
            if (recaptchaVerifierRef.current) {
                console.log('[ChartersInterviewAi] Cleaning up RecaptchaVerifier...');
                try {
                    recaptchaVerifierRef.current.clear();
                } catch (e) {
                    console.error('[ChartersInterviewAi] Error clearing RecaptchaVerifier:', e);
                }
                recaptchaVerifierRef.current = null;
                // Also remove the dynamically created container from body
                const container = document.getElementById('firebase-recaptcha-root');
                if (container) container.remove();
            }
        };
    }, []);
    */

    const handleSendOtp = async () => {
        setError('');
        const cleaned = loginPhone.replace(/\D/g, '');
        // Validate as 10-digit phone number for India (+91)
        if (!cleaned || cleaned.length !== 10) { setError('Please enter a valid 10-digit phone number.'); return; }

        setIsLoading(true);
        try {
            const fullNumber = `+91${cleaned}`;
            console.log('[ChartersInterviewAi] Checking user existence for phone:', fullNumber);

            // 1. Check if user exists
            const API_V1 = (process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "/api/backend") + "/api/v1";
            const checkRes = await fetch(`${API_V1}/auth/check-user`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phoneNumber: fullNumber })
            });
            const checkData = await checkRes.json();

            if (checkRes.ok && checkData?.data?.exists) {
                console.log('[ChartersInterviewAi] Existing user detected. Redirecting to password step.');
                setAuthStep('password');
                setIsLoading(false);
                return;
            }

            // Directly proceed to registration details step (bypass OTP)
            console.log('[ChartersInterviewAi] New user. Proceeding directly to signup details step (bypass OTP).');
            setIdToken(`bypass-token-${fullNumber}`);
            setAuthStep('details');
        } catch (err) {
            const e = getAuthError(err);
            console.error('[ChartersInterviewAi] User check failed:', {
                code: e.code,
                message: e.message,
                name: e.name,
                rawError: err,
            });
            setError(`Failed to proceed: ${e.message || 'Unknown network error.'}`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleOtpChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);
        if (value && index < 5) otpRefs.current[index + 1]?.focus();
    };

    const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) otpRefs.current[index - 1]?.focus();
    };

    const handleOtpPaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
        if (!pasted.length) return;
        const newOtp = [...otp];
        for (let i = 0; i < pasted.length && i < 6; i++) newOtp[i] = pasted[i];
        setOtp(newOtp);
        const nextEmpty = newOtp.findIndex((v) => !v);
        otpRefs.current[nextEmpty === -1 ? 5 : nextEmpty]?.focus();
    };

    const handleVerifyOtp = async () => {
        setError('');
        const otpCode = otp.join('');
        if (otpCode.length !== 6) { setError('Please enter the complete 6-digit OTP.'); return; }


        if (!confirmationResult) {
            setError('Session expired. Please resend the OTP.');
            return;
        }
        setIsLoading(true);
        let token: string | null = null;
        try {
            const credential = await confirmationResult.confirm(otpCode);
            token = await credential.user.getIdToken();
            const role = await loginWithPhone(token);
            if (role === 'admin' || role === 'recruiter') {
                await navigateToRemoteDashboard('/admin/dashboard');
            } else {
                await navigateToRemoteDashboard('/dashboard');
            }
        } catch (err) {
            const e = getAuthError(err);
            if (e.status === 404) {
                // New user — collect details
                if (token) { setIdToken(token); setAuthStep('details'); setError(''); }
                else setError('Authentication failed. Please try again.');
            } else if (e.code === 'auth/invalid-verification-code') {
                setError('Incorrect OTP. Please try again.');
            } else if (e.code === 'auth/code-expired') {
                setError('OTP expired. Please resend.');
            } else {
                setError(e.message || 'Verification failed. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignup = async () => {
        setError('');
        const isCurrentAdmin = loginPhone.replace(/\D/g, '').endsWith('1234567890');
        const nameToSubmit = isCurrentAdmin ? (signupName.trim() || 'System Admin') : signupName;
        const emailToSubmit = isCurrentAdmin ? (signupEmail.trim() || 'admin@chartersunion.com') : signupEmail;
        const programToSubmit = isCurrentAdmin ? (signupProgram || COURSE_OPTIONS[0] || 'General') : signupProgram;

        if (!nameToSubmit.trim() || !emailToSubmit.trim() || !signupPassword || !programToSubmit) {
            setError('Please fill in all fields.');
            return;
        }
        if (signupPassword.length < 8) {
            setError('Password must be at least 8 characters long.');
            return;
        }
        if (!idToken) { setError('Session expired. Please start again.'); setAuthStep('phone'); return; }

        setIsLoading(true);
        try {
            const role = await signupWithPhone(idToken, nameToSubmit, emailToSubmit, signupPassword, programToSubmit);
            if (role === 'admin' || role === 'recruiter') {
                await navigateToRemoteDashboard('/admin/dashboard');
            } else {
                await navigateToRemoteDashboard('/dashboard');
            }
        } catch (err) {
            const e = getAuthError(err);
            setError(e.message || 'Signup failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleResend = () => {
        if (resendTimer > 0) return;
        setOtp(['', '', '', '', '', '']);
        setAuthStep('phone');
        setError('');
    };

    const handlePasswordLogin = async () => {
        setError('');
        if (!loginPassword) {
            setError('Please enter your password');
            return;
        }

        setIsLoading(true);
        try {
            const fullNumber = `+91${loginPhone.replace(/\D/g, '')}`;
            const role = await login(fullNumber, loginPassword);
            if (role === 'admin' || role === 'recruiter') {
                await navigateToRemoteDashboard('/admin/dashboard');
            } else {
                await navigateToRemoteDashboard('/dashboard');
            }
        } catch (err: unknown) {
            const authError = getAuthError(err);
            setError(authError.message || 'Login failed. Please check your password.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="w-full h-full bg-white flex items-center justify-center"
        >
            {/* reCAPTCHA container is managed dynamically on document.body by setupRecaptcha() */}

            <div className="w-full h-full flex flex-col sm:flex-row overflow-hidden">

                {/* LEFT image */}
                <div className="w-full h-[50%] sm:w-1/2 sm:h-full relative">
                    <Image src="https://res.cloudinary.com/ducgcl4dg/image/upload/v1784539837/ai-reday_marketing_and_accounting_course_login_djkluu.avif" alt="AI Interview" fill className="object-cover" sizes="50vw" />
                </div>

                {/* RIGHT panel */}
                <div className="w-full h-[50%] sm:w-1/2 sm:h-full flex flex-col overflow-y-auto px-4 sm:px-6 lg:px-12 py-8">
                    <div className="m-auto w-full max-w-[450px]">

                    {isQuickLoggingIn ? (
                        /* ── QUICK LOGIN IN PROGRESS ── */
                        <div className="flex flex-col items-center justify-center py-12">
                            <div className="w-10 h-10 rounded-full border-4 border-[#6D6DCE] border-t-transparent animate-spin mb-4" />
                            <p className="text-sm text-[#5f6368]">Checking session...</p>
                        </div>

                    ) : authStep === 'done' ? (
                        /* ── SUCCESS ── */
                        <div className="text-center py-8">
                            <div className="w-14 h-14 rounded-full bg-[#6D6DCE] flex items-center justify-center mx-auto mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-black mb-2">You&apos;re logged in!</h3>
                            <p className="text-[#5f6368] text-sm">You can now continue.</p>
                        </div>

                    ) : authStep === 'phone' ? (
                        /* ── STEP 1: PHONE ── */
                        <>
                            <div className="flex items-center justify-center mb-2 sm:mb-2 lg:mb-2 mx-auto">
                                <h2 className="text-2xl sm:text-2xl font-bold text-black text-center px-10">Take your career to the next level now!</h2>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm sm:text-base font-medium text-black mb-1.5">
                                        Phone Number*
                                    </label>
                                    <div className="flex">
                                        <div className="bg-white border border-gray-300 px-3 sm:px-4 py-2 sm:py-2 flex items-center gap-1.5 text-sm sm:text-base text-gray-600 shrink-0 border-r-0">
                                            <span>+91</span>
                                            <img src="/Charters-icon/uparrow.svg" alt="arrow" width={14} height={14} className="opacity-55" />
                                        </div>
                                        <input
                                            className="bg-white flex-1 border border-gray-300 px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#5f6368] placeholder-gray-400 focus:outline-none focus:border-[#6D6DCE] transition-colors"
                                            placeholder="Enter phone number"
                                            type="tel"
                                            value={loginPhone}
                                            onChange={(e) => setLoginPhone(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && handleSendOtp()}
                                            required
                                            pattern="[0-9]{10}"
                                            title="Please enter a valid 10-digit phone number"
                                        />
                                    </div>
                                    <p className="text-[#5f6368] text-[12px] sm:text-[12px] mb-2 text-left">
                                        Whatsapp linked phone number only
                                    </p>
                                </div>
                                {error && <p className="text-sm text-[#B30437]">{error}</p>}
                                <button
                                    onClick={handleSendOtp}
                                    disabled={isLoading || loginPhone.replace(/\D/g, '').length !== 10}
                                    className="w-full bg-[#222222] hover:bg-[#000000] cursor-pointer text-white font-bold text-sm sm:text-base tracking-widest py-2 sm:py-3 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'VERIFYING...' : 'CONTINUE →'}
                                </button>
                            </div>
                        </>

                    ) : authStep === 'password' ? (
                        /* ── STEP 1.5: PASSWORD (returning user only) ── */
                        <>
                            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-1.5 text-center">
                                Welcome Back!
                            </h2>
                            <p className="text-[#5f6368] text-sm sm:text-base mb-6 text-center">
                                Enter your password for <span className="font-semibold">+91 {loginPhone}</span>
                            </p>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-black mb-1.5">
                                        Password*
                                    </label>
                                    <input
                                        className="bg-white w-full border border-gray-300 px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#5f6368] placeholder-gray-400 focus:outline-none focus:border-[#6D6DCE] transition-colors"
                                        placeholder="Enter your password"
                                        type="password"
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handlePasswordLogin()}
                                    />
                                </div>
                                {error && <p className="text-sm text-[#B30437]">{error}</p>}
                                <button
                                    onClick={handlePasswordLogin}
                                    disabled={isLoading || !loginPassword}
                                    className="w-full bg-[#222222] hover:bg-[#000000] text-white font-bold text-sm sm:text-base tracking-widest py-3 sm:py-3.5 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'LOGGING IN...' : 'LOGIN →'}
                                </button>
                                <div className="text-center mt-4">
                                    <button
                                        type="button"
                                        onClick={() => { setAuthStep('phone'); setLoginPassword(''); setError(''); }}
                                        className="text-sm text-[#5f6368] hover:text-[#5f6368] underline"
                                    >
                                        Back to Phone Number
                                    </button>
                                </div>
                            </div>
                        </>

                    ) : authStep === 'otp' ? (
                        /* ── STEP 2: OTP ── */
                        <>
                            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-1.5 text-center">
                                Enter OTP
                            </h2>
                            <p className="text-[#5f6368] text-sm sm:text-base mb-6 text-center">
                                Sent to <span className="font-semibold">+91 {loginPhone}</span>
                            </p>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-black mb-3">
                                        Enter 6-digit OTP*
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
                                                className="w-10 h-12 sm:w-12 sm:h-14 text-center text-lg sm:text-xl font-semibold border border-gray-300 focus:outline-none focus:border-[#6D6DCE] focus:ring-1 focus:ring-[#6D6DCE] transition-colors bg-white"
                                                autoFocus={index === 0}
                                            />
                                        ))}
                                    </div>
                                </div>
                                {error && <p className="text-sm text-[#B30437]">{error}</p>}
                                <button
                                    onClick={handleVerifyOtp}
                                    disabled={isLoading || otp.join('').length !== 6}
                                    className="w-full bg-[#222222] hover:bg-[#000000] text-white font-bold text-sm sm:text-base tracking-widest py-3 sm:py-3.5 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'VERIFYING...' : 'VERIFY & CONTINUE →'}
                                </button>
                                <p className="text-xs text-center text-[#80868b]">
                                    {resendTimer > 0 ? (
                                        <>Resend OTP in <span className="text-[#6D6DCE] font-semibold">{resendTimer}s</span></>
                                    ) : (
                                        <button type="button" onClick={handleResend} className="text-[#6D6DCE] underline font-medium">
                                            Resend OTP
                                        </button>
                                    )}
                                </p>
                            </div>
                        </>

                    ) : (
                        /* ── STEP 3: DETAILS (new user only) ── */
                        <>
                            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-1.5 text-center">
                                {loginPhone.replace(/\D/g, '').endsWith('1234567890') ? 'Set Admin Password' : 'Complete Your Profile'}
                            </h2>
                            <p className="text-[#5f6368] text-sm sm:text-base mb-6 text-center">
                                {loginPhone.replace(/\D/g, '').endsWith('1234567890') ? 'Create a secure password for future logins' : 'Just a few details to get you started'}
                            </p>
                            <div className="space-y-3 sm:space-y-4">
                                {!loginPhone.replace(/\D/g, '').endsWith('1234567890') && (
                                    <>
                                        <div>
                                            <label className="block text-sm font-medium text-black mb-1.5">Full Name*</label>
                                            <input
                                                className="bg-white w-full border border-gray-300 px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#5f6368] placeholder-gray-400 focus:outline-none focus:border-[#6D6DCE] transition-colors"
                                                placeholder="Enter your full name"
                                                type="text"
                                                value={signupName}
                                                onChange={(e) => setSignupName(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-black mb-1.5">Email Address*</label>
                                            <input
                                                className="bg-white w-full border border-gray-300 px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#5f6368] placeholder-gray-400 focus:outline-none focus:border-[#6D6DCE] transition-colors"
                                                placeholder="Enter your email"
                                                type="email"
                                                value={signupEmail}
                                                onChange={(e) => setSignupEmail(e.target.value)}
                                            />
                                        </div>
                                    </>
                                )}
                                <div>
                                    <label className="block text-sm font-medium text-black mb-1.5">Create Password*</label>
                                    <input
                                        className="bg-white w-full border border-gray-300 px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#5f6368] placeholder-gray-400 focus:outline-none focus:border-[#6D6DCE] transition-colors"
                                        placeholder="Min 8 characters"
                                        type="password"
                                        value={signupPassword}
                                        onChange={(e) => setSignupPassword(e.target.value)}
                                        required
                                        minLength={8}
                                    />
                                </div>
                                {!loginPhone.replace(/\D/g, '').endsWith('1234567890') && (
                                    <div>
                                        <label className="block text-sm font-medium text-black mb-1.5">Course Interested In*</label>
                                        <div className="relative">
                                            <select
                                                className="w-full border border-gray-300 px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#5f6368] bg-white appearance-none focus:outline-none focus:border-[#6D6DCE] transition-colors"
                                                value={signupProgram}
                                                onChange={(e) => setSignupProgram(e.target.value)}
                                            >
                                                <option value="" disabled>Select a course</option>
                                                {COURSE_OPTIONS.map((s) => (
                                                    <option key={s} value={s}>{s}</option>
                                                ))}
                                            </select>
                                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#5f6368]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                                {error && <p className="text-sm text-[#B30437]">{error}</p>}
                                <button
                                    onClick={handleSignup}
                                    disabled={isLoading || !signupPassword || (!loginPhone.replace(/\D/g, '').endsWith('1234567890') && (!signupName.trim() || !signupEmail.trim() || !signupProgram))}
                                    className="w-full bg-[#222222] hover:bg-[#000000] text-white font-bold text-sm sm:text-base tracking-widest py-3 sm:py-3.5 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'CREATING ACCOUNT...' : 'COMPLETE SIGNUP →'}
                                </button>
                            </div>
                        </>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
}