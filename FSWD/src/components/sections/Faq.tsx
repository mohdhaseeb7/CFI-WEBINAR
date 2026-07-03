"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { WEBINAR_CONFIG } from "@/config/webinar";

const { faq } = WEBINAR_CONFIG;

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <p className="font-display text-sm uppercase tracking-[0.25em] text-primary">
          FAQ
        </p>
        <h2 className="mt-3 text-4xl">{faq.title}</h2>

        <div className="mt-10 divide-y divide-violet-100 border-y border-violet-100">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-lg font-bold"
                >
                  {item.q}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                  <div className="accordion-inner">
                    <p className="pb-5 text-muted">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <a
          href="#register"
          className="mt-10 inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-dark"
        >
          Convinced? Grab a seat
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
