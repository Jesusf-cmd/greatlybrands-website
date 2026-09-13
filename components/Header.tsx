import Link from "next/link";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { MobileNavigation } from "@/components/MobileNavigation";
import { primaryNav, supplierCta } from "@/lib/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white">
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-4 md:h-20">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm px-3 py-2 text-sm font-medium text-navy/80 hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href={supplierCta.href}>{supplierCta.label}</Button>
        </div>
        <MobileNavigation />
      </div>
    </header>
  );
}
