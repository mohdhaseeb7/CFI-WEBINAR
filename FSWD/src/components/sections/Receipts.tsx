"use client";

import { WEBINAR_CONFIG } from "@/config/webinar";
import { useCountUp, useInView } from "@/components/hooks";
import BrandMark from "@/components/BrandMark";

const { receipts } = WEBINAR_CONFIG;

// hand-placed feel: each card sits a hair off-axis
const TILTS = ["-rotate-1", "rotate-[0.5deg]", "-rotate-[0.75deg]"];

function StatCard({
  card,
  index,
}: {
  card: (typeof receipts.cards)[number];
  index: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  const count = useCountUp(card.stat, inView, 1400);

  return (
    <div
      ref={ref}
      style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
      className={`reveal-up ${TILTS[index % TILTS.length]} glow-purple rounded-3xl border border-violet-100 bg-surface p-7 transition-transform duration-300 hover:rotate-0 hover:-translate-y-1 ${
        inView ? "revealed" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-3 border-b border-violet-100 pb-4">
        <BrandMark brand={card.logo} className="h-7 text-3xl" />
        <span className="text-right text-[10px] font-semibold uppercase tracking-wider text-muted">
          {card.source}
        </span>
      </div>
      <p className="text-gradient mt-6 font-display text-7xl font-extrabold tabular-nums">
        {count}
        {card.suffix}
      </p>
      <h3 className="mt-4 text-xl leading-snug">{card.headline}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{card.body}</p>
    </div>
  );
}

export default function Receipts() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section id="receipts" className="relative overflow-hidden bg-light-purple py-24 sm:py-28">
      <div aria-hidden className="blob blob-purple -right-40 top-10 h-96 w-96 opacity-60" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div ref={ref} className={inView ? "revealed" : ""}>
          <p className="reveal-up font-display text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            {receipts.title}
          </p>
          <h2
            className="reveal-up mt-4 max-w-4xl leading-[0.95]"
            style={
              {
                "--reveal-delay": "60ms",
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
              } as React.CSSProperties
            }
          >
            Not predictions.{" "}
            <span className="text-gradient block">Already happened.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {receipts.cards.map((card, i) => (
            <StatCard key={card.company} card={card} index={i} />
          ))}
        </div>
      </div>

    </section>
  );
}
