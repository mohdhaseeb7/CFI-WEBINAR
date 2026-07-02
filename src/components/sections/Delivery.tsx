import { Compass, Columns2, Globe, Briefcase, Map, Code2, BookOpen } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "What Is Full Stack Development?",
    description: "Breaking down the term and the myths around it.",
  },
  {
    icon: Columns2,
    title: "Frontend vs. Backend",
    description: "The two halves of every app, explained simply.",
  },
  {
    icon: Globe,
    title: "How Modern Websites Work",
    description: "From the page loading to your data being saved.",
  },
  {
    icon: Briefcase,
    title: "Career Opportunities in Tech",
    description: "The different roles and routes into the field.",
  },
  {
    icon: Map,
    title: "A Beginner Roadmap",
    description: "A clear, step-by-step plan for getting started.",
  },
  {
    icon: Code2,
    title: "Live Coding Demonstration",
    description: "Watch real code come together, explained in plain language.",
  },
  {
    icon: BookOpen,
    title: "Resources to Keep Learning",
    description: "Where to go next once the session ends.",
  },
];

export default function Delivery() {
  return (
    <section className="bg-zinc-50 px-6 py-16 sm:px-12 lg:px-20 lg:py-24">
      <p className="mb-2 text-center text-xs font-bold uppercase tracking-widest text-primary">
        Session Breakdown
      </p>
      <h2 className="mb-2 text-center text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
        What You&apos;ll Learn
      </h2>
      <p className="mb-10 text-center text-muted lg:mb-14 lg:text-lg">
        By the end of this hour, you&apos;ll understand:
      </p>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
        {features.map((f) => (
          <div
            key={f.title}
            className="group flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md lg:p-6"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-sm shadow-primary/20">
              <f.icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="mb-1 font-semibold text-foreground lg:text-lg">{f.title}</h3>
              <p className="text-sm text-muted lg:text-base">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
