"use client";

import { useEffect, useState } from "react";

type TypedTextProps = {
  text: string;
  /** Milliseconds per character. */
  speed?: number;
  /** Delay before typing starts, in milliseconds. */
  startDelay?: number;
  className?: string;
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
}: TypedTextProps) {
  const [count, setCount] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduced(true);
      setCount(text.length);
      return;
    }

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
  }, [text, speed, startDelay]);

  if (reduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span aria-hidden="true" className="typed-caret">|</span>
      <span aria-hidden="true" className="opacity-0">{text.slice(count)}</span>
    </span>
  );
}
