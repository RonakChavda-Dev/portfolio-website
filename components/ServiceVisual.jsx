// The small moving pictures inside the open "What I do" rows.
// They are only drawings made with code (no photos), so they always load fast.
import styles from "./ServiceVisual.module.css";

export default function ServiceVisual({ type }) {
  if (type === "agent") {
    // An AI agent working through its steps, line by line, again and again
    const lines = [
      ["goal", "collect this week's orders"],
      ["plan", "open sheet → read rows → sum"],
      ["tool", "sheets.read(\"orders\")"],
      ["check", "42 rows, no blanks"],
      ["done", "report sent ✓"],
    ];
    return (
      <div className={`${styles.box} ${styles.agent}`} aria-hidden="true">
        <div className={styles.bar}><i /><i /><i /><span>agent.log</span></div>
        {lines.map(([k, v], i) => (
          <p key={k} style={{ "--i": i }}>
            <b className={k === "done" ? styles.lime : ""}>{k}</b> {v}
          </p>
        ))}
      </div>
    );
  }

  if (type === "flow") {
    // A task going from "trigger" to "script" to "done", with a dot running along the line
    return (
      <div className={`${styles.box} ${styles.flow}`} aria-hidden="true">
        <div className={styles.nodes}>
          <div><small>When</small>new file arrives</div>
          <div className={styles.mid}><small>Then</small>script runs</div>
          <div className={styles.end}><small>Done</small>saved &amp; sorted</div>
        </div>
        <div className={styles.track}><span className={styles.runner} /></div>
        <p className={styles.counter}>runs by itself, <b>every time</b></p>
      </div>
    );
  }

  // A small website being built, block by block
  return (
    <div className={`${styles.box} ${styles.browser}`} aria-hidden="true">
      <div className={styles.bar}><i /><i /><i /><span>yourwebsite.com</span></div>
      <div className={styles.page}>
        <div className={styles.navl} />
        <div className={styles.heroBlock}><div /><div /><div className={styles.btn} /></div>
        <div className={styles.cols}><div /><div /><div /></div>
      </div>
    </div>
  );
}
