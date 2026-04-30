import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { newsPosts } from "@/lib/site-data";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = newsPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <article className="border border-[var(--color-sand-line)] bg-white px-6 py-10 shadow-[0_16px_50px_rgba(34,31,24,0.06)] sm:px-10 sm:py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
          {post.category}
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-[var(--color-muted)]">{post.date}</p>
        <div className="mt-8 grid gap-6 text-lg leading-9 text-[var(--color-muted)]">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
