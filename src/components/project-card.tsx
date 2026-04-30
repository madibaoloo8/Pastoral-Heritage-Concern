import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site-data";

export function ProjectCard({
  project,
  href = `/projects/${project.slug}`,
}: {
  project: Project;
  href?: string;
}) {
  return (
    <article className="overflow-hidden border border-[var(--color-sand-line)] bg-white shadow-[0_10px_30px_rgba(34,31,24,0.05)]">
      <div className="relative aspect-[4/3] bg-[var(--color-earth)]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 30vw, 100vw"
        />
      </div>
      <div className="p-7">
        <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
<<<<<<< HEAD
          {project.current ? (
            <span className="bg-[var(--color-earth)] px-3 py-1 font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]">
              Current
            </span>
          ) : null}
=======
>>>>>>> 9c0841dcfc3b1144e0a56c0475ba32eeb1e1097c
          <span className="rounded-full bg-[var(--color-primary-faint)] px-3 py-1 font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
            {project.category}
          </span>
          <span>{project.dateLabel}</span>
        </div>
        <h3 className="mt-5 text-2xl font-semibold text-[var(--color-ink)]">
          {project.title}
        </h3>
        <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
          {project.location}
        </p>
        <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
          {project.summary}
        </p>
        <Link
          href={href}
          className="mt-6 inline-flex border-b border-[var(--color-ink)] pb-1 text-sm font-semibold text-[var(--color-ink)] transition hover:text-[var(--color-primary)]"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}
