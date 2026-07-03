"use client";

import { WEBINAR_CONFIG } from "@/config/webinar";
import { useInView } from "@/components/hooks";

const { reframe } = WEBINAR_CONFIG;

export default function Reframe() {
  const { ref, inView } = useInView<HTMLDivElement>(0.5);

  return (
    <section className="relative overflow-hidden bg-surface px-6 py-32 sm:py-40">
      <div aria-hidden className="blob blob-pink -left-40 top-1/4 h-80 w-80 opacity-50" />
      <div
        ref={ref}
        className={`relative mx-auto max-w-4xl text-center ${inView ? "revealed" : ""}`}
      >
        <p className="reveal-up font-display text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {reframe.kicker}
        </p>
        <blockquote
          className="reveal-up mt-8 font-display text-5xl leading-[1.05] font-extrabold sm:text-7xl"
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          AI didn&apos;t kill junior jobs. It killed{" "}
          <span className="text-gradient">weak fundamentals.</span>
        </blockquote>
        <p
          className="reveal-up mt-12 text-2xl font-bold sm:text-3xl"
          style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
        >
          <a
            href="#register"
            className="draw-underline pb-1.5 transition-colors hover:text-primary"
          >
            {reframe.underlined}
          </a>
        </p>
      </div>
    </section>
  );
}
