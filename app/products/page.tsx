import { CategoryCard } from "@/components/CategoryCard";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { productCategories } from "@/lib/categories";
import { pages } from "@/lib/pages";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(pages.products);

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: pages.products.path,
            name: pages.products.title,
            description: pages.products.description,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Product Categories", path: "/products" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Merchandise"
        title={pages.products.h1}
        description="Greatly Brands purchases and distributes products across a range of consumer categories depending upon demand, supply availability, supplier agreements, category economics, and channel suitability."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Product Categories" },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container-site">
          <h2 className="mb-3 text-3xl font-semibold text-navy">Category overview</h2>
          <p className="mb-8 max-w-3xl text-muted">
            This page is not an ecommerce catalog. Categories we may source and
            distribute include the areas below. They describe purchasing interest
            for supplier conversations, not a public inventory list, SKU catalog,
            or consumer storefront.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category) => (
              <div key={category.slug} id={category.slug} className="scroll-mt-24">
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm text-muted">
            Images are generic category photography. They do not imply a
            relationship with any pictured brand, retailer, or facility.
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="container-site flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-navy">Have Products for Greatly Brands?</h2>
            <p className="mt-3 max-w-2xl text-muted">
              Manufacturers, brands, distributors, and wholesalers can share
              category and product details for review.
            </p>
          </div>
          <Button href="/suppliers">Become a Supplier</Button>
        </div>
      </section>
    </>
  );
}
