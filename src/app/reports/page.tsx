import type { Metadata } from "next";
import { PublicationCard } from "@/components/publication-card";
import { SectionHeader } from "@/components/section-header";
import { publications } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Reports & Publications",
  description:
    "Browse the PHC reports and publications structure, including annual reports, policy briefs, community reports, and press releases.",
};

export default function ReportsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <SectionHeader
        eyebrow="Reports & Publications"
        title="Institutional knowledge, reports, and public documentation"
        description="This section creates space for PHC to publish annual reports, policy briefs, community updates, press statements, and other institutional materials in a donor-ready format."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {publications.map((publication) => (
          <PublicationCard key={publication.title} publication={publication} />
        ))}
      </div>
    </div>
  );
}
