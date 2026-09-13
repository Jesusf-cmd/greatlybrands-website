import Image from "next/image";
import { CapabilityCard } from "@/components/CapabilityCard";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import {
  governmentCredentials,
  hasVerifiedGovernmentCredentials,
} from "@/lib/company";
import { pages } from "@/lib/pages";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pages.government);

export default function GovernmentPage() {
  const verified = hasVerifiedGovernmentCredentials();

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
        description="Greatly Brands evaluates government and institutional procurement opportunities involving consumer goods, household products, supplies, and general merchandise."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Government" },
        ]}
      />

      <section className="bg-white py-20">
        <div className="container-site grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="text-3xl font-semibold text-navy">Commercial products for eligible buyers</h2>
            <p className="mt-5 text-muted">
              Greatly Brands is interested in supporting federal and other eligible
              government purchasing opportunities involving commercial consumer
              products. The company does not list contract awards, schedule
              holdings, or registration numbers on this site unless those items
              have been verified.
            </p>
            <p className="mt-4 text-muted">
              Procurement personnel can use the inquiry form to describe a
              requirement. Greatly Brands will review fit against available
              consumer-product categories and current retail capabilities.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line md:col-span-6">
            <Image
              src="/images/section-government.webp"
              alt="Professionals reviewing documents at a table, used to illustrate procurement discussions."
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="container-site grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <CapabilityCard
            title="Federal Procurement"
            description="Greatly Brands reviews eligible federal purchasing opportunities involving commercial consumer products when those opportunities are a fit."
          />
          <CapabilityCard
            title="Institutional Purchasing"
            description="Institutional buyers seeking household products, supplies, and general merchandise can inquire about current category coverage."
          />
          <CapabilityCard
            title="General Merchandise"
            description="Public-sector inquiries may include a wide range of everyday consumer merchandise rather than a single specialty category."
          />
          <CapabilityCard
            title="Household & Facility Supplies"
            description="Cleaning, paper, and other household or facility-related consumer products can be considered where sourcing and channel terms allow."
          />
          <CapabilityCard
            title="Commercial Product Sourcing"
            description="The same supplier network used for nationwide retail can be evaluated for commercial and government product needs."
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-site grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-semibold text-navy">Registration & credentials</h2>
            <p className="mt-4 text-muted">
              Verified identifiers will appear here when they are confirmed. Until
              then, this section remains a placeholder so SAM, UEI, CAGE, GSA
              Schedule, and socioeconomic designations can be added without
              rebuilding the page.
            </p>
          </div>
          <div className="rounded-md border border-line bg-paper p-6 md:col-span-7">
            {verified ? (
              <dl className="grid gap-4">
                {governmentCredentials.uei ? (
                  <div>
                    <dt className="text-sm font-semibold text-navy">UEI</dt>
                    <dd>{governmentCredentials.uei}</dd>
                  </div>
                ) : null}
                {governmentCredentials.cageCode ? (
                  <div>
                    <dt className="text-sm font-semibold text-navy">CAGE code</dt>
                    <dd>{governmentCredentials.cageCode}</dd>
                  </div>
                ) : null}
                {governmentCredentials.gsaSchedule ? (
                  <div>
                    <dt className="text-sm font-semibold text-navy">GSA Schedule</dt>
                    <dd>{governmentCredentials.gsaSchedule}</dd>
                  </div>
                ) : null}
              </dl>
            ) : (
              <ul className="grid gap-3 text-sm text-navy">
                <li>SAM registration — to be published when verified</li>
                <li>Unique Entity ID (UEI) — to be published when verified</li>
                <li>CAGE code — to be published when verified</li>
                <li>GSA Schedule — to be published when verified</li>
                <li>Socioeconomic designations — to be published when verified</li>
              </ul>
            )}
          </div>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-28 bg-paper py-20">
        <div className="container-site grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-semibold text-navy">Government purchasing inquiry</h2>
            <p className="mt-4 text-muted">
              Describe the requirement, buying organization, and timing. Do not
              include classified information, passwords, or banking details.
            </p>
          </div>
          <div className="rounded-md border border-line bg-white p-6 shadow-[0_8px_24px_rgba(12,30,56,0.04)] md:col-span-8 md:p-8">
            <ContactForm
              defaultReason="Government Purchasing"
              eventName="government_inquiry_submit"
              submitLabel="Submit government inquiry"
            />
          </div>
        </div>
      </section>
    </>
  );
}
