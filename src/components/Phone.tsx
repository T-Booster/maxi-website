// An app screenshot in a phone frame. Screens live in /public/screens: most were captured from
// the app (iPhone 17 Pro Max simulator, owner's account). leaderboard.webp is the App Store
// leaderboard design with the crew on the podium (owner request 2026-10-20, consent given);
// its source is Docs/Store Screenshots/src/slides/_web-leaderboard.html in the iOS repo.
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
