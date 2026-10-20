import type { CSSProperties } from "react";

/** Shared inline styles for the legal pages, matching the support page idiom. */

export const page: CSSProperties = {
  fontFamily: "system-ui, -apple-system, sans-serif",
  maxWidth: "800px",
  margin: "0 auto",
  padding: "40px 20px 80px",
  lineHeight: 1.65,
  color: "var(--text)",
};

export const h1: CSSProperties = {
  fontSize: "2.4rem",
  marginBottom: "8px",
  color: "var(--heading)",
};

export const updated: CSSProperties = {
  fontSize: "0.9rem",
  color: "var(--muted)",
  marginTop: 0,
  marginBottom: "28px",
};

export const intro: CSSProperties = {
  fontSize: "1.05rem",
  marginBottom: "28px",
};

export const h2: CSSProperties = {
  fontSize: "1.4rem",
  marginTop: "42px",
  marginBottom: "12px",
  color: "var(--heading)",
  borderBottom: "1px solid var(--rule)",
  paddingBottom: "8px",
};

export const h3: CSSProperties = {
  fontSize: "1.08rem",
  marginTop: "26px",
  marginBottom: "8px",
  color: "var(--accent)",
};

export const p: CSSProperties = {
  marginTop: 0,
  marginBottom: "14px",
};

export const ul: CSSProperties = {
  marginTop: 0,
  marginBottom: "16px",
  paddingLeft: "22px",
};

export const li: CSSProperties = {
  marginBottom: "8px",
};

export const table: CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "0.94rem",
  marginBottom: "18px",
};

export const th: CSSProperties = {
  textAlign: "left",
  padding: "10px 12px 10px 0",
  borderBottom: "2px solid var(--rule-strong)",
  verticalAlign: "top",
  fontWeight: 600,
};

export const td: CSSProperties = {
  textAlign: "left",
  padding: "10px 12px 10px 0",
  borderBottom: "1px solid var(--rule)",
  verticalAlign: "top",
};

export const callout: CSSProperties = {
  backgroundColor: "var(--surface)",
  borderLeft: "4px solid var(--accent)",
  padding: "18px 22px",
  margin: "24px 0",
  borderRadius: "4px",
};

export const contact: CSSProperties = {
  color: "var(--accent)",
  textDecoration: "none",
};
