// The first thing people see: name, photo, short intro and buttons.
import Image from "next/image";
import { person, socials } from "@/data/site";
import Icon from "./Icons";
import NetworkCanvas from "./NetworkCanvas";
import TypedText from "./TypedText";
import styles from "./Hero.module.css";

export default function Hero() {
  const mini = socials.filter((s) => s.icon !== "github");

  return (
    <header className={styles.hero} id="home">
      <NetworkCanvas />
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <div className={styles.status}><i />{person.status} · {person.location}</div>
          <p className={styles.hello}>&gt; hello, world. I&apos;m</p>
          <h1 className={styles.name}>
            {person.firstName}
            {/* Outlined last name that fills with green, again and again */}
            <span className={styles.last} data-text={person.lastName}>{person.lastName}</span>
          </h1>
          <p className={styles.role}>
            I build <TypedText words={person.roles} />
          </p>
          <p className={styles.lede}>{person.intro}</p>

          <div className={styles.cta}>
            <a href="#projects" className="btn btn-solid magnetic">
              See my work <Icon name="arrowRight" />
            </a>
            <a href={socials[3].url} target="_blank" rel="noopener" className="btn btn-ghost magnetic">
              <Icon name="github" /> GitHub
            </a>
          </div>

          <div className={styles.mini}>
            {mini.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener" aria-label={s.name}>
                <Icon name={s.icon} />
              </a>
            ))}
            <a href={`mailto:${person.email}`} aria-label="Email">
              <Icon name="mail" />
            </a>
          </div>

          <div className={styles.hint}><span />SCROLL TO EXPLORE</div>
        </div>

        {/* Photo: a tall rectangle with a light running around its edge,
            and a dashed frame with moving dashes around it */}
        <div className={styles.photoZone} data-tilt="">
          <div className={styles.orbit} aria-hidden="true">
            {/* dashed outline whose dashes keep moving around the photo */}
            <svg><rect /></svg>
            <b /><b />
          </div>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.border} aria-hidden="true" />
          <figure className={styles.photo} data-tilt-target="">
            <Image
              src="/images/ronak-portrait.jpg"
              alt="Portrait of Ronak Chavda"
              width={800}
              height={1000}
              priority
              sizes="(max-width: 860px) 260px, 380px"
            />
          </figure>
          <div className={`${styles.chip} ${styles.c1}`}><b>✓</b> agent.run()</div>
          <div className={`${styles.chip} ${styles.c2}`}>&lt;/&gt; Python · JS</div>
          <div className={`${styles.chip} ${styles.c3}`}>⚡ automating…</div>
        </div>
      </div>
    </header>
  );
}
