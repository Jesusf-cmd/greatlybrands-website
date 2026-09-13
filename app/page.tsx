import Image from "next/image";
import { CategoryCard } from "@/components/CategoryCard";
import { GovernmentCTA } from "@/components/GovernmentCTA";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { SupplierCTA } from "@/components/SupplierCTA";
import { TrustBar } from "@/components/TrustBar";
import { Button } from "@/components/Button";
import { productCategories } from "@/lib/categories";
import { pages } from "@/lib/pages";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata = buildMetadata(pages.home);

const supplierBenefits = [
  "Repeat purchasing potential",
  "Nationwide reach",
  "Broad category capability",
  "Straightforward purchasing communication",
  "Multiple retail channels",
  "Long-term account potential",
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/",
            name: pages.home.title,
            description: pages.home.description,
          }),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
        ]}
      />
      <Hero />
      <TrustBar />

      <section className="bg-white py-16 md:py-20">
        <div className="container-site grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <SectionHeader
              eyebrow="Suppliers"
              title="Built for Long-Term Supplier Relationships"
              description="Greatly Brands works with manufacturers, brand owners, authorized distributors, wholesalers and established suppliers interested in professional resale and purchasing relationships."
            />
            <ul className="grid gap-3 text-navy">
              {supplierBenefits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/suppliers">Work With Greatly Brands</Button>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-line">
              <Image
                src="/images/intro-merchandise.webp"
                alt="Shipping containers and freight representing nationwide movement of consumer merchandise. Illustrative photography; not a Greatly Brands facility."
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="container-site">
          <SectionHeader
            eyebrow="Merchandise"
            title="Product categories"
            description="Categories we may source and distribute include household essentials, personal care, home goods, and other consumer merchandise, depending on demand, supply availability, and channel suitability."
            action={{ href: "/products", label: "View product categories" }}
          />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-site grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionHeader
              eyebrow="Retail"
              title="Nationwide multi-channel retail"
              description="Greatly Brands participates in established U.S. online retail channels. Products may be offered through major online marketplaces including Amazon and Walmart.com."
            />
            <p className="mb-8 max-w-2xl text-sm text-muted">
              Marketplace names are trademarks of their respective owners. References
              are for identification purposes only and do not imply endorsement or
              affiliation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/retail">Retail capabilities</Button>
              <Button href="/contact" variant="secondary">
                Contact Greatly Brands
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-line md:col-span-5">
            <Image
              src="/images/section-retail.webp"
              alt="Retail checkout activity representing online and marketplace commerce. Generic illustrative photography."
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="container-site grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionHeader
              eyebrow="Government"
              title="Government & Public-Sector Procurement"
              description="Greatly Brands is interested in supplying suitable commercial products to federal agencies, public organizations, and institutional buyers. Potential product areas include household supplies, facility consumables, hygiene products, office-related products, and general merchandise."
            />
          </div>
          <div className="md:col-span-5">
            <GovernmentCTA />
          </div>
        </div>
      </section>

      <SupplierCTA />
    </>
  );
}
