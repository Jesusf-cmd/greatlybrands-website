import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import { marketplaceChannels } from "@/lib/company";

export function HomeRetail() {
  return (
    <section id="retail" className="bg-cream py-28">
      <div className="container-site">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn className="relative">
            <div className="relative overflow-hidden rounded-3xl" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/redesign/retail-shelves.jpg"
                alt="Retail merchandise on store shelves. Generic illustrative photography."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(67,56,202,0.25), transparent 60%)",
                }}
              />
            </div>
            <div className="absolute -right-3 -bottom-5 rounded-2xl border border-[#eae8e3] bg-white px-5 py-4 shadow-xl">
              <div className="mb-1 text-xs font-semibold text-warm-muted">Active On</div>
              <div className="flex items-center gap-2">
                {marketplaceChannels.map((channel, index) => (
                  <span key={channel} className="flex items-center gap-2">
                    {index > 0 ? <span className="text-xs text-[#d0cde6]">·</span> : null}
                    <span className="text-sm font-bold text-navy">{channel}</span>
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <SectionLabel>Retail Distribution</SectionLabel>
            <h2 className="font-display mb-6 text-[clamp(2rem,3.5vw,2.8rem)] leading-tight text-navy">
              Established channels, proven reach.
            </h2>
            <p className="mb-8 max-w-[40ch] text-[1.05rem] leading-relaxed text-muted">
              Greatly Brands participates in established U.S. online retail channels. Products
              may be offered through major online marketplaces including Amazon and Walmart.com.
            </p>
            <div className="mb-8 grid grid-cols-2 gap-3">
              {marketplaceChannels.map((channel) => (
                <div
                  key={channel}
                  className="rounded-xl border border-[#e2e0da] bg-paper px-5 py-4 text-center"
                >
                  <div className="mb-0.5 text-sm font-semibold text-navy">{channel}</div>
                  <div className="text-xs text-warm-muted">Marketplace channel</div>
                </div>
              ))}
            </div>
            <p className="max-w-[40ch] text-xs leading-relaxed text-[#b0aa9f]">
              Amazon and Walmart.com are trademarks of their respective owners. References are
              for identification purposes only and do not imply endorsement or affiliation.
              Greatly Brands is an independent retail participant on those platforms.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
