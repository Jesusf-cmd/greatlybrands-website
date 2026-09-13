import { IBM_Plex_Sans } from "next/font/google";
import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { company, SITE_URL } from "@/lib/company";
import { pages } from "@/lib/pages";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm",
  weight: ["400", "500", "600", "700"],
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
    "nationwide retailer",
    "consumer goods retailer",
    "consumer product buyer",
    "wholesale product buyer",
    "brand retail partner",
    "supplier partnerships",
    "multi-channel retailer",
    "marketplace retailer",
    "consumer goods procurement",
    "general merchandise supplier",
    "government product supplier",
    "federal product supplier",
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
    <html lang="en" className={`${ibmPlexSans.variable} h-full`}>
      <body className={`${ibmPlexSans.className} min-h-full flex flex-col antialiased`}>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
