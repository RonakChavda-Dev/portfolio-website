// The "Let's work together" box with big social media buttons.
import { person, socials } from "@/data/site";
import CopyEmail from "./CopyEmail";
import Icon from "./Icons";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className={styles.box} data-reveal="zoom">
          <img className={styles.logoBg} src="/images/logo-white.png" alt="" aria-hidden="true" />
          <span className="eyebrow">Let&apos;s work together</span>
          <h2 className={styles.big}>Got a task that should <span>run itself?</span></h2>
          <p className="sub">
            Tell me about it. Whether it&apos;s an AI agent, an automation script, or a website,
            I&apos;d love to hear what you&apos;re building.
          </p>
          <CopyEmail email={person.email} />
          <div className={styles.socials}>
            {socials.map((s) => (
              <a key={s.name} className={styles.social} href={s.url} target="_blank" rel="noopener">
                <Icon name={s.icon} />
                <div>
                  <b>{s.name}</b>
                  <small>{s.handle}</small>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
