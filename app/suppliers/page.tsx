import { CapabilityCard } from "@/components/CapabilityCard";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SupplierForm } from "@/components/SupplierForm";
import { pages } from "@/lib/pages";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pages.suppliers);

const audiences = [
  "Manufacturers",
  "Brand owners",
  "Master distributors",
  "Authorized distributors",
  "Wholesalers",
  "Importers",
  "Established product suppliers",
];

export default function SuppliersPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: pages.suppliers.path,
            name: pages.suppliers.title,
            description: pages.suppliers.description,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Suppliers", path: "/suppliers" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Suppliers"
        title={pages.suppliers.h1}
        description="Greatly Brands is interested in purchasing from manufacturers, brand owners, master distributors, authorized distributors, wholesalers, importers, and established product suppliers."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Suppliers" },
        ]}
      />

      <section className="bg-white py-20">
        <div className="container-site grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-semibold text-navy">Who we work with</h2>
            <p className="mt-4 text-muted">
              We work with manufacturers, brand owners, distributors, and
              wholesalers interested in developing professional retail
              relationships. Greatly Brands purchases products for resale through
              online marketplaces and other approved sales channels throughout
              the United States.
            </p>
            <ul className="mt-6 grid gap-2 text-navy">
              {audiences.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 md:col-span-7 sm:grid-cols-2">
            <CapabilityCard
              title="Nationwide Reach"
              description="Products can reach customers throughout the United States through multiple retail channels."
            />
            <CapabilityCard
              title="Multi-Channel Commerce"
              description="Greatly Brands participates in established online retail marketplaces."
            />
            <CapabilityCard
              title="Broad Category Capability"
              description="Our purchasing strategy is not limited to a single consumer category."
            />
            <CapabilityCard
              title="Professional Procurement"
              description="We seek straightforward, sustainable relationships with legitimate manufacturers and distributors."
            />
            <CapabilityCard
              title="Long-Term Opportunity"
              description="Our goal is to develop repeat purchasing relationships where product demand and economics support continued growth."
            />
            <CapabilityCard
              title="Direct evaluation"
              description="Share company, category, and distribution details so Greatly Brands can assess whether a purchasing relationship is a fit."
            />
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="container-site grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-semibold text-navy">Supplier inquiry</h2>
            <p className="mt-4 text-muted">
              Share company details, category focus, and distribution rights. A
              Greatly Brands representative can follow up if the products and
              commercial terms appear to be a fit.
            </p>
          </div>
          <div className="rounded-md border border-line bg-white p-6 shadow-[0_8px_24px_rgba(12,30,56,0.04)] md:col-span-8 md:p-8">
            <SupplierForm />
          </div>
        </div>
      </section>
    </>
  );
}
