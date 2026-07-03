"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { WEBINAR_CONFIG, WEBINAR_DATE } from "@/config/webinar";

const { form, details } = WEBINAR_CONFIG;

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, "0");
}

function Countdown() {
  // null until mounted so the server render never disagrees with the client clock
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setLeft(WEBINAR_DATE.getTime() - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (left === null || left <= 0) return null;

  const d = Math.floor(left / 86_400_000);
  const h = Math.floor((left % 86_400_000) / 3_600_000);
  const m = Math.floor((left % 3_600_000) / 60_000);
  const s = Math.floor((left % 60_000) / 1000);

  const units = [
    { v: pad(d), l: "days" },
    { v: pad(h), l: "hrs" },
    { v: pad(m), l: "min" },
    { v: pad(s), l: "sec" },
  ];

  return (
    <div className="flex justify-center gap-3">
      {units.map((u) => (
        <div
          key={u.l}
          className="glass-card w-18 rounded-2xl px-3 py-3 text-center"
        >
          <span className="font-display text-3xl font-extrabold tabular-nums text-primary">
            {u.v}
          </span>
          <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted">
            {u.l}
          </span>
        </div>
      ))}
    </div>
  );
}

type SubmitState = "idle" | "loading" | "done";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-violet-200 bg-surface px-4 py-3 text-foreground placeholder-gray-400 outline-none transition-colors focus:border-primary";

export default function RegisterSection() {
  const [state, setState] = useState<SubmitState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state !== "idle") return;
    setState("loading");
    // TODO: wire to a real endpoint (see parent project's src/app/api for the pattern)
    await new Promise((r) => setTimeout(r, 1200));
    setState("done");
  };

  return (
    <section id="register" className="bg-light-purple px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-lg text-center">
        <p className="font-display text-sm uppercase tracking-[0.25em] text-primary">
          Registration
        </p>
        <h2 className="mt-3 text-4xl sm:text-5xl">{form.title}</h2>
        <p className="mt-4 text-muted">{form.subtitle}</p>
        <p className="mt-6 text-sm font-semibold text-foreground">
          {details.dateLabel} · {details.timeLabel}
        </p>

        <div className="mt-8">
          <Countdown />
        </div>

        {/* the destination panel — deliberately more presence than the cards above */}
        <div className="mt-10 rounded-3xl border-2 border-primary/20 bg-surface p-8 text-left shadow-[0_24px_70px_-30px_rgba(124,58,237,0.35)]">
          {state === "done" ? (
            <div className="py-8 text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                <Check className="h-7 w-7 text-white" />
              </span>
              <h3 className="mt-5 text-2xl">{form.successTitle}</h3>
              <p className="mt-2 text-sm text-muted">{form.successBody}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block text-sm font-semibold text-foreground">
                {form.fields.name}
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className={inputClass}
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm font-semibold text-foreground">
                {form.fields.email}
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </label>
              <label className="block text-sm font-semibold text-foreground">
                {form.fields.phone}
                <input
                  required
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={inputClass}
                  placeholder="+91"
                />
              </label>
              <button
                type="submit"
                disabled={state === "loading"}
                className="cta-gradient cta-magnetic mt-2 flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-white disabled:opacity-80"
              >
                {state === "loading" ? (
                  <span className="spin h-5 w-5 rounded-full border-2 border-white/30 border-t-white" />
                ) : (
                  form.submitText
                )}
              </button>
            </form>
          )}
        </div>

        <p className="mt-6 text-xs text-muted">{details.platform}</p>
      </div>
    </section>
  );
}
