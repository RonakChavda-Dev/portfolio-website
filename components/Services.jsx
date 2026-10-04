// "What I do": three cards with a soft green light that follows the mouse.
import { services } from "@/data/site";
import Icon from "./Icons";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <span className="eyebrow" data-reveal="">What I do</span>
        <h2 className="h2" data-reveal="" style={{ "--d": "0.1s" }}>
          Three ways I can <em>help.</em>
        </h2>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={s.title} data-reveal="" style={{ "--d": `${0.1 + i * 0.1}s` }}>
            <article className={styles.card} data-spotlight="">
              <div className={styles.icon}><Icon name={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>
                {s.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
