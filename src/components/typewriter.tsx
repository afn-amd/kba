import { useEffect, useState } from "react";

const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_FULL_MS = 2600;
const HOLD_EMPTY_MS = 500;

/**
 * Types `text` out, holds it, erases it, and repeats.
 * The full text is always in the DOM for screen readers and search engines, and an invisible
 * copy reserves its space so surrounding layout never shifts. Reduced-motion users get static text.
 */
export function Typewriter({ text }: { text: string }) {
  // Start with the full text so the server render and first paint are complete.
  const [count, setCount] = useState(text.length);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setAnimate(true);

    let length = text.length;
    let deleting = true;
    let timer: number;

    const step = () => {
      if (deleting) {
        length -= 1;
        if (length === 0) deleting = false;
      } else {
        length += 1;
        if (length === text.length) deleting = true;
      }
      setCount(length);

      const delay =
        length === text.length
          ? HOLD_FULL_MS
          : length === 0
            ? HOLD_EMPTY_MS
            : deleting
              ? DELETE_MS
              : TYPE_MS;
      timer = window.setTimeout(step, delay);
    };

    timer = window.setTimeout(step, HOLD_FULL_MS);
    return () => window.clearTimeout(timer);
  }, [text]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="grid">
        <span className="invisible col-start-1 row-start-1">{text}</span>
        <span className="col-start-1 row-start-1">
          {text.slice(0, count)}
          {animate && <span className="typing-caret" />}
        </span>
      </span>
    </>
  );
}
