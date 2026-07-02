"use client";

import { useEffect, useState } from "react";
import { Users, ArrowRight, CheckCircle2, Clock, AlertTriangle, ShieldCheck } from "lucide-react";
import { WEBINAR_DATE, WEBINAR_CONFIG } from "@/config/webinar";

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Pricing() {
  const [time, setTime] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

useEffect(() => {
  const update = () => {
    setTime(getTimeLeft(WEBINAR_DATE));
  };

  update(); // immediately set the correct time

  const id = setInterval(update, 1000);

  return () => clearInterval(id);
}, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    
    setStatus("submitting");
    // Simulate API registration call
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  const timerUnits = [
    { label: "d", value: time.days },
    { label: "h", value: time.hours },
    { label: "m", value: time.minutes },
    { label: "s", value: time.seconds },
  ];

  return (
    <section id="register" className="relative overflow-hidden bg-gradient-to-br from-violet-950 via-purple-900 to-indigo-950 px-6 py-24 sm:px-12 lg:px-20 lg:py-32">
      {/* Background glowing decorations */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-600/20 via-transparent to-transparent" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[130px] animate-pulse-slow" />
      <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[130px] animate-pulse-slow" />

      <div className="relative mx-auto max-w-4xl">
        
        {/* Main Content Wrapper: Side-by-side or stacked grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and features info */}
          <div className="flex flex-col items-start gap-6 lg:col-span-6 text-left">
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl tracking-tight">
              You don&apos;t need a CS degree to start exploring tech.
            </h2>
            <p className="text-lg font-semibold text-violet-200/90 lg:text-xl">
              You just need an hour.
            </p>

            <p className="text-sm text-gray-300 font-medium">
              {WEBINAR_CONFIG.details.date} · {WEBINAR_CONFIG.details.time.split(" – ")[0]} · Free Live Session
            </p>

            {/* Benefit Indicators */}
            <div className="mt-4 grid w-full grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <div className="flex flex-col items-center gap-1 text-center">
                <p className="text-xl font-extrabold text-white sm:text-2xl">100%</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-violet-300">Free forever</p>
              </div>
              <div className="flex flex-col items-center gap-1 text-center border-x border-white/10">
                <p className="text-xl font-extrabold text-white sm:text-2xl">1 hr</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-violet-300">Live session</p>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <p className="text-xl font-extrabold text-white sm:text-2xl">0</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-violet-300">Experience</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-gray-400 font-semibold mt-2">
              <Users className="h-4 w-4 text-violet-400" />
              Join 12,000+ past learners who started here
            </div>
          </div>

          {/* Right Column: Registration Card */}
          <div className="lg:col-span-6 w-full">
            <div className="glass-card-dark rounded-3xl p-8 shadow-2xl relative overflow-hidden border border-white/10">
              
              {status === "success" ? (
                /* Success State */
                <div className="flex flex-col items-center text-center py-8 animate-in fade-in duration-500">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-6 border border-emerald-500/30">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Registration Successful!</h3>
                  <p className="mt-3 text-sm text-gray-300">
                    See you live on <span className="font-bold text-violet-300">{WEBINAR_CONFIG.details.date} at {WEBINAR_CONFIG.details.time.split(" – ")[0]}</span>.
                  </p>
                  
                  <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-4 text-xs text-gray-400 w-full">
                    <p className="font-semibold text-white mb-1">What happens next?</p>
                    <p>We have sent a calendar invite and your unique webinar link to:</p>
                    <p className="font-bold text-violet-300 mt-1">{formData.email}</p>
                  </div>
                  
                  <div className="mt-8 flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                    Check your spam folder if you don&apos;t see it
                  </div>
                </div>
              ) : (
                /* Interactive Form State */
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="text-center pb-2 border-b border-white/10">
                    <h3 className="text-lg font-bold text-white flex items-center justify-center gap-1.5">
                      Claim Your Free Seat
                    </h3>
                    
                    {/* Embedded Mini-Countdown */}
                    <div className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold text-gray-400">
                      <span>Time left to claim:</span>
                      <div className="flex items-center gap-1">
                        {timerUnits.map((u, i) => (
                          <span key={u.label} className="flex items-center gap-0.5">
                            <span className="rounded bg-white/10 px-1 py-0.5 font-bold tabular-nums text-white">
                              {String(u.value).padStart(2, "0")}
                              <span className="ml-0.5 text-[9px] text-gray-400">{u.label}</span>
                            </span>
                            {i < timerUnits.length - 1 && <span>:</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Ananya Rao"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={status === "submitting"}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-violet-500 focus:bg-white/10"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="e.g. name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={status === "submitting"}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-violet-500 focus:bg-white/10"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group interactive-hover relative mt-2 flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 text-base font-bold text-violet-950 transition-all hover:bg-violet-50"
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-violet-900 border-t-transparent" />
                        Processing...
                      </span>
                    ) : (
                      <>
                        Claim My Free Spot Now
                        <ArrowRight className="h-5 w-5 text-violet-700 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  {/* Form Trust Items */}
                  <div className="mt-2 flex items-center justify-center gap-4 text-[10px] text-gray-400 font-semibold border-t border-white/5 pt-4">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                      Secure Registration
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-violet-400" />
                      No spam guarantee
                    </span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
