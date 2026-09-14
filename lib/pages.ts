import { SITE_URL } from "@/lib/company";

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  h1: string;
  ogTitle?: string;
};

export const pages = {
  home: {
    path: "/",
    title: "Nationwide Retail & Procurement Partner | Greatly Brands",
    description:
      "Greatly Brands is a U.S.-based retail and procurement company. We work with manufacturers, brand owners, distributors, and wholesalers to purchase consumer products for resale and for commercial and government purchasing. Service area is the United States.",
    h1: "Nationwide Retail & Procurement Partner",
  },
  about: {
    path: "/about",
    title: "About Greatly Brands | Tulsa Retail & Procurement Company",
    description:
      "Greatly Brands, operated by Greatly LLC, is a Tulsa, Oklahoma-based retail and procurement company building purchasing relationships with brands, distributors, and manufacturers.",
    h1: "About Greatly Brands",
  },
  products: {
    path: "/products",
    title: "Consumer Product Categories | Greatly Brands",
    description:
      "Greatly Brands evaluates consumer product categories including household essentials, personal care, home and kitchen, office supplies, pet products, and general merchandise.",
    h1: "Consumer Product Categories",
  },
  suppliers: {
    path: "/suppliers",
    title: "Supplier & Brand Partnerships | Greatly Brands",
    description:
      "Become a Greatly Brands supplier. We purchase from manufacturers, brand owners, distributors, wholesalers, and established product suppliers for nationwide retail channels.",
    h1: "Become a Greatly Brands Supplier",
  },
  retail: {
    path: "/retail",
    title: "Nationwide Multi-Channel Retail | Greatly Brands",
    description:
      "Greatly Brands participates in online marketplace retail channels, including Amazon and Walmart.com, to reach consumers nationwide through multi-channel distribution.",
    h1: "Nationwide Multi-Channel Retail",
  },
  government: {
    path: "/government",
    title: "Government & Public-Sector Procurement | Greatly Brands",
    description:
      "Greatly Brands evaluates government and institutional procurement opportunities involving consumer goods, household products, supplies, and general merchandise.",
    h1: "Government & Public-Sector Procurement",
  },
  contact: {
    path: "/contact",
    title: "Contact Greatly Brands | Tulsa, Oklahoma",
    description:
      "Contact Greatly Brands for supplier, commercial, or government purchasing inquiries. Call 918-321-0104 or write Greatly LLC DBA Greatly Brands in Tulsa, Oklahoma.",
    h1: "Contact Greatly Brands",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | Greatly Brands",
    description:
      "Read how Greatly Brands collects and uses business inquiry information submitted through GreatlyBrands.com contact and supplier forms.",
    h1: "Privacy Policy",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use | Greatly Brands",
    description:
      "Terms of use for GreatlyBrands.com, the website of Greatly LLC DBA Greatly Brands, a nationwide retail and procurement company based in Tulsa, Oklahoma.",
    h1: "Terms of Use",
  },
} as const satisfies Record<string, PageSeo>;

export const indexablePages = Object.values(pages);

export function canonicalUrl(path: string) {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}
