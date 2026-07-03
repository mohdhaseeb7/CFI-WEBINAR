/**
 * Company logo marks. Ford/Klarna/Duolingo/Meta are real brand SVGs
 * (public/logos, via Simple Icons). IBM's 8-bar wordmark is drawn in CSS
 * (.ibm-mark) since it isn't distributed there.
 */
const LOGO_FILES: Record<string, { src: string; label: string }> = {
  ford: { src: "/logos/ford.svg", label: "Ford" },
  klarna: { src: "/logos/klarna.svg", label: "Klarna" },
  duolingo: { src: "/logos/duolingo.svg", label: "Duolingo" },
  meta: { src: "/logos/meta.svg", label: "Meta" },
};

export default function BrandMark({
  brand,
  className = "h-6",
}: {
  brand: string;
  className?: string;
}) {
  if (brand === "ibm") {
    return (
      <span aria-label="IBM" className={`ibm-mark select-none ${className}`}>
        IBM
      </span>
    );
  }
  const logo = LOGO_FILES[brand];
  if (!logo) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={logo.src} alt={logo.label} className={`w-auto ${className}`} />
  );
}
