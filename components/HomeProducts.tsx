import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import { productCategories } from "@/lib/categories";

export function HomeProducts() {
  return (
    <section id="products" className="bg-paper py-28">
      <div className="container-site">
        <FadeIn>
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-xl">
              <SectionLabel>Consumer Product Categories</SectionLabel>
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-tight text-navy">
                Nine categories.
                <br />
                One partner.
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm leading-relaxed text-muted">
                Categories we may source and distribute include household essentials, personal
                care, home goods, and other consumer merchandise, depending on demand, supply
                availability, and channel suitability.
              </p>
              <Link
                href="/products"
                className="mt-4 inline-flex text-sm font-semibold text-indigo underline-offset-4 hover:underline"
              >
                View all product categories
              </Link>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, index) => (
            <FadeIn
              key={category.slug}
              delay={index * 50}
              className={category.wide ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <Link
                href={`/products#${category.slug}`}
                className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-2xl sm:min-h-[280px]"
              >
                <Image
                  src={category.gridImage}
                  alt={category.imageAlt}
                  fill
                  sizes={
                    category.wide
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(9,15,30,0.12) 20%, rgba(9,15,30,0.78) 78%, rgba(9,15,30,0.92) 100%)",
                  }}
                />
                <div className="relative z-10 p-5 pb-8 sm:p-6">
                  <h3 className="text-base font-semibold text-white sm:text-lg">{category.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/90">{category.summary}</p>
                  <span className="mt-3 inline-block text-xs font-semibold tracking-wide text-indigo-soft">
                    View category
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
