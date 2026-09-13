"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { MobileNavigation } from "@/components/MobileNavigation";
import { headerNav, purchasingCta, supplierCta } from "@/lib/navigation";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [homeScrolled, setHomeScrolled] = useState(false);
  const scrolled = !isHome || homeScrolled;

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setHomeScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className="fixed inset-x-0 top-0.5 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,19,38,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="container-site flex h-16 items-center justify-between">
        <Logo variant="white" />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {headerNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium text-white/60 transition-colors duration-200 hover:text-white"
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-indigo-light transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button href={supplierCta.href} variant="pillOutline" className="min-h-9 px-4 py-2 text-xs">
            {supplierCta.label}
          </Button>
          <Button href={purchasingCta.href} variant="pillBright" className="min-h-9 px-4 py-2 text-xs">
            {purchasingCta.label}
          </Button>
        </div>
        <MobileNavigation />
      </div>
    </header>
  );
}
