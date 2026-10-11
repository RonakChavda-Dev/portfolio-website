// "Selected work": one big dark card for the main project, then a list of all projects.
// Hover a row in the list to see a short description.
import { featuredProject, projects, socials } from "@/data/site";
import Icon from "./Icons";
import styles from "./Projects.module.css";

export default function Projects() {
  const f = featuredProject;
  const github = socials.find((s) => s.icon === "github");

  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className={styles.head}>
          <div>
            <span className="label" data-reveal="">Best projects</span>
            <h2 className="h2" data-reveal="" style={{ "--d": "0.1s" }}>
              Selected <em>work</em>
            </h2>
          </div>
          <p className="sub" data-reveal="" style={{ "--d": "0.2s" }}>
            A few projects from my GitHub. Each one started as a problem I wanted gone.
          </p>
        </div>

        {/* Big featured card */}
        <a className={styles.feature} href={f.url} target="_blank" rel="noopener" data-reveal="zoom">
          <div className={styles.fCopy}>
            <div className={styles.tags}>
              <span className={styles.tagLime}>Featured</span>
              <span>{f.type}</span>
              {f.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
            <h3>{f.name}</h3>
            <p>{f.text}</p>
          </div>

          <div className={styles.term} aria-hidden="true">
            <span className={styles.dim}># back from a break? ask it.</span>{"\n"}
            <span className={styles.lime}>$</span> wherewasi{"\n"}
            <span className={styles.dim}>… reading recent work</span>{"\n"}
            <span className={styles.lime}>→</span> rebuilding your context{"\n"}
            <span className={styles.lime}>→</span> finding where you stopped{"\n"}
            <span className={styles.lime}>✓</span> ready. pick up right there.{"\n"}
            <span className={styles.dim}># illustration only</span>
          </div>

          {/* Spinning round "View on GitHub" badge */}
          <span className={styles.badge} aria-hidden="true">
            <svg viewBox="0 0 100 100">
              <defs><path id="circle" d="M50 50 m-37 0 a37 37 0 1 1 74 0 a37 37 0 1 1 -74 0" /></defs>
              <text><textPath href="#circle">VIEW ON GITHUB • VIEW ON GITHUB • </textPath></text>
            </svg>
            <Icon name="arrowUpRight" />
          </span>
        </a>

        {/* List of all projects */}
        <div className={styles.list}>
          <div className={styles.listHead} aria-hidden="true">
            <span>#</span><span>Project</span><span>Type</span><span>Status</span>
          </div>
          {projects.map((p, i) => (
            <a key={p.name} className={styles.row} href={p.url} target="_blank" rel="noopener" data-reveal="" style={{ "--d": `${i * 0.08}s` }}>
              <span className={styles.n}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.name}>
                {p.name}
                <small>{p.text}</small>
              </span>
              <span className={styles.type}>{p.type}</span>
              <span className={`${styles.status} ${p.status === "In progress" ? styles.wip : ""}`}>{p.status}</span>
              <span className={styles.go}><Icon name="arrowUpRight" /></span>
            </a>
          ))}
          <a className={`${styles.row} ${styles.more}`} href={github.url} target="_blank" rel="noopener">
            <span className={styles.n}><Icon name="github" /></span>
            <span className={styles.name}>See everything on GitHub</span>
            <span className={styles.type}>@{github.handle}</span>
            <span className={styles.type} aria-hidden="true" />
            <span className={styles.go}><Icon name="arrowUpRight" /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
