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
  "Brands",
  "Authorized distributors",
  "Wholesalers",
  "Importers",
  "Established product suppliers",
];

const whyItems = [
  {
    title: "Nationwide customer reach",
    description: "Products purchased for resale can reach customers throughout the United States.",
  },
  {
    title: "Multi-channel commerce",
    description: "Greatly Brands participates in established U.S. online retail channels.",
  },
  {
    title: "Broad category flexibility",
    description: "Purchasing is not limited to a single consumer category.",
  },
  {
    title: "Purchasing opportunities",
    description: "Greatly Brands buys products for resale where demand, terms, and channel fit support a relationship.",
  },
  {
    title: "Professional communication",
    description: "Supplier conversations are handled directly, with clear product and commercial information.",
  },
  {
    title: "Long-term account potential",
    description: "Where product demand and economics support continued growth, the goal is a durable purchasing relationship.",
  },
];

const considerItems = [
  "Consumer demand",
  "Product quality",
  "Category fit",
  "Resale and channel restrictions",
  "Supplier terms",
  "Order minimums",
  "Long-term opportunity",
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
        description="Greatly Brands works with manufacturers, brand owners, distributors, wholesalers and established product suppliers interested in developing professional retail relationships in the United States."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Suppliers" },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-site grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-semibold text-navy">Who we work with</h2>
            <p className="mt-4 text-muted">
              We welcome conversations with legitimate manufacturers, brand
              owners, authorized distributors, wholesalers, importers, and
              established product suppliers.
            </p>
            <ul className="mt-6 grid gap-2 text-navy">
              {audiences.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-7">
            <h2 className="text-3xl font-semibold text-navy">Why work with Greatly Brands</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {whyItems.map((item) => (
                <CapabilityCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper py-16 md:py-20">
        <div className="container-site">
          <h2 className="text-3xl font-semibold text-navy">What we consider</h2>
          <p className="mt-4 max-w-3xl text-muted">
            Submitting an inquiry does not create a purchasing agreement. Greatly
            Brands reviews supplier conversations against commercial and
            operational fit.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {considerItems.map((item) => (
              <li
                key={item}
                className="border border-line bg-white px-5 py-4 font-medium text-navy"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-site grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-semibold text-navy">Supplier inquiry</h2>
            <p className="mt-4 text-muted">
              Share company, category, and product details. Submitting this form
              confirms that the inquiry was received for review. It does not
              constitute acceptance as a supplier or a purchase commitment.
            </p>
            <ol className="mt-6 grid gap-3 text-sm text-navy">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-navy text-xs font-semibold text-white">
                  1
                </span>
                <span>Submit company and product details using the form.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-navy text-xs font-semibold text-white">
                  2
                </span>
                <span>Greatly Brands reviews category fit, terms, and channel suitability.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-navy text-xs font-semibold text-white">
                  3
                </span>
                <span>If the opportunity appears to be a fit, follow-up uses the contact details provided.</span>
              </li>
            </ol>
          </div>
          <div className="rounded-sm border border-line bg-white p-6 shadow-[0_8px_24px_rgba(12,30,56,0.04)] md:col-span-8 md:p-8">
            <SupplierForm />
          </div>
        </div>
      </section>
    </>
  );
}
