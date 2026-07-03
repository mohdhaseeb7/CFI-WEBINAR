import React from "react";

const tools = [
  { name: "HTML5", color: "bg-orange-50 text-orange-600 border-orange-100" },
  { name: "CSS3", color: "bg-blue-50 text-blue-600 border-blue-100" },
  { name: "JavaScript", color: "bg-yellow-50 text-yellow-700 border-yellow-100" },
  { name: "React", color: "bg-cyan-50 text-cyan-600 border-cyan-100" },
  { name: "Node.js", color: "bg-green-50 text-green-600 border-green-100" },
  { name: "Express.js", color: "bg-slate-50 text-slate-600 border-slate-100" },
  { name: "MongoDB", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  { name: "Tailwind CSS", color: "bg-teal-50 text-teal-600 border-teal-100" },
  { name: "Git & GitHub", color: "bg-neutral-50 text-neutral-800 border-neutral-200" },
  { name: "REST APIs", color: "bg-indigo-50 text-indigo-600 border-indigo-100" },
  { name: "Next.js", color: "bg-zinc-50 text-zinc-800 border-zinc-200" },
  { name: "AI APIs (Gemini)", color: "bg-violet-50 text-violet-600 border-violet-100" },
];

export default function TechStackCloud() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50/30 px-6 py-20 sm:px-12 lg:px-20 lg:py-24 border-b border-slate-100/60">
      <div className="relative mx-auto max-w-7xl text-center">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-violet-600">The Tooling</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl tracking-tight">
            Industry tools, Not textbook syntax.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500 text-sm sm:text-base font-semibold">
            We focus on the tools and workflows that real full-stack engineers use daily to build production-grade web applications.
          </p>
        </div>

        {/* Tag Cloud container */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
          {tools.map((tool) => (
            <span
              key={tool.name}
              className={`px-4.5 py-2.5 rounded-full border text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-sm ${tool.color}`}
            >
              {tool.name}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
