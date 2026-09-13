import type { Metadata } from "next";
import { company } from "@/lib/company";
import { canonicalUrl, type PageSeo } from "@/lib/pages";

export function buildMetadata(page: PageSeo): Metadata {
  const url = canonicalUrl(page.path);
  const title = page.title;
  const description = page.description;
  const ogTitle = page.ogTitle ?? page.title;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      siteName: company.name,
      title: ogTitle,
      description,
      locale: "en_US",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Greatly Brands — nationwide retail and procurement",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: ["/opengraph-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
