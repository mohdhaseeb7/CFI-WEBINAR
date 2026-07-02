import { Star } from "lucide-react";

export default function TrustBadges() {
  return (
    <section className="border-y border-gray-100 bg-gray-50/50 px-6 py-10 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-[11px] font-bold uppercase tracking-widest text-gray-400">
          Our students and alumni have come from and work at
        </p>
        
        {/* Logos container */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-65 grayscale transition-all duration-300 hover:opacity-90">
          
          {/* Google Logo */}
          <span className="text-lg font-bold tracking-tight text-gray-600 font-sans">
            Google
          </span>

          {/* Amazon Logo */}
          <span className="text-lg font-bold tracking-tight text-gray-600 font-sans">
            amazon
          </span>

          {/* Microsoft Logo */}
          <span className="text-lg font-semibold tracking-tight text-gray-600 font-sans">
            Microsoft
          </span>

          {/* Stripe Logo */}
          <span className="text-xl font-extrabold tracking-tight text-gray-600 font-sans">
            stripe
          </span>

          {/* Meta Logo */}
          <span className="text-xl font-bold tracking-tight text-gray-600 font-sans">
            Meta
          </span>

          {/* Vercel Logo */}
          <span className="text-lg font-medium tracking-wider text-gray-600 font-sans">
            ▲ Vercel
          </span>
        </div>

      </div>
    </section>
  );
}
