import type { Metadata } from "next";
<<<<<<< HEAD
=======
import Image from "next/image";
import Link from "next/link";
>>>>>>> 9c0841dcfc3b1144e0a56c0475ba32eeb1e1097c
import { CTASection } from "@/components/cta-section";
import { ProgramCard } from "@/components/program-card";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { programs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore our work in peacebuilding, youth engagement, countering violent extremism, social inclusion, grassroots development, and policy dialogue.",
};

export default function OurWorkPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <SectionHeader
        eyebrow="Our Work"
        title="Program areas built around resilience, inclusion, and community dialogue"
        description="Our work areas reflect a practical grassroots mandate: supporting peace, expanding awareness, strengthening participation, and improving how development policy engages with lived realities."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {programs.map((program) => (
          <div key={program.slug} className="scroll-mt-28">
            <ProgramCard program={program} href={`/our-work/${program.slug}`} />
          </div>
        ))}
      </div>

<<<<<<< HEAD
=======
      <section className="mt-16 border-t border-[var(--color-sand-line)] pt-14">
        <SectionHeader
          eyebrow="Program Notes"
          title="How our work areas show up in practice"
          description="These short notes connect our broader work areas to the field realities, community sessions, and awareness efforts that shape them."
        />
        <div className="mt-10 grid gap-10">
          {programs.map((program, index) => (
            <section
              key={program.slug}
              className="border border-[var(--color-sand-line)] bg-white shadow-[0_10px_30px_rgba(34,31,24,0.05)]"
            >
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[280px] bg-[var(--color-earth)]">
                  {/* Keep imagery tied to each work area so the page feels field-based, not abstract. */}
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 42vw, 100vw"
                  />
                </div>
                <div className="px-6 py-8 sm:px-8">
                  <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h2 className="mt-4 text-4xl font-semibold text-[var(--color-ink)]">
                    {program.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
                    {program.description}
                  </p>
                  <div className="mt-6 grid gap-4 text-sm leading-7 text-[var(--color-muted)]">
                    <p>
                      Our work in this area is approached
                      through dialogue, awareness, community participation, and
                      grounded engagement rather than detached policy language.
                    </p>
                    <p>
                      County-level outreach, facilitator-led sessions, service-provider
                      engagement, and dignity-centered awareness efforts around
                      vulnerable groups and community concerns.
                    </p>
                  </div>
                  <ul className="mt-6 grid gap-3 text-sm leading-6 text-[var(--color-muted)]">
                    {program.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/our-work/${program.slug}`}
                      className="bg-[var(--color-primary)] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-white"
                    >
                      Open Full Work Area
                    </Link>
                    <Link
                      href="/projects"
                      className="border border-[var(--color-sand-line)] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-ink)]"
                    >
                      View Related Updates
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

>>>>>>> 9c0841dcfc3b1144e0a56c0475ba32eeb1e1097c
      <div className="mt-12">
        <Reveal>
          <CTASection
            title="Looking for a community-grounded implementation or dialogue partner?"
            description="We support programs and partnerships where local trust, contextual understanding, and practical field engagement matter."
            primaryHref="/contact"
            primaryLabel="Partner With PHC"
            secondaryHref="/projects"
            secondaryLabel="View Project Updates"
          />
        </Reveal>
      </div>
    </div>
  );
}
