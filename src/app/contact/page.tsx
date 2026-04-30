import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import {
  FacebookIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Pastoral Heritage Concern for partnership inquiries, program collaboration, stakeholder engagement, and community-centered development work.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <SectionHeader
        eyebrow="Contact"
        title="Connect with PHC"
        description="Use this page for partnership inquiries, donor conversations, media requests, program collaboration, and general communication."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-[var(--color-night)] p-8 text-white">
          <h2 className="text-2xl font-semibold">Contact details</h2>
          <div className="mt-8 grid gap-5 text-white/82">
            <div className="flex gap-4">
              <MapPinIcon className="mt-1 h-5 w-5 shrink-0" />
              <div>
                <p className="font-semibold text-white">Location</p>
                <p>{siteConfig.location}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MailIcon className="mt-1 h-5 w-5 shrink-0" />
              <div>
                <p className="font-semibold text-white">Email</p>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </div>
            {siteConfig.phone ? (
              <div className="flex gap-4">
                <PhoneIcon className="mt-1 h-5 w-5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                </div>
              </div>
            ) : null}
          </div>
          <div className="mt-8 border border-white/12 bg-white/6 p-5 text-sm leading-7 text-white/78">
            PHC welcomes partnership inquiries, stakeholder engagement,
            awareness collaborations, and community-centered program dialogue.
          </div>
          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit our Facebook page"
            title="Visit our Facebook page"
            className="mt-8 inline-flex h-12 w-12 items-center justify-center text-white transition hover:text-white/80"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
