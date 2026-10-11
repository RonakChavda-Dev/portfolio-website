"use client";
// The big "Hello!" text. As you scroll, the words change from light grey to black, one by one.
// Small colored skill tags float on both sides.
import { useEffect, useRef } from "react";
import { intro } from "@/data/site";
import Icon from "./Icons";
import styles from "./Intro.module.css";

export default function Intro() {
  const textRef = useRef(null);
  const words = intro.text.split(" ");
  const left = intro.chips.slice(0, 3);
  const right = intro.chips.slice(3);

  useEffect(() => {
    const el = textRef.current;
    const spans = el.querySelectorAll("span");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      spans.forEach((s) => s.classList.add(styles.on));
      return;
    }
    const update = () => {
      const r = el.getBoundingClientRect();
      const h = window.innerHeight;
      // 0 when the text's top enters the bottom of the screen,
      // 1 when the text's middle reaches the middle of the screen
      const start = h * 0.95;
      const end = h * 0.5 - r.height / 2;
      const p = Math.min(1, Math.max(0, (start - r.top) / (start - end)));
      const lit = Math.round(p * spans.length);
      spans.forEach((s, i) => s.classList.toggle(styles.on, i < lit));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    // a few browsers scroll smoothly without sending many scroll events, so check again now and then
    const timer = setInterval(update, 250);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      clearInterval(timer);
    };
  }, []);

  const Chip = ({ c, i }) => (
    <span className={styles.chip} style={{ "--c": c.color, "--delay": `${-i * 1.3}s` }}>
      <i />{c.label}
    </span>
  );

  return (
    <section className={`section ${styles.intro}`} id="intro">
      <div className="wrap">
        <div className={styles.grid}>
          <div className={`${styles.side} ${styles.left}`}>
            {left.map((c, i) => <Chip key={c.label} c={c} i={i} />)}
          </div>
          <div className={styles.center}>
            <p className={styles.hello} data-reveal="">{intro.hello}</p>
            <p className={styles.text} ref={textRef}>
              {words.map((w, i) => <span key={i}>{w} </span>)}
            </p>
            <a href="#work" className={styles.link} data-reveal="">
              See my latest work <Icon name="arrowRight" />
            </a>
          </div>
          <div className={`${styles.side} ${styles.right}`}>
            {right.map((c, i) => <Chip key={c.label} c={c} i={i + 3} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
