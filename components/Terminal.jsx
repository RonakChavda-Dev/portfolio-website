"use client";
// A pretend computer screen that types out who Ronak is.
// It shows the full text at first, then replays it with typing when you scroll to it.
import { useEffect, useRef, useState } from "react";
import { terminalLines } from "@/data/site";
import styles from "./Terminal.module.css";

const PROMPT = "ronak@dev:~$";

export default function Terminal() {
  const box = useRef(null);
  // How many lines are fully shown, and how much of the current line is typed
  const [lineCount, setLineCount] = useState(terminalLines.length);
  const [partial, setPartial] = useState(null);
  const [finished, setFinished] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer;
    let cancelled = false;

    const play = () => {
      setLineCount(0); setFinished(false);
      let i = 0;
      const next = () => {
        if (cancelled) return;
        if (i >= terminalLines.length) { setFinished(true); return; }
        const line = terminalLines[i];
        if (line.type === "out") {
          i++; setLineCount(i); timer = setTimeout(next, 220);
          return;
        }
        let k = 0;
        const typeLetter = () => {
          if (cancelled) return;
          setPartial(line.text.slice(0, k));
          if (k++ < line.text.length) timer = setTimeout(typeLetter, 38);
          else { setPartial(null); i++; setLineCount(i); timer = setTimeout(next, 260); }
        };
        typeLetter();
      };
      next();
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { observer.disconnect(); play(); }
    }, { threshold: 0.4 });
    observer.observe(box.current);
    return () => { cancelled = true; clearTimeout(timer); observer.disconnect(); };
  }, []);

  const lineClass = (l) =>
    l.green ? styles.green : l.accent ? styles.lime : l.dim ? styles.dim : "";

  return (
    // "float" makes the whole box gently levitate up and down, with a soft shadow below it
    <div className={styles.float}>
    <div className={styles.terminal} ref={box}>
      <div className={styles.bar}>
        <i /><i /><i />
        <small>ronak@dev: ~</small>
      </div>
      <div className={styles.body} role="group" aria-label="Terminal introducing Ronak">
        {terminalLines.slice(0, lineCount).map((l, i) =>
          l.type === "cmd" ? (
            <div key={i}><span className={styles.green}>{PROMPT}</span> {l.text}</div>
          ) : (
            <div key={i} className={lineClass(l)}>{l.text}</div>
          )
        )}
        {partial !== null && (
          <div><span className={styles.green}>{PROMPT}</span> {partial}</div>
        )}
        {finished && (
          <div><span className={styles.green}>{PROMPT}</span> <span className={styles.caret} /></div>
        )}
      </div>
    </div>
    <div className={styles.shadow} aria-hidden="true" />
    </div>
  );
}
