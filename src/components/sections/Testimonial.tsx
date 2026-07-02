"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquare, Star, Quote } from "lucide-react";
import { WEBINAR_CONFIG } from "@/config/webinar";

const testimonials = WEBINAR_CONFIG.testimonials.list;

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const go = (i: number) => {
    setIndex(i);
    resetTimer();
  };

  const t = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-12 lg:px-20 lg:py-28">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-100/30 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl tracking-tight">
            {WEBINAR_CONFIG.testimonials.title}
          </h2>
        </div>

        {/* Premium Testimonial Card */}
        <div className="mx-auto max-w-2xl">
          <div
            key={index}
            className="relative flex flex-col items-center gap-6 rounded-3xl border border-violet-100 bg-violet-50/10 p-8 text-center shadow-xl shadow-violet-500/5 transition-all duration-500 animate-in fade-in zoom-in-95 lg:p-12"
          >
            {/* Quote Icon Overlay */}
            <Quote className="absolute right-8 top-8 h-12 w-12 text-violet-200/50" />
            


            {/* Quote Text */}
            <p className="text-lg font-medium leading-relaxed text-gray-800 lg:text-xl italic">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Profile Info */}
            <div className="flex items-center gap-3 mt-4 border-t border-violet-100/50 pt-6 w-full justify-center">
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.avatarBg} text-sm font-bold text-white shadow-md`}>
                {t.initials}
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-xs font-bold text-violet-500 tracking-wider uppercase">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go((index - 1 + testimonials.length) % testimonials.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all hover:border-violet-300 hover:text-violet-600"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-violet-600" : "w-2 bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go((index + 1) % testimonials.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all hover:border-violet-300 hover:text-violet-600"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <a
              href="/register"
              className="group inline-flex items-center gap-2 rounded-2xl bg-violet-600 hover:bg-violet-700 px-8 py-4 text-sm font-bold text-white shadow-md shadow-violet-600/10 transition-all hover:-translate-y-0.5 hover:shadow-lg lg:text-base"
            >
              {WEBINAR_CONFIG.testimonials.ctaText}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
