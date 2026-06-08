import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const mouse = {
      x: width / 2,
      y: height / 2,
    };

    const POINTS = 80;

    const nodes = Array.from({ length: POINTS }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 3 + 1,
    }));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
    };

    const mouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", mouseMove);

    function drawGlow(x, y, size) {
      const gradient = ctx.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        size * 6
      );

      gradient.addColorStop(0, "rgba(0,255,255,0.9)");
      gradient.addColorStop(1, "rgba(0,255,255,0)");

      ctx.fillStyle = gradient;

      ctx.beginPath();
      ctx.arc(x, y, size * 6, 0, Math.PI * 2);
      ctx.fill();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Dark blue background
      const bg = ctx.createLinearGradient(
        0,
        0,
        width,
        height
      );

      bg.addColorStop(0, "#010B1C");
      bg.addColorStop(0.5, "#042B56");
      bg.addColorStop(1, "#010B1C");

      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // Move nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width)
          node.vx *= -1;

        if (node.y < 0 || node.y > height)
          node.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < 180) {
            ctx.strokeStyle = `rgba(0,180,255,${
              1 - distance / 180
            })`;

            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        if (distance < 150) {
          node.x -= dx * 0.0005;
          node.y -= dy * 0.0005;
        }

        drawGlow(node.x, node.y, node.radius);

        ctx.beginPath();
        ctx.arc(
          node.x,
          node.y,
          node.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = "#00F0FF";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        mouseMove
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        fixed
        inset-0
        z-0
        w-full
        h-full
        pointer-events-none
      "
    />
  );
}