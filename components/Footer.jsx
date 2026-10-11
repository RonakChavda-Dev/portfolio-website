// The bottom of the page: links, a small line of text, and Ronak's name written very big.
import { navLinks, person, socials } from "@/data/site";
import Icon from "./Icons";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={`band ${styles.footer}`}>
      <div className={`wrap ${styles.top}`}>
        <nav className={styles.links}>
          {navLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          <a href="#contact">Contact</a>
        </nav>
        <div className={styles.socials}>
          {socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener" aria-label={s.name}><Icon name={s.icon} /></a>
          ))}
        </div>
        <span className={styles.copy}>© {year} {person.name}. Built with hands &amp; eyes.</span>
      </div>
      <div className={styles.giant} aria-hidden="true">
        {person.name}<span className={styles.dot} />
      </div>
    </footer>
  );
}
