"use client";
// "How it works": four step cards. A curvy green line draws itself between them as you scroll.
import { useEffect, useRef } from "react";
import { steps } from "@/data/site";
import styles from "./Process.module.css";

export default function Process() {
  const area = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const update = () => {
      const el = area.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const h = window.innerHeight;
      const p = Math.min(1, Math.max(0, (h * 0.9 - r.top) / (r.height + h * 0.2)));
      el.style.setProperty("--p", reduce ? 1 : p);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section className="section band band-flat-top" id="process">
      <div className="wrap">
        <div className="head-center">
          <span className="label" data-reveal="">How I work</span>
          <h2 className="h2" data-reveal="" style={{ "--d": "0.1s" }}>
            Here&apos;s how it <em>works</em>
          </h2>
        </div>

        <div className={styles.area} ref={area}>
          <svg className={styles.curve} viewBox="0 0 1000 260" preserveAspectRatio="none" aria-hidden="true">
            <path
              pathLength="1"
              d="M60 120 C 160 -20, 220 40, 300 90 S 420 250, 520 170 S 640 10, 740 90 S 880 230, 960 140"
            />
          </svg>
          <div className={styles.grid}>
            {steps.map((s, i) => (
              <div key={s.title} className={styles.cell} data-reveal="" style={{ "--d": `${0.1 + i * 0.12}s` }}>
                <article className={styles.card} style={{ "--rot": `${i % 2 ? 2 : -2}deg` }}>
                  <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
