"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { WEBINAR_DURATION_LABEL } from "@/config/webinar";

const faqs = [
  {
    q: "Do I need prior coding experience?",
    a: "No. The webinar starts from the basics and is designed for complete beginners.",
  },
  {
    q: "Is the webinar really free?",
    a: "Yes, registration and attendance are completely free, with no hidden costs.",
  },
  {
    q: "Will there be a recording?",
    a: "Yes, all registered attendees get access to the recording afterward.",
  },
  {
    q: "How long is the webinar?",
    a: `The live session runs for about ${WEBINAR_DURATION_LABEL}, including Q&A.`,
  },
  {
    q: "Can I ask questions live?",
    a: "Yes, there's a dedicated live Q&A segment with the instructor.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-slate-50/50 px-6 py-20 sm:px-12 lg:px-20 lg:py-28">
      {/* Decorative Blur */}
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-200/20 blur-[120px]" />
      
      <div className="relative mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-gray-500 lg:text-lg">
            Got questions? We have answers. Find out everything you need to know about the session.
          </p>
        </div>

        {/* Premium Accordion Container */}
        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
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
                  <span className="flex items-center gap-3">
                    <span className="text-gray-800 leading-snug">{item.q}</span>
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
                    <div className="border-t border-violet-100/50 bg-violet-50/10 px-6 pb-6 pt-5 text-sm font-semibold leading-relaxed text-gray-600 lg:px-8 lg:pb-7 lg:text-base">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section CTA */}
        <div className="mt-16 text-center">
          <a
            href="/register"
            className="group inline-flex items-center gap-2 rounded-2xl bg-violet-600 hover:bg-violet-700 px-8 py-4 text-sm font-bold text-white shadow-md shadow-violet-600/10 transition-all hover:-translate-y-0.5 hover:shadow-lg lg:text-base"
          >
            Claim My Free Spot
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
