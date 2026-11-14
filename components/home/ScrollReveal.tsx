"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type ScrollRevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  minScrollY?: number;
  requireScroll?: boolean;
  threshold?: number;
};

export function ScrollReveal({
  as,
  children,
  className,
  delay = 0,
  minScrollY = 0,
  requireScroll = false,
  threshold = 0.2,
}: ScrollRevealProps) {
  const Component = as ?? "div";
  const elementRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    let isIntersecting = false;

    const tryReveal = () => {
      if (!isIntersecting) {
        return;
      }

      if (requireScroll && typeof window !== "undefined" && window.scrollY < minScrollY) {
        return;
      }

      setRevealed(true);
      observer.disconnect();

      if (requireScroll && typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };

    const handleScroll = () => {
      tryReveal();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry) {
          isIntersecting = entry.isIntersecting;
        }

        if (entry?.isIntersecting) {
          tryReveal();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    if (requireScroll && typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      observer.disconnect();

      if (requireScroll && typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [minScrollY, requireScroll, threshold]);

  return (
    <Component
      ref={elementRef}
      className={className}
      data-revealed={revealed ? "true" : "false"}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Component>
  );
}
