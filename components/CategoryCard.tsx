import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/lib/categories";

export function CategoryCard({ category }: { category: ProductCategory }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-white shadow-[0_8px_24px_rgba(12,30,56,0.06)]">
      <Link href={`/products#${category.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-paper">
          <Image
            src={category.image}
            alt={category.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-navy">{category.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{category.summary}</p>
        </div>
      </Link>
    </article>
  );
}
