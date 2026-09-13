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
        description="Greatly Brands participates in online retail channels and may expand distribution according to supplier agreements and business opportunities."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Retail" },
        ]}
      />

      <section className="bg-white py-20">
        <div className="container-site grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="text-3xl font-semibold text-navy">Marketplace retail channels</h2>
            <p className="mt-5 text-muted">
              Products sold through major U.S. online marketplaces help Greatly
              Brands reach consumers nationwide. Current marketplace retail
              channels include Amazon and Walmart.com. Those names identify sales
              channels. They do not mean Greatly Brands is owned by, endorsed by,
              affiliated with, or officially partnered with those companies.
            </p>
            <p className="mt-4 text-muted">
              Multi-channel retail distribution may expand as supplier agreements,
              category demand, and operational capacity support additional
              channels.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/suppliers">Become a Supplier</Button>
              <Button href="/products" variant="secondary">
                Product categories
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line md:col-span-6">
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

      <section className="bg-paper py-20">
        <div className="container-site">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <CapabilityCard
              title="Nationwide consumer reach"
              description="Retail activity is directed to customers throughout the United States rather than a single local market."
            />
            <CapabilityCard
              title="Online marketplace sales"
              description="Greatly Brands sells through established marketplace retail channels, including Amazon and Walmart.com."
            />
            <CapabilityCard
              title="Product merchandising"
              description="Purchased products are presented through retail listings and category placement appropriate to each channel."
            />
            <CapabilityCard
              title="Inventory purchasing"
              description="Greatly Brands buys products for resale. Supplier conversations should assume wholesale purchasing, not consignment-only browsing."
            />
            <CapabilityCard
              title="Category expansion"
              description="New consumer categories may be added when product quality, demand, and economics support expansion."
            />
            <CapabilityCard
              title="Supplier relationships"
              description="Retail capacity is used to create durable purchasing relationships with manufacturers, distributors, and brand owners."
            />
          </div>
        </div>
      </section>
      <SupplierCTA />
    </>
  );
}
