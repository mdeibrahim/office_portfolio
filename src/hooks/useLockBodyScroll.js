import { useEffect } from "react";

/**
 * useLockBodyScroll
 * Prevents the page from scrolling while `locked` is true.
 * Restores scroll position when `locked` becomes false.
 */
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [locked]);
}