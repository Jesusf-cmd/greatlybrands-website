import { Hero } from "@/components/Hero";
import { HomeAbout } from "@/components/HomeAbout";
import { HomeContact } from "@/components/HomeContact";
import { HomeGovernment } from "@/components/HomeGovernment";
import { HomeProducts } from "@/components/HomeProducts";
import { HomeRetail } from "@/components/HomeRetail";
import { HomeSuppliers } from "@/components/HomeSuppliers";
import { JsonLd } from "@/components/JsonLd";
import { Marquee } from "@/components/Marquee";
import { TrustBar } from "@/components/TrustBar";
import { pages } from "@/lib/pages";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata = buildMetadata(pages.home);

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/",
            name: pages.home.title,
            description: pages.home.description,
          }),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
        ]}
      />
      <Hero />
      <Marquee />
      <HomeAbout />
      <TrustBar />
      <HomeProducts />
      <HomeSuppliers />
      <HomeRetail />
      <HomeGovernment />
      <HomeContact />
    </>
  );
}
