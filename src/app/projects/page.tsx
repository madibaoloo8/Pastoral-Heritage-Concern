import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { featuredProjects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects & Updates",
  description:
    "Browse our project highlights and updates from community work, awareness sessions, and stakeholder engagement.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <SectionHeader
        eyebrow="Projects & Updates"
        title="Updates from our work in communities"
<<<<<<< HEAD
        description="These entries reflect the way we work through peacebuilding, local facilitation, livelihoods support, awareness, and dignity-centered outreach."
=======
        description="These entries reflect the way we work through awareness, dialogue, local facilitation, and dignity-centered outreach."
>>>>>>> 9c0841dcfc3b1144e0a56c0475ba32eeb1e1097c
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <div key={project.slug} className="scroll-mt-28">
            <ProjectCard project={project} href={`/projects/${project.slug}`} />
          </div>
        ))}
      </div>

      <section className="mt-16 border-t border-[var(--color-sand-line)] pt-14">
        <SectionHeader
          eyebrow="Archive Overview"
          title="How our work shows up on the ground"
<<<<<<< HEAD
          description="Across our updates, you will see peacebuilding interventions, county-level awareness campaigns, albinism education, facilitator-led outreach, and practical messaging around dignity and protection."
=======
          description="Across our updates, you will see county-level awareness campaigns, albinism education, facilitator-led outreach, and practical messaging around dignity and protection."
>>>>>>> 9c0841dcfc3b1144e0a56c0475ba32eeb1e1097c
        />
        <div className="mt-10 grid gap-10">
          {featuredProjects.map((project) => (
            <article
              key={project.slug}
              className="scroll-mt-28 border border-[var(--color-sand-line)] bg-white shadow-[0_10px_30px_rgba(34,31,24,0.05)]"
            >
              <div className="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
                <div className="relative min-h-[280px] bg-[var(--color-earth)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />
                </div>
                <div className="px-6 py-8 sm:px-8">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
                    <span className="bg-[var(--color-primary-faint)] px-3 py-1 font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                      {project.category}
                    </span>
                    <span>{project.dateLabel}</span>
                  </div>
                  <h2 className="mt-4 text-4xl font-semibold text-[var(--color-ink)]">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    {project.location}
                  </p>
                  <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
                    {project.summary}
                  </p>
                  <div className="mt-6 grid gap-4 text-base leading-8 text-[var(--color-muted)]">
                    {project.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="bg-[var(--color-primary)] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-white"
                    >
                      Open Full Update
                    </Link>
                    <Link
                      href="/gallery"
                      className="border border-[var(--color-sand-line)] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-ink)]"
                    >
                      View More Images
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
