import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { SupplierCTA } from "@/components/SupplierCTA";
import { Button } from "@/components/Button";
import { formatAddress } from "@/lib/company";
import { pages } from "@/lib/pages";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pages.about);

const howWeWork = [
  "Identify viable supply relationships",
  "Evaluate product and category fit",
  "Establish purchasing terms",
  "Bring products into appropriate retail channels",
  "Grow successful relationships over time",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: pages.about.path,
            name: pages.about.title,
            description: pages.about.description,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Company"
        title={pages.about.h1}
        description="Greatly Brands, operated by Greatly LLC, is a Tulsa, Oklahoma-based retail and procurement company serving customers and business partners throughout the United States."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-site grid items-start gap-12 md:grid-cols-12">
          <div className="prose-gb md:col-span-7">
            <h2 className="text-3xl font-semibold text-navy">A nationwide retail and procurement company</h2>
            <p className="mt-5 text-muted">
              Greatly Brands works with manufacturers, brand owners, authorized
              distributors, wholesalers, and other legitimate supply partners to
              purchase consumer products for resale. Products may be offered
              through established U.S. online retail channels, including Amazon
              and Walmart.com, and to commercial and government purchasing
              organizations where the opportunity is a fit.
            </p>
            <p className="text-muted">
              The company sources across a range of consumer-product categories
              depending on demand, supply availability, supplier agreements,
              category economics, and channel suitability. This website is
              intended for supplier, commercial, and public-sector audiences. It
              is not a consumer shopping catalog.
            </p>
            <p className="text-muted">
              The business address is {formatAddress("full")}. This is a
              business address for correspondence and should not be treated as a
              walk-in storefront, warehouse, distribution center, showroom, or
              fulfillment center.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/suppliers">Become a Supplier</Button>
              <Button href="/contact" variant="secondary">
                Contact Greatly Brands
              </Button>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line">
              <Image
                src="/images/section-about.webp"
                alt="Urban commercial buildings representing national business operations, used as generic illustrative photography."
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-muted">
              Greatly Brands serves customers and business partners throughout
              the United States from Tulsa, Oklahoma.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="container-site grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeader
              title="How We Work"
              description="Greatly Brands concentrates on identifying suitable supply relationships, evaluating category fit, and placing products into appropriate retail channels over time."
            />
          </div>
          <ol className="grid gap-4 md:col-span-7">
            {howWeWork.map((step, index) => (
              <li
                key={step}
                className="flex gap-4 border border-line bg-white p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-navy text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <span className="pt-1 font-medium text-navy">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SupplierCTA />
    </>
  );
}
