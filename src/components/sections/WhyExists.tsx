import { Compass, HelpCircle } from "lucide-react";
import { WEBINAR_CONFIG } from "@/config/webinar";

export default function WhyExists() {
  return (
    <section className="relative overflow-hidden bg-slate-50/50 px-6 py-24 sm:px-12 lg:px-20 lg:py-32">
      {/* Decorative Blur Spheres */}
      <div className="pointer-events-none absolute -right-36 -top-24 h-[400px] w-[400px] rounded-full bg-violet-200/25 blur-[100px]" />
      <div className="pointer-events-none absolute -left-36 -bottom-24 h-[400px] w-[400px] rounded-full bg-fuchsia-200/20 blur-[100px]" />
      
      <div className="relative mx-auto max-w-4xl text-center">
        
        {/* Header */}
        <h2 className="mb-8 text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl tracking-tight">
          {WEBINAR_CONFIG.whyJoin.title}
        </h2>

        {/* Narrative columns or blocks */}
        <div className="mx-auto max-w-2xl text-center mb-10 space-y-4">
          <p className="text-lg leading-relaxed text-muted lg:text-xl font-medium">
            {WEBINAR_CONFIG.whyJoin.introLeading}
          </p>
          <p className="text-base leading-relaxed text-gray-500 lg:text-lg">
            {WEBINAR_CONFIG.whyJoin.introBody}
          </p>
        </div>

        {/* Core takeaway card */}
        <div className="group relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-violet-100 bg-white p-8 shadow-xl shadow-violet-500/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl lg:p-10">
          <div className="absolute -right-4 -top-4 rounded-full bg-violet-50/50 p-6 text-violet-100/50 transition-colors group-hover:text-violet-100/80">
            <HelpCircle className="h-16 w-16" />
          </div>
          
          <p className="relative text-base font-semibold leading-relaxed text-gray-900 lg:text-lg">
            &ldquo;{WEBINAR_CONFIG.whyJoin.quote}&rdquo;
          </p>
          
          <div className="mt-6 flex items-center justify-center gap-1.5 text-xs font-bold text-violet-500">
            {WEBINAR_CONFIG.whyJoin.badge}
          </div>
        </div>

        {/* CTA link under this section */}
        <div className="mt-12">
          <a
            href="/register"
            className="group inline-flex items-center gap-2 rounded-2xl bg-violet-600 hover:bg-violet-700 px-8 py-4 text-sm font-bold text-white shadow-md shadow-violet-600/10 transition-all hover:-translate-y-0.5 hover:shadow-lg lg:text-base"
          >
            {WEBINAR_CONFIG.whyJoin.ctaText}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
