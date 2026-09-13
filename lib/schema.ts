import { company, SITE_URL } from "@/lib/company";
import { canonicalUrl } from "@/lib/pages";

export const organizationId = `${SITE_URL}/#organization`;
export const websiteId = `${SITE_URL}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: company.name,
    legalName: company.legalEntity,
    alternateName: [company.legalName, company.dba],
    url: SITE_URL,
    telephone: company.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${company.address.line1}, ${company.address.line2}`,
      addressLocality: company.address.city,
      addressRegion: company.address.stateCode,
      postalCode: company.address.postalCode,
      addressCountry: company.address.countryCode,
    },
    areaServed: {
      "@type": "Country",
      name: company.serviceArea,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: company.phoneE164,
        contactType: "sales",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: company.name,
    url: SITE_URL,
    inLanguage: "en-US",
    publisher: { "@id": organizationId },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function webPageSchema(args: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl(args.path)}#webpage`,
    url: canonicalUrl(args.path),
    name: args.name,
    description: args.description,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    inLanguage: "en-US",
  };
}
