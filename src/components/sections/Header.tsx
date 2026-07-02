import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-violet-100/50 bg-white/75 px-6 py-4 backdrop-blur-md sm:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/cfi-logo.png"
            alt="Code for India Foundation"
            width={260}
            height={104}
            className="h-12 w-auto sm:h-16"
            priority
          />
        </div>
        <a
          href="/register"
          className="interactive-hover rounded-full bg-primary hover:bg-primary-dark px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-primary/20 sm:text-xs"
        >
          Reserve My Seat
        </a>
      </div>
    </header>
  );
}
