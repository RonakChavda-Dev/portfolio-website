"use client";
// The short opening screen: the logo appears, then the dark screen slides up and away.
import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.loader} ${done ? styles.done : ""}`} aria-hidden="true">
      <img src="/images/logo-white.png" alt="" className={styles.logo} />
    </div>
  );
}
