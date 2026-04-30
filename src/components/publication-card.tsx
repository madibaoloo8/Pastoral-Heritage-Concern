import type { Publication } from "@/lib/site-data";

export function PublicationCard({
  publication,
}: {
  publication: Publication;
}) {
  return (
    <article className="border border-[var(--color-sand-line)] bg-white p-7 shadow-[0_10px_30px_rgba(34,31,24,0.05)]">
      <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
        <span className="bg-[var(--color-earth)] px-3 py-1 font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]">
          {publication.type}
        </span>
        <span>{publication.status}</span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-[var(--color-ink)]">
        {publication.title}
      </h3>
      <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
        {publication.description}
      </p>
      <div className="mt-6 inline-flex border-b border-[var(--color-ink)] pb-1 text-sm font-semibold text-[var(--color-ink)]">
        Coming soon
      </div>
    </article>
  );
}
