"use client";

import React from "react";
import { Check } from "lucide-react";

const inclusions = [
  "1-hour live interactive webcast broadcast",
  "Practical, real-world coding demonstration",
  "Step-by-step developer roadmap explained simply",
  "Dedicated Q&A session with Omer Ahmed Quadri",
  "Free downloadable learning resources & guides",
  "Access to the complete session video recording",
];

export default function SummaryCard() {
  const handleScrollToRegister = () => {
    const el = document.getElementById("register");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50/40 px-6 py-20 sm:px-12 lg:px-20 lg:py-24 border-b border-slate-100/60">
      <div className="relative mx-auto max-w-2xl text-center">
        
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-violet-600">The Package</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl tracking-tight">
            One program. Everything included.
          </h2>
        </div>

        {/* Inclusions Card */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-violet-500/80 bg-gradient-to-b from-violet-50/10 via-white to-white p-8 sm:p-12 shadow-2xl shadow-violet-900/5">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-violet-600 text-white px-4 py-1.5 text-xs font-bold tracking-wide mb-8 shadow-md">
            100% FREE WEBINAR ACCESS
          </div>

          {/* List items */}
          <ul className="space-y-4 text-left max-w-md mx-auto mb-10">
            {inclusions.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold mt-0.5">
                  <Check className="h-3 w-3 stroke-[3]" />
                </span>
                <span className="text-sm font-semibold text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          {/* Action button */}
          <button
            onClick={handleScrollToRegister}
            className="group w-full rounded-2xl bg-violet-600 hover:bg-violet-700 py-4.5 text-sm font-bold text-white shadow-lg shadow-violet-600/10 transition-all hover:scale-[1.01] duration-300 cursor-pointer"
          >
            Apply for Free Webinar
          </button>
        </div>

      </div>
    </section>
  );
}
