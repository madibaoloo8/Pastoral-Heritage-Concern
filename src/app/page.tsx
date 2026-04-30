import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { NewsCard } from "@/components/news-card";
import { ProgramCard } from "@/components/program-card";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import {
  featuredProjects,
  galleryImages,
  homepageFocusAreas,
  newsPosts,
  programs,
  siteConfig,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Pastoral Heritage Concern is a Kenya-based NGO strengthening communities through peacebuilding, inclusion, heritage, and grassroots development.",
};

export default function HomePage() {
  return (
    <div className="pb-12">
      <Hero />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="py-14 sm:py-18">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-6">
              <SectionHeader
                eyebrow="Who We Are"
                title="A community-first organization connecting local realities to public action"
                description={`${siteConfig.name} is positioned at the intersection of peacebuilding, social inclusion, youth engagement, and grassroots development. Its contribution is to help communities, institutions, and development actors work from grounded understanding rather than distant assumptions.`}
              />
              <article className="overflow-hidden border border-[var(--color-sand-line)] bg-white shadow-[0_12px_30px_rgba(34,31,24,0.06)]">
                <div className="relative aspect-[16/10] bg-[var(--color-earth)]">
                  <Image
                    src="/gallery/phc-content/514362504_24453001320972468_6812200245566948540_n.jpg"
                    alt="Participants gathered at our Wajir CVE forum"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />
                </div>
                <div className="px-5 py-4 text-sm leading-6 text-[var(--color-muted)]">
                  Participants gathered at our Wajir CVE forum, one of the clearest examples of our dialogue-based field work.
                </div>
              </article>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {homepageFocusAreas.map((item) => (
                <article
                  key={item.title}
                  className="border border-[var(--color-sand-line)] bg-white px-6 py-6 shadow-[0_10px_24px_rgba(29,42,37,0.05)]"
                >
                  <h3 className="text-2xl font-semibold text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="overflow-hidden bg-[var(--color-surface)] shadow-[0_18px_50px_rgba(36,77,53,0.08)]">
            <div className="grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[0.88fr_1.12fr] lg:px-12 lg:py-14">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  Why We Exist
                </p>
                <h2 className="mt-5 text-4xl font-semibold leading-tight text-[var(--color-ink)] sm:text-5xl">
                  Communities need development responses shaped by lived realities.
                </h2>
                <div className="mt-5 grid gap-5 text-base leading-8 text-[var(--color-muted)]">
                  <p>
                    We work in settings where peace, inclusion, awareness, and
                    development are closely connected. In such environments,
                    trust and participation matter as much as technical design.
                  </p>
                  <p>
                    We exist to bring grassroots perspectives into practical
                    programming and policy thinking that affect community life.
                  </p>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  {
                    number: "01",
                    title: "Local trust comes first",
                    text: "Peace and prevention efforts are more credible when communities trust the process and the people convening it.",
                  },
                  {
                    number: "02",
                    title: "Youth need real space",
                    text: "Young people need meaningful room in security, civic, and development dialogue rather than symbolic inclusion.",
                  },
                  {
                    number: "03",
                    title: "Inclusion changes outcomes",
                    text: "Awareness and inclusion work matter where stigma still shapes access, dignity, and opportunity.",
                  },
                  {
                    number: "04",
                    title: "Policy must stay grounded",
                    text: "Development policy becomes more relevant when it is informed by lived community experience.",
                  },
                ].map((item) => (
                  <article
                    key={item.number}
                    className="flex min-h-[220px] flex-col justify-between border border-[var(--color-sand-line)] bg-white px-6 py-6 text-[var(--color-ink)]"
                  >
                    <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                      {item.number}
                    </div>
                    <div className="mt-8">
                      <h3 className="text-2xl font-semibold text-[var(--color-ink)]">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                        {item.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Featured Programs"
              title="Priority work areas rooted in peace, inclusion, and grounded development"
              description="Our program areas connect community voice, public awareness, peacebuilding, and policy dialogue in ways that are practical for partners and grounded in lived realities."
            />
            <Link href="/our-work" className="font-semibold text-[var(--color-primary)]">
              View full work areas
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {programs.slice(0, 3).map((program) => (
              <ProgramCard
                key={program.slug}
                program={program}
                href={`/our-work/${program.slug}`}
              />
            ))}
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Projects & Updates"
              title="Featured updates from our work in communities"
<<<<<<< HEAD
              description="A selection of updates that reflects how we work in peacebuilding, livelihoods, inclusion, dialogue, and community engagement."
=======
              description="A selection of updates that reflect how we work in inclusion, awareness, dialogue, and community engagement."
>>>>>>> 9c0841dcfc3b1144e0a56c0475ba32eeb1e1097c
            />
            <Link href="/projects" className="font-semibold text-[var(--color-primary)]">
              Browse all updates
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredProjects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                href={`/projects/${project.slug}`}
              />
            ))}
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Latest Learning"
              title="Field reflections, issue notes, and thematic insight"
              description="We use this section to share short learning notes, issue commentary, and reflections from our work."
            />
            <Link href="/projects" className="font-semibold text-[var(--color-primary)]">
              See all updates
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {newsPosts.map((post) => (
              <NewsCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Gallery"
              title="A visual record of community work and public engagement"
<<<<<<< HEAD
              description="Selected images from our work showing community meetings, awareness sessions, current field interventions, facilitation, and participant engagement."
=======
              description="Selected images from our work showing community meetings, awareness sessions, facilitation, and participant engagement."
>>>>>>> 9c0841dcfc3b1144e0a56c0475ba32eeb1e1097c
            />
            <Link href="/gallery" className="font-semibold text-[var(--color-primary)]">
              Open full gallery
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
<<<<<<< HEAD
            {galleryImages.slice(0, 3).map((image) => (
=======
            {galleryImages.slice(6, 9).map((image) => (
>>>>>>> 9c0841dcfc3b1144e0a56c0475ba32eeb1e1097c
                <article
                  key={image.src}
                  className="overflow-hidden border border-[var(--color-sand-line)] bg-white shadow-[0_10px_30px_rgba(34,31,24,0.05)]"
                >
                  <div className="relative aspect-[4/3] bg-[var(--color-earth)]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 24vw, (min-width: 640px) 45vw, 100vw"
                    />
                  </div>
                  <div className="px-5 py-4 text-sm leading-6 text-[var(--color-muted)]">
                    {image.caption}
                  </div>
                </article>
            ))}
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <CTASection
            title="Partner with PHC to support peace, inclusion, and stronger grassroots development"
            description="This site is structured to speak credibly to community organizations, development agencies, county actors, and donor partners looking for grounded local collaboration."
            primaryHref="/contact"
            primaryLabel="Contact PHC"
            secondaryHref="/reports"
            secondaryLabel="View Reports Structure"
          />
        </section>
      </div>
    </div>
  );
}
