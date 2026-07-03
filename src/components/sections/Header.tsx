import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100/80 bg-white/80 px-6 py-2 backdrop-blur-md sm:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/cfi-logo.png"
            alt="Code for India Foundation"
            width={320}
            height={128}
            className="h-12 w-auto sm:h-16"
            priority
          />
        </div>
        <a
          href="#register"
          className="rounded-full bg-violet-600 hover:bg-violet-700 px-6 py-3 text-sm font-bold tracking-wide text-white shadow-md shadow-violet-600/10 hover:shadow-violet-600/25 transition-all duration-300"
        >
          Book Free Seat
        </a>
      </div>
    </header>
  );
}
