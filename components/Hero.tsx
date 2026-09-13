import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="bg-navy text-white">
      <div className="container-site grid items-center gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24 lg:py-28">
        <div className="md:col-span-7">
          <p className="eyebrow text-blue-soft">Greatly Brands</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.12]">
            Nationwide Retail & Procurement Partner
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Greatly Brands is a U.S.-based multi-channel retail and procurement
            company working with manufacturers, brands, distributors and
            wholesalers to bring consumer products to customers and purchasing
            organizations across the United States.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href="/suppliers" variant="onDark">
              Become a Supplier
            </Button>
            <Button href="/government" variant="onDarkSecondary">
              Government & Commercial Sales
            </Button>
            <Link
              href="/contact"
              className="text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              Contact Greatly Brands
            </Link>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="relative aspect-[5/4] overflow-hidden rounded-sm bg-navy-mid md:aspect-[4/5]">
            <Image
              src="/images/hero-distribution.webp"
              alt="Organized consumer-product cartons and distribution shelving. Generic illustrative photography; not a Greatly Brands facility."
              fill
              priority
              quality={75}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 42vw, 560px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
