import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { ProgramCard } from "@/components/program-card";
import { SectionHeader } from "@/components/section-header";
import { programs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore our program areas in peacebuilding, youth engagement, grassroots development, inclusion, and policy advocacy.",
};

export default function ProgramsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <SectionHeader
        eyebrow="Programs"
        title="Program areas built around resilience, inclusion, and local leadership"
        description="Each PHC program area is framed to support practical action while keeping community realities at the center of policy and implementation."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {programs.map((program) => (
          <ProgramCard key={program.slug} program={program} href={`/our-work/${program.slug}`} />
        ))}
      </div>
      <div className="mt-12">
        <CTASection
          title="Need a program partner with community-level credibility?"
          description="Our model is well suited for collaborative initiatives that require local trust, civic dialogue, awareness work, and policy-connected implementation."
          primaryHref="/contact"
          primaryLabel="Discuss a Partnership"
          secondaryHref="/our-work"
          secondaryLabel="See Example Projects"
        />
      </div>
    </div>
  );
}
