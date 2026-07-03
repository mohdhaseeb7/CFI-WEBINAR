"use client";

import { WEBINAR_CONFIG } from "@/config/webinar";
import { useInView } from "@/components/hooks";

const { about, brand } = WEBINAR_CONFIG;

export default function WhoWeAre() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section className="relative overflow-hidden bg-surface px-6 py-20 sm:py-24">
      <div aria-hidden className="blob blob-blue -left-40 -top-20 h-96 w-96" />
      <div
        ref={ref}
        className={`relative mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-16 ${
          inView ? "revealed" : ""
        }`}
      >
        <div className="reveal-up max-w-xl text-center md:text-left">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            {about.kicker}
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            {about.titlePre}{" "}
            <span className="text-gradient">{about.titleGradient}</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{about.body}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={brand.logo}
            alt={brand.org}
            className="mx-auto mt-6 h-12 w-auto md:mx-0"
          />
        </div>

        <div
          className="reveal-up grid flex-1 gap-4"
          style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
        >
          {about.stats.map((s, i) => (
            <div
              key={s.label}
              className={`glass-card glow-purple rounded-2xl px-6 py-5 ${
                i % 2 ? "md:translate-x-6" : ""
              }`}
            >
              <p className="text-gradient font-display text-4xl font-extrabold">
                {s.value}
              </p>
              <p className="mt-1 text-sm font-medium text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
