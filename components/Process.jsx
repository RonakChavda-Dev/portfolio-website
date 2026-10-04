"use client";
// "How I work": four steps joined by a moving line that grows as you scroll.
import { useEffect, useRef } from "react";
import { steps } from "@/data/site";
import styles from "./Process.module.css";

export default function Process() {
  const pipe = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const update = () => {
      const el = pipe.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const h = window.innerHeight;
      const p = Math.min(1, Math.max(0, (h * 0.85 - r.top) / (r.height + h * 0.3)));
      el.style.setProperty("--p", reduce ? 1 : p);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section className="section" id="process">
      <div className="wrap">
        <span className="eyebrow" data-reveal="">How I work</span>
        <h2 className="h2" data-reveal="" style={{ "--d": "0.1s" }}>
          From a messy task to a <em>tool that runs itself.</em>
        </h2>

        <div className={styles.pipe} ref={pipe}>
          <div className={styles.line} aria-hidden="true"><i /></div>
          {steps.map((s, i) => (
            <div key={s.title} className={styles.step} data-reveal="" style={{ "--d": `${0.1 + i * 0.15}s` }}>
              <div className={styles.node} style={{ "--delay": `${i * 0.75}s` }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
