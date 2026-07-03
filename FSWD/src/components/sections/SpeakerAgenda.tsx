"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { WEBINAR_CONFIG } from "@/config/webinar";
import { useInView } from "@/components/hooks";

const { speaker, agenda } = WEBINAR_CONFIG;

function AgendaRail() {
  const listRef = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = listRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      // rail fills as the list travels from 80% viewport to 30% viewport
      const raw = (viewH * 0.8 - rect.top) / (rect.height + viewH * 0.5);
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-2 bottom-2 left-[15px] w-px bg-violet-200" />
      <div
        className="rail-line absolute top-2 bottom-2 left-[15px] w-px bg-primary"
        style={{ "--rail-progress": progress } as React.CSSProperties}
      />
      <ol ref={listRef} className="space-y-8">
        {agenda.items.map((item, i) => (
          <li key={item.time} className="relative flex gap-6 pl-0">
            <span className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-violet-200 bg-surface font-display text-sm font-bold text-primary">
              {i + 1}
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                {item.time} PM
              </span>
              <h3 className="text-lg">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function SpeakerAgenda() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  return (
    <section id="speaker" className="bg-light-purple px-6 py-24 sm:py-28">
      <div
        ref={ref}
        className={`mx-auto grid max-w-5xl gap-16 md:grid-cols-2 ${
          inView ? "revealed" : ""
        }`}
      >
        <div className="reveal-up">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-primary">
            {speaker.kicker}
          </p>
          <h2 className="mt-3 text-4xl">{speaker.sectionTitle}</h2>

          <div className="tilt-card mt-8 overflow-hidden rounded-3xl border border-violet-100 bg-surface shadow-[0_10px_40px_-18px_rgba(124,58,237,0.18)]">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={speaker.photoUrl}
                alt={speaker.name}
                className="aspect-square w-full object-cover"
              />
              <span className="absolute top-4 left-4 rounded-full bg-surface/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                {speaker.badge}
              </span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl">{speaker.name}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">
                {speaker.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {speaker.bio}
              </p>
              <ul className="mt-6 space-y-3">
                {speaker.credentials.map((cred) => (
                  <li key={cred} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {cred}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href="#register"
            className="cta-magnetic mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-dark"
          >
            {speaker.ctaText}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div
          className="reveal-up"
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          <p className="font-display text-sm uppercase tracking-[0.25em] text-primary">
            Agenda
          </p>
          <h2 className="mt-3 text-4xl">{agenda.title}</h2>
          <div className="mt-8">
            <AgendaRail />
          </div>
        </div>
      </div>
    </section>
  );
}
