"use client";
// The email part of the Contact box.
// - Clicking the email address copies the address and shows a small "Email copied" message.
// - The green "Send email" button next to it opens the visitor's email app, ready to write to Ronak.
import { useRef, useState } from "react";
import Icon from "./Icons";
import styles from "./CopyEmail.module.css";

export default function CopyEmail({ email }) {
  const [message, setMessage] = useState("");
  const timer = useRef(null);
  const textRef = useRef(null);

  const showMessage = (text) => {
    setMessage(text);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage(""), 2000);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      showMessage("Email copied!");
    } catch {
      // If copying is blocked, select the address so the visitor can copy it by hand
      const range = document.createRange();
      range.selectNodeContents(textRef.current);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      showMessage("Press Ctrl + C to copy");
    }
  };

  return (
    <div className={styles.row}>
      <button type="button" className={styles.email} onClick={copy} title="Click to copy">
        <span className={styles.icon}><Icon name={message ? "check" : "copy"} /></span>
        <span className={styles.text}>
          <small>Click to copy</small>
          <b ref={textRef}>{email}</b>
        </span>
        <span className={`${styles.toast} ${message ? styles.show : ""}`} role="status" aria-live="polite">
          {message}
        </span>
      </button>

      <a href={`mailto:${email}`} className={styles.send}>
        <Icon name="mail" />
        Send email
      </a>
    </div>
  );
}
