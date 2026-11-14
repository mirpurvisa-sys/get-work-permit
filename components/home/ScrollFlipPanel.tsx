"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollFlipPanelProps = {
  children: ReactNode;
  className?: string;
};

export function ScrollFlipPanel({ children, className }: ScrollFlipPanelProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const panel = panelRef.current;

    if (!panel) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry?.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(panel);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={panelRef} className={className} data-revealed={revealed ? "true" : "false"}>
      {children}
    </div>
  );
}
