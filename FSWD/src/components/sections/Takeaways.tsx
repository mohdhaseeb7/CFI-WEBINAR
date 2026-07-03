"use client";

import { ArrowRight } from "lucide-react";
import { WEBINAR_CONFIG } from "@/config/webinar";
import { useInView } from "@/components/hooks";

const { takeaways } = WEBINAR_CONFIG;

function CodePanel({
  label,
  code,
  tone,
}: {
  label: string;
  code: string;
  tone: "before" | "after";
}) {
  return (
    <div
      className={`flex-1 border p-5 font-mono text-sm leading-relaxed ${
        tone === "before"
          ? "border-red-200 bg-red-50/60"
          : "border-violet-200 bg-light-purple"
      }`}
    >
      <span
        className={`font-display text-xs uppercase tracking-wider ${
          tone === "before" ? "text-red-500" : "text-primary"
        }`}
      >
        {label}
      </span>
      <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-foreground">
        {code}
      </pre>
    </div>
  );
}

export default function Takeaways() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section className="px-6 py-24 sm:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl ${inView ? "revealed" : ""}`}
      >
        <p className="reveal-up font-display text-sm uppercase tracking-[0.25em] text-primary">
          {takeaways.kicker}
        </p>
        <h2
          className="reveal-up mt-4 text-4xl sm:text-6xl"
          style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
        >
          {takeaways.title}
        </h2>
        <p
          className="reveal-up mt-5 max-w-2xl text-lg text-muted"
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          {takeaways.subtitle}
        </p>

        <ol className="mt-14 divide-y divide-violet-100 border-y border-violet-100">
          {takeaways.items.map((item, i) => (
            <li
              key={item.text}
              className="reveal-left flex items-baseline gap-6 py-6"
              style={{ "--reveal-delay": `${160 + i * 90}ms` } as React.CSSProperties}
            >
              <span className="text-gradient font-display text-4xl font-extrabold tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg leading-relaxed text-foreground">
                {item.text}
              </span>
            </li>
          ))}
        </ol>

        <div
          className="reveal-up mt-16"
          style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
        >
          <p className="text-sm font-semibold text-muted">
            {takeaways.codeDemo.caption}
          </p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row">
            <CodePanel
              label={takeaways.codeDemo.before.label}
              code={takeaways.codeDemo.before.code}
              tone="before"
            />
            <CodePanel
              label={takeaways.codeDemo.after.label}
              code={takeaways.codeDemo.after.code}
              tone="after"
            />
          </div>
        </div>

        <a
          href="#register"
          className="mt-12 inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-dark"
        >
          {takeaways.ctaText}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
