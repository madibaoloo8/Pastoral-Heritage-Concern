import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import type { NewsPost } from "@/lib/site-data";

export function NewsCard({ post }: { post: NewsPost }) {
  return (
    <article className="overflow-hidden border border-[var(--color-sand-line)] bg-white shadow-[0_10px_30px_rgba(34,31,24,0.05)]">
      <div className="relative aspect-[4/3] bg-[var(--color-earth)]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 30vw, 100vw"
        />
      </div>
      <div className="p-7">
      <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
        <span className="bg-[var(--color-earth)] px-3 py-1 font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]">
          {post.category}
        </span>
        <span>{post.date}</span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-[var(--color-ink)]">
        {post.title}
      </h3>
      <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
        {post.excerpt}
      </p>
      <Link
        href={`/news/${post.slug}`}
        className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--color-primary)]"
      >
        Read article
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
      </div>
    </article>
  );
}
