"use client";
// The menu at the top: logo on the left, a white "pill" with links in the middle,
// and a "Let's talk" button on the right. The link for the part you're looking at turns green.
import { useEffect, useState } from "react";
import { navLinks, person } from "@/data/site";
import Icon from "./Icons";
import ThemeToggle from "./ThemeToggle";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let current = "#home";
      navLinks.forEach(({ href }) => {
        const section = document.querySelector(href);
        if (section && section.getBoundingClientRect().top < window.innerHeight * 0.4) current = href;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`wrap ${styles.row}`}>
        <a href="#home" className={styles.brand} aria-label={`${person.name}, back to top`}>
          <span className={styles.logo}><img src="/images/logo-white.png" alt="" /></span>
          <span className={styles.brandName}>{person.name}</span>
        </a>

        <div className={`${styles.links} ${open ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? styles.active : ""}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className={styles.mobileTalk} onClick={() => setOpen(false)}>Let&apos;s talk</a>
        </div>

        <div className={styles.right}>
          <ThemeToggle />
          <a href="#contact" className={styles.talk}>
            <Icon name="chat" /> Let&apos;s talk
          </a>

          <button
            className={styles.menuBtn}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}
