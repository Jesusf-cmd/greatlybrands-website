import { ArrowIcon, Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import Link from "next/link";

const areas = [
  "Household & facility supplies",
  "Hygiene and personal care",
  "Office products and consumables",
  "General merchandise",
  "Seasonal and recurring procurement",
];

export function HomeGovernment() {
  return (
    <section id="government" className="relative overflow-hidden bg-navy-mid py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" aria-hidden="true">
          <defs>
            <pattern id="gov-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gov-grid)" />
        </svg>
      </div>

      <div className="relative container-site">
        <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
          <div className="flex justify-center">
            <SectionLabel light>Public Sector</SectionLabel>
          </div>
          <h2 className="font-display mb-6 text-[clamp(2rem,3.5vw,2.8rem)] leading-tight text-white">
            Government & public-sector procurement.
          </h2>
          <p className="text-[1.05rem] leading-relaxed text-white/70">
            Greatly Brands is interested in supplying suitable commercial products to federal
            agencies, public organizations, and institutional buyers. Potential product areas
            include household supplies, facility consumables, hygiene products, office-related
            products, and general merchandise.
          </p>
        </FadeIn>

        <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-2xl border border-white/7 bg-white/4 p-8">
              <h3 className="mb-6 text-xs font-semibold tracking-widest text-white uppercase">
                Category Focus Areas
              </h3>
              <ul className="space-y-4">
                {areas.map((area, index) => (
                  <li key={area} className="flex items-start gap-3 text-sm text-white/75">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue/25 bg-blue/15 font-mono text-xs text-[#60a5fa]">
                      {index + 1}
                    </div>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="h-full rounded-2xl border border-indigo-light/20 bg-indigo/12 p-8">
              <h3 className="mb-4 text-xs font-semibold tracking-widest text-white uppercase">
                How Inquiries Are Handled
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-white/70">
                Procurement personnel can describe a requirement through the inquiry form.
                Greatly Brands reviews fit against available consumer-product categories.
                Specific registrations, certifications, and contract credentials will be
                published here only when verified and active.
              </p>
              <div className="mt-5 flex flex-col items-start gap-4 border-t border-indigo-light/20 pt-5">
                <Button
                  href="/contact?reason=Government%20Purchasing"
                  variant="pill"
                  className="group px-5 py-3"
                >
                  Government purchasing inquiry
                  <ArrowIcon />
                </Button>
                <Link
                  href="/government"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-soft"
                >
                  Government procurement details
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
