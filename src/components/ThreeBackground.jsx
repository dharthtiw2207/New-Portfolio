import { useEffect, useRef } from 'react';
import './ThreeBackground.css';

const ThreeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let w = (canvas.width  = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let rafId;

    /* ── Particles ── */
    const particles = Array.from({ length: 100 }, () => ({
      x:       Math.random() * w,
      y:       Math.random() * h,
      r:       Math.random() * 1.6 + 0.4,
      vx:      (Math.random() - 0.5) * 0.22,
      vy:      (Math.random() - 0.5) * 0.22,
      opacity: Math.random() * 0.55 + 0.08,
    }));

    /* ── Floating shapes ── */
    const shapes = Array.from({ length: 7 }, (_, i) => ({
      x:    Math.random() * w,
      y:    Math.random() * h,
      size: 35 + Math.random() * 75,
      rot:  Math.random() * Math.PI * 2,
      vrot: (Math.random() - 0.5) * 0.004,
      vx:   (Math.random() - 0.5) * 0.1,
      vy:   (Math.random() - 0.5) * 0.1,
      type: i % 3, // 0=triangle, 1=square, 2=hexagon
    }));

    const COLORS = ['#4f9eff', '#a259ff', '#00ffc8'];

    /* ── Shape drawers ── */
    const drawTriangle = (cx, cy, size, rot) => {
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const a  = rot + (i * Math.PI * 2) / 3 - Math.PI / 2;
        const px = cx + Math.cos(a) * size;
        const py = cy + Math.sin(a) * size;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const drawSquare = (cx, cy, size, rot) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);
      ctx.beginPath();
      ctx.rect(-size / 2, -size / 2, size, size);
      ctx.restore();
    };

    const drawHex = (cx, cy, size, rot) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a  = rot + (i * Math.PI * 2) / 6;
        const px = cx + Math.cos(a) * size;
        const py = cy + Math.sin(a) * size;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    /* ── Render loop ── */
    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      /* Grid dots */
      ctx.fillStyle = 'rgba(99,179,255,0.035)';
      const gsp = 64;
      for (let gx = 0; gx < w; gx += gsp)
        for (let gy = 0; gy < h; gy += gsp) {
          ctx.beginPath();
          ctx.arc(gx, gy, 1, 0, Math.PI * 2);
          ctx.fill();
        }

      /* Shapes */
      shapes.forEach((s, i) => {
        s.rot += s.vrot;
        s.x   += s.vx;
        s.y   += s.vy;
        if (s.x < -120) s.x = w + 120;
        if (s.x > w + 120) s.x = -120;
        if (s.y < -120) s.y = h + 120;
        if (s.y > h + 120) s.y = -120;

        const col = COLORS[i % 3];
        ctx.strokeStyle = col + '20';
        ctx.lineWidth   = 1;
        ctx.fillStyle   = col + '07';

        if (s.type === 0) drawTriangle(s.x, s.y, s.size, s.rot);
        else if (s.type === 1) drawSquare(s.x, s.y, s.size, s.rot);
        else drawHex(s.x, s.y, s.size, s.rot);

        ctx.fill();
        ctx.stroke();
      });

      /* Particles */
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79,158,255,${p.opacity})`;
        ctx.fill();
      });

      /* Connect nearby particles */
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.strokeStyle = `rgba(79,158,255,${0.065 * (1 - d / 120)})`;
            ctx.lineWidth   = 0.5;
            ctx.stroke();
          }
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    tick();

    const onResize = () => {
      w = canvas.width  = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="three-canvas" />;
};

export default ThreeBackground;
