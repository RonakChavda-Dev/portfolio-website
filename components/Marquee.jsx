// The grey strip of tool names under the dark card. It slides sideways without stopping.
import { toolStrip } from "@/data/site";
import Icon from "./Icons";
import styles from "./Marquee.module.css";

export default function Marquee() {
  // The list is shown twice so the loop looks endless
  const words = [...toolStrip, ...toolStrip];
  return (
    <div className={styles.outer} aria-label="Tools I use">
      <div className={styles.track}>
        {words.map((word, i) => (
          <span key={i} className={styles.word} aria-hidden={i >= toolStrip.length}>
            <Icon name="spark" />{word}
          </span>
        ))}
      </div>
    </div>
  );
}
