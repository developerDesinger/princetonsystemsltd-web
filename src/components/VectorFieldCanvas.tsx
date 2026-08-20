import React, { useEffect, useRef } from 'react';

export const VectorFieldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const glyphsByAngle = [
      '-', '=', '=', '/', '/', '/', '|', '|', '|', '\\', '\\', '\\', '-', '=', '=',
      '+', '+', '1', '0', '~', ':', '='
    ];

    let time = 0;

    const render = () => {
      time += 0.008;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Draw Vibrant Rainbow Mesh Gradient Background (Matching user image)
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#ffc506');      // Top-left Yellow
      bgGrad.addColorStop(0.2, '#10b981');   // Green
      bgGrad.addColorStop(0.45, '#3b82f6');   // Blue
      bgGrad.addColorStop(0.75, '#a855f7');  // Purple
      bgGrad.addColorStop(1, '#ffc506');     // Yellow accent

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // ASCII Vector Field Overlay
      const cellSize = 16;
      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);

      ctx.font = '11px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * cellSize + cellSize / 2;
          const y = r * cellSize + cellSize / 2;

          const dx = x - mouseX;
          const dy = y - mouseY;
          const distSq = dx * dx + dy * dy;
          const mouseInfluence = Math.exp(-distSq / (200 * 200)) * 2.5;

          const angle =
            Math.sin(c * 0.12 + time * 1.5) * Math.cos(r * 0.12 + time) * 2 +
            Math.atan2(dy, dx) * mouseInfluence +
            (c * 0.05 + r * 0.05);

          const normAngle = ((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
          let glyphIndex = Math.floor((normAngle / (Math.PI * 2)) * 14);

          const charSeed = Math.sin(c * 33 + r * 77) * 1000;
          let glyph = glyphsByAngle[glyphIndex] || '|';

          if (Math.abs(charSeed % 11) < 1) {
            glyph = (c + r) % 2 === 0 ? '1' : '0';
          } else if (Math.abs(charSeed % 17) < 1) {
            glyph = '+';
          }

          const alpha = Math.min(0.85, Math.max(0.3, 0.45 + Math.sin(time * 2 + c + r) * 0.25));
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(2)})`;
          ctx.fillText(glyph, x, y);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
