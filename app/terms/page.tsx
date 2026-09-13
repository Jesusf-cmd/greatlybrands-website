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
      <section className="bg-white py-16">
        <div className="container-site prose-gb max-w-3xl text-muted">
          <p>
            By using this website, you agree to these terms. The site provides
            information about {company.name} and a way to start supplier,
            commercial, or government purchasing conversations.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">No public storefront</h2>
          <p>
            GreatlyBrands.com is not an online shopping cart. Product category
            pages describe merchandise areas of interest. They are not offers to
            sell specific SKUs to consumers through this website.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Marketplace references</h2>
          <p>
            References to Amazon and Walmart.com identify retail channels where
            Greatly Brands sells products. They do not indicate ownership,
            endorsement, affiliation, or an official partnership with those
            companies.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Accuracy</h2>
          <p>
            We aim to keep company information accurate. This website does not
            invent government contracts, certifications, revenue, or supplier
            logos. Content may be updated as verified facts become available.
          </p>
          <h2 className="mt-10 text-2xl font-semibold text-navy">Inquiries</h2>
          <p>
            Submitting a form does not create a purchasing contract, vendor
            award, or supply agreement. Greatly Brands may accept, decline, or
            request additional information.
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
