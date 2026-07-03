import { GraduationCap, Briefcase, RefreshCw, Layers } from "lucide-react";
import { WEBINAR_CONFIG } from "@/config/webinar";

export default function WhoAndWhat() {
  // Mapping the 5 list items to 4 clean cohort categories
  const targetAudience = [
    {
      title: "College Students & Grads",
      desc: "Explore career options in software engineering and gain the practical skills that universities often fail to teach.",
      icon: GraduationCap,
      colorClass: "bg-blue-50 text-blue-500 border-blue-100",
    },
    {
      title: "Career Switchers",
      desc: "Uncover a realistic, step-by-step roadmap to transition into tech from non-technical backgrounds with zero friction.",
      icon: RefreshCw,
      colorClass: "bg-rose-50 text-rose-500 border-rose-100",
    },
    {
      title: "Working Professionals",
      desc: "Upskill, understand how developers build applications, and add high-value full-stack capability to your skill set.",
      icon: Briefcase,
      colorClass: "bg-emerald-50 text-emerald-500 border-emerald-100",
    },
    {
      title: "Complete Beginners",
      desc: "Start from absolute scratch. Learn the underlying logic of programming with patient, plain-language instruction.",
      icon: Layers,
      colorClass: "bg-amber-50 text-amber-500 border-amber-100",
    },
  ];

  // Outcomes mapped to 6 premium numbered cards
  const outcomes = [
    {
      num: "01",
      title: "What Full Stack Means",
      desc: "Understand what frontend, backend, and database developers actually do and how they fit together.",
    },
    {
      num: "02",
      title: "Frontend vs Backend",
      desc: "Learn the core difference between building the user interface and handling server logic and data.",
    },
    {
      num: "03",
      title: "How Apps are Built",
      desc: "Get an architectural high-level overview of how modern websites and applications go from concept to deployment.",
    },
    {
      num: "04",
      title: "Live Code Demo",
      desc: "Watch a live developer write real code, explaining every step in plain language with no confusing syntax.",
    },
    {
      num: "05",
      title: "Career Paths & Roles",
      desc: "Explore the different routes into the industry, different development roles, and what skills matter most.",
    },
    {
      num: "06",
      title: "Your Personal Roadmap",
      desc: "Leave the session with a clear, step-by-step action plan and free learning resources to keep your momentum.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50/30 px-6 py-20 sm:px-12 lg:px-20 lg:py-28">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[350px] w-[350px] rounded-full bg-violet-200/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-[350px] w-[350px] rounded-full bg-fuchsia-200/20 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        
        {/* SECTION 1: Target Audience */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-violet-600">Who is this for?</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl tracking-tight">
            Anyone ready to actually learn to code.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500 text-sm sm:text-base font-semibold">
            {WEBINAR_CONFIG.whoAndWhat.subtitle}
          </p>
        </div>

        {/* 4-Column Cohort Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-28">
          {targetAudience.map((audience) => {
            const Icon = audience.icon;
            return (
              <div key={audience.title} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xl shadow-slate-100/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${audience.colorClass} border mb-6`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{audience.title}</h3>
                <p className="mt-2.5 text-xs font-semibold leading-relaxed text-slate-500">
                  {audience.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* SECTION 2: Outcomes ("No certificates. Proof you can build.") */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-violet-600">The Takeaways</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl tracking-tight">
            No certificates. Proof you can build.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500 text-sm sm:text-base font-semibold">
            {WEBINAR_CONFIG.whoAndWhat.outcomes.description}
          </p>
        </div>

        {/* 6-Card Numbered Outcomes Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {outcomes.map((outcome) => (
            <div key={outcome.num} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-slate-100/45 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left relative overflow-hidden">
              <span className="text-4xl font-extrabold bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent opacity-35 select-none">
                {outcome.num}
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-4">{outcome.title}</h3>
              <p className="mt-2 text-xs font-semibold leading-relaxed text-slate-500">
                {outcome.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
