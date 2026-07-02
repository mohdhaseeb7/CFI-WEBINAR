import { ShieldAlert, CheckCircle2, HelpCircle } from "lucide-react";

const myths = [
  {
    myth: "I'm not from a Computer Science background.",
    reality: "Most working developers didn't start with a CS degree. The field rewards demonstrated skill and curiosity as much as formal credentials.",
  },
  {
    myth: "Coding is only for geniuses.",
    reality: "Programming is a learnable skill, built through practice like any other, not an innate talent you either have or don't.",
  },
  {
    myth: "I'm too old to start.",
    reality: "People begin tech careers in their 20s, 30s, 40s, and beyond. What matters more is consistency, not your starting age.",
  },
  {
    myth: "I need to be good at math.",
    reality: "Most full stack development work involves logic and problem-solving, not advanced math. You don't need a math background to get started.",
  },
];

export default function Myths() {
  return (
    <section className="relative overflow-hidden bg-slate-50/50 px-6 py-20 sm:px-12 lg:px-20 lg:py-28">
      {/* Background radial blobs */}
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[350px] w-[350px] rounded-full bg-violet-200/20 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 bottom-1/4 h-[350px] w-[350px] rounded-full bg-fuchsia-200/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl tracking-tight">
            Common Myths About Learning to Code
          </h2>
          <p className="mt-4 text-base text-gray-500 lg:text-lg">
            Let&apos;s clear a few things up before we start the session.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {myths.map((m) => (
            <div
              key={m.myth}
              className="interactive-hover flex flex-col justify-between overflow-hidden rounded-3xl border border-violet-100/50 bg-white shadow-lg shadow-violet-500/5"
            >
              {/* Myth Row */}
              <div className="flex items-start gap-4 bg-red-50/40 p-6 lg:p-8">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
                  ✕
                </span>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-500">The Myth</span>
                  <p className="mt-1 font-bold text-gray-900 lg:text-lg leading-snug">{m.myth}</p>
                </div>
              </div>

              {/* Reality Row */}
              <div className="flex items-start gap-4 border-t border-gray-50 p-6 lg:p-8">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
                  ✓
                </span>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500">The Reality</span>
                  <p className="mt-1 text-sm font-semibold text-gray-600 lg:text-base leading-relaxed">{m.reality}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="/register"
            className="group inline-flex items-center gap-2 rounded-2xl bg-violet-600 hover:bg-violet-700 px-8 py-4 text-sm font-bold text-white shadow-md shadow-violet-600/10 transition-all hover:-translate-y-0.5 hover:shadow-lg lg:text-base"
          >
            Claim My Free Spot Now
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
