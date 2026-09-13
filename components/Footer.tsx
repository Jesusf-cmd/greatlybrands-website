import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { PhoneLink } from "@/components/PhoneLink";
import { company, formatAddress } from "@/lib/company";
import { footerColumns, purchasingCta, supplierCta } from "@/lib/navigation";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="border-b border-white/6">
        <div className="container-site flex flex-col items-start justify-between gap-8 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-xl font-semibold text-white">Ready to work together?</h2>
            <p className="mt-1 text-sm text-white/40">
              Whether you supply products or need to procure them, start with an inquiry.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={supplierCta.href} variant="pillOutline" className="min-h-10 px-5 py-2.5 text-sm">
              {supplierCta.label}
            </Button>
            <Button href={purchasingCta.href} variant="pill" className="min-h-10 px-5 py-2.5 text-sm">
              Discuss Purchasing
            </Button>
          </div>
        </div>
      </div>

      <div className="container-site pt-14 pb-10">
        <div className="mb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="white" />
            <p className="mt-5 max-w-[28ch] text-xs leading-relaxed text-white/35">
              {company.legalName}. A U.S.-based multi-channel retail and procurement company
              connecting brands with buyers nationwide.
            </p>
            <PhoneLink className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-white/40 hover:text-white">
              <svg width="13" height="13" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M2 3a1 1 0 011-1h2l1 2.5-1.5 1.5A10 10 0 009 9.5L10.5 8 13 9v2a1 1 0 01-1 1C5 12 2 7 2 3"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              {company.phoneDisplay}
            </PhoneLink>
          </div>

          {Object.entries(footerColumns).map(([section, items]) => (
            <div key={section}>
              <h2 className="mb-5 text-xs font-semibold tracking-widest text-white/30 uppercase">
                {section}
              </h2>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={`${item.href}-${item.label}`}>
                    <Link href={item.href} className="text-xs text-white/45 transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/6 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-white/22">
            © {new Date().getFullYear()} {company.legalName} · {formatAddress("full")}
          </p>
          <p className="text-xs text-white/22">{company.domain}</p>
        </div>
      </div>
    </footer>
  );
}
