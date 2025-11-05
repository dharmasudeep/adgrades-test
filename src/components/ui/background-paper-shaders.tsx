"use client"

import { useEffect, useMemo, useRef } from "react"
import type { CSSProperties } from "react"

type ShaderPlaneProps = {
  color1?: string
  color2?: string
  className?: string
  style?: CSSProperties
  parallax?: number
}

function cn(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(" ")
}

export function ShaderPlane({
  color1 = "#ff5722",
  color2 = "#ffffff",
  className,
  style,
  parallax = 12,
}: ShaderPlaneProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const devicePixelRatioRef = useRef(1)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d", { alpha: true })
    if (!context) return

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      devicePixelRatioRef.current = dpr
      const parent = canvas.parentElement
      const width = parent?.clientWidth ?? window.innerWidth
      const height = parent?.clientHeight ?? window.innerHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(1, 0, 0, 1, 0, 0)
      context.scale(dpr, dpr)
    }

    let animationFrame = 0

    const drawFrame = (time: number) => {
      const { width, height } = canvas
      const dpr = devicePixelRatioRef.current
      const logicalWidth = width / dpr
      const logicalHeight = height / dpr

      context.clearRect(0, 0, logicalWidth, logicalHeight)

      const baseGradient = context.createLinearGradient(0, 0, logicalWidth, logicalHeight)
      baseGradient.addColorStop(0, color1)
      baseGradient.addColorStop(1, color2)
      context.fillStyle = baseGradient
      context.fillRect(0, 0, logicalWidth, logicalHeight)

      const t = time * 0.0006
      const offsetX = Math.sin(t) * parallax
      const offsetY = Math.cos(t * 1.4) * (parallax * 0.6)

      context.globalCompositeOperation = "lighter"
      const glow = context.createRadialGradient(
        logicalWidth / 2 + offsetX,
        logicalHeight / 2 + offsetY,
        Math.max(logicalWidth, logicalHeight) * 0.05,
        logicalWidth / 2,
        logicalHeight / 2,
        Math.max(logicalWidth, logicalHeight) * 0.9,
      )
      glow.addColorStop(0, "rgba(255, 255, 255, 0.35)")
      glow.addColorStop(0.45, "rgba(251, 191, 36, 0.2)")
      glow.addColorStop(1, "rgba(2, 6, 23, 0)")
      context.fillStyle = glow
      context.fillRect(0, 0, logicalWidth, logicalHeight)

      context.globalCompositeOperation = "screen"
      const streaks = context.createLinearGradient(0, 0, logicalWidth, 0)
      streaks.addColorStop(0, "rgba(249, 115, 22, 0.12)")
      streaks.addColorStop(0.5, "rgba(251, 191, 36, 0.25)")
      streaks.addColorStop(1, "rgba(249, 115, 22, 0.12)")
      context.save()
      context.translate(logicalWidth / 2, logicalHeight / 2)
      context.rotate(Math.sin(t * 0.8) * 0.15)
      context.fillStyle = streaks
      context.fillRect(-logicalWidth, -logicalHeight, logicalWidth * 2, logicalHeight * 2)
      context.restore()

      context.globalCompositeOperation = "source-over"
      animationFrame = requestAnimationFrame(drawFrame)
    }

    resize()
    animationFrame = requestAnimationFrame(drawFrame)
    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", resize)
    }
  }, [color1, color2, parallax])

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      style={style}
    />
  )
}

type EnergyRingProps = {
  size?: number
  className?: string
  style?: CSSProperties
  glowColor?: string
}

export function EnergyRing({
  size = 360,
  className,
  style,
  glowColor = "rgba(249, 115, 22, 0.45)",
}: EnergyRingProps) {
  const ringRef = useRef<HTMLDivElement | null>(null)

  const baseStyle = useMemo<CSSProperties>(
    () => ({
      width: `${size}px`,
      height: `${size}px`,
      marginLeft: `-${size / 2}px`,
      marginTop: `-${size / 2}px`,
      boxShadow: `0 0 90px ${glowColor}`,
    }),
    [size, glowColor],
  )

  useEffect(() => {
    const element = ringRef.current
    if (!element) return

    let frame = 0
    const animate = (time: number) => {
      const t = time * 0.0012
      const opacity = 0.55 + Math.sin(t * 2.4) * 0.18
      const scale = 1 + Math.sin(t * 1.6) * 0.05
      element.style.setProperty("--ring-opacity", opacity.toString())
      element.style.setProperty("--ring-scale", scale.toString())
      element.style.setProperty("--ring-rotation", `${t * 28}deg`)
      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div
      ref={ringRef}
      className={cn(
        "pointer-events-none absolute left-1/2 top-1/2 overflow-visible rounded-full border border-orange-400/30",
        "before:absolute before:inset-[18%] before:rounded-full before:border before:border-orange-300/50 before:blur-[1px] before:content-['']",
        "after:absolute after:inset-[32%] after:rounded-full after:bg-orange-500/25 after:blur-3xl after:content-['']",
        className,
      )}
      style={{
        ...baseStyle,
        ...style,
        opacity: "var(--ring-opacity, 0.6)",
        transform: "translate(-50%, -50%) scale(var(--ring-scale, 1)) rotate(var(--ring-rotation, 0deg))",
      }}
    />
  )
}
