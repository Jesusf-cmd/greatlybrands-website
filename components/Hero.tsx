"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowIcon, Button } from "@/components/Button";
import { useCountUp, useInView } from "@/components/FadeIn";
import { company } from "@/lib/company";
import { purchasingCta, supplierCta } from "@/lib/navigation";

const stats = [
  { n: 9, suffix: "+", label: "Product Categories" },
  { n: 2, suffix: " Channels", label: "Online Marketplaces" },
  { n: 50, suffix: " States", label: "Nationwide Reach" },
  { n: 3, suffix: " Sectors", label: "Consumer, Gov & Commercial" },
];

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setLoaded(true), 100);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-navy-hero">
      <div className="absolute inset-0">
        <Image
          src="/images/redesign/hero-warehouse.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ opacity: 0.12 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 60% 40%, rgba(67,56,202,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(9,15,30,0.3) 0%, rgba(9,15,30,0.5) 60%, #090f1e 100%)",
          }}
        />
      </div>

      <div className="pointer-events-none absolute top-1/2 right-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/2 opacity-[0.04]">
        <svg viewBox="0 0 600 600" fill="none" aria-hidden="true">
          <circle cx="300" cy="300" r="280" stroke="#6366f1" strokeWidth="1.5" />
          <circle cx="300" cy="300" r="200" stroke="#6366f1" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="300" cy="300" r="120" stroke="#6366f1" strokeWidth="0.75" />
        </svg>
      </div>

      <div className="relative z-10 container-site w-full pt-36 pb-20">
        <div className="max-w-4xl">
          <div
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-indigo-light/25 bg-indigo-light/12 px-4 py-2 text-xs font-semibold tracking-widest text-indigo-soft uppercase"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            U.S.-Based Retail & Procurement Partner
          </div>

          <h1
            className="font-display mb-6 leading-[0.95] text-white"
            style={{
              fontSize: "clamp(3.2rem, 8vw, 6.5rem)",
              letterSpacing: "-0.025em",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s",
            }}
          >
            From sourcing
            <br />
            to <span className="text-indigo-soft italic">shelf</span> —
            <br />
            nationwide.
          </h1>

          <p
            className="mb-10 max-w-[44ch] text-lg leading-relaxed text-white/50"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s",
            }}
          >
            {company.name} connects manufacturers, brands, and distributors with
            retail channels and purchasing organizations across the United States.
          </p>

          <div
            className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.9s ease 0.55s, transform 0.9s ease 0.55s",
            }}
          >
            <Button href={supplierCta.href} variant="pill" className="group w-full px-7 py-4 sm:w-auto">
              Become a Supplier
              <ArrowIcon />
            </Button>
            <Button href={purchasingCta.href} variant="onDarkSecondary" className="w-full px-7 py-4 sm:w-auto">
              Discuss Purchasing Needs
            </Button>
          </div>
        </div>

        <HeroStats loaded={loaded} />

        <div
          className="mt-10 hidden flex-col items-center gap-2 md:flex"
          style={{ opacity: loaded ? 0.4 : 0, transition: "opacity 1s ease 1.2s" }}
        >
          <span className="text-xs font-medium tracking-widest text-white uppercase">Scroll</span>
          <div className="relative h-8 w-px overflow-hidden bg-white/15">
            <div className="animate-scroll-cue absolute inset-x-0 top-0 h-4 bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStats({ loaded }: { loaded: boolean }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div
      ref={ref}
      className="mt-20 grid grid-cols-2 gap-y-6 border-t border-white/8 pt-8 md:grid-cols-4"
      style={{
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.9s ease 0.7s",
      }}
    >
      {stats.map((stat, index) => (
        <StatItem
          key={stat.label}
          target={stat.n}
          suffix={stat.suffix}
          label={stat.label}
          active={inView}
          delay={index * 120}
        />
      ))}
    </div>
  );
}

function StatItem({
  target,
  suffix,
  label,
  active,
  delay,
}: {
  target: number;
  suffix: string;
  label: string;
  active: boolean;
  delay: number;
}) {
  const n = useCountUp(target, active, 1600);
  return (
    <div style={{ transitionDelay: `${delay}ms` }}>
      <div className="font-display mb-1 text-2xl leading-none font-semibold text-white">
        {n}
        {suffix}
      </div>
      <div className="text-xs tracking-wide text-white/35">{label}</div>
    </div>
  );
}
