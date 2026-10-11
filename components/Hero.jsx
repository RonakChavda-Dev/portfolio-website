// The first thing people see: a big dark card with the name and buttons on the left,
// and the photo on the right.
import { hero, person } from "@/data/site";
import Fancy from "./Fancy";
import Icon from "./Icons";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header className={styles.hero} id="home">
      <div className="wrap">
        <div className={styles.card}>
          <div className={styles.glow} aria-hidden="true" />

          <div className={styles.copy}>
            <p className={styles.hello}>{hero.hello}</p>
            <h1 className={styles.title}><Fancy text={hero.title} /></h1>
            <div className={styles.cta}>
              <a href="#contact" className="btn btn-lime magnetic">
                Say hello <span className="arrow"><Icon name="arrowRight" /></span>
              </a>
              <a href="#work" className={styles.ghost}>See my work</a>
            </div>
          </div>

          {/* Photo on the right. Its edges fade softly into the dark card. The mouse makes it tilt a little. */}
          <div className={styles.visual} data-tilt="">
            <figure className={styles.photo} data-tilt-target="">
              <img src="/images/ronak-hero.jpg" alt={`Portrait of ${person.name}`} width="900" height="1599" />
            </figure>

            <span className={`${styles.float} ${styles.f1}`}>{hero.floatTags[0]}</span>
            <span className={`${styles.float} ${styles.f2}`}>{hero.floatTags[1]}</span>

            {/* Small spinning circle with words */}
            <span className={styles.badge} aria-hidden="true">
              <svg viewBox="0 0 100 100">
                <defs><path id="heroCircle" d="M50 50 m-36 0 a36 36 0 1 1 72 0 a36 36 0 1 1 -72 0" /></defs>
                <text><textPath href="#heroCircle">{hero.badge}</textPath></text>
              </svg>
              <Icon name="spark" />
            </span>

          </div>

          <div className={styles.bottom}>
            <p className={styles.small}>{hero.small}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
