"use client";
// The round button that switches between light mode and dark mode.
// It remembers the choice, so the site opens the same way next time.
import { useEffect, useState } from "react";
import Icon from "./Icons";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Read the mode that was picked before the page showed (see app/layout.js)
  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "light");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
    setTheme(next);
  };

  const dark = theme === "dark";
  return (
    <button
      className={`${styles.btn} ${dark ? styles.dark : ""}`}
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
    >
      <span className={styles.sun}><Icon name="sun" /></span>
      <span className={styles.moon}><Icon name="moon" /></span>
    </button>
  );
}
