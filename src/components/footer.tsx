"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon } from "@/components/icons";
import { navigation, siteConfig } from "@/lib/site-data";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscriptionRequested, setSubscriptionRequested] = useState(false);

  function handleNewsletterSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent("PHC newsletter subscription request");
    const body = encodeURIComponent(
      [
        "Hello PHC,",
        "",
        `Please add this email to the PHC newsletter list: ${newsletterEmail}`,
        "",
        "Thank you.",
      ].join("\n"),
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubscriptionRequested(true);
    setNewsletterEmail("");
  }

  return (
    <footer className="mt-24 bg-[var(--color-night)] text-white">
      <div className="border-b border-white/10 bg-[url('/gallery/phc-community-outreach.jpg')] bg-cover bg-center">
        <div className="bg-black/55 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
              Strengthening communities through grassroots development
            </p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold text-white">
              Partner with PHC to advance peace, inclusion, and resilient communities.
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex bg-[var(--color-earth)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-ink)]"
            >
              Contact PHC
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-4">
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
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent-soft)]">
                {siteConfig.shortName}
              </p>
              <h2 className="text-2xl font-semibold">{siteConfig.name}</h2>
            </div>
          </div>
          <p className="mt-5 max-w-md text-base leading-7 text-white/72">
            {siteConfig.tagline}
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/58">
            We believe that practical grassroots action can help secure dignity,
            inclusion, and stronger community futures.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-white">Useful links</h3>
          <div className="mt-5 grid gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/76 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-white">Contact us</h3>
          <div className="mt-5 grid gap-3 text-white/76">
            <p>{siteConfig.location}</p>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
              {siteConfig.email}
            </a>
            {siteConfig.phone ? (
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                {siteConfig.phone}
              </a>
            ) : null}
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit our Facebook page"
              title="Visit our Facebook page"
              className="mt-1 inline-flex h-11 w-11 items-center justify-center text-white/76 transition hover:text-white"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-white">Subscribe for updates</h3>
          <form onSubmit={handleNewsletterSubmit} className="mt-6">
            <div className="flex border border-white/16">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(event) => setNewsletterEmail(event.target.value)}
                placeholder="Email address..."
                className="min-w-0 flex-1 bg-transparent px-4 py-4 text-white placeholder:text-white/40"
                required
              />
              <button
                type="submit"
                className="bg-[var(--color-primary)] px-5 py-4 text-white transition hover:bg-[var(--color-teal)]"
                aria-label="Subscribe to PHC updates"
                title="Subscribe to PHC updates"
              >
                →
              </button>
            </div>
          </form>
          <p className="mt-6 text-sm leading-7 text-white/56">
            Subscribe to receive PHC updates, announcements, and community news.
          </p>
          {subscriptionRequested ? (
            <p className="mt-3 text-sm text-[var(--color-accent-soft)]">
              Your email client should open with a subscription request ready to send.
            </p>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
