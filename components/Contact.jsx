// "Let's make it happen": a ring of tiles turning slowly at the top,
// then the big title, the email box and social links.
import { person, socials } from "@/data/site";
import CopyEmail from "./CopyEmail";
import Icon from "./Icons";
import styles from "./Contact.module.css";

const icons = ["bot", "bolt", "screen", "code", "spark", "github", "chat", "mail"];
const tiles = Array.from({ length: 20 }, (_, i) => icons[i % icons.length]);

export default function Contact() {
  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className={styles.glow} aria-hidden="true" />

      {/* The turning ring. Only the top half shows. */}
      <div className={styles.arc} aria-hidden="true">
        <div className={styles.ring}>
          {tiles.map((t, i) => (
            <span key={i} className={styles[`t${i % 3}`]} style={{ "--a": `${(360 / tiles.length) * i}deg` }}>
              <Icon name={t} />
            </span>
          ))}
        </div>
      </div>

      <div className={`wrap ${styles.inner}`}>
        <span className="label" data-reveal="">Say hello</span>
        <h2 className={styles.big} data-reveal="" style={{ "--d": "0.1s" }}>
          Let&apos;s make it <em>happen.</em>
        </h2>
        <p className={styles.sub} data-reveal="" style={{ "--d": "0.2s" }}>
          Got a task that should run itself? Tell me about it. Whether it&apos;s an AI agent,
          an automation script or a website, I&apos;d love to hear what you&apos;re building.
        </p>
        <div data-reveal="" style={{ "--d": "0.3s" }}>
          <CopyEmail email={person.email} />
        </div>
        <div className={styles.socials} data-reveal="" style={{ "--d": "0.4s" }}>
          {socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener">
              <Icon name={s.icon} /> {s.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
