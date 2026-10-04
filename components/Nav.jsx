"use client";
// The menu bar at the top. It gets a dark glass look once you scroll,
// and the link for the section you're looking at turns green.
import { useEffect, useState } from "react";
import { navLinks, person } from "@/data/site";
import Icon from "./Icons";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "";
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
        <a href="#home" className={styles.brand}>
          <img src="/images/logo-white.png" alt="Ronak Chavda logo" />
          {person.name}
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
        </div>

        <a href="#contact" className={`btn btn-solid magnetic ${styles.hire}`}>Hire me</a>

        <button
          className={styles.menuBtn}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} size={20} />
        </button>
      </div>
    </nav>
  );
}
