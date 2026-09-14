import { DM_Serif_Display, Inter } from "next/font/google";
import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { company, SITE_URL } from "@/lib/company";
import { pages } from "@/lib/pages";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: pages.home.title,
    template: "%s | Greatly Brands",
  },
  description: pages.home.description,
  applicationName: company.name,
  keywords: [
    "U.S. retail and procurement",
    "consumer product buyer",
    "wholesale product buyer",
    "brand retail partner",
    "supplier partnerships",
    "online retail channels",
    "consumer goods procurement",
    "general merchandise",
    "government purchasing inquiries",
    "public-sector procurement",
    "Tulsa procurement company",
    "Tulsa retail company",
  ],
  authors: [{ name: company.legalName }],
  creator: company.legalName,
  publisher: company.legalName,
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: company.name,
    title: pages.home.title,
    description: pages.home.description,
  },
  twitter: {
    card: "summary_large_image",
    title: pages.home.title,
    description: pages.home.description,
  },
  icons: {
    icon: [{ url: "/logo/icon.png", type: "image/png" }],
    apple: [{ url: "/logo/apple-icon.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable} h-full`}>
      <body className={`${inter.className} flex min-h-full flex-col antialiased`}>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
