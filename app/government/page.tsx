import Image from "next/image";
import { CapabilityCard } from "@/components/CapabilityCard";
import { ContactForm } from "@/components/ContactForm";
import { GovernmentCredentials } from "@/components/GovernmentCredentials";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pages } from "@/lib/pages";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pages.government);

export default function GovernmentPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: pages.government.path,
            name: pages.government.title,
            description: pages.government.description,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Government", path: "/government" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Government"
        title={pages.government.h1}
        description="Greatly Brands is interested in supplying suitable commercial products to federal agencies, public organizations, and institutional buyers."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Government" },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-site grid items-start gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="text-3xl font-semibold text-navy">Commercially available consumer products</h2>
            <p className="mt-5 text-muted">
              Greatly Brands reviews government and institutional purchasing
              opportunities involving consumer goods, household products,
              facility consumables, hygiene products, office-related products,
              and general merchandise.
            </p>
            <p className="mt-4 text-muted">
              Procurement personnel can describe a requirement through the
              inquiry form. Greatly Brands will review fit against available
              consumer-product categories and current retail capabilities.
            </p>
            <p className="mt-4 text-sm text-muted">
              Specific registrations, certifications and contract credentials
              will be published only when verified.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-line md:col-span-6">
            <Image
              src="/images/section-government.webp"
              alt="Professionals reviewing documents at a table, used to illustrate procurement discussions. Generic illustrative photography."
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="container-site grid gap-5 md:grid-cols-2">
          <CapabilityCard
            title="Federal Procurement Opportunities"
            description="Greatly Brands reviews eligible federal purchasing opportunities involving commercially available consumer products when those opportunities are a fit."
          />
          <CapabilityCard
            title="Commercially Available Consumer Products"
            description="Inquiries may include household supplies, hygiene products, facility consumables, and other everyday consumer merchandise."
          />
          <CapabilityCard
            title="Institutional Purchasing"
            description="Public organizations and institutional buyers seeking household products, supplies, and general merchandise can inquire about category coverage."
          />
          <CapabilityCard
            title="General Merchandise & Supplies"
            description="Public-sector inquiries may include a wide range of everyday consumer merchandise rather than a single specialty category."
          />
        </div>
      </section>

      <GovernmentCredentials />

      <section id="inquiry" className="scroll-mt-28 bg-white py-16 md:py-20">
        <div className="container-site grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-semibold text-navy">Procurement inquiries</h2>
            <p className="mt-4 text-muted">
              Describe the requirement, buying organization, and timing. Do not
              include classified information, passwords, tax identifiers, or
              banking details.
            </p>
            <p className="mt-4 text-sm text-muted">
              Submitting an inquiry does not create a contract award or
              purchasing obligation.
            </p>
          </div>
          <div className="rounded-sm border border-line bg-white p-6 shadow-[0_8px_24px_rgba(12,30,56,0.04)] md:col-span-8 md:p-8">
            <ContactForm
              defaultReason="Government Purchasing"
              inquiryType="government"
              submitLabel="Submit government inquiry"
            />
          </div>
        </div>
      </section>
    </>
  );
}
