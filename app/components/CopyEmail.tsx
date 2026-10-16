"use client";

import { useState } from "react";
import { contactEmail } from "../lib/site";

export function CopyEmail({ label, copiedLabel }: { label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      className="button button-ghost"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(contactEmail);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2000);
        } catch {
          window.location.href = `mailto:${contactEmail}`;
        }
      }}
    >
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
