// 🎃 Halloween: three small bats fly across the top card once, right after the opening screen.
// Remove this file (and <Bats /> in Hero.jsx) after Halloween.
import Icon from "./Icons";
import styles from "./Bats.module.css";

// top = how far down the card each bat flies, d = when it starts, s = size, t = how long it takes
const bats = [
  { top: "14%", d: "1.8s", s: 52, t: "5.5s" },
  { top: "30%", d: "2.4s", s: 34, t: "6.5s" },
  { top: "8%", d: "3.1s", s: 40, t: "6s" },
];

export default function Bats() {
  return (
    <div className={styles.bats} aria-hidden="true">
      {bats.map((b, i) => (
        <span key={i} className={styles.bat} style={{ top: b.top, "--d": b.d, "--t": b.t, width: b.s, height: b.s }}>
          <Icon name="bat" />
        </span>
      ))}
    </div>
  );
}
