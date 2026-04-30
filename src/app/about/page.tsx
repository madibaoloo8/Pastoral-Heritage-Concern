import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/cta-section";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Pastoral Heritage Concern's mission, vision, values, and community-first approach to policy, inclusion, peacebuilding, and grassroots development.",
};

const values = [
  "Community dignity and inclusion",
  "Local ownership and participation",
  "Evidence grounded in lived experience",
  "Peaceful coexistence and resilience",
  "Accountable partnerships and public value",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="overflow-hidden border border-[var(--color-sand-line)] bg-white shadow-[0_10px_30px_rgba(34,31,24,0.05)]">
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[320px] bg-[var(--color-earth)]">
            <Image
              src="/gallery/phc-content/515414479_24463352369937363_3773270026668671520_n.jpg"
              alt="Pastoral Heritage Concern albinism awareness and support session"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 44vw, 100vw"
            />
          </div>
          <div className="px-6 py-10 sm:px-10 sm:py-12">
            <SectionHeader
              eyebrow="About PHC"
              title="A grassroots-centered organization shaping better development practice"
              description="We are a Nairobi-based non-profit organization working through grassroots innovative solutions, public education, dialogue, and community-centered engagement."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="border border-[var(--color-sand-line)] bg-[var(--color-surface)] p-7">
                <h2 className="text-2xl font-semibold text-[var(--color-ink)]">
                  Mission
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                  To inform development policy and practice through grassroots
                  innovative solutions that advance peace, resilience,
                  inclusion, and meaningful community participation.
                </p>
              </div>
              <div className="border border-[var(--color-sand-line)] bg-[var(--color-surface)] p-7">
                <h2 className="text-2xl font-semibold text-[var(--color-ink)]">
                  Vision
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                  Communities whose lived experience, local agency, and
                  practical knowledge shape stronger development choices and
                  more inclusive public outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-4">
          <div className="border border-[var(--color-sand-line)] bg-white p-7 shadow-[0_10px_30px_rgba(34,31,24,0.05)]">
            <h2 className="text-2xl font-semibold text-[var(--color-ink)]">
              Who we are
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              We are a non-profit organisation based in Nairobi, Kenya. Our
              work brings together practical community engagement, awareness
              campaigns, grassroots facilitation, and local dialogue.
            </p>
          </div>
          <div className="border border-[var(--color-sand-line)] bg-white p-7 shadow-[0_10px_30px_rgba(34,31,24,0.05)]">
            <h2 className="text-2xl font-semibold text-[var(--color-ink)]">
              What defines our work
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              Our work includes albinism awareness campaigns, service-provider
              engagement, county-level outreach, facilitator-led sessions, and
              public education around dignity, protection, and inclusion.
            </p>
          </div>
          <div className="border border-[var(--color-sand-line)] bg-white p-7 shadow-[0_10px_30px_rgba(34,31,24,0.05)]">
            <h2 className="text-2xl font-semibold text-[var(--color-ink)]">
              Public contact and location
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              The public PHC page references Nairobi, Kenya and lists the public
              contact email as{" "}
              <a
                href="mailto:paheritageconcern@gmail.com"
                className="font-semibold text-[var(--color-primary)]"
              >
                paheritageconcern@gmail.com
              </a>
              .
            </p>
          </div>
          <div className="border border-[var(--color-sand-line)] bg-white p-7 shadow-[0_10px_30px_rgba(34,31,24,0.05)]">
            <h2 className="text-2xl font-semibold text-[var(--color-ink)]">
              Our location
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              We work from Nairobi, Kenya, while our activities reach across
              counties and community spaces where inclusion, dialogue, and
              practical development work matter most.
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 sm:py-6">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border border-[var(--color-sand-line)] bg-white p-8 shadow-[0_10px_30px_rgba(34,31,24,0.05)]">
            <h2 className="text-3xl font-semibold text-[var(--color-ink)]">
              Why grassroots policy and practice matter
            </h2>
            <div className="mt-6 grid gap-5 text-base leading-8 text-[var(--color-muted)]">
              <p>
                Many development strategies lose effectiveness when they are too
                far removed from community realities. We exist to help close
                that gap by bringing grounded insight into how programs are
                imagined, adapted, and implemented.
              </p>
              <p>
                This approach values communities not as passive beneficiaries,
                but as knowledge holders and problem-solvers. It is especially
                relevant in peacebuilding, youth engagement, inclusion, and
                resilience work where trust and context shape results.
              </p>
              <p>
                PHC&apos;s community-first posture reflects a belief that better
                policy starts with deeper listening, stronger participation, and
                practical respect for what communities are already doing.
              </p>
              <p>
                Our work takes shape through awareness sessions, county
                outreach, and facilitator-led public learning spaces rather than
                broad institutional statements alone.
              </p>
            </div>
          </div>
          <div className="bg-[var(--color-night)] p-8 text-white">
            <h2 className="text-3xl font-semibold">Values</h2>
            <ul className="mt-6 grid gap-4">
              {values.map((value) => (
                <li key={value} className="flex gap-3 text-base leading-7 text-white/82">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent-soft)]" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border border-white/12 bg-white/6 p-5 text-sm leading-7 text-white/78">
              PHC&apos;s institutional posture is rooted in dignity, accountability,
              and practical collaboration with communities and partners.
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="border border-[var(--color-sand-line)] bg-[var(--color-surface)] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Community-First Approach
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--color-ink)]">
              We work through public learning, facilitation, and practical dialogue
            </h2>
            <div className="mt-6 grid gap-5 text-base leading-8 text-[var(--color-muted)]">
              <p>
                The clearest pattern across our work is not polished
                institutional messaging. It is community-facing
                engagement: awareness forums, county campaigns, facilitator-led
                sessions, and practical public education.
              </p>
              <p>
                That matters because it shows how we approach development in
                practice. Our work is not only about what we say
                it values, but about how it enters community spaces, shares
                information, and convenes people around real issues.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                number: "01",
                title: "County outreach",
                text: "Public campaigns in counties such as Narok, Kapenguria, and Tharaka Nithi show PHC taking information directly into community settings.",
              },
              {
                number: "02",
                title: "Inclusion and dignity",
                text: "The archive repeatedly returns to dignity, stigma reduction, practical protection, and respect for people living with albinism.",
              },
              {
                number: "03",
                title: "Convening role",
                text: "Our interactive sessions with caregivers and service providers show a facilitation role that goes beyond awareness alone.",
              },
              {
                number: "04",
                title: "Grounded public value",
                text: "Our work is grounded in a simple idea: local realities should inform policy and practice.",
              },
            ].map((item) => (
              <article key={item.number} className="border border-[var(--color-sand-line)] bg-white p-6 shadow-[0_10px_30px_rgba(34,31,24,0.05)]">
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                  {item.number}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="border border-[var(--color-sand-line)] bg-[var(--color-surface)] px-6 py-8 shadow-[0_10px_30px_rgba(34,31,24,0.05)] sm:px-8">
          <SectionHeader
            eyebrow="Public Activity Themes"
            title="Core themes in our work"
            description="Our work consistently centers community education, dignity-centered awareness, grassroots facilitation, and dialogue-oriented engagement."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-4">
            {[
              "Albinism awareness and myth reduction",
              "Service-provider and caregiver engagement",
              "County-level outreach and public education",
              "Community dialogue and participation",
            ].map((item, index) => (
              <div
                key={item}
                className="border border-[var(--color-sand-line)] bg-white px-5 py-5"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 sm:py-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border border-[var(--color-sand-line)] bg-white p-8 shadow-[0_10px_30px_rgba(34,31,24,0.05)]">
            <h2 className="text-3xl font-semibold text-[var(--color-ink)]">
              Leadership and team
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
              We will add our approved leadership, board, and team profiles
              here as part of our next content update.
            </p>
          </div>
          <div className="border border-[var(--color-sand-line)] bg-white p-8 shadow-[0_10px_30px_rgba(34,31,24,0.05)]">
            <h2 className="text-3xl font-semibold text-[var(--color-ink)]">
              Institutional posture
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
              We are a community-first organisation that combines awareness,
              facilitation, public dialogue, and grassroots framing to
              influence how development actors think and work.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Work with PHC on practical, locally grounded change"
        description="If you are a donor, NGO, county actor, network, or research partner looking for credible grassroots engagement, we welcome collaboration."
        primaryHref="/contact"
        primaryLabel="Start a Conversation"
        secondaryHref="/our-work"
        secondaryLabel="View Program Areas"
      />
    </div>
  );
}
