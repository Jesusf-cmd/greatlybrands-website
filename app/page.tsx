import Image from "next/image";
import { CategoryCard } from "@/components/CategoryCard";
import { CapabilityCard } from "@/components/CapabilityCard";
import { ContactForm } from "@/components/ContactForm";
import { GovernmentCTA } from "@/components/GovernmentCTA";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { SupplierCTA } from "@/components/SupplierCTA";
import { TrustBar } from "@/components/TrustBar";
import { Button } from "@/components/Button";
import { productCategories } from "@/lib/categories";
import { pages } from "@/lib/pages";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { PhoneLink } from "@/components/PhoneLink";
import { company } from "@/lib/company";

export const metadata = buildMetadata(pages.home);

const whyItems = [
  {
    title: "Professional purchasing relationships",
    description:
      "Greatly Brands works with legitimate manufacturers, brand owners, distributors, and wholesalers seeking a dependable retail partner.",
  },
  {
    title: "Nationwide market reach",
    description:
      "Products purchased for resale can reach customers throughout the United States through established retail channels.",
  },
  {
    title: "Multi-category capability",
    description:
      "Our purchasing strategy is not limited to a single consumer category. We evaluate household, personal care, and general merchandise opportunities.",
  },
  {
    title: "Straightforward communication",
    description:
      "Supplier conversations are handled directly. We look for clear product information, viable economics, and sustainable replenishment.",
  },
  {
    title: "Multi-channel retail distribution",
    description:
      "Greatly Brands participates in major U.S. online marketplaces and may expand distribution according to supplier agreements and business opportunities.",
  },
  {
    title: "Long-term vendor focus",
    description:
      "Where product demand and economics support continued growth, the goal is repeat purchasing rather than one-time transactions.",
  },
];

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
      <TrustBar />

      <section className="bg-white py-20">
        <div className="container-site grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <SectionHeader
              eyebrow="Company"
              title="Built for Long-Term Supplier Relationships"
              description="Greatly Brands works with manufacturers, distributors, wholesalers, and established brands seeking dependable retail channels for consumer products. Our business purchases products for resale through online marketplaces and other approved sales channels throughout the United States."
            />
            <ul className="grid gap-3 text-navy">
              {[
                "Professional purchasing relationships",
                "Repeat purchasing potential",
                "Straightforward communication",
                "Nationwide market reach",
                "Multi-category purchasing",
                "Long-term vendor relationships",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/suppliers">Work With Greatly Brands</Button>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line">
              <Image
                src="/images/intro-merchandise.webp"
                alt="Shipping containers and freight representing nationwide movement of consumer merchandise."
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="container-site">
          <SectionHeader
            eyebrow="Merchandise"
            title="Product categories"
            description="Greatly Brands evaluates a broad range of consumer merchandise. Categories below represent purchasing interest, not a public storefront catalog."
            action={{ href: "/products", label: "View product categories" }}
          />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-site grid items-center gap-12 md:grid-cols-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line md:col-span-5">
            <Image
              src="/images/section-supplier.webp"
              alt="Palletized cartons illustrating supplier merchandise prepared for retail distribution."
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="md:col-span-7">
            <SectionHeader
              eyebrow="Suppliers"
              title="Partner With Greatly Brands"
              description="We work with manufacturers, brand owners, distributors, and wholesalers interested in developing professional retail relationships."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <CapabilityCard
                title="Nationwide Reach"
                description="Products can reach customers throughout the United States through multiple retail channels."
              />
              <CapabilityCard
                title="Multi-Channel Commerce"
                description="Greatly Brands participates in established online retail marketplaces."
              />
              <CapabilityCard
                title="Broad Category Capability"
                description="Our purchasing strategy is not limited to a single consumer category."
              />
              <CapabilityCard
                title="Professional Procurement"
                description="We seek straightforward, sustainable relationships with legitimate manufacturers and distributors."
              />
            </div>
            <p className="mt-6 text-muted">
              Long-term opportunity: our goal is to develop repeat purchasing
              relationships where product demand and economics support continued growth.
            </p>
            <div className="mt-8">
              <Button href="/suppliers">Discuss a Supplier Relationship</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="container-site grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionHeader
              eyebrow="Retail"
              title="Nationwide multi-channel retail"
              description="Greatly Brands participates in online retail channels and may expand distribution according to supplier agreements and business opportunities. Current marketplace retail channels include Amazon and Walmart.com. Those references describe sales channels only and do not imply ownership, endorsement, or official partnership."
            />
            <div className="flex flex-wrap gap-3">
              <Button href="/retail">Retail capabilities</Button>
              <Button href="/contact" variant="secondary">
                Contact Greatly Brands
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line md:col-span-5">
            <Image
              src="/images/section-retail.webp"
              alt="Retail checkout activity representing online and marketplace commerce."
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-site grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionHeader
              eyebrow="Government"
              title="Government & public-sector procurement"
              description="Greatly Brands evaluates government and institutional procurement opportunities involving consumer goods, household products, supplies, and general merchandise."
            />
          </div>
          <div className="md:col-span-5">
            <GovernmentCTA />
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="container-site">
          <SectionHeader
            eyebrow="Working together"
            title="Why work with Greatly Brands"
            description="The company is organized around purchasing, retail distribution, and professional supplier communication—not consumer browsing."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whyItems.map((item) => (
              <CapabilityCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      <SupplierCTA />

      <section className="bg-white py-20">
        <div className="container-site grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeader
              eyebrow="Contact"
              title="Start a conversation"
              description={`Call ${company.phoneDisplay} or send a business inquiry. Greatly Brands, operated by ${company.legalName}, is based in Tulsa, Oklahoma, and serves partners nationwide.`}
            />
            <p className="text-navy">
              Phone: <PhoneLink className="font-semibold text-blue hover:underline" />
            </p>
          </div>
          <div className="rounded-md border border-line bg-white p-6 shadow-[0_8px_24px_rgba(12,30,56,0.04)] md:col-span-7 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
