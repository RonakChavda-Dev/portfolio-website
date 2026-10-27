// "What clients say": one card per client, with their star rating, their words,
// and who they are at the bottom.
import { testimonials } from "@/data/site";
import Fancy from "./Fancy";
import Icon from "./Icons";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className="section" id="reviews">
      <div className="wrap">
        <div className={styles.head}>
          <div>
            <span className="label" data-reveal="">Kind words</span>
            <h2 className="h2" data-reveal="" style={{ "--d": "0.1s" }}>
              What clients <em>say</em>
            </h2>
          </div>
          <p className="sub" data-reveal="" style={{ "--d": "0.2s" }}>
            A couple of people I&apos;ve worked for.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <figure key={t.name} className={styles.card} data-reveal="" style={{ "--d": `${0.1 + i * 0.12}s` }}>
              <div className={styles.top}>
                <span className={styles.rating} role="img" aria-label={`Rated ${t.stars} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, s) => (
                    <Icon key={s} name="star" className={s < t.stars ? "" : styles.off} />
                  ))}
                  <b>{t.stars.toFixed(1)}</b>
                </span>
                <span className={styles.mark}><Icon name="quote" /></span>
              </div>

              <blockquote className={styles.quote}>
                <p><Fancy text={t.quote} /></p>
              </blockquote>

              <figcaption className={styles.who}>
                <span className={styles.avatar} aria-hidden="true">{t.name.charAt(0)}</span>
                <span className={styles.name}>
                  <b>{t.name}</b>
                  <small>{t.role}</small>
                  {t.note && <small className={styles.note}>{t.note}</small>}
                </span>
                <span className={styles.project}>{t.project}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
