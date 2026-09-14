import Link from "next/link";
import { ArrowIcon, Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import { supplierCta } from "@/lib/navigation";

const audiences = [
  "Manufacturers",
  "Brand owners",
  "Distributors",
  "Wholesalers",
];

const steps = [
  {
    n: "01",
    title: "Initial Inquiry",
    body: "Use the supplier form to share company and product details. The page confirms a successful send after the form is accepted.",
  },
  {
    n: "02",
    title: "Category Evaluation",
    body: "Greatly Brands reviews category fit, terms, and channel suitability. An inquiry does not create a purchasing agreement.",
  },
  {
    n: "03",
    title: "Follow-up",
    body: "If the opportunity appears to be a fit, follow-up uses the contact details provided.",
  },
  {
    n: "04",
    title: "Long-Term Relationship",
    body: "Where product demand and economics support continued growth, the goal is a durable purchasing relationship.",
  },
];

const benefits = [
  "Repeat purchasing potential",
  "U.S. nationwide service area",
  "Broad category capability",
  "Straightforward purchasing communication",
  "Online retail channels",
  "Long-term account potential",
];

export function HomeSuppliers() {
  return (
    <section id="suppliers" className="bg-navy py-28">
      <div className="container-site">
        <div className="grid items-start gap-20 lg:grid-cols-2">
          <FadeIn>
            <SectionLabel light>Supplier Partnerships</SectionLabel>
            <h2 className="font-display mb-6 text-[clamp(2rem,3.5vw,2.8rem)] leading-tight text-white">
              Built for long-term
              <br />
              supplier relationships.
            </h2>
            <p className="mb-6 max-w-[44ch] text-[1.05rem] leading-relaxed text-white/70">
              Greatly Brands works with manufacturers, brand owners, distributors, and
              wholesalers interested in professional resale and purchasing relationships in
              the United States.
            </p>
            <ul className="mb-8 grid grid-cols-2 gap-x-4 gap-y-2">
              {audiences.map((audience) => (
                <li key={audience} className="flex items-center gap-2 text-sm text-white/80">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-soft" aria-hidden="true" />
                  {audience}
                </li>
              ))}
            </ul>
            <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2.5">
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-indigo-light/40 bg-indigo-light/20">
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-soft" />
                  </div>
                  <span className="text-sm text-white/70">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button href={supplierCta.href} variant="pill" className="group px-6 py-3.5">
                Submit a Supplier Inquiry
                <ArrowIcon />
              </Button>
              <Link
                href="/suppliers"
                className="text-sm font-semibold text-indigo-soft underline-offset-4 hover:underline"
              >
                Supplier partnership details
              </Link>
            </div>
          </FadeIn>

          <div>
            {steps.map((step, index) => (
              <FadeIn key={step.n} delay={index * 100}>
                <div
                  className="relative flex gap-5 py-7"
                  style={{
                    borderBottom:
                      index < steps.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  }}
                >
                  {index < steps.length - 1 ? (
                    <div className="absolute top-14 left-[18px] h-7 w-px bg-indigo-light/20" />
                  ) : null}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-indigo-light/30 bg-indigo-light/15 font-mono text-xs font-bold text-indigo-soft">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-sm font-semibold text-white">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-white/65">{step.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
