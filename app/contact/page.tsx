import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PhoneLink } from "@/components/PhoneLink";
import { company, formatAddress } from "@/lib/company";
import { pages } from "@/lib/pages";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pages.contact);

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: pages.contact.path,
            name: pages.contact.title,
            description: pages.contact.description,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Contact"
        title={pages.contact.h1}
        description="Reach Greatly Brands for supplier, commercial, or government purchasing conversations."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="bg-white py-20">
        <div className="container-site grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="rounded-md border border-line bg-paper p-6">
              <h2 className="text-2xl font-semibold text-navy">{company.name}</h2>
              <p className="mt-2 text-muted">{company.legalName}</p>
              <dl className="mt-6 grid gap-5">
                <div>
                  <dt className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <PhoneLink className="text-lg font-semibold text-blue hover:underline" />
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                    Address
                  </dt>
                  <dd className="mt-1 whitespace-pre-line text-navy">
                    {formatAddress("stacked")}
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-sm text-muted">
                This is a business address for Greatly Brands. It is not presented
                as a public retail store, warehouse, or walk-in location.
              </p>
            </div>
          </div>
          <div className="rounded-md border border-line bg-white p-6 shadow-[0_8px_24px_rgba(12,30,56,0.04)] md:col-span-7 md:p-8">
            <h2 className="mb-6 text-2xl font-semibold text-navy">Business inquiry</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
