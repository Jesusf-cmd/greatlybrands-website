import Image from "next/image";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="bg-navy text-white">
      <div className="container-site grid items-center gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24">
        <div className="md:col-span-7">
          <p className="eyebrow text-blue-200">Greatly Brands</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.12]">
            Nationwide Retail & Procurement Partner
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Greatly Brands is a U.S.-based multi-channel retailer and procurement
            company purchasing consumer products from brands, manufacturers,
            distributors, and wholesale partners for distribution throughout the
            United States.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/suppliers" variant="onDark">
              Become a Supplier
            </Button>
            <Button href="/contact" variant="onDarkSecondary">
              Contact Greatly Brands
            </Button>
            <Button href="/government" variant="onDarkSecondary">
              Government & Commercial Sales
            </Button>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-navy-mid sm:aspect-[5/4] md:aspect-[4/5]">
            <Image
              src="/images/hero-distribution.webp"
              alt="Stacked cartons and warehouse shelving representing consumer-product distribution and logistics."
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
