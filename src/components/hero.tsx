import Image from "next/image";
import Link from "next/link";
import { impactStats, siteConfig } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      <div className="absolute inset-0">
        <Image
          src="/gallery/phc-content/481806304_686894176995555_7377831363299627845_n.jpg"
          alt="Pastoral Heritage Concern albinism awareness programme group"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,35,28,0.9)_0%,rgba(24,54,41,0.84)_36%,rgba(30,52,40,0.68)_62%,rgba(58,62,38,0.54)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,22,18,0.24)_0%,rgba(14,22,18,0.14)_36%,rgba(14,22,18,0.3)_100%)]" />
        <div className="absolute left-[-6rem] top-4 h-80 w-80 rounded-full bg-[rgba(244,216,116,0.16)] blur-3xl" />
        <div className="absolute right-[-8rem] top-18 h-96 w-96 rounded-full bg-[rgba(255,255,255,0.05)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="max-w-5xl">
          <p className="inline-flex bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white">
            Community-led development and inclusion
          </p>
          <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.6rem]">
            Strengthening communities through heritage, peacebuilding, inclusion, and grassroots development.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-white/86">
            Pastoral Heritage Concern works with communities and stakeholders to
            inform development policy and practice through grounded local
            solutions, public dialogue, and dignity-centered action.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="bg-[var(--color-earth)] px-8 py-5 text-center text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-ink)] transition hover:bg-[var(--color-accent)]"
            >
              Donate Now
            </Link>
            <Link
              href="/our-work"
              className="border border-white px-8 py-5 text-center text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-white/10"
            >
              Discover More
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {impactStats.map((stat) => (
            <div key={stat.label} className="bg-[var(--color-earth)] px-6 py-7 text-[var(--color-ink)]">
              <div className="text-4xl font-semibold">{stat.value}</div>
              <p className="mt-3 text-sm leading-6">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4 bg-white px-4 py-4 text-[var(--color-ink)] md:max-w-xl">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Based in {siteConfig.location}
            </p>
            <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">
              {siteConfig.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
