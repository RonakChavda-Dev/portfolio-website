// The "About me" section: a short story, three numbers, and a typing terminal.
import { aboutParagraphs, facts } from "@/data/site";
import CountUp from "./CountUp";
import Terminal from "./Terminal";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <span className="eyebrow" data-reveal="">About me</span>
        <h2 className="h2" data-reveal="" style={{ "--d": "0.1s" }}>
          Just a programmer who hates doing things <em>twice.</em>
        </h2>

        <div className={styles.grid}>
          <div className={styles.text} data-reveal="left" style={{ "--d": "0.15s" }}>
            {aboutParagraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <div className={styles.facts}>
              {facts.map((f) => (
                <div key={f.label} className={styles.fact}>
                  <CountUp value={f.value} />
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal="right" style={{ "--d": "0.25s" }}>
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
