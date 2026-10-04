"use client";
// The short loading screen with the pulsing logo.
import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.loader} ${done ? styles.done : ""}`} aria-hidden="true">
      <div className={styles.inner}>
        <img src="/images/logo-green.png" alt="" className={styles.logo} />
        <div className={styles.bar}><i /></div>
        <small>BOOTING AGENT…</small>
      </div>
    </div>
  );
}
