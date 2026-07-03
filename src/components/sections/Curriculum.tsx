import { Calendar, Clock, ArrowRight } from "lucide-react";
import { WEBINAR_AGENDA, WEBINAR_DURATION_LABEL } from "@/config/webinar";

export default function Curriculum() {
  return (
    <section id="agenda-section" className="relative overflow-hidden bg-gradient-to-b from-slate-50/30 to-white px-6 py-20 sm:px-12 lg:px-20 lg:py-28 border-b border-slate-100/60">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-100/30 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-violet-600">The Agenda</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl tracking-tight">
            1 hour, 7 modules. Learn at every stage.
          </h2>
          <p className="mt-4 text-slate-500 text-sm sm:text-base font-semibold">
            A focused, fast-moving {WEBINAR_DURATION_LABEL.toLowerCase()} session packed with value.
          </p>
        </div>

        {/* Timeline Grid Table */}
        <div className="border border-slate-100 rounded-3xl overflow-hidden shadow-2xl shadow-slate-100/40 bg-white">
          <div className="divide-y divide-slate-100">
            {WEBINAR_AGENDA.map((item, i) => (
              <div
                key={item.title}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 sm:p-8 hover:bg-slate-50/50 transition-colors duration-300 items-start"
              >
                {/* Column 1: Time badge (3 cols) */}
                <div className="md:col-span-3 flex items-center md:items-start">
                  <span className="inline-flex items-center gap-1.5 rounded-xl bg-violet-50 border border-violet-100 px-3 py-1.5 text-xs font-extrabold tabular-nums text-violet-700">
                    <Clock className="h-3.5 w-3.5 shrink-0" />
                    {item.time}
                  </span>
                </div>

                {/* Column 2: Module Title (4 cols) */}
                <div className="md:col-span-4">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Column 3: Topics list (5 cols) */}
                <div className="md:col-span-5">
                  <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-500">
                    {item.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="#register"
            className="group inline-flex items-center gap-2 rounded-2xl bg-violet-600 hover:bg-violet-700 px-8 py-4.5 text-sm font-bold text-white shadow-lg shadow-violet-600/10 transition-all hover:scale-[1.02] duration-300"
          >
            I Want This Roadmap
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
