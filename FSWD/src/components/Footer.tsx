import { WEBINAR_CONFIG } from "@/config/webinar";

export default function Footer() {
  return (
    <footer className="bg-surface px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={WEBINAR_CONFIG.brand.logo}
          alt={WEBINAR_CONFIG.brand.org}
          className="h-14 w-auto"
        />
        <p className="text-sm text-muted">
          A free community session by {WEBINAR_CONFIG.brand.org}
        </p>
        <a
          href={WEBINAR_CONFIG.brand.orgUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-primary hover:text-primary-dark"
        >
          codeforindia.com
        </a>
      </div>
    </footer>
  );
}
