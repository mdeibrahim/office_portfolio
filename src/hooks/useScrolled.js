import { useState, useEffect } from "react";

/**
 * useScrolled
 * Returns `true` once the user has scrolled past `threshold` pixels.
 * Used by the Navbar to switch from transparent → frosted-glass background.
 */
export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);

    // Run once on mount to handle pre-scrolled pages (e.g. browser restore)
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}