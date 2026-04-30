import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/cta-section";
import { programs } from "@/lib/site-data";

type Params = { slug: string };

const programContext: Record<
  string,
  {
    archiveTitle: string;
    archivePoints: string[];
    pageBody: string[];
  }
> = {
  "peacebuilding-community-resilience": {
    archiveTitle: "How we approach this work",
    archivePoints: [
      "We work through dialogue, facilitation, and community trust.",
      "We see peacebuilding and resilience as deeply connected to awareness, participation, and prevention.",
      "We build from grassroots solutions and local ownership.",
    ],
    pageBody: [
      "Peacebuilding and resilience work are most credible when they begin with trusted local relationships. We use facilitation, public education, and grounded dialogue as entry points rather than distant or purely technical intervention.",
      "That matters because communities often experience insecurity, exclusion, and development pressure together. A community forum, an awareness session, or a multi-stakeholder dialogue can all serve as part of a wider resilience ecosystem when they strengthen trust and improve local coordination.",
      "For partners, this work area shows how we support prevention, civic trust, and context-sensitive engagement together.",
    ],
  },
  "youth-engagement": {
    archiveTitle: "How we approach youth engagement",
    archivePoints: [
      "We emphasize participation and face-to-face learning rather than one-way messaging.",
      "We create space for youth voice in local conversations.",
      "We frame youth engagement as civic participation, awareness, and constructive inclusion.",
    ],
    pageBody: [
      "Youth engagement within our approach is part of a wider participatory model. We use facilitation, outreach, and dialogue to include younger community members in conversations that shape their futures.",
      "This matters in both development and local prevention contexts. When young people are present as contributors, not spectators, community responses become more grounded and more likely to hold over time.",
      "Our youth work is dialogue-based, locally rooted, and connected to broader community resilience.",
    ],
  },
  "countering-violent-extremism": {
    archiveTitle: "How we approach prevention work",
    archivePoints: [
      "We work through dialogue, awareness, and community-level trust building.",
      "These are core ingredients in prevention-oriented work.",
      "We are strongest where local participation and grounded facilitation are needed.",
    ],
    pageBody: [
      "Countering violent extremism is most effective when communities see prevention work as credible, local, and responsive to their own realities. We create space for that kind of dialogue.",
      "Our approach relies on facilitation, stakeholder engagement, local language framing, and community participation.",
      "That makes this work area relevant for partners who need prevention conversations handled with social credibility and practical care.",
    ],
  },
  "social-inclusion-awareness": {
    archiveTitle: "How we approach inclusion and awareness",
    archivePoints: [
      "We center albinism awareness, dignity, and anti-stigma messaging.",
      "Our work includes county outreach, public forums, and practical education around protection and care.",
      "Inclusion is one of the clearest and strongest areas of our work.",
    ],
    pageBody: [
      "Social inclusion and awareness are among the clearest parts of our work. Our community education around albinism, dignity, protection, and stigma reduction is visible across multiple counties and shared learning spaces.",
      "This work is practical as much as it is values-driven. We use awareness forums, county outreach, and interactive sessions that bring caregivers, service providers, and communities into shared spaces of learning.",
      "This matters because it shows inclusion not just as a message, but as work we facilitate in real public settings.",
    ],
  },
  "pastoralist-grassroots-development": {
    archiveTitle: "How we approach grassroots development",
    archivePoints: [
      "We center lived realities and locally relevant action.",
      "Our county outreach and community education work reflect a practical grassroots development style.",
      "We connect grassroots solutions to policy and practice.",
    ],
    pageBody: [
      "Grassroots development is not only about project delivery. It is about making sure action starts from how communities actually live, what they already know, and what they need most urgently.",
      "We work through public forums, awareness campaigns, and local facilitation rather than distant, generic programming. That matters for partners looking for grounded community entry points.",
      "This work area reflects one of our core strengths: translating lived reality into more relevant development practice.",
    ],
  },
  "policy-advocacy-community-dialogue": {
    archiveTitle: "How we connect dialogue and advocacy",
    archivePoints: [
      "We inform policy and practice through grassroots innovative solutions.",
      "Community forums and awareness campaigns create the raw material for grounded dialogue.",
      "We turn community experience into usable institutional insight.",
    ],
    pageBody: [
      "Our institutional approach is clear: development policy and practice should be informed by grassroots innovative solutions. That means dialogue is not a side activity. It is part of how we generate insight, legitimacy, and practical direction.",
      "When communities gather in awareness forums, service-provider sessions, or county outreach activities, they are not only receiving information. They are also shaping the kind of evidence and experience that can inform wider policy and stakeholder discussion.",
      "For partners, this is where we become especially valuable as a bridge between field realities and institutional decision-making.",
    ],
  },
};

function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) {
    return { title: "Work Area Not Found" };
  }

  return {
    title: program.title,
    description: program.summary,
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const program = getProgram(slug);

  if (!program) {
    notFound();
  }

  const context = programContext[program.slug];

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="overflow-hidden border border-[var(--color-sand-line)] bg-white shadow-[0_14px_40px_rgba(34,31,24,0.07)]">
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[320px] bg-[var(--color-earth)]">
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </div>
          <div className="px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Our Work
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-ink)] sm:text-5xl">
              {program.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
              {program.summary}
            </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="bg-[var(--color-primary)] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-white"
              >
                Discuss This Work Area
              </Link>
              <Link
                href="/projects"
                className="border border-[var(--color-sand-line)] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-ink)]"
              >
                View Project Updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 py-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="border border-[var(--color-sand-line)] bg-white p-7 shadow-[0_10px_30px_rgba(34,31,24,0.05)] sm:p-8">
          <h2 className="text-3xl font-semibold text-[var(--color-ink)]">
            What this work area means for us
          </h2>
          <div className="mt-6 grid gap-5 text-base leading-8 text-[var(--color-muted)]">
            <p>{program.description}</p>
            {context.pageBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-8">
          <div className="border border-[var(--color-sand-line)] bg-[var(--color-surface)] p-7">
            <h2 className="text-2xl font-semibold text-[var(--color-ink)]">
              {context.archiveTitle}
            </h2>
            <ul className="mt-6 grid gap-4 text-sm leading-7 text-[var(--color-muted)]">
              {context.archivePoints.map((point, index) => (
                <li key={point} className="flex gap-4">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-[var(--color-sand-line)] bg-[var(--color-night)] p-7 text-white">
            <h2 className="text-2xl font-semibold">What we do in this area</h2>
            <ul className="mt-6 grid gap-4 text-sm leading-7 text-white/80">
              {program.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 bg-[var(--color-accent-soft)]" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="Need a locally grounded implementation or dialogue partner?"
        description="Our strongest signal is our community-facing style: practical facilitation, awareness work, local participation, and grounded communication."
        primaryHref="/contact"
        primaryLabel="Contact PHC"
        secondaryHref="/our-work"
        secondaryLabel="Back to Our Work"
      />
    </div>
  );
}
