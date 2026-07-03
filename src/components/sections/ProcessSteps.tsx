import React from "react";
import { WEBINAR_CONFIG } from "@/config/webinar";

const steps = [
  {
    num: "1",
    title: "Register Online",
    desc: "Enter your name, email, and phone number in the form at the top of the page.",
    color: "bg-violet-600 text-white shadow-violet-600/20",
  },
  {
    num: "2",
    title: "Get Access Link",
    desc: "Check your inbox immediately for your unique private webcast login details.",
    color: "bg-fuchsia-600 text-white shadow-fuchsia-600/20",
  },
  {
    num: "3",
    title: "Attend Live Session",
    desc: `Join Omer Ahmed live on ${WEBINAR_CONFIG.details.date} at ${WEBINAR_CONFIG.details.time.split(" ")[0]} ${WEBINAR_CONFIG.details.time.split(" ")[1]}.`,
    color: "bg-emerald-600 text-white shadow-emerald-600/20",
  },
  {
    num: "4",
    title: "Start Building",
    desc: "Claim your free learning roadmap, resources guide, and session recording access.",
    color: "bg-amber-500 text-white shadow-amber-500/20",
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative overflow-hidden bg-slate-50/20 px-6 py-20 sm:px-12 lg:px-20 lg:py-28 border-b border-slate-100/60">
      <div className="relative mx-auto max-w-6xl text-center">
        
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-bold uppercase tracking-wider text-violet-600">The Roadmap</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl tracking-tight">
            How to join the live session?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500 text-sm sm:text-base font-semibold">
            Follow these 4 simple steps to secure your seat and receive your learning resources.
          </p>
        </div>

        {/* Process Steps Visual - Horizontal Line on Desktop, Vertical on Mobile */}
        <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-10 md:gap-6 w-full max-w-5xl mx-auto">
          {/* Background Connecting Line (Desktop) */}
          <div className="absolute top-6 left-8 right-8 h-0.5 bg-slate-100 hidden md:block -z-10" />

          {steps.map((step, idx) => (
            <div key={step.num} className="flex-1 flex flex-col items-center md:items-center text-center px-4 relative">
              
              {/* Step indicator circle */}
              <div className={`flex h-12 w-12 items-center justify-center rounded-full text-base font-extrabold shadow-lg transition-transform duration-300 hover:scale-110 mb-6 ${step.color}`}>
                {step.num}
              </div>

              {/* Title & Desc */}
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                {step.title}
              </h3>
              <p className="mt-2.5 text-xs font-semibold leading-relaxed text-slate-500 max-w-[220px] mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
