"use client";
// The thin green line at the very top that fills up as you scroll down.
// It is always full width and only "stretches" from the left, so it can never
// poke out past the side of the screen (which used to make phones wobble sideways).
import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const bar = useRef(null);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={bar}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, height: 3, zIndex: 60,
        transform: "scaleX(0)", transformOrigin: "left",
        background: "var(--lime-deep)", pointerEvents: "none",
      }}
    />
  );
}
