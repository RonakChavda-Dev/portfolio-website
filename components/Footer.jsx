// The bottom line of the page.
import { person } from "@/data/site";
import Icon from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ padding: "40px 0 50px", borderTop: "1px solid var(--line)", marginTop: "clamp(40px, 6vw, 80px)" }}>
      <div
        className="wrap"
        style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: 16, flexWrap: "wrap", color: "var(--dim)", font: "400 13.5px var(--f-mono)",
        }}
      >
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--fg)", font: "700 17px var(--f-display)" }}>
          <img src="/images/logo-white.png" alt="" width={30} />
          {person.name}
        </a>
        <span>© {year} {person.name} · Built with code &amp; coffee</span>
        <a href="#home" className="btn btn-ghost" aria-label="Back to top" style={{ padding: 12 }}>
          <Icon name="arrowUp" />
        </a>
      </div>
    </footer>
  );
}
