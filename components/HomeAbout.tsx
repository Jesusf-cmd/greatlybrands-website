import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import { company } from "@/lib/company";

const pillars = [
  {
    icon: "🏠",
    title: "Nationwide Reach",
    body: "Consumer products sourced for customers throughout the United States.",
  },
  {
    icon: "🛒",
    title: "Multi-Channel Retail",
    body: "Products may be offered through established U.S. online retail channels, including Amazon and Walmart.com.",
  },
  {
    icon: "📦",
    title: "Broad Category Capability",
    body: "Nine consumer product categories under one procurement partner.",
  },
  {
    icon: "🏛",
    title: "Gov & Commercial",
    body: "Prepared to evaluate eligible commercial and public-sector purchasing needs.",
  },
];

export function HomeAbout() {
  return (
    <section id="about" className="bg-cream py-28">
      <div className="container-site">
        <div className="grid items-start gap-20 lg:grid-cols-[1fr_1.2fr]">
          <FadeIn>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="font-display mb-6 text-[clamp(2rem,3.5vw,2.8rem)] leading-tight text-navy">
              A procurement company built for lasting relationships.
            </h2>
            <p className="mb-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-muted">
              {company.name} is a U.S.-based multi-channel retail and procurement company. We
              connect manufacturers, brand owners, distributors, and wholesalers with consumers
              and purchasing organizations nationwide.
            </p>
            <p className="max-w-[40ch] leading-relaxed text-muted-soft">
              We evaluate partners carefully — prioritizing repeat purchasing potential, broad
              category fit, and a shared interest in sustainable volume over time.
            </p>
            <div className="mt-10 flex gap-8">
              <div>
                <div className="text-sm font-semibold text-navy">
                  {company.address.city}, {company.address.stateCode}
                </div>
                <div className="mt-0.5 text-xs tracking-wide text-warm-muted uppercase">
                  Headquarters
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-navy">{company.phoneDisplay}</div>
                <div className="mt-0.5 text-xs tracking-wide text-warm-muted uppercase">
                  Direct Line
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-3">
            {pillars.map((pillar, index) => (
              <FadeIn key={pillar.title} delay={index * 80}>
                <div className="h-full rounded-2xl border border-[#eae8e3] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d0cde6] hover:shadow-[0_12px_40px_rgba(15,31,61,0.08)]">
                  <div className="mb-4 text-2xl" aria-hidden="true">
                    {pillar.icon}
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-navy">{pillar.title}</h3>
                  <p className="text-xs leading-relaxed text-warm-muted">{pillar.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
