// "Tech stack": the languages and tools Ronak uses, in three groups.
import { stack } from "@/data/site";
import styles from "./Stack.module.css";

export default function Stack() {
  return (
    <section className="section" id="stack">
      <div className="wrap">
        <span className="eyebrow" data-reveal="">Tech stack</span>
        <h2 className="h2" data-reveal="" style={{ "--d": "0.1s" }}>
          The tools in my <em>toolbox.</em>
        </h2>
        <div className={styles.grid}>
          {stack.map((g, i) => (
            <div key={g.group} className={styles.group} data-reveal="" style={{ "--d": `${0.1 + i * 0.1}s` }}>
              <h3>{g.group}</h3>
              <div className={styles.chips}>
                {g.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
