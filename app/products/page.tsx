import { CategoryCard } from "@/components/CategoryCard";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SupplierCTA } from "@/components/SupplierCTA";
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
        description="Greatly Brands potentially purchases and sells a broad range of consumer merchandise. The categories below describe areas of purchasing interest for supplier conversations. They are not a public inventory list or a consumer storefront."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Product Categories" },
        ]}
      />

      <section className="bg-white py-20">
        <div className="container-site">
          <h2 className="mb-8 text-3xl font-semibold text-navy">Category overview</h2>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category) => (
              <div key={category.slug} id={category.slug} className="scroll-mt-28">
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm text-muted">
            Images are generic category photography. They do not imply a
            relationship with any pictured brand, retailer, or facility. Supplier
            inquiries can reference one or more of these categories on the{" "}
            <a href="/suppliers" className="text-blue hover:underline">
              suppliers page
            </a>
            .
          </p>
        </div>
      </section>
      <SupplierCTA />
    </>
  );
}
