"use client";

import { useEffect, useState } from "react";
import { WEBINAR_DATE } from "@/config/webinar";
import { Timer, ArrowRight } from "lucide-react";

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
      const formEl = document.querySelector("#register-form-card");
      if (formEl) {
        const rect = formEl.getBoundingClientRect();
        // Show the sticky bar when the registration form is scrolled out of view
        setVisible(rect.bottom < 0);
      } else {
        setVisible(window.scrollY > 500);
      }
    };
    // Set initial visibility status
    onScroll();
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
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-2xl transition-all duration-500 ease-in-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
      }`}
    >
      <div className="rounded-full border border-slate-100/80 bg-white/95 px-4 py-2 sm:px-6 sm:py-2.5 shadow-2xl shadow-violet-900/10 backdrop-blur-md">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left Section: Timer icon & Countdown */}
          <div className="flex items-center gap-2 sm:gap-3 text-slate-800">
            <Timer className="h-5 w-5 text-violet-600 shrink-0" />
            <div className="flex flex-nowrap items-center gap-x-1 sm:gap-x-1.5 text-xs sm:text-sm font-semibold text-slate-700 whitespace-nowrap shrink-0">
              {units.map((u, i) => (
                <span key={u.label} className="tabular-nums shrink-0">
                  <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                    {mounted ? String(u.value).padStart(2, "0") : "00"}
                  </span>
                  <span className="text-slate-500 font-medium ml-0.5">{u.label}</span>
                </span>
              ))}
              <span className="text-slate-400 font-semibold ml-1 hidden xs:inline">
                till we go live
              </span>
            </div>
          </div>

          {/* Right Section: Grab seat button */}
          <a
            href="#register"
            className="shrink-0 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-extrabold text-white shadow-md shadow-violet-600/15 hover:shadow-violet-600/25 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Grab my free seat</span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </a>

        </div>
      </div>
    </div>
  );
}
