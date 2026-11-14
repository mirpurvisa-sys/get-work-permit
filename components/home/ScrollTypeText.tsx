"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
} from "react";
import styles from "./ScrollTypeText.module.css";

type ScrollTypeTextProps = {
  as?: ElementType;
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  threshold?: number;
  align?: "start" | "center";
};

export function ScrollTypeText({
  as,
  text,
  className,
  delay = 0,
  speed = 18,
  threshold = 0.2,
  align = "start",
}: ScrollTypeTextProps) {
  const Component = as ?? "span";
  const elementRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [visibleChars, setVisibleChars] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
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
        threshold,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (!revealed) {
      return;
    }

    if (!text.length) {
      setComplete(true);
      return;
    }

    let cancelled = false;
    let timeoutId: number | undefined;

    setVisibleChars(0);
    setComplete(false);

    const typeNext = (index: number, wait: number) => {
      timeoutId = window.setTimeout(() => {
        if (cancelled) {
          return;
        }

        setVisibleChars(index);

        if (index >= text.length) {
          setComplete(true);
          return;
        }

        typeNext(index + 1, speed);
      }, wait);
    };

    typeNext(1, delay);

    return () => {
      cancelled = true;

      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [delay, revealed, speed, text]);

  const typedText = revealed ? text.slice(0, visibleChars) : "";
  const alignmentStyles =
    align === "center"
      ? ({
          "--typing-align": "center",
          "--typing-justify": "center",
        } as CSSProperties)
      : undefined;

  return (
    <Component
      ref={elementRef}
      className={`${styles.host}${className ? ` ${className}` : ""}`}
      data-complete={complete ? "true" : "false"}
      style={alignmentStyles}
      aria-label={text}
    >
      <span className={styles.ghost} aria-hidden="true">
        {text}
      </span>
      <span className={styles.live} aria-hidden="true">
        <span className={styles.liveText}>{typedText}</span>
      </span>
    </Component>
  );
}
