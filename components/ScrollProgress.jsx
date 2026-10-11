"use client";
// The thin green line at the very top that fills up as you scroll down.
import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const bar = useRef(null);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      ref={bar}
      style={{
        position: "fixed", top: 0, left: 0, height: 3, width: 0, zIndex: 60,
        background: "var(--lime-deep)",
      }}
    />
  );
}
