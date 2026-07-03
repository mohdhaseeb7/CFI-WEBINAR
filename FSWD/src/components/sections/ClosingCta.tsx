"use client";

import { WEBINAR_CONFIG } from "@/config/webinar";
import { useInView } from "@/components/hooks";

const { closing } = WEBINAR_CONFIG;

export default function ClosingCta() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);

  return (
    <section className="relative overflow-hidden bg-primary px-6 py-28 text-center text-white sm:py-32">
      {/* gradient wash so the purple feels lit, not flat */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, #6d28d9 0%, #7c3aed 45%, #a21caf 100%)",
        }}
      />
      <div aria-hidden className="blob blob-pink right-0 top-0 h-96 w-96 opacity-70" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-3xl ${inView ? "revealed" : ""}`}
      >
        <blockquote className="reveal-up font-display text-4xl leading-[1.1] font-extrabold sm:text-5xl">
          <span className="text-gradient-white">{closing.quote}</span>
        </blockquote>
        <a
          href="#register"
          className="cta-magnetic reveal-up mt-12 inline-block rounded-full bg-white px-10 py-5 text-xl font-bold text-primary hover:bg-light-purple"
          style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
        >
          {closing.ctaText}
        </a>
        <p
          className="reveal-up mt-8 text-sm text-white/80"
          style={{ "--reveal-delay": "250ms" } as React.CSSProperties}
        >
          {WEBINAR_CONFIG.details.dateLabel} · {WEBINAR_CONFIG.details.timeLabel} · Free
        </p>
      </div>
    </section>
  );
}
