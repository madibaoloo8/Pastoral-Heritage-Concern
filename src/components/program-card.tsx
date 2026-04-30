import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import type { Program } from "@/lib/site-data";

export function ProgramCard({
  program,
  href = `/our-work/${program.slug}`,
}: {
  program: Program;
  href?: string;
}) {
  return (
    <article className="overflow-hidden border border-[var(--color-sand-line)] bg-white shadow-[0_10px_30px_rgba(34,31,24,0.05)]">
      <div className="relative aspect-[16/9] bg-[var(--color-earth)]">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 32vw, 100vw"
        />
      </div>
      <div className="p-7">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
          Program area
        </p>
        <h3 className="mt-4 text-2xl font-semibold text-[var(--color-ink)]">
          {program.title}
        </h3>
        <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
<<<<<<< HEAD
          {program.summary}
=======
          {program.description}
>>>>>>> 9c0841dcfc3b1144e0a56c0475ba32eeb1e1097c
        </p>
        <ul className="mt-6 grid gap-3 text-sm leading-6 text-[var(--color-muted)]">
          {program.outcomes.map((outcome) => (
            <li key={outcome} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--color-primary)]"
        >
          {program.cta}
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
