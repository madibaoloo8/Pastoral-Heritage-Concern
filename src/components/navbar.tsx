"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation, siteConfig } from "@/lib/site-data";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerNavigation = navigation.filter((item) => item.href !== "/contact");

  return (
    <header className="sticky top-0 z-40 border-b border-black/8 bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:gap-8 lg:px-8 lg:py-5">
        <div className="flex items-center justify-between gap-4 lg:contents">
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-12 w-12 items-center justify-center border border-[var(--color-sand-line)] text-[var(--color-ink)] lg:hidden"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>

        <Link href="/" className="flex items-center gap-4" onClick={() => setMenuOpen(false)}>
          <div className="relative h-20 w-20 shrink-0 overflow-hidden sm:h-24 sm:w-24">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              fill
              className="object-contain"
              sizes="(min-width: 640px) 96px, 80px"
            />
          </div>
          <div className="max-w-[14rem]">
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
              Filling the gaps
            </div>
            <div className="text-lg font-semibold leading-tight text-[var(--color-ink)]">
              {siteConfig.name}
            </div>
          </div>
        </Link>
        </div>

        <nav className="hidden items-center justify-center gap-5 text-[13px] font-semibold uppercase tracking-[0.04em] text-[var(--color-ink)] xl:gap-7 lg:flex">
          {headerNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap border-b-2 border-transparent pb-1 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex justify-end">
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="whitespace-nowrap bg-[var(--color-earth)] px-5 py-4 text-xs font-semibold uppercase tracking-[0.06em] text-[var(--color-ink)] transition hover:bg-[var(--color-accent)] sm:px-8 sm:py-5 sm:text-sm"
          >
            Donate / Partner
          </Link>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-[var(--color-sand-line)] bg-white lg:hidden"
        >
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-3 sm:px-6">
            {headerNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border border-transparent px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-ink)] transition hover:border-[var(--color-sand-line)] hover:bg-[var(--color-page)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
