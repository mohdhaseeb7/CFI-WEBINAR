"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Video, CheckCircle2, ChevronRight, Loader2 } from "lucide-react";
import { WEBINAR_CONFIG } from "@/config/webinar";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [qualification, setQualification] = useState("");
  const [goals, setGoals] = useState("");

  // OTP Verification States
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpSending, setOtpSending] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [otpSuccess, setOtpSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSendOtp = async () => {
    if (!email) {
      setOtpError("Please enter your email address first.");
      return;
    }
    setOtpSending(true);
    setOtpError("");
    setOtpSuccess("");
    
    // Simulate API request to send OTP
    setTimeout(() => {
      setOtpSending(false);
      setOtpSent(true);
      setOtpSuccess("OTP sent! Enter 123456 to verify.");
    }, 1000);
  };

  const handleVerifyOtp = () => {
    if (otp === "123456") {
      setIsEmailVerified(true);
      setOtpError("");
      setOtpSuccess("Email verified successfully!");
    } else {
      setOtpError("Invalid OTP. Please enter 123456.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !qualification) return;
    if (!isEmailVerified) {
      setOtpError("Please verify your email with OTP before enrolling.");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, countryCode, qualification, goals }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Registration successful!");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Failed to submit registration. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between py-10 px-6 sm:px-12 sm:py-14 lg:px-20 lg:py-16 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -left-48 -top-24 h-[600px] w-[600px] rounded-full bg-violet-300/15 blur-[130px]" />
      <div className="pointer-events-none absolute -right-36 top-1/4 h-[500px] w-[500px] rounded-full bg-fuchsia-300/15 blur-[120px]" />

      {/* Header link back to Home */}
      <div className="max-w-7xl mx-auto w-full z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-violet-600 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Main content grid */}
      <div className="relative mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-12 w-full z-10 my-8 items-center">
        
        {/* Left column: Info card */}
        <div className="md:col-span-5 flex flex-col gap-6 text-left">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight font-display">
            Reserve Your Free Seat
          </h1>
          <p className="text-base text-gray-500 font-medium leading-relaxed">
            Register to join the live, interactive 1-hour coding webinar and take your first step into tech.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {/* Date info */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-violet-100/60 shadow-sm">
              <Calendar className="h-5 w-5 text-violet-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Webinar Date</p>
                <p className="text-sm font-bold text-gray-800 mt-0.5">{WEBINAR_CONFIG.details.date}</p>
                <p className="text-xs font-semibold text-violet-600">{WEBINAR_CONFIG.details.time}</p>
              </div>
            </div>

            {/* Broadcast info */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-violet-100/60 shadow-sm">
              <Video className="h-5 w-5 text-violet-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Platform</p>
                <p className="text-sm font-bold text-gray-800 mt-0.5">Private Webcast</p>
                <p className="text-xs font-semibold text-violet-600">Link sent by Email and SMS</p>
              </div>
            </div>
          </div>

          {/* Quick checklist */}
          <div className="flex flex-col gap-2 mt-4 text-xs font-semibold text-gray-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              100% Free & No Credit Card Required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Interactive live Q&A session
            </span>
          </div>
        </div>

        {/* Right column: Form card */}
        <div className="md:col-span-7 w-full">
          <div className="bg-white border border-slate-100 shadow-xl rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            
            {status === "success" ? (
              /* Success State */
              <div className="flex flex-col items-center text-center py-6 animate-in fade-in duration-500">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-6 border border-emerald-500/30">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 font-display">Registration Successful!</h2>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-sm">
                  {message} We have sent your unique webcast link and invite to your inbox.
                </p>
                
                <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-100 p-4 text-xs text-gray-400 w-full max-w-sm text-left animate-pulse-slow">
                  <p className="font-semibold text-gray-800 mb-1">Webinar Reminder</p>
                  <p>Check your email inbox shortly for details sent to:</p>
                  <p className="font-bold text-violet-600 mt-1">{email}</p>
                </div>

                <Link href="/" className="mt-8 group inline-flex items-center gap-1.5 text-sm font-bold text-violet-600 hover:text-violet-700 transition-colors">
                  Go back to landing page
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            ) : (
              /* Form State */
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 font-display">Enroll For Full Stack Web Development + AI</h2>
                  <p className="text-xs text-gray-400 font-semibold mt-1">Secure your seat for the current batch.</p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-semibold text-gray-800 placeholder-gray-400 shadow-sm transition-all focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Email *
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setIsEmailVerified(false);
                          setOtpSent(false);
                          setOtpSuccess("");
                          setOtpError("");
                        }}
                        placeholder="you@email.com"
                        className="flex-1 min-w-0 rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-semibold text-gray-800 placeholder-gray-400 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                      />
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        disabled={otpSending || isEmailVerified}
                        className="rounded-2xl bg-[#70dbb5] hover:bg-[#5ecfa8] text-white px-5 py-4 text-sm font-bold shadow-sm transition-all disabled:opacity-50 shrink-0 cursor-pointer"
                      >
                        {otpSending ? "Sending..." : isEmailVerified ? "Verified" : "Send OTP"}
                      </button>
                    </div>
                    {otpSuccess && <p className="text-[11px] font-bold text-emerald-600 mt-1">{otpSuccess}</p>}
                    {otpError && <p className="text-[11px] font-bold text-red-500 mt-1">{otpError}</p>}
                  </div>

                  {/* OTP Input Field */}
                  {otpSent && !isEmailVerified && (
                    <div className="flex flex-col gap-1.5 text-left animate-in slide-in-from-top duration-300">
                      <label htmlFor="otp" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                        Enter OTP *
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          id="otp"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          placeholder="Enter 6-digit OTP"
                          className="flex-1 min-w-0 rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-semibold text-gray-800 placeholder-gray-400 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                        />
                        <button
                          type="button"
                          onClick={handleVerifyOtp}
                          className="rounded-2xl bg-violet-600 hover:bg-violet-700 text-white px-6 py-4 text-sm font-bold shadow-sm transition-all cursor-pointer"
                        >
                          Verify OTP
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Phone field */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Phone Number *
                    </label>
                    <div className="flex gap-2">
                      <select
                        id="countryCode"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="rounded-2xl border border-gray-200 bg-white px-4 py-4 text-sm font-semibold text-gray-800 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 cursor-pointer"
                      >
                        <option value="+91">India (+91)</option>
                        <option value="+1">United States (+1)</option>
                        <option value="+44">United Kingdom (+44)</option>
                        <option value="+1-ca">Canada (+1)</option>
                        <option value="+61">Australia (+61)</option>
                        <option value="+966">Saudi Arabia (+966)</option>
                        <option value="+971">UAE (+971)</option>
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="9876543210"
                        className="flex-1 min-w-0 rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-semibold text-gray-800 placeholder-gray-400 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                      />
                    </div>
                  </div>

                  {/* Qualification field */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="qualification" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      What do you do? (Qualification) *
                    </label>
                    <select
                      id="qualification"
                      required
                      value={qualification}
                      onChange={(e) => setQualification(e.target.value)}
                      className="w-full rounded-2xl border border-violet-500 bg-white px-5 py-4 text-sm font-semibold text-gray-800 shadow-sm focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600 cursor-pointer"
                    >
                      <option value="">Select...</option>
                      <option value="School Student (+2)">School Student (+2)</option>
                      <option value="College Student - Engineering">College Student - Engineering</option>
                      <option value="College Student - Commerce">College Student - Commerce</option>
                      <option value="College Student - Other">College Student - Other</option>
                      <option value="Working Professional - Startup">Working Professional - Startup</option>
                      <option value="Working Professional - MNC">Working Professional - MNC</option>
                      <option value="Entrepreneur / Founder">Entrepreneur / Founder</option>
                      <option value="Freelancer">Freelancer</option>
                      <option value="Dropout">Dropout</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Goals field */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="goals" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      What do you want to learn or build?
                    </label>
                    <textarea
                      id="goals"
                      rows={3}
                      value={goals}
                      onChange={(e) => setGoals(e.target.value)}
                      placeholder="Your goals or project ideas..."
                      className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-semibold text-gray-800 placeholder-gray-400 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 resize-none"
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p className="text-xs font-bold text-red-500 text-left bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    {message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading || !isEmailVerified}
                  className="group interactive-hover relative flex w-full items-center justify-center gap-3 rounded-2xl bg-violet-600 hover:bg-violet-700 py-4.5 text-base font-bold text-white shadow-xl shadow-violet-600/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Enrolling...
                    </>
                  ) : (
                    <>
                      Enroll Now
                      <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {!isEmailVerified && (
                  <p className="text-xs font-bold text-amber-600 text-center animate-pulse-slow">
                    Verify your email with OTP to enable enrollment.
                  </p>
                )}

                <p className="text-[10px] text-center text-gray-400 font-semibold mt-1">
                  Course: Full Stack Web Development + AI
                </p>
              </form>
            )}

          </div>
        </div>

      </div>

      {/* Footer copyright */}
      <div className="max-w-7xl mx-auto w-full z-10 text-center text-xs font-semibold text-gray-400">
        © {new Date().getFullYear()} Code for India Foundation. All rights reserved.
      </div>
    </main>
  );
}
