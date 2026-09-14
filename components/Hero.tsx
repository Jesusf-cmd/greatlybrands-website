import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, Button } from "@/components/Button";
import { company } from "@/lib/company";
import { purchasingCta, supplierCta } from "@/lib/navigation";

const facts = [
  { value: "9", label: "Consumer product categories" },
  { value: "U.S.", label: "Nationwide service area" },
  { value: "Retail", label: "Online marketplace channels" },
  { value: "Public sector", label: "Purchasing inquiries" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-navy-hero">
      <div className="absolute inset-0">
        <Image
          src="/images/redesign/hero-warehouse.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ opacity: 0.12 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 60% 40%, rgba(67,56,202,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(9,15,30,0.3) 0%, rgba(9,15,30,0.5) 60%, #090f1e 100%)",
          }}
        />
      </div>

      <div className="pointer-events-none absolute top-1/2 right-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/2 opacity-[0.04]">
        <svg viewBox="0 0 600 600" fill="none" aria-hidden="true">
          <circle cx="300" cy="300" r="280" stroke="#6366f1" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="200" stroke="#6366f1" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="300" cy="300" r="120" stroke="#6366f1" strokeWidth="0.75" />
        </svg>
      </div>

      <div className="relative z-10 container-site w-full pt-32 pb-14">
        <div className="max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-indigo-light/25 bg-indigo-light/12 px-4 py-2 text-xs font-semibold tracking-widest text-indigo-soft uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            U.S.-Based Retail & Procurement Partner
          </div>

          <h1
            className="font-display mb-6 leading-[0.95] text-white"
            style={{
              fontSize: "clamp(3.2rem, 8vw, 6.5rem)",
              letterSpacing: "-0.025em",
            }}
          >
            From sourcing
            <br />
            to <span className="text-indigo-soft italic">shelf</span> —
            <br />
            nationwide.
          </h1>

          <p className="mb-8 max-w-[46ch] text-lg leading-relaxed text-white/75">
            {company.name} is a U.S.-based retail and procurement company. We work with
            manufacturers, brand owners, distributors, and wholesalers to purchase consumer
            products for resale and for commercial and government purchasing. Service area is
            the United States.
          </p>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href={supplierCta.href} variant="pill" className="group w-full px-7 py-4 sm:w-auto">
              Become a Supplier
              <ArrowIcon />
            </Button>
            <Button href={purchasingCta.href} variant="onDarkSecondary" className="w-full px-7 py-4 sm:w-auto">
              Discuss Purchasing Needs
            </Button>
            <Link
              href="/about"
              className="text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              About Greatly Brands
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-y-6 border-t border-white/8 pt-8 md:grid-cols-4">
          {facts.map((fact) => (
            <div key={`${fact.value}-${fact.label}`}>
              <div className="font-display mb-1 text-2xl leading-none font-semibold text-white">
                {fact.value}
              </div>
              <div className="pr-3 text-xs tracking-wide text-white/60">{fact.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 hidden flex-col items-center gap-2 opacity-40 md:flex">
          <span className="text-xs font-medium tracking-widest text-white uppercase">Scroll</span>
          <div className="relative h-8 w-px overflow-hidden bg-white/15">
            <div className="animate-scroll-cue absolute inset-x-0 top-0 h-4 bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
