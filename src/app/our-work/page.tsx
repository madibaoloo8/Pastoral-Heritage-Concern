import type { Metadata } from "next";
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
