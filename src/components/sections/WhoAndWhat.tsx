import { CheckCircle2, Award, ArrowRight, UserCheck, CheckSquare } from "lucide-react";
import { WEBINAR_CONFIG } from "@/config/webinar";

export default function WhoAndWhat() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-12 lg:px-20 lg:py-28">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[350px] w-[350px] rounded-full bg-violet-200/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-[350px] w-[350px] rounded-full bg-fuchsia-200/20 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl tracking-tight">
            {WEBINAR_CONFIG.whoAndWhat.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-500 lg:text-lg">
            {WEBINAR_CONFIG.whoAndWhat.subtitle}
          </p>
        </div>

        {/* Side-by-Side Premium Cards */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          
          {/* Card 1: Who should attend */}
          <div className="interactive-hover flex flex-col justify-between rounded-3xl border border-violet-100 bg-violet-50/20 p-8 shadow-xl shadow-violet-500/5 lg:p-12">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 shadow-sm">
                  <UserCheck className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-violet-500">{WEBINAR_CONFIG.whoAndWhat.audience.tag}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{WEBINAR_CONFIG.whoAndWhat.audience.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500 lg:text-base">
                {WEBINAR_CONFIG.whoAndWhat.audience.description}
              </p>
              
              {/* Bullet list */}
              <ul className="mt-8 space-y-4">
                {WEBINAR_CONFIG.whoAndWhat.audience.list.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-[10px] font-bold text-violet-600">
                      ✓
                    </span>
                    <span className="text-sm font-semibold text-gray-700 lg:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-10">
              <a
                href="/register"
                className="group flex items-center justify-center gap-2 rounded-2xl bg-violet-600 hover:bg-violet-700 px-6 py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:shadow-lg"
              >
                {WEBINAR_CONFIG.whoAndWhat.audience.ctaText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Card 2: What you'll walk away with */}
          <div className="interactive-hover flex flex-col justify-between rounded-3xl border border-fuchsia-100 bg-fuchsia-50/10 p-8 shadow-xl shadow-fuchsia-500/5 lg:p-12">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-100 text-fuchsia-600 shadow-sm">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-500">{WEBINAR_CONFIG.whoAndWhat.outcomes.tag}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{WEBINAR_CONFIG.whoAndWhat.outcomes.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500 lg:text-base">
                {WEBINAR_CONFIG.whoAndWhat.outcomes.description}
              </p>
              
              {/* Outcome checklist */}
              <ul className="mt-8 space-y-4">
                {WEBINAR_CONFIG.whoAndWhat.outcomes.list.map((item, index) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fuchsia-100 text-xs font-bold text-fuchsia-600">
                      {index + 1}
                    </span>
                    <span className="text-sm font-semibold text-gray-700 lg:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-10">
              <a
                href="/register"
                className="group flex items-center justify-center gap-2 rounded-2xl bg-violet-600 hover:bg-violet-700 px-6 py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:shadow-lg"
              >
                {WEBINAR_CONFIG.whoAndWhat.outcomes.ctaText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
