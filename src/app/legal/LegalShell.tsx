import type { CSSProperties, ReactNode } from "react";

// The legal pages are copied from the support site, whose styles read these CSS
// variables. Setting them here gives the same pages the website's dark theme.
const vars = {
  "--text": "#b9b9c6",
  "--heading": "#ffffff",
  "--muted": "#8a8a9a",
  "--accent": "#f0854a",
  "--rule": "#1e1e2e",
  "--rule-strong": "#2e2e42",
  "--surface": "#12121a",
} as CSSProperties;

export default function LegalShell({ children }: { children: ReactNode }) {
  return (
    <section style={vars} className="pt-24 pb-8 px-2">
      {children}
    </section>
  );
}
