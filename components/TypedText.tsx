"use client";

import { useEffect, useRef, useState } from "react";

type TypedTextProps = {
  text: string;
  /** Milliseconds per character. */
  speed?: number;
  /** Delay before typing starts, in milliseconds. */
  startDelay?: number;
  className?: string;
  /** Wait until the text scrolls into view before typing. */
  onView?: boolean;
};

/**
 * Types `text` out one character at a time with a blinking caret. The full
 * text is always laid out (untyped characters are transparent) so there is
 * no layout shift, and it's exposed to screen readers via aria-label.
 * Honors prefers-reduced-motion by showing the full text immediately.
 */
export default function TypedText({
  text,
  speed = 45,
  startDelay = 350,
  className = "",
  onView = false,
}: TypedTextProps) {
  const [count, setCount] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [inView, setInView] = useState(!onView);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!onView) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [onView]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduced(true);
      setCount(text.length);
      return;
    }

    if (!inView) return;

    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay, inView]);

  if (reduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      {(!onView || count < text.length) && (
        <span aria-hidden="true" className="typed-caret">|</span>
      )}
      <span aria-hidden="true" className="opacity-0">{text.slice(count)}</span>
    </span>
  );
}
