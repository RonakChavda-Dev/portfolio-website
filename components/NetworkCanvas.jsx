"use client";
// The moving dots-and-lines background behind the top section.
// Dots float around, join with lines when close, and small sparks travel along the lines,
// like an AI "brain" passing messages. Dots move away from the mouse.
import { useEffect, useRef } from "react";

export default function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const LINK = 120;
    let width, height, frameId;
    let nodes = [];
    let sparks = [];
    const mouse = { x: -999, y: -999 };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      width = r.width; height = r.height;
      canvas.width = width * dpr; canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(42, (width * height) / 28000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width, y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        const dx = n.x - mouse.x, dy = n.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 120 && d > 0) { n.x += (dx / d) * 1.2; n.y += (dy / d) * 1.2; }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(47,227,154,${(1 - d / LINK) * 0.14})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
            if (Math.random() < 0.0012 && sparks.length < 12) sparks.push({ a, b, t: 0 });
          }
        }
      }

      ctx.fillStyle = "rgba(120,240,180,.45)";
      for (const n of nodes) { ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 7); ctx.fill(); }

      sparks = sparks.filter((s) => {
        s.t += 0.018;
        if (s.t >= 1) return false;
        const x = s.a.x + (s.b.x - s.a.x) * s.t;
        const y = s.a.y + (s.b.y - s.a.y) * s.t;
        ctx.fillStyle = "#b4f06a"; ctx.shadowColor = "#b4f06a"; ctx.shadowBlur = 10;
        ctx.beginPath(); ctx.arc(x, y, 2.2, 0, 7); ctx.fill(); ctx.shadowBlur = 0;
        return true;
      });

      if (!reduce) frameId = requestAnimationFrame(draw);
    };

    const host = canvas.parentElement;
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = mouse.y = -999; };

    resize(); draw();
    window.addEventListener("resize", resize);
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: -1,
        // fainter on the left so the text there stays easy to read
        maskImage: "linear-gradient(90deg, rgba(0,0,0,.35), #000 65%)",
        WebkitMaskImage: "linear-gradient(90deg, rgba(0,0,0,.35), #000 65%)",
      }}
    />
  );
}
