import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import { marketplaceChannels } from "@/lib/company";

export function HomeRetail() {
  return (
    <section id="retail" className="bg-cream py-28">
      <div className="container-site">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn className="relative">
            <div className="relative overflow-hidden rounded-3xl" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/redesign/retail-shelves.jpg"
                alt="Retail merchandise on store shelves. Generic illustrative photography."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(67,56,202,0.25), transparent 60%)",
                }}
              />
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <SectionLabel>Retail Distribution</SectionLabel>
            <h2 className="font-display mb-6 text-[clamp(2rem,3.5vw,2.8rem)] leading-tight text-navy">
              Nationwide online retail channels.
            </h2>
            <p className="mb-5 max-w-[46ch] text-[1.05rem] leading-relaxed text-muted">
              Greatly Brands may offer products through established U.S. online retail
              channels, including {marketplaceChannels.join(" and ")}. Those names identify
              sales channels. They do not mean Greatly Brands is owned by, endorsed by,
              affiliated with, or officially partnered with those companies.
            </p>
            <p className="mb-8 max-w-[44ch] leading-relaxed text-muted">
              Suitable consumer products may be made available to customers and purchasing
              organizations throughout the United States, depending on supplier agreements,
              category demand, and channel fit.
            </p>
            <p className="mb-8 max-w-[44ch] text-xs leading-relaxed text-[#7a746a]">
              Amazon and Walmart.com are trademarks of their respective owners. References are
              for identification purposes only and do not imply endorsement, affiliation, or
              active seller status.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/retail">Retail capabilities</Button>
              <Button href="/contact" variant="secondary">
                Contact Greatly Brands
              </Button>
            </div>
            <Link
              href="/products"
              className="mt-5 inline-flex text-sm font-semibold text-indigo underline-offset-4 hover:underline"
            >
              Browse product categories
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
