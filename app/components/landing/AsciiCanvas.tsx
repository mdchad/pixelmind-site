'use client'

import React, { useEffect, useRef } from 'react';

const AsciiCanvas = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let A = 0, B = 0;
    let animationFrameId: number;

    const renderAscii = () => {
      const chars = ".,-~:;=!*#$@";
      let b: string[] = [];
      let z: number[] = [];
      const width = 80;
      const height = 40;

      for(let k = 0; k < width*height; k++) {
        b[k] = " ";
        z[k] = 0;
      }

      for(let j=0; j < 6.28; j += 0.07) {
        for(let i=0; i < 6.28; i += 0.02) {
          let c = Math.sin(i);
          let d = Math.cos(j);
          let e = Math.sin(A);
          let f = Math.sin(j);
          let g = Math.cos(A);
          let h = d + 2;
          let D = 1 / (c * h * e + f * g + 5);
          let l = Math.cos(i);
          let m = Math.cos(B);
          let n = Math.sin(B);
          let t = c * h * g - f * e;

          let x = 0 | (40 + 30 * D * (l * h * m - t * n));
          let y = 0 | (20 + 15 * D * (l * h * n + t * m));
          let o = x + width * y;

          let N = 0 | (8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));

          if(y < height && y >= 0 && x >= 0 && x < width && D > z[o]) {
            z[o] = D;
            b[o] = chars[N > 0 ? N : 0];
          }
        }
      }

      let output = "";
      for(let i=0; i<width*height; i++) {
        output += (i % width === 0) ? "\n" : b[i];
      }

      if (canvasRef.current) {
        canvasRef.current.innerText = output;
      }

      A += 0.04;
      B += 0.02;

      animationFrameId = requestAnimationFrame(renderAscii);
    };

    renderAscii();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] opacity-80 font-mono text-[10px] leading-[10px] whitespace-pre text-center text-white select-none"
    />
  );
};

export default AsciiCanvas;
