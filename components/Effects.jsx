"use client";
// Small moving touches for the whole page:
// 1. Things marked data-reveal slide in when you scroll to them.
// 2. Buttons marked "magnetic" lean toward the mouse.
// 3. The top photo gently tilts toward the mouse.
// This file draws nothing itself.
import { useEffect } from "react";

export default function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups = [];

    // Tell the safety timer in app/layout.js that the animations started fine
    window.__fxReady = true;

    // 1. Slide in on scroll
    const show = (el) => { el.setAttribute("data-shown", ""); el.classList.add("in"); };
    const items = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => {
      // Anything already on screen shows right away
      if (el.getBoundingClientRect().top < window.innerHeight) show(el);
      else observer.observe(el);
    });
    cleanups.push(() => observer.disconnect());

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    // 2. Magnetic buttons (and the photo tilt below)
    if (!reduce && finePointer) {
      document.querySelectorAll(".magnetic").forEach((btn) => {
        const move = (e) => {
          const r = btn.getBoundingClientRect();
          const x = (e.clientX - r.left - r.width / 2) * 0.25;
          const y = (e.clientY - r.top - r.height / 2) * 0.35;
          btn.style.transform = `translate(${x}px, ${y}px)`;
        };
        const leave = () => (btn.style.transform = "");
        btn.addEventListener("pointermove", move);
        btn.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          btn.removeEventListener("pointermove", move);
          btn.removeEventListener("pointerleave", leave);
        });
      });
    }

    // 2b. Photo gently tilts toward the mouse
    if (!reduce && finePointer) {
      document.querySelectorAll("[data-tilt]").forEach((zone) => {
        const target = zone.querySelector("[data-tilt-target]");
        if (!target) return;
        const move = (e) => {
          const r = zone.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          target.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
        };
        const leave = () => (target.style.transform = "");
        zone.addEventListener("pointermove", move);
        zone.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          zone.removeEventListener("pointermove", move);
          zone.removeEventListener("pointerleave", leave);
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
