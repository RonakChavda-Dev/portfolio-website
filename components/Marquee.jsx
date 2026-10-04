// The tilted strip of skills that slides across the screen without stopping.
import { marqueeWords } from "@/data/site";
import styles from "./Marquee.module.css";

export default function Marquee() {
  // The list is shown twice so the loop looks endless
  const words = [...marqueeWords, ...marqueeWords];
  return (
    <div className={styles.outer} aria-hidden="true">
      <div className={styles.marquee}>
        <div className={styles.track}>
          {words.map((word, i) => (
            <span key={i} className={styles.word}>{word}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
