import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeader } from "@/components/section-header";
import { galleryImages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our gallery of community sessions, current fieldwork, awareness work, Wajir CVE forum imagery, and wider engagement activities.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <SectionHeader
        eyebrow="Gallery"
        title="Moments from our work in communities"
        description="This gallery brings together images from our current field intervention, awareness sessions, Wajir CVE forum activities, albinism support work, and wider community engagement."
      />
      <div className="mt-8 border border-[var(--color-sand-line)] bg-[var(--color-surface)] px-5 py-5 text-sm leading-7 text-[var(--color-muted)] sm:px-6">
        Our gallery highlights the areas we return to most often in our work: livelihoods, inclusion, community learning, dialogue, youth engagement, and resilience.
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {galleryImages.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden border border-[var(--color-sand-line)] bg-white shadow-[0_16px_50px_rgba(34,31,24,0.06)]"
          >
            <div className="relative aspect-[4/3] bg-[var(--color-earth)]">
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
            </div>
            <figcaption className="px-5 py-4 text-sm leading-6 text-[var(--color-muted)]">
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
