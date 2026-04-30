type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-6xl">
        {title}
      </h2>
      <div className={`mt-5 h-2 w-18 bg-[var(--color-earth)] ${align === "center" ? "mx-auto" : ""}`} />
      <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
        {description}
      </p>
    </div>
  );
}
