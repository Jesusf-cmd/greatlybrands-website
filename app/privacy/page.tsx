import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { company } from "@/lib/company";
import { pages } from "@/lib/pages";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pages.privacy);

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: pages.privacy.path,
            name: pages.privacy.title,
            description: pages.privacy.description,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy" },
          ]),
        ]}
      />
      <PageHero
        title={pages.privacy.h1}
        description="This policy explains how Greatly Brands handles information submitted through GreatlyBrands.com."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <section className="bg-white py-16">
        <div className="container-site prose-gb max-w-3xl text-muted">
          <p>
            {company.legalName} operates GreatlyBrands.com. This page describes
            information collected through the website&apos;s business inquiry forms
            and telephone contact.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Information we collect</h2>
          <p>
            When you submit a contact, supplier, or government inquiry, we collect
            the details you provide. Those details may include name, company,
            email address, telephone number, website, product category, and
            message content. We do not ask for banking information, passwords, or
            government identification numbers through these forms.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">How we use information</h2>
          <p>
            Inquiry information is used to evaluate supplier, commercial, or
            government purchasing conversations and to respond to the person who
            submitted the form. We do not sell this information.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Phone calls</h2>
          <p>
            Calls placed to {company.phoneDisplay} are business communications
            with {company.name}.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Retention</h2>
          <p>
            Inquiry records are retained as needed to manage business
            correspondence and supplier evaluation. A later CRM connection may
            store the same fields for follow-up.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Contact</h2>
          <p>
            Privacy questions can be submitted through the contact form or by
            calling {company.phoneDisplay}. Mail may be directed to {company.legalName},{" "}
            {company.address.line1}, {company.address.line2}, {company.address.city},{" "}
            {company.address.state} {company.address.postalCode}.
          </p>
        </div>
      </section>
    </>
  );
}
