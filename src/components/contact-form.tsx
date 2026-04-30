"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-data";

const initialState = {
  name: "",
  email: "",
  organization: "",
  interest: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  function updateField(key: keyof typeof initialState, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(
      `PHC website inquiry: ${form.interest || "General inquiry"}`,
    );
    const body = encodeURIComponent(
      [
        `Full name: ${form.name}`,
        `Email: ${form.email}`,
        `Organization: ${form.organization || "Not provided"}`,
        `Inquiry focus: ${form.interest || "General inquiry"}`,
        "",
        "Message:",
        form.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm(initialState);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[var(--color-sand-line)] bg-white p-8 shadow-[0_16px_50px_rgba(34,31,24,0.06)]"
    >
      <h2 className="text-2xl font-semibold text-[var(--color-ink)]">
        Send a partnership or inquiry message
      </h2>
      <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
        Complete the form below and we will open your email client with your
        message addressed to PHC.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
          Full name
          <input
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="border border-[var(--color-sand-line)] bg-[var(--color-surface)] px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
            placeholder="Your name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
          Email address
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="border border-[var(--color-sand-line)] bg-[var(--color-surface)] px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
            placeholder="name@example.org"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
          Organization
          <input
            value={form.organization}
            onChange={(event) => updateField("organization", event.target.value)}
            className="border border-[var(--color-sand-line)] bg-[var(--color-surface)] px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
            placeholder="Organization name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
          Inquiry focus
          <input
            value={form.interest}
            onChange={(event) => updateField("interest", event.target.value)}
            className="border border-[var(--color-sand-line)] bg-[var(--color-surface)] px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
            placeholder="Partnership, program, media, research..."
          />
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-medium text-[var(--color-ink)]">
        Message
        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-40 border border-[var(--color-sand-line)] bg-[var(--color-surface)] px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
          placeholder="Tell PHC about your interest, partnership idea, or request."
          required
        />
      </label>
      <button
        type="submit"
        className="mt-6 bg-[var(--color-primary)] px-6 py-4 font-semibold text-white shadow-[0_16px_30px_rgba(36,77,53,0.22)] transition hover:bg-[var(--color-primary-strong)]"
      >
        Send inquiry
      </button>
      {submitted ? (
        <p className="mt-4 text-sm text-[var(--color-primary)]">
          Your email client should open with this inquiry pre-filled and ready
          to send.
        </p>
      ) : null}
    </form>
  );
}
