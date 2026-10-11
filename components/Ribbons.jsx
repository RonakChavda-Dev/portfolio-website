// Two moving bands that cross each other, one green and one black.
import { ribbons } from "@/data/site";
import Icon from "./Icons";
import styles from "./Ribbons.module.css";

function Band({ words, className }) {
  // Repeat the words many times so the band always looks full
  const list = Array.from({ length: 6 }, () => words).flat();
  return (
    <div className={`${styles.band} ${className}`}>
      <div className={styles.track}>
        {list.map((w, i) => (
          <span key={i}>{w}<Icon name="spark" /></span>
        ))}
      </div>
    </div>
  );
}

export default function Ribbons() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <Band words={ribbons.two} className={styles.dark} />
      <Band words={ribbons.one} className={styles.lime} />
    </div>
  );
}
