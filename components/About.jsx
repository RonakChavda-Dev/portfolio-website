// "Who am I": a black-and-white photo card on the left,
// and a short story and the tools list on the right.
import { about, person, stack } from "@/data/site";
import Fancy from "./Fancy";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <span className="label" data-reveal="">Who am I</span>
        <h2 className={`h2 ${styles.title}`} data-reveal="" style={{ "--d": "0.1s" }}>
          <Fancy text={about.title} />
        </h2>

        <div className={styles.grid}>
          <aside className={styles.photoCard} data-reveal="left" style={{ "--d": "0.15s" }}>
            <div className={styles.photo}>
              <img src="/images/ronak-hero.jpg" alt={`${person.name}, black and white photo`} loading="lazy" width="900" height="1599" />
            </div>
            <div className={styles.who}>
              <div>
                <b>{person.name}</b>
                <small>Developer · {person.location}</small>
              </div>
            </div>
          </aside>

          <div className={styles.right}>
            <div className={styles.story} data-reveal="" style={{ "--d": "0.2s" }}>
              {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <div className={styles.stack} data-reveal="">
              {stack.map((g) => (
                <div key={g.group} className={styles.group}>
                  <small>{g.group}</small>
                  <div>{g.items.map((it) => <span key={it}>{it}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
