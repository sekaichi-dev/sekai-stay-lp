"use client";

import { useEffect, useRef } from "react";

export default function AnimatedEight({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sizeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const sizer = sizeRef.current;
    if (!canvas || !sizer) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = window.devicePixelRatio || 1;

    // Sizing
    const rect = sizer.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";

    const fontSize = parseFloat(getComputedStyle(sizer).fontSize);

    // 3 blobs with different speeds/phases for organic movement
    const blobs = [
      { speed: 0.0008, phaseX: 0, phaseY: 0.5, radius: 0.7 },
      { speed: 0.0012, phaseX: 2.1, phaseY: 3.7, radius: 0.55 },
      { speed: 0.0006, phaseX: 4.2, phaseY: 1.3, radius: 0.65 },
    ];

    const draw = (timestamp: number) => {
      // Reset transform every frame
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      ctx.save();

      // Draw gradient blobs (source-over)
      ctx.globalCompositeOperation = "source-over";
      for (const blob of blobs) {
        const t = timestamp * blob.speed;
        const bx = w * (0.5 + 0.35 * Math.sin(t + blob.phaseX));
        const by = h * (0.5 + 0.35 * Math.cos(t * 0.8 + blob.phaseY));
        const br = Math.max(w, h) * blob.radius;

        const grad = ctx.createRadialGradient(bx, by, 0, bx, by, br);
        grad.addColorStop(0, "rgba(84, 190, 195, 1)");
        grad.addColorStop(0.3, "rgba(37, 157, 163, 0.8)");
        grad.addColorStop(0.7, "rgba(84, 190, 195, 0.2)");
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      // White base behind the blobs
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, w, h);

      // Mask to text shape
      ctx.globalCompositeOperation = "destination-in";
      ctx.fillStyle = "#000";
      ctx.font = `bold ${fontSize}px "Noto Sans JP", "Helvetica Neue", Arial, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("8", w / 2, h / 2);

      ctx.restore();
      ctx.globalCompositeOperation = "source-over";

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    const onResize = () => {
      const r = sizer.getBoundingClientRect();
      canvas.width = r.width * dpr;
      canvas.height = r.height * dpr;
      canvas.style.width = r.width + "px";
      canvas.style.height = r.height + "px";
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <span className={`relative inline-block ${className || ""}`}>
      <span
        ref={sizeRef}
        className="invisible font-bold tracking-tighter select-none"
        style={{ lineHeight: 0.75, padding: "0", display: "inline-block" }}
      >
        8
      </span>
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ pointerEvents: "none" }}
      />
    </span>
  );
}
