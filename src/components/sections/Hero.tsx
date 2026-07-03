"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, ChevronRight } from "lucide-react";
import Interactive3DOrb from "@/components/Interactive3DOrb";
import { WEBINAR_CONFIG } from "@/config/webinar";

export default function Hero() {
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

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="register" className="relative z-0 overflow-hidden px-6 pt-8 pb-20 sm:px-12 lg:px-20 lg:pt-12 lg:pb-28 min-h-[80vh] flex items-center">
      {/* Background container to prevent layout stacking bugs */}
      <div className="absolute inset-0 bg-[#fafaff] -z-20" />

      {/* Background Interactive 3D Orb */}
      <div className="absolute inset-0 -z-10 select-none pointer-events-none overflow-hidden opacity-30">
        <Interactive3DOrb />
      </div>

      {/* Glow Effects and Radial Background Blobs */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_var(--tw-gradient-stops))] from-violet-100/50 via-transparent to-transparent -z-15" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-fuchsia-100/30 blur-[130px] -z-15" />

      {/* MAIN CONTAINER: 2-Column Responsive Grid */}
      <div className="relative mx-auto max-w-7xl w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: Webinar Details & Stats */}
        <div className="lg:col-span-7 flex flex-col items-start gap-8 text-left w-full">
          
          <div className="flex flex-col items-start gap-4 w-full">
            {/* Above Heading Sticker */}
            <div className="select-none rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              <div className="relative bg-amber-400 text-neutral-950 px-3.5 py-1.5 font-mono font-extrabold uppercase tracking-wider text-[10px] sm:text-xs border border-neutral-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-sm overflow-hidden">
                {WEBINAR_CONFIG.hero.stickerText}
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {WEBINAR_CONFIG.hero.headlineFirst}
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-700 bg-clip-text text-transparent">
                {WEBINAR_CONFIG.hero.headlineGradient}
              </span>
              {WEBINAR_CONFIG.hero.headlineLast}
            </h1>
          </div>

          {/* Description Copy */}
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
            {WEBINAR_CONFIG.hero.description}
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <button
              onClick={() => handleScroll("register-form-card")}
              className="rounded-2xl bg-violet-600 hover:bg-violet-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-violet-600/10 hover:shadow-violet-600/25 transition-all duration-300 text-center flex-1 sm:flex-initial cursor-pointer"
            >
              Apply Now
            </button>
            <button
              onClick={() => handleScroll("agenda-section")}
              className="rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 px-7 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 text-center flex-1 sm:flex-initial cursor-pointer"
            >
              View Curriculum
            </button>
          </div>

          {/* Stats Grid - Mapping Cohort Vibe */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-xl border-t border-slate-200/60 pt-8 mt-2">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">1 Hour</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Duration</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">Live</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Format</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">Free</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Cost</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">1K+</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Past Learners</p>
            </div>
          </div>

          {/* Conversion Checklist */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-500 font-semibold mt-2 w-full max-w-xl">
            {WEBINAR_CONFIG.hero.checklist.map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                {item}
              </span>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: Glassmorphic Registration Form */}
        <div id="register-form-card" className="lg:col-span-5 w-full">
          <div className="bg-white border border-slate-100/90 shadow-2xl shadow-violet-900/5 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            
            {status === "success" ? (
              /* Success State */
              <div className="flex flex-col items-center text-center py-6 animate-in fade-in duration-500">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 mb-6 border border-emerald-100">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-950">Seat Reserved!</h2>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-xs">
                  {message} We have sent your unique webcast access link and calendar invite to your inbox.
                </p>
                
                <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-100 p-4 text-xs text-slate-500 w-full text-left">
                  <p className="font-bold text-slate-800 mb-1">Webinar Reminder</p>
                  <p>Check your email inbox shortly for details sent to:</p>
                  <p className="font-bold text-violet-600 mt-1">{email}</p>
                </div>
              </div>
            ) : (
              /* Form State */
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Book Your Free Seat</h2>
                  <p className="text-xs text-slate-400 font-semibold mt-1">Enter your details to reserve your live webcast access</p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm font-semibold text-slate-800 placeholder-slate-400 shadow-sm transition-all focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400">
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
                        className="flex-1 min-w-0 rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm font-semibold text-slate-800 placeholder-slate-400 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                      />
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        disabled={otpSending || isEmailVerified}
                        className="rounded-2xl bg-[#70dbb5] hover:bg-[#5ecfa8] text-white px-4 py-3 text-xs font-bold shadow-sm transition-all disabled:opacity-50 shrink-0 cursor-pointer"
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
                      <label htmlFor="otp" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Enter OTP *
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          id="otp"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          placeholder="Enter 6-digit OTP"
                          className="flex-1 min-w-0 rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm font-semibold text-slate-800 placeholder-slate-400 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                        />
                        <button
                          type="button"
                          onClick={handleVerifyOtp}
                          className="rounded-2xl bg-violet-600 hover:bg-violet-700 text-white px-5 py-3 text-xs font-bold shadow-sm transition-all cursor-pointer"
                        >
                          Verify OTP
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Phone field */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Phone Number *
                    </label>
                    <div className="flex gap-2">
                      <select
                        id="countryCode"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="rounded-2xl border border-slate-200/80 bg-white px-3 py-3 text-sm font-semibold text-slate-800 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 cursor-pointer"
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
                        className="flex-1 min-w-0 rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm font-semibold text-slate-800 placeholder-slate-400 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                      />
                    </div>
                  </div>

                  {/* Qualification field */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="qualification" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      What do you do? (Qualification) *
                    </label>
                    <select
                      id="qualification"
                      required
                      value={qualification}
                      onChange={(e) => setQualification(e.target.value)}
                      className="w-full rounded-2xl border border-violet-500 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600 cursor-pointer"
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
                    <label htmlFor="goals" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      What do you want to learn or build?
                    </label>
                    <textarea
                      id="goals"
                      rows={3}
                      value={goals}
                      onChange={(e) => setGoals(e.target.value)}
                      placeholder="Your goals or project ideas..."
                      className="w-full rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm font-semibold text-slate-800 placeholder-slate-400 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 resize-none"
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p className="text-xs font-bold text-red-500 text-left bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                    {message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading || !isEmailVerified}
                  className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-violet-600 hover:bg-violet-700 py-4 text-sm font-bold text-white shadow-xl shadow-violet-600/15 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer animate-in fade-in duration-300"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Enrolling...
                    </>
                  ) : (
                    <>
                      Enroll Now
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                {!isEmailVerified && (
                  <p className="text-xs font-bold text-amber-600 text-center">
                    Verify your email with OTP to enable enrollment.
                  </p>
                )}
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
