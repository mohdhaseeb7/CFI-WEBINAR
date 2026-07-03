"use client";

import { useEffect, useState } from "react";
import { WEBINAR_CONFIG } from "@/config/webinar";

export default function StickyHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-violet-100 bg-background/90 backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-2.5">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={WEBINAR_CONFIG.brand.logo}
            alt={WEBINAR_CONFIG.brand.org}
            className="h-9 w-auto"
          />
          <span className="hidden text-sm text-muted sm:inline">
            {WEBINAR_CONFIG.brand.name} · {WEBINAR_CONFIG.details.dateLabel} ·{" "}
            {WEBINAR_CONFIG.details.timeLabel}
          </span>
        </div>
        <a
          href="#register"
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Register free
        </a>
      </div>
    </header>
  );
}
