"use client";
// Questions & answers. Click a question to open its answer.
import { useState } from "react";
import { faq } from "@/data/site";
import Icon from "./Icons";
import styles from "./Faq.module.css";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="faq">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.card} data-reveal="left">
          <span className={styles.small}>Questions & answers</span>
          <h2>Got a few <em>questions?</em></h2>
          <a href="#contact" className="btn btn-dark">
            Let&apos;s talk <span className="arrow"><Icon name="arrowRight" /></span>
          </a>
        </div>

        <div className={styles.list}>
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={`${styles.item} ${isOpen ? styles.open : ""}`} data-reveal="" style={{ "--d": `${i * 0.07}s` }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                  {item.q}
                  <span className={styles.toggle}><Icon name="plus" /></span>
                </button>
                <div className={styles.body}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
