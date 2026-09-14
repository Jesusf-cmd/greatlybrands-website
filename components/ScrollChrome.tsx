"use client";

import { useEffect, useState } from "react";

function scrollPercent() {
  if (typeof window === "undefined") return 0;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return max > 0 ? (window.scrollY / max) * 100 : 0;
}

export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const handler = () => setPct(scrollPercent());
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5">
      <div
        className="h-full bg-linear-to-r from-indigo to-blue"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function BackToTop() {
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const onScroll = () => setVis(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed right-3 bottom-3 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-indigo text-white shadow-lg transition-all duration-300 sm:right-8 sm:bottom-8 sm:h-11 sm:w-11"
      style={{
        opacity: vis ? 1 : 0,
        pointerEvents: vis ? "auto" : "none",
        transform: vis ? "translateY(0)" : "translateY(12px)",
      }}
    >
      <svg width="16" height="16" fill="none" viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="M8 12V4M4 8l4-4 4 4"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
