"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { WEBINAR_CONFIG } from "@/config/webinar";

export default function BottomCTA() {
  const handleScrollToRegister = () => {
    const el = document.getElementById("register");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#fafaff] px-6 py-24 sm:px-12 lg:px-20 lg:py-32 border-t border-slate-100/60">
      {/* Background glowing shapes */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-100/30 blur-[130px] -z-10" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[300px] w-[300px] rounded-full bg-fuchsia-100/20 blur-[100px] -z-10" />

      <div className="relative mx-auto max-w-4xl text-center flex flex-col items-center gap-8">
        
        {/* Banner Headline */}
        <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl max-w-2xl">
          Stop learning syntax.
          <span className="block mt-1 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-700 bg-clip-text text-transparent">
            Start building products.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="max-w-xl text-slate-500 text-sm sm:text-base font-semibold leading-relaxed">
          Join Omer Ahmed Quadri in this live, 1-hour session to see how modern web apps actually get built from scratch. Get your questions answered live.
        </p>

        {/* Action button */}
        <div className="flex flex-col items-center gap-4 mt-2">
          <button
            onClick={handleScrollToRegister}
            className="group flex items-center justify-center gap-2 rounded-2xl bg-violet-600 hover:bg-violet-700 px-8 py-5 text-sm font-bold text-white shadow-xl shadow-violet-600/10 transition-all hover:scale-[1.02] duration-300 cursor-pointer"
          >
            Reserve My Seat
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
          
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
            {WEBINAR_CONFIG.details.date} at {WEBINAR_CONFIG.details.time.split(" ")[0]} {WEBINAR_CONFIG.details.time.split(" ")[1]}
          </span>
        </div>

      </div>
    </section>
  );
}
