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
      <section className="bg-white py-16 md:py-20">
        <div className="container-site prose-gb max-w-3xl text-muted">
          <p>
            {company.legalName} operates GreatlyBrands.com. This page describes
            information collected through the website&apos;s business inquiry forms,
            telephone contact, and ordinary website operation. This policy is
            provided for transparency. It is not a claim of GDPR, CCPA, HIPAA,
            SOC 2, or any other specific compliance certification.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Information submitted through forms</h2>
          <p>
            When you submit a contact, supplier, or government inquiry, we collect
            the details you provide. Those details may include name, company,
            email address, telephone number, website, company type, product
            category, brands represented, order-minimum notes, and message
            content. We do not ask for banking information, credit-card numbers,
            tax identifiers, passwords, or identity documents through these forms.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Technical and log data</h2>
          <p>
            Like most websites, GreatlyBrands.com may automatically receive basic
            technical information from your browser or network, such as IP
            address, date and time of access, pages requested, referring URL, and
            user-agent details. This information is used to operate, secure, and
            troubleshoot the site.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Purpose of inquiry handling</h2>
          <p>
            Inquiry information is used to evaluate supplier, commercial, or
            government purchasing conversations and to respond to the person who
            submitted the form. Submitting a form does not create a supplier
            agreement, purchase order, or contract award.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Service providers</h2>
          <p>
            Website hosting, security, and related technical providers may process
            information as needed to operate GreatlyBrands.com. Inquiry records
            may later be transferred to a customer-relationship or marketing
            platform used by Greatly Brands to manage business follow-up. Those
            providers process information on behalf of Greatly Brands and are not
            given inquiry data for their own unrelated marketing.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Data retention</h2>
          <p>
            Inquiry records are retained as needed to manage business
            correspondence, supplier evaluation, and related operational records.
            Retention periods depend on the nature of the inquiry and ordinary
            business needs. Records that are no longer needed may be deleted or
            archived according to internal practice.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Security</h2>
          <p>
            Greatly Brands uses reasonable administrative and technical measures
            intended to protect inquiry information, including server-side
            validation and limits on automated form submissions. No method of
            transmission or storage is completely secure, and we cannot guarantee
            absolute security.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Contact rights</h2>
          <p>
            If you submitted an inquiry and want to ask about the information you
            provided, you may use the contact form or call {company.phoneDisplay}.
            Mail may be directed to {company.legalName}, {company.address.line1},{" "}
            {company.address.line2}, {company.address.city}, {company.address.state}{" "}
            {company.address.postalCode}.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Policy changes</h2>
          <p>
            This policy may be updated from time to time as the website or
            business operations change. The current version will be posted on this
            page.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Phone calls</h2>
          <p>
            Calls placed to {company.phoneDisplay} are business communications
            with {company.name}.
          </p>
        </div>
      </section>
    </>
  );
}
