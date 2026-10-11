"use client";
// "What I do": a list where one row is open at a time (click a row to open it).
// The open row shows the details and a small moving picture on the right.
import { useState } from "react";
import { services } from "@/data/site";
import Icon from "./Icons";
import ServiceVisual from "./ServiceVisual";
import styles from "./Services.module.css";

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className={styles.head}>
          <div>
            <span className="label" data-reveal="">What I do</span>
            <h2 className="h2" data-reveal="" style={{ "--d": "0.1s" }}>
              The ways I can <em>help</em> you
            </h2>
          </div>
          <div className={styles.headSide} data-reveal="" style={{ "--d": "0.2s" }}>
            <p>Three kinds of work, one goal: less time spent on tasks a computer could do for you.</p>
            <a href="#contact" className="btn btn-line">
              Say hello <span className="arrow"><Icon name="arrowRight" /></span>
            </a>
          </div>
        </div>

        <div className={styles.list}>
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <article
                key={s.title}
                className={`${styles.item} ${isOpen ? styles.open : ""}`}
                data-reveal=""
                style={{ "--d": `${0.1 + i * 0.08}s` }}
              >
                <button
                  className={styles.row}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <span className={styles.icon}><Icon name={s.icon} /></span>
                  <span className={styles.toggle}><Icon name="plus" /></span>
                </button>

                <div className={styles.body}>
                  <div className={styles.inner}>
                    <div className={styles.details}>
                      <h4>{s.subtitle}</h4>
                      <p>{s.text}</p>
                      <ul>{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                    </div>
                    <ServiceVisual type={s.visual} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
