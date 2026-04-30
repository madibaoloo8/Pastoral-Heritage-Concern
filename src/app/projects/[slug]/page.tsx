import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/cta-section";
import { featuredProjects } from "@/lib/site-data";

type Params = { slug: string };

function getProject(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Update Not Found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <article className="overflow-hidden border border-[var(--color-sand-line)] bg-white shadow-[0_14px_40px_rgba(34,31,24,0.07)]">
        <div className="relative aspect-[16/8] bg-[var(--color-earth)]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 72vw, 100vw"
          />
        </div>
        <div className="px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
<<<<<<< HEAD
            {project.current ? (
              <span className="bg-[var(--color-earth)] px-3 py-1 font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]">
                Current Project
              </span>
            ) : null}
=======
>>>>>>> 9c0841dcfc3b1144e0a56c0475ba32eeb1e1097c
            <span className="bg-[var(--color-primary-faint)] px-3 py-1 font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
              {project.category}
            </span>
            <span>{project.dateLabel}</span>
            <span>{project.location}</span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-[var(--color-ink)] sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
            {project.summary}
          </p>

          <div className="mt-8 grid gap-5 text-base leading-8 text-[var(--color-muted)]">
            {project.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              We share these updates so partners, county actors, community
              organisations, and the public can better understand the purpose
              and context of our work.
            </p>
          </div>

<<<<<<< HEAD
          {project.facts?.length ? (
            <div className="mt-10 grid gap-4 border-t border-[var(--color-sand-line)] pt-8 sm:grid-cols-2">
              {project.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border border-[var(--color-sand-line)] bg-[var(--color-surface)] px-5 py-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-base leading-7 text-[var(--color-ink)]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          ) : null}

=======
>>>>>>> 9c0841dcfc3b1144e0a56c0475ba32eeb1e1097c
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/gallery"
              className="bg-[var(--color-primary)] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-white"
            >
              View PHC Gallery
            </Link>
            <Link
              href="/projects"
              className="border border-[var(--color-sand-line)] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-ink)]"
            >
              Back to Updates
            </Link>
          </div>
        </div>
      </article>

      <div className="mt-12">
        <CTASection
          title="Looking for more context on our work?"
<<<<<<< HEAD
          description="Our updates show how we approach peacebuilding, livelihoods support, county outreach, community education, and dignity-centered engagement."
=======
          description="Our updates show how we approach county outreach, albinism awareness, community education, and dignity-centered engagement."
>>>>>>> 9c0841dcfc3b1144e0a56c0475ba32eeb1e1097c
          primaryHref="/contact"
          primaryLabel="Contact PHC"
          secondaryHref="/about"
          secondaryLabel="About PHC"
        />
      </div>
    </div>
  );
}
