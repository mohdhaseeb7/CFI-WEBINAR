import { BookOpen, AlertCircle, Zap } from "lucide-react";
import { WEBINAR_CONFIG } from "@/config/webinar";

export default function WhyExists() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/40 to-white px-6 py-20 sm:px-12 lg:px-20 lg:py-28 border-y border-slate-100/60">
      {/* Decorative Blur Spheres */}
      <div className="pointer-events-none absolute -right-36 -top-24 h-[400px] w-[400px] rounded-full bg-violet-200/25 blur-[100px]" />
      <div className="pointer-events-none absolute -left-36 -bottom-24 h-[400px] w-[400px] rounded-full bg-fuchsia-200/20 blur-[100px]" />
      
      <div className="relative mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-violet-600">The Learning Gap</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl tracking-tight">
            A CS degree alone won&apos;t make you job-ready.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500 text-sm sm:text-base font-semibold leading-relaxed">
            {WEBINAR_CONFIG.whyJoin.introLeading} {WEBINAR_CONFIG.whyJoin.introBody}
          </p>
        </div>

        {/* 3-Column Comparative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Outdated Theory */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-slate-100/50 hover:-translate-y-1 transition-all duration-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 mb-6">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Outdated CS Theories</h3>
            <p className="mt-3 text-sm text-slate-500 font-semibold leading-relaxed">
              Traditional universities focus heavily on theoretical textbooks, leaving students with zero practical experience in building and deploying real-world applications.
            </p>
          </div>

          {/* Card 2: Tutorial Hell */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-slate-100/50 hover:-translate-y-1 transition-all duration-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-500 mb-6">
              <AlertCircle className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Tutorial Hell</h3>
            <p className="mt-3 text-sm text-slate-500 font-semibold leading-relaxed">
              Self-studying via YouTube often traps you in tutorial hell—copying and pasting code from video streams without actually understanding the engineering core.
            </p>
          </div>

          {/* Card 3: Project-First Webinar */}
          <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-slate-100/50 hover:-translate-y-1 transition-all duration-300 ring-2 ring-violet-600/5 bg-gradient-to-b from-violet-50/10 to-transparent">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 mb-6">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Project-First Method</h3>
            <p className="mt-3 text-sm text-slate-500 font-semibold leading-relaxed">
              {WEBINAR_CONFIG.whyJoin.quote}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
