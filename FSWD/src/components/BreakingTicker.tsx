"use client";

import { WEBINAR_CONFIG } from "@/config/webinar";

const items = WEBINAR_CONFIG.receipts.ticker;

/** Breaking-news wire at the very top of the page. Pauses on hover. */
export default function BreakingTicker() {
  return (
    <div className="marquee relative z-20 flex items-stretch overflow-hidden bg-primary">
      <span className="relative z-10 flex shrink-0 items-center gap-1.5 bg-star px-4 font-display text-xs font-extrabold uppercase tracking-widest text-foreground">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
        </span>
        Breaking
      </span>
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap py-2.5 pl-10">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-xs font-bold uppercase tracking-wide text-white"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-star" />
          </span>
        ))}
      </div>
    </div>
  );
}
