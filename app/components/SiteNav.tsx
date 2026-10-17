"use client";

import { useEffect, useState, type ReactNode } from "react";

type SiteNavProps = {
  label: string;
  children: ReactNode;
};

/** Inline links on desktop; below 760px the same links open as a dropdown panel. */
export function SiteNav({ label, children }: SiteNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label={label}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <nav id="site-nav" className="site-nav" aria-label="Main" data-open={open} onClick={() => setOpen(false)}>
        {children}
      </nav>
    </>
  );
}
