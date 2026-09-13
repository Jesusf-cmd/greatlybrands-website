import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { company } from "@/lib/company";
import { pages } from "@/lib/pages";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pages.terms);

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: pages.terms.path,
            name: pages.terms.title,
            description: pages.terms.description,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Terms of Use", path: "/terms" },
          ]),
        ]}
      />
      <PageHero
        title={pages.terms.h1}
        description="These terms govern use of GreatlyBrands.com, the website of Greatly LLC DBA Greatly Brands."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Use" },
        ]}
      />
      <section className="bg-white py-16 md:py-20">
        <div className="container-site prose-gb max-w-3xl text-muted">
          <p>
            By using this website, you agree to these terms. GreatlyBrands.com
            provides information about {company.name} and a way to start supplier,
            commercial, or government purchasing conversations. These terms are
            a general website-use statement and have not been described as
            attorney-reviewed.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Informational purpose</h2>
          <p>
            The website is informational. Product category pages describe
            merchandise areas of interest. They are not a consumer storefront,
            shopping cart, or an offer to sell specific SKUs through this site.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">No guarantee of supplier acceptance</h2>
          <p>
            Submitting a supplier inquiry does not create a vendor relationship,
            authorized-seller status, or any obligation for Greatly Brands to
            purchase products. Greatly Brands may accept, decline, or request
            additional information.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">No guarantee of purchase orders</h2>
          <p>
            Nothing on this website is a purchase order, bid award, contract, or
            commitment to buy. Any purchasing relationship, if established, will
            be governed by separate commercial terms.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">No marketplace affiliation</h2>
          <p>
            References to Amazon and Walmart.com identify retail channels where
            products may be offered. They do not indicate ownership, endorsement,
            affiliation, or an official partnership with those companies.
            Marketplace names are trademarks of their respective owners.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Intellectual property</h2>
          <p>
            The Greatly Brands name, logo, and website content are owned by
            {` ${company.legalName} `}
            or used with permission. You may not copy, scrape, or reuse site
            content for competing commercial purposes without written permission.
            Third-party names, marks, and images remain the property of their
            owners.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Acceptable site use</h2>
          <p>
            You may use this website for lawful business inquiries. You may not
            attempt to disrupt the site, submit automated or deceptive form
            entries, upload malware, harvest contact information, or use the site
            to send unlawful content.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Limitation of liability</h2>
          <p>
            The website is provided as a business information resource. To the
            extent permitted by applicable law, {company.legalName} is not liable
            for indirect, incidental, or consequential damages arising from use
            of the site, including decisions made based on website content.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Governing law</h2>
          <p>
            These terms are governed by the laws of the State of Oklahoma,
            without regard to conflict-of-law principles, except where applicable
            law requires otherwise.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Contact</h2>
          <p>
            Questions about these terms can be sent through the contact page or
            by calling {company.phoneDisplay}.
          </p>
        </div>
      </section>
    </>
  );
}
