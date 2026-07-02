import * as Icons from "lucide-react";
import { WEBINAR_CONFIG } from "@/config/webinar";

// Helper function to resolve dynamic Lucide icons
const getIconComponent = (iconName: string) => {
  const IconComponent = (Icons as any)[iconName];
  return IconComponent || Icons.HelpCircle;
};

export default function Instructor() {
  return (
    <section className="relative overflow-hidden bg-slate-50/50 px-6 py-20 sm:px-12 lg:px-20 lg:py-28">
      {/* Background glowing gradients */}
      <div className="pointer-events-none absolute -left-24 top-1/4 h-[350px] w-[350px] rounded-full bg-violet-200/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-[350px] w-[350px] rounded-full bg-fuchsia-200/15 blur-[100px]" />

      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl tracking-tight">
            {WEBINAR_CONFIG.instructor.sectionTitle}
          </h2>
          <p className="mt-4 text-base text-gray-500 lg:text-lg">
            {WEBINAR_CONFIG.instructor.sectionSubtitle}
          </p>
        </div>

        {/* Masterclass Speaker Card */}
        <div className="interactive-hover overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-xl shadow-violet-500/5">
          <div className="flex flex-col lg:flex-row items-stretch">
            
            {/* Left: Speaker Image */}
            <div className="relative w-full lg:w-[380px] shrink-0 bg-slate-100 min-h-[320px] lg:min-h-auto">
              <img
                src={WEBINAR_CONFIG.instructor.photoUrl}
                alt={`${WEBINAR_CONFIG.instructor.name} - ${WEBINAR_CONFIG.instructor.role}`}
                className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 rounded-xl bg-violet-900/80 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                {WEBINAR_CONFIG.instructor.badge}
              </div>
            </div>

            {/* Right: Speaker details */}
            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900 lg:text-3xl">{WEBINAR_CONFIG.instructor.name}</p>
                <p className="text-sm font-bold tracking-wider uppercase text-violet-600 mt-1">
                  {WEBINAR_CONFIG.instructor.role}
                </p>
                
                <p className="mt-6 text-base leading-relaxed text-gray-600 lg:text-lg">
                  {WEBINAR_CONFIG.instructor.bio}
                </p>

                {/* Speaker Credentials Grid */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 border-t border-gray-100 pt-8">
                  {WEBINAR_CONFIG.instructor.credentials.map((cred, index) => {
                    const Icon = getIconComponent(cred.icon);
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{cred.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Speaker CTA */}
              <div className="mt-10 pt-4 flex flex-wrap items-center gap-4 border-t border-gray-100/50">
                <a
                  href="/register"
                  className="group inline-flex items-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-700 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  {WEBINAR_CONFIG.instructor.ctaText}
                  <Icons.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <span className="text-xs font-semibold text-gray-400">
                  {WEBINAR_CONFIG.instructor.ctaSubtext}
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
