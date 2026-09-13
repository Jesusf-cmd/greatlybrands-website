"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import { productCategories } from "@/lib/categories";

export function HomeProducts() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="products" className="bg-paper py-28">
      <div className="container-site">
        <FadeIn>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>What We Source</SectionLabel>
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] leading-tight text-navy">
                Nine categories.
                <br />
                One partner.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-soft">
              We evaluate products across a broad range of consumer categories. If your line
              fits, we are interested in understanding volume and fit.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {productCategories.map((category, index) => {
            const active = hovered === category.slug;
            return (
              <FadeIn
                key={category.slug}
                delay={index * 50}
                className={category.wide ? "md:col-span-2" : ""}
              >
                <Link
                  href={`/products#${category.slug}`}
                  className="group relative block overflow-hidden rounded-2xl"
                  style={{ minHeight: category.wide ? "280px" : "220px" }}
                  onMouseEnter={() => setHovered(category.slug)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Image
                    src={category.gridImage}
                    alt={category.imageAlt}
                    fill
                    sizes={category.wide ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                    className="object-cover transition-transform duration-700"
                    style={{ transform: active ? "scale(1.07)" : "scale(1)" }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(67,56,202,0.3), transparent)",
                      opacity: active ? 1 : 0,
                    }}
                  />
                  <div
                    className="absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold text-white transition-all duration-300"
                    style={{
                      background: active ? "#4338ca" : "rgba(255,255,255,0.12)",
                      opacity: active ? 1 : 0,
                      transform: active ? "translateY(0)" : "translateY(-8px)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    View Category
                  </div>
                  <div
                    className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-300"
                    style={{ transform: active ? "translateY(-4px)" : "translateY(0)" }}
                  >
                    <h3 className="mb-0.5 text-sm font-semibold text-white">{category.name}</h3>
                    <p className="text-xs text-white/55">{category.summary}</p>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
