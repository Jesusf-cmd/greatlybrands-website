import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { SupplierCTA } from "@/components/SupplierCTA";
import { Button } from "@/components/Button";
import { company } from "@/lib/company";
import { pages } from "@/lib/pages";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pages.about);

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
        description="Greatly Brands, operated by Greatly LLC, is a Tulsa, Oklahoma-based retail and procurement company focused on building reliable purchasing relationships with brands, distributors, and manufacturers across a wide range of consumer product categories."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <section className="bg-white py-20">
        <div className="container-site grid items-start gap-12 md:grid-cols-12">
          <div className="prose-gb md:col-span-7">
            <h2 className="text-3xl font-semibold text-navy">A nationwide retail company based in Tulsa</h2>
            <p className="mt-5 text-muted">
              {company.legalName} purchases consumer products from manufacturers,
              brands, authorized distributors, wholesalers, and other legitimate
              supply channels. Those products are resold through major U.S.
              marketplaces and other retail channels to customers throughout the
              United States.
            </p>
            <p className="text-muted">
              The website is built for supplier, commercial, and government
              audiences. It is not a consumer shopping catalog. Product pages
              present categories of merchandise Greatly Brands may purchase and
              distribute, not individual SKU inventory.
            </p>
            <h2 className="mt-12 text-3xl font-semibold text-navy">How the company works</h2>
            <p className="mt-5 text-muted">
              Greatly Brands concentrates on professional purchasing,
              multi-channel retail distribution, and responsible expansion. The
              operating model emphasizes:
            </p>
            <ul className="text-muted">
              <li>Supplier relationships with legitimate product sources</li>
              <li>Nationwide commerce through established retail channels</li>
              <li>Product sourcing across multiple consumer categories</li>
              <li>Clear purchasing communication</li>
              <li>Category expansion when demand and economics support it</li>
            </ul>
            <p className="text-muted">
              The business address is {company.address.line1}, {company.address.line2},{" "}
              {company.address.city}, {company.address.state} {company.address.postalCode}.
              This is the company&apos;s business address and should not be treated
              as a walk-in storefront, warehouse, or public showroom.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/suppliers">Become a Supplier</Button>
              <Button href="/contact" variant="secondary">
                Contact Greatly Brands
              </Button>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-line">
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

      <section className="bg-paper py-20">
        <div className="container-site">
          <SectionHeader
            title="What we do not claim here"
            description="This page includes only confirmed company facts. Additional history, credentials, storefront URLs, and registrations can be added when they are verified."
          />
        </div>
      </section>

      <SupplierCTA />
    </>
  );
}
