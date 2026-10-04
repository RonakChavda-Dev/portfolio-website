// "Things I've built": one big featured project and four smaller cards.
import { featuredProject, projects } from "@/data/site";
import Icon from "./Icons";
import styles from "./Projects.module.css";

export default function Projects() {
  const f = featuredProject;

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <span className="eyebrow" data-reveal="">Projects</span>
        <h2 className="h2" data-reveal="" style={{ "--d": "0.1s" }}>
          Things I&apos;ve <em>built.</em>
        </h2>
        <p className="sub" data-reveal="" style={{ "--d": "0.15s" }}>
          A few projects from my GitHub. Each one started as a problem I wanted gone.
        </p>

        <div className={styles.grid}>
          <div className={styles.featureWrap} data-reveal="zoom">
            <a className={`${styles.card} ${styles.feature}`} href={f.url} target="_blank" rel="noopener">
              <div>
                <div className={styles.tags}>
                  {f.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <h3>{f.name}</h3>
                <p>{f.text}</p>
                <span className={styles.go}>View on GitHub <Icon name="arrowUpRight" /></span>
              </div>
              <div className={styles.miniTerm} aria-hidden="true">
                <span className={styles.dim}># back from a break? ask it.</span>{"\n"}
                <span className={styles.green}>$</span> wherewasi{"\n"}
                <span className={styles.dim}>… reading recent work</span>{"\n"}
                <span className={styles.lime}>→</span> rebuilding your context{"\n"}
                <span className={styles.lime}>→</span> finding where you stopped{"\n"}
                <span className={styles.green}>✓</span> ready. pick up right there.{"\n"}
                <span className={styles.dim}># illustration only</span>
              </div>
            </a>
          </div>

          {projects.map((p, i) => (
            <div key={p.name} data-reveal="" style={{ "--d": `${(i % 2) * 0.1 + 0.1}s` }}>
              <a className={styles.card} href={p.url} target="_blank" rel="noopener">
                <span className={styles.num} aria-hidden="true">{String(i + 2).padStart(2, "0")}</span>
                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span key={t} className={`tag ${p.wip && t === "In progress" ? "tag-wip" : ""}`}>{t}</span>
                  ))}
                </div>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <span className={styles.go}>GitHub <Icon name="arrowUpRight" /></span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
