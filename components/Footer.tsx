import { Logo } from "@/components/Logo";
import { PhoneLink } from "@/components/PhoneLink";
import { company, formatAddress } from "@/lib/company";
import { footerNav } from "@/lib/navigation";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo variant="white" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
            {company.legalName}. Serving customers and business partners throughout
            the United States.
          </p>
        </div>
        <div className="md:col-span-3">
          <h2 className="text-xs font-semibold tracking-[0.18em] text-white/60 uppercase">
            Company
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <h2 className="text-xs font-semibold tracking-[0.18em] text-white/60 uppercase">
            Contact
          </h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-white/80">
            <p>{company.legalName}</p>
            <p className="whitespace-pre-line">{formatAddress("footer")}</p>
            <p>
              Phone: <PhoneLink className="text-white hover:underline" />
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p>GreatlyBrands.com</p>
        </div>
      </div>
    </footer>
  );
}
