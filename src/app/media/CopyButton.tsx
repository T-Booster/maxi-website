"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyButton({
  text,
  label,
  what,
}: {
  /** What lands on the clipboard. */
  text: string;
  /** The words on the button. */
  label: string;
  /** Completes the label for screen readers, e.g. "for Orange, #E8601C". */
  what?: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    let ok = true;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Older or locked-down browsers: fall back to a hidden field.
      const field = document.createElement("textarea");
      field.value = text;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      ok = document.execCommand("copy");
      field.remove();
    }
    if (!ok) return; // say "Copied" only when something reached the clipboard
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1600);
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full border border-dark-border text-sm font-medium text-white/80 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
      >
        {copied ? (
          <Check size={15} className="text-primary-light" aria-hidden="true" />
        ) : (
          <Copy size={15} aria-hidden="true" />
        )}
        {/* The visible word changes; the button keeps one name for screen readers. */}
        <span aria-hidden="true">{copied ? "Copied" : label}</span>
        <span className="sr-only">
          {label}
          {what ? ` ${what}` : ""}
        </span>
      </button>
      <span role="status" className="sr-only">
        {copied ? "Copied" : ""}
      </span>
    </>
  );
}
