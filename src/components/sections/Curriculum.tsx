"use client";

import { useState } from "react";
import { ChevronDown, Calendar, ArrowRight } from "lucide-react";
import { WEBINAR_AGENDA, WEBINAR_DURATION_LABEL } from "@/config/webinar";

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-12 lg:px-20 lg:py-28">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-100/30 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl tracking-tight">
            Webinar Agenda
          </h2>
          <p className="mt-4 text-base text-gray-500 lg:text-lg">
            A focused, fast-moving {WEBINAR_DURATION_LABEL.toLowerCase()} session packed with value.
          </p>
        </div>

        {/* Premium Accordion List */}
        <div className="space-y-4">
          {WEBINAR_AGENDA.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.title}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-violet-200 bg-violet-50/20 shadow-md shadow-violet-500/5"
                    : "border-gray-100 bg-white hover:border-violet-100 hover:bg-slate-50/50 hover:shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left font-bold text-gray-900 transition-colors lg:px-8 lg:py-6 lg:text-lg"
                >
                  <span className="flex items-center gap-3 lg:gap-4">
                    <span className="shrink-0 rounded-xl bg-violet-100/70 px-3 py-1.5 text-xs font-extrabold tabular-nums text-violet-700 lg:text-sm shadow-sm">
                      {item.time}
                    </span>
                    <span className="font-bold text-gray-800 leading-snug">{item.title}</span>
                  </span>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                    isOpen ? "border-violet-300 bg-violet-100 text-violet-600 rotate-180" : "border-gray-200 bg-white text-gray-400"
                  }`}>
                    <ChevronDown className="h-4 w-4 shrink-0 transition-transform" />
                  </div>
                </button>

                {/* Animated CSS Grid Accordion */}
                <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                  <div className="accordion-inner">
                    <ul className="space-y-3 border-t border-violet-100/50 bg-violet-50/10 px-6 pb-6 pt-5 text-sm text-gray-600 lg:px-8 lg:pb-7 lg:text-base">
                      {item.topics.map((topic) => (
                        <li key={topic} className="flex items-center gap-2.5 font-medium">
                          <span className="h-2 w-2 shrink-0 rounded-full bg-violet-400" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="/register"
            className="group inline-flex items-center gap-2 rounded-2xl bg-violet-600 hover:bg-violet-700 px-8 py-4 text-sm font-bold text-white shadow-md shadow-violet-600/10 transition-all hover:-translate-y-0.5 hover:shadow-lg lg:text-base"
          >
            I Want This Roadmap
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
