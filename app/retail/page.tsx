import Image from "next/image";
import { CapabilityCard } from "@/components/CapabilityCard";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SupplierCTA } from "@/components/SupplierCTA";
import { Button } from "@/components/Button";
import { pages } from "@/lib/pages";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pages.retail);

export default function RetailPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: pages.retail.path,
            name: pages.retail.title,
            description: pages.retail.description,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Retail", path: "/retail" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Retail"
        title={pages.retail.h1}
        description="Greatly Brands participates in online retail channels that can make suitable consumer products available to customers throughout the United States."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Retail" },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-site grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="text-3xl font-semibold text-navy">Online marketplace commerce</h2>
            <p className="mt-5 text-muted">
              Products may be offered through major online marketplaces including
              Amazon and Walmart.com. Those names identify sales channels. They
              do not mean Greatly Brands is owned by, endorsed by, affiliated
              with, or officially partnered with those companies.
            </p>
            <p className="mt-4 text-muted">
              Multi-channel retail distribution may expand as supplier agreements,
              category demand, and operational capacity support additional
              channels.
            </p>
            <p className="mt-4 text-sm text-muted">
              Marketplace names are trademarks of their respective owners.
              References are for identification purposes only and do not imply
              endorsement or affiliation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/suppliers">Become a Supplier</Button>
              <Button href="/products" variant="secondary">
                Product categories
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-line md:col-span-6">
            <Image
              src="/images/section-retail.webp"
              alt="A customer completing a retail purchase, used to illustrate online marketplace commerce."
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="container-site">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <CapabilityCard
              title="Nationwide Customer Reach"
              description="Retail activity is directed to customers throughout the United States rather than a single local market."
            />
            <CapabilityCard
              title="Online Marketplace Commerce"
              description="Products may be offered through major online marketplaces including Amazon and Walmart.com."
            />
            <CapabilityCard
              title="Consumer Product Categories"
              description="Greatly Brands may source and distribute household, personal care, home, office, and general merchandise depending on demand and supplier agreements."
            />
            <CapabilityCard
              title="Responsible Channel Expansion"
              description="Additional retail channels may be added when supplier agreements, demand, and operational capacity support expansion."
            />
            <CapabilityCard
              title="Supplier Relationship Growth"
              description="Retail capacity is used to create durable purchasing relationships with manufacturers, distributors, and brand owners."
            />
          </div>
        </div>
      </section>
      <SupplierCTA />
    </>
  );
}
