import { CheckCircle2 } from "lucide-react";
import Interactive3DOrb from "@/components/Interactive3DOrb";
import { WEBINAR_CONFIG } from "@/config/webinar";

export default function Hero() {
  return (
    <section className="relative z-0 overflow-hidden px-6 pt-20 pb-20 sm:px-12 sm:pt-24 lg:px-20 lg:pt-32 lg:pb-36 min-h-[90vh] flex items-center justify-center">
      {/* Background container to prevent layout stacking bugs */}
      <div className="absolute inset-0 bg-white -z-20" />

      {/* Background Interactive 3D Orb */}
      <div className="absolute inset-0 -z-10 select-none pointer-events-none overflow-hidden">
        <Interactive3DOrb />
      </div>

      {/* Glow Effects and Radial Background Blobs */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-violet-100/30 via-transparent to-transparent -z-15" />

      {/* MAIN CONTAINER: Centered Layout */}
      <div className="relative mx-auto max-w-4xl text-center flex flex-col items-center gap-8 z-10 w-full">
        
        {/* Headline Group */}
        <div className="flex flex-col items-center gap-3 max-w-3xl w-full">
          {/* Above Heading Row: 1-Hour Sticker positioned on the top left above the title */}
          <div className="flex justify-start w-full mb-1 px-4">
            <div className="select-none rotate-[-4deg] hover:rotate-0 transition-transform duration-300">
              <div className="relative bg-amber-400 text-neutral-950 px-4 py-2 font-mono font-extrabold uppercase tracking-wider text-[10px] sm:text-xs border border-neutral-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-sm overflow-hidden">
                {/* Folded corner simulation */}
                <div className="absolute right-0 bottom-0 w-2.5 h-2.5 bg-amber-500 border-l border-t border-neutral-900 origin-bottom-right rotate-45 transform translate-x-1.5 translate-y-1.5" />
                {WEBINAR_CONFIG.hero.stickerText}
              </div>
            </div>
          </div>

          {/* Huge Centered Main Headline */}
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            {WEBINAR_CONFIG.hero.headlineFirst}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-600 bg-clip-text text-gradient-purple-pink">
              {WEBINAR_CONFIG.hero.headlineGradient}
            </span>
            {WEBINAR_CONFIG.hero.headlineLast}
          </h1>
        </div>

        {/* Descriptive Copy */}
        <p className="max-w-2xl text-lg leading-relaxed text-gray-600 lg:text-xl font-medium">
          {WEBINAR_CONFIG.hero.description}
        </p>

        {/* Call to Action */}
        <div className="flex flex-col items-center gap-5 w-full">
          <a
            href="/register"
            className="group interactive-hover relative flex items-center justify-center gap-3 rounded-2xl bg-violet-600 hover:bg-violet-700 px-8 py-5 text-base font-bold text-white shadow-xl shadow-violet-600/20 w-full sm:w-auto"
          >
            {WEBINAR_CONFIG.hero.ctaText}
            <span className="transition-transform group-hover:translate-x-1.5">→</span>
          </a>
        </div>

        {/* Social Proof Avatars */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 border-t border-gray-100 pt-6 w-full max-w-md">
          <div className="flex -space-x-3">
            <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">JD</div>
            <div className="h-8 w-8 rounded-full border-2 border-white bg-violet-200 flex items-center justify-center text-[10px] font-bold text-violet-600">SK</div>
            <div className="h-8 w-8 rounded-full border-2 border-white bg-fuchsia-200/ flex items-center justify-center text-[10px] font-bold text-fuchsia-600">AM</div>
            <div className="h-8 w-8 rounded-full border-2 border-white bg-blue-200 flex items-center justify-center text-[10px] font-bold text-blue-600">RK</div>
          </div>
          <span className="text-xs font-semibold text-gray-500">
            {WEBINAR_CONFIG.hero.trustText}
          </span>
        </div>

        {/* Horizontal Conversion Checklist */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-500 border-t border-gray-100/50 pt-6 w-full max-w-2xl">
          {WEBINAR_CONFIG.hero.checklist.map((item) => (
            <span key={item} className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
