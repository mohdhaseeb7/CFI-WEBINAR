"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Timer } from "lucide-react";
import { WEBINAR_CONFIG, WEBINAR_DATE } from "@/config/webinar";

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

/**
 * Persistent countdown + register pill. Appears once the hero scrolls past,
 * hides while the form itself is on screen (no point nagging there).
 */
export default function FloatingCta() {
  const [left, setLeft] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const tick = () => setLeft(WEBINAR_DATE.getTime() - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.7;
      const register = document.getElementById("register");
      let overForm = false;
      if (register) {
        const rect = register.getBoundingClientRect();
        overForm = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
      }
      setVisible(pastHero && !overForm);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const show = visible && left !== null && left > 0;
  const d = left ? Math.floor(left / 86_400_000) : 0;
  const h = left ? Math.floor((left % 86_400_000) / 3_600_000) : 0;
  const m = left ? Math.floor((left % 3_600_000) / 60_000) : 0;
  const s = left ? Math.floor((left % 60_000) / 1000) : 0;

  return (
    <div
      aria-hidden={!show}
      className={`fixed bottom-4 left-1/2 z-40 -translate-x-1/2 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
      }`}
    >
      <div className="glass-card flex items-center gap-3 rounded-full py-2 pr-2 pl-5 shadow-[0_18px_50px_-16px_rgba(124,58,237,0.55)]">
        <span className="flex items-center gap-2 text-sm font-bold text-foreground">
          <Timer className="h-4 w-4 text-primary" />
          <span className="font-display whitespace-nowrap tabular-nums">
            {pad(d)}<span className="text-muted">d</span> {pad(h)}
            <span className="text-muted">h</span> {pad(m)}
            <span className="text-muted">m</span> {pad(s)}
            <span className="text-muted">s</span>
          </span>
          <span className="hidden text-xs font-semibold text-muted sm:inline">
            till we go live
          </span>
        </span>
        <a
          href="#register"
          className="cta-gradient cta-magnetic flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-bold text-white"
        >
          Register free
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
