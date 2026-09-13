"use client";

import { productCategories } from "@/lib/categories";
import { marketplaceChannels } from "@/lib/company";

const extra = ["Federal Procurement", "Nationwide Distribution"];

export function Marquee() {
  const items = [
    ...productCategories.map((category) => category.name),
    ...marketplaceChannels,
    ...extra,
  ];
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/6 bg-navy py-5">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-x-8 motion-reduce:px-6">
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-10 text-xs font-medium tracking-widest text-white/35 uppercase"
          >
            {item}
            <span className="inline-block h-1 w-1 rounded-full bg-indigo" />
          </span>
        ))}
      </div>
    </div>
  );
}
