import { CheckCircle2 } from "lucide-react";

const audience = [
  "College students exploring career options",
  "Recent graduates figuring out what's next",
  "Career switchers considering a move into tech",
  "Working professionals curious about upskilling",
  "Entrepreneurs who want to understand how their product is built",
  "Freelancers looking to add technical skills",
  "Complete beginners with zero coding experience",
];

export default function Audience() {
  return (
    <section className="px-6 py-16 sm:px-12 lg:px-20 lg:py-24">
      <h2 className="mb-2 text-center text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
        Who Should Attend
      </h2>
      <p className="mb-8 text-center text-muted lg:mb-10 lg:text-lg">
        If you&apos;re curious about technology and haven&apos;t known where
        to start, this is for you.
      </p>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4">
        {audience.map((item) => (
          <span
            key={item}
            className="flex h-full min-h-[4.5rem] items-center justify-center gap-2 rounded-2xl border border-accent bg-light-purple px-5 py-3 text-center text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent hover:shadow-md lg:px-6 lg:py-4 lg:text-base"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
