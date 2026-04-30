"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  variant?: "up" | "left" | "right" | "fade";
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const revealIfInView = () => {
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 0;

      if (rect.top <= viewportHeight * 0.92) {
        setVisible(true);
        return true;
      }

      return false;
    };

    if (revealIfInView()) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -56px 0px",
      },
    );

    observer.observe(node);
    const fallback = window.setTimeout(() => {
      setVisible(true);
      observer.disconnect();
    }, 360);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  const revealStyle: CSSProperties & Record<string, string> = {
    transitionDelay: `${delayMs}ms`,
    "--reveal-x":
      variant === "left" ? "-42px" : variant === "right" ? "42px" : "0px",
    "--reveal-y": variant === "up" ? "42px" : "0px",
  };

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={revealStyle}
    >
      {children}
    </div>
  );
}
