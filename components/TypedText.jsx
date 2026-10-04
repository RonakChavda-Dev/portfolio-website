"use client";
// Types a word, deletes it, then types the next one. Loops forever.
import { useEffect, useState } from "react";
import styles from "./TypedText.module.css";

export default function TypedText({ words }) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let wordIndex = 0;
    let letters = words[0].length;
    let deleting = true;
    let timer;

    const step = () => {
      const word = words[wordIndex];
      letters += deleting ? -1 : 1;
      setText(word.slice(0, letters));
      let wait = deleting ? 45 : 85;
      if (!deleting && letters === word.length) { deleting = true; wait = 1700; }
      else if (deleting && letters === 0) { deleting = false; wordIndex = (wordIndex + 1) % words.length; wait = 300; }
      timer = setTimeout(step, wait);
    };
    timer = setTimeout(step, 1800);
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <>
      <span className={styles.typed}>{text}</span>
      <span className={styles.caret} aria-hidden="true" />
    </>
  );
}
