"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Radio } from "lucide-react";
import { WEBINAR_CONFIG } from "@/config/webinar";
import BrandMark from "@/components/BrandMark";

const { hero, brand, details } = WEBINAR_CONFIG;

function MagneticButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="cta-gradient cta-magnetic group inline-flex items-center gap-2 rounded-full px-10 py-5 text-xl font-bold text-white"
    >
      {children}
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

/** Floating glass chip with a company mark and its boomerang one-liner. */
function StoryChip({
  chip,
  className,
  rot,
  delay,
}: {
  chip: (typeof hero.chips)[number];
  className?: string;
  rot: string;
  delay: string;
}) {
  return (
    <div
      className={`float glass-card rounded-2xl px-5 py-4 ${className ?? ""}`}
      style={{ "--float-rot": rot, "--float-delay": delay } as React.CSSProperties}
    >
      <BrandMark brand={chip.logo} className="h-5 text-xl" />
      <p className="mt-2 text-xs font-medium text-muted">{chip.top}</p>
      <p className="text-sm font-bold text-primary">↳ {chip.punch}</p>
    </div>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  const reveal = (delay: string) =>
    `transition-all duration-700 ${delay} ${
      loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`;

  return (
    <section className="relative flex min-h-[92vh] flex-col overflow-hidden">
      {/* atmosphere: drifting dot grid + gradient blobs */}
      <div aria-hidden className="dot-grid pointer-events-none absolute -inset-[48px] opacity-60" />
      <div aria-hidden className="blob blob-purple pulse-slow -top-24 -left-24 h-[28rem] w-[28rem]" />
      <div aria-hidden className="blob blob-pink pulse-slow right-[-10rem] top-1/3 h-[26rem] w-[26rem]" style={{ animationDelay: "2s" }} />
      <div aria-hidden className="blob blob-blue pulse-slow bottom-[-8rem] left-1/4 h-[22rem] w-[22rem]" style={{ animationDelay: "4s" }} />

      {/* masthead */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={brand.logo} alt={brand.org} className="h-12 w-auto sm:h-14" />
        <a
          href="#register"
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Register free
        </a>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 py-12 text-center">
        {/* floating receipts — desktop only, they frame the title */}
        <StoryChip chip={hero.chips[0]} rot="-4deg" delay="0s" className="absolute left-2 top-16 hidden w-52 text-left lg:block" />
        <StoryChip chip={hero.chips[1]} rot="3deg" delay="1.4s" className="absolute right-0 top-32 hidden w-56 text-left lg:block" />
        <StoryChip chip={hero.chips[2]} rot="-2deg" delay="2.8s" className="absolute bottom-16 left-10 hidden w-52 text-left lg:block" />

        <div className="max-w-4xl">
          <p className={`font-display text-sm font-semibold uppercase tracking-[0.3em] text-muted ${reveal("delay-0")}`}>
            {hero.presents}
          </p>

          <h1
            className={`mt-6 leading-[0.9] ${reveal("delay-75")}`}
            style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
          >
            <span className="block">{hero.titleTop}</span>
            <span className="text-gradient block">{hero.titleBottom}</span>
          </h1>

          <p className={`font-display mt-8 text-2xl font-bold text-foreground sm:text-3xl ${reveal("delay-150")}`}>
            <span className="marker-highlight">{hero.punch}</span>
          </p>

          <p className={`mx-auto mt-6 flex max-w-xl items-start justify-center gap-2 text-base leading-relaxed text-muted sm:text-lg ${reveal("delay-200")}`}>
            <Radio className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <span>{hero.invite}</span>
          </p>

          <div className={`mt-10 ${reveal("delay-300")}`}>
            <MagneticButton href="#register">{hero.ctaText}</MagneticButton>
            <p className="mt-4 text-sm font-semibold text-foreground">
              {details.dateLabel} · {details.timeLabel} ·{" "}
              <span className="text-primary">100% free</span>
            </p>
          </div>
        </div>
      </div>

      <a
        href="#receipts"
        className="relative z-10 mx-auto mb-6 flex flex-col items-center gap-1 text-sm text-muted hover:text-primary"
      >
        {hero.scrollCue}
        <ArrowDown className="soft-bounce h-5 w-5" />
      </a>
    </section>
  );
}
