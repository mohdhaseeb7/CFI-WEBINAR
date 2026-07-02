"use client";

import { useEffect, useState } from "react";
import { WEBINAR_DATE } from "@/config/webinar";
import { Clock } from "lucide-react";

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    setTime(getTimeLeft(WEBINAR_DATE));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const pricingEl = document.querySelector("#register");
      if (pricingEl) {
        const rect = pricingEl.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisible(false);
          return;
        }
      }
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const id = setInterval(() => setTime(getTimeLeft(WEBINAR_DATE)), 1000);
    return () => clearInterval(id);
  }, [mounted]);

  const units = [
    { label: "d", value: time.days },
    { label: "h", value: time.hours },
    { label: "m", value: time.minutes },
    { label: "s", value: time.seconds },
  ];

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="border-t border-violet-100/50 bg-white/80 px-4 py-3 shadow-2xl shadow-violet-500/10 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
          
          {/* Countdown details */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-red-500" />
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 sm:text-sm">
              <span className="hidden sm:inline mr-1 text-gray-400">Webinar starts in</span>
              <Clock className="h-4 w-4 text-violet-500 sm:hidden" />
              {units.map((u, i) => (
                <span key={u.label} className="flex items-center gap-1">
                  <span className="rounded-lg bg-violet-100/50 px-2 py-1 font-extrabold tabular-nums text-violet-700">
                    {mounted ? String(u.value).padStart(2, "0") : "00"}
                    <span className="ml-0.5 text-[10px] font-normal text-violet-400">{u.label}</span>
                  </span>
                  {i < units.length - 1 && <span className="text-gray-300 font-bold">:</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Action button */}
          <a
            href="/register"
            className="interactive-hover shrink-0 rounded-xl bg-violet-600 hover:bg-violet-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-violet-600/10 hover:shadow-violet-600/20"
          >
            Claim Seat →
          </a>

        </div>
      </div>
    </div>
  );
}
