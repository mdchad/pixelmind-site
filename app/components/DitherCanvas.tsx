'use client'

import { useRef, useEffect } from 'react'

export default function DitherCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth
        canvas.height = canvas.parentElement.offsetHeight
      }
    }

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      const step = 6

      ctx.fillStyle = '#E6E6E6'
      ctx.fillRect(0, 0, w, h)

      ctx.fillStyle = '#1F3AFF'

      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const val1 = Math.sin(x * 0.005 + time) * Math.cos(y * 0.005 - time)
          const val2 = Math.sin((x + y) * 0.003 + time * 0.5)
          const val3 = Math.cos(Math.sqrt(x * x + y * y) * 0.01 - time)

          const intensity = (val1 + val2 + val3 + 1.5) / 3

          if (intensity > 0.1) {
            const size = Math.min(step, intensity * step * 1.2)
            const ox = (step - size) / 2
            const oy = (step - size) / 2
            ctx.fillRect(x + ox, y + oy, size, size)
          }
        }
      }

      time += 0.015
      animationFrameId = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    resize()
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full object-cover"
    />
  )
}
