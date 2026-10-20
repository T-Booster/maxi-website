// A real app screenshot in a phone frame. Screens live in /public/screens, captured from
// the app (iPhone 17 Pro Max simulator, signed in to a real account) and exported as webp.
export default function Phone({
  src,
  alt,
  className = "",
  light = false,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  light?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={`${light ? "phone-frame-light" : "phone-frame"} ${className}`}>
      <img
        src={src}
        alt={alt}
        width={440}
        height={956}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="block w-full aspect-[440/956] object-cover bg-dark-surface"
      />
    </div>
  );
}
