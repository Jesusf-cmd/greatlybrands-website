"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/Button";
import { headerNav, purchasingCta, supplierCta } from "@/lib/navigation";

export function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const panelId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-sm p-2 text-white"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
          {open ? (
            <path d="M1 1l18 12M1 13L19 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          ) : (
            <>
              <line x1="0" y1="1" x2="20" y2="1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="0" y1="7" x2="14" y2="7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="0" y1="13" x2="20" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </>
          )}
        </svg>
      </button>

      {open ? (
        <div
          id={panelId}
          className="absolute inset-x-0 top-full border-t border-white/10 bg-navy-deep/95 shadow-xl backdrop-blur-md"
        >
          <div className="space-y-1 px-6 py-4">
            {headerNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block border-b border-white/6 py-3 text-sm font-medium text-white/70"
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="flex flex-col gap-2 pt-4">
              <Button href={supplierCta.href} variant="pillOutline" className="w-full">
                {supplierCta.label}
              </Button>
              <Button href={purchasingCta.href} variant="pillBright" className="w-full">
                {purchasingCta.label}
              </Button>
            </div>
            <button ref={closeRef} type="button" className="sr-only" onClick={() => setOpen(false)}>
              Close menu
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
