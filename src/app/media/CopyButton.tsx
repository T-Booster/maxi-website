"use client";

import { useState } from "react";
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

  async function copy() {
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
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-dark-border text-sm font-medium text-white/80 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
    >
      {copied ? <Check size={15} className="text-primary-light" /> : <Copy size={15} />}
      <span aria-live="polite">{copied ? "Copied" : label}</span>
      {what && <span className="sr-only">{` ${what}`}</span>}
    </button>
  );
}
