"use client";

import { useEffect, useState } from "react";
import { WEBINAR_DATE } from "@/config/webinar";
import { Users } from "lucide-react";

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer() {
 const [time, setTime] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});


useEffect(() => {
  const update = () => {
    setTime(getTimeLeft(WEBINAR_DATE));
  };

  update();

  const id = setInterval(update, 1000);

  return () => clearInterval(id);
}, []);

const units = [
  { label: "Days", value: time.days },
  { label: "Hours", value: time.hours },
  { label: "Minutes", value: time.minutes },
  { label: "Seconds", value: time.seconds },
];


  return (
    <section className="relative px-6 py-20 sm:px-12 lg:px-20 lg:py-28">
      {/* Background visual decorations */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/30 blur-[80px]" />
      
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-violet-100/50 bg-white/70 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
        
        {/* Urgent Warning Header */}
        <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-8 py-5 text-center">
          <span className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
            <span className="h-2 w-2 animate-ping rounded-full bg-red-400" />
            Register before the timer ends to claim a free seat
          </span>
        </div>

        {/* Digital Countdown Timer grid */}
        <div className="flex flex-col items-center gap-8 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {units.map((u) => (
              <div
                key={u.label}
                className="group relative flex w-16 flex-col items-center rounded-2xl border border-violet-100 bg-violet-50/50 px-2 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:bg-violet-50 sm:w-28 sm:py-6 lg:w-36 lg:py-8"
              >
                {/* Micro-glow on hover */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-transparent to-violet-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <span className="text-3xl font-extrabold tabular-nums text-violet-700 sm:text-5xl lg:text-7xl">
                  {String(u.value).padStart(2, "0")}
                </span>
                <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-violet-400 sm:text-xs lg:text-sm">
                  {u.label}
                </span>
              </div>
            ))}
          </div>

          {/* Interactive CTA Link */}
          <div className="flex flex-col items-center gap-3 w-full max-w-md">
            <a
              href="#register"
              className="group interactive-hover flex w-full items-center justify-center gap-2.5 rounded-2xl bg-violet-600 hover:bg-violet-700 py-4.5 text-base font-bold text-white shadow-lg shadow-violet-600/20"
            >
              Secure My Spot Now
              <span className="transition-transform group-hover:translate-x-1.5">→</span>
            </a>
            
          </div>
        </div>

      </div>
    </section>
  );
}
