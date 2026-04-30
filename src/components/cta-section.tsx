import Link from "next/link";

type CTASectionProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  return (
    <section className="border border-[var(--color-sand-line)] bg-[var(--color-night)] px-6 py-12 text-white sm:px-10 sm:py-14">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/82">{description}</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="bg-[var(--color-earth)] px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-ink)] transition hover:bg-[var(--color-accent)]"
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="border border-white/30 px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
