import { type ReactNode, useEffect, useMemo, useRef, useState } from 'react'

type ScrollRevealVariant = 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'zoomIn' | 'blurUp' | 'tiltUp'

type Props = {
  children: ReactNode
  className?: string
  threshold?: number
  enterThreshold?: number
  exitThreshold?: number
  rootMargin?: string
  delayMs?: number
  durationMs?: number
  easing?: string
  variant?: ScrollRevealVariant
  xOffsetPx?: number
  yOffsetPx?: number
  scaleFrom?: number
  rotateDeg?: number
  blurPx?: number
  triggerOnce?: boolean
  resetDelayMs?: number
}

const ScrollReveal = ({
  children,
  className,
  threshold = 0.2,
  enterThreshold = threshold,
  exitThreshold = Math.min(0.05, threshold / 2),
  rootMargin = '0px 0px -15% 0px',
  delayMs = 0,
  durationMs = 750,
  easing = 'cubic-bezier(0.22, 1, 0.36, 1)',
  variant = 'fadeUp',
  xOffsetPx = 28,
  yOffsetPx = 24,
  scaleFrom = 0.96,
  rotateDeg = 3,
  blurPx = 10,
  triggerOnce = false,
  resetDelayMs = 0,
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  const resetTimerRef = useRef<number | null>(null)

  const [hiddenTransform, visibleTransform, hiddenFilter, visibleFilter] = useMemo(() => {
    const translate = {
      x: 0,
      y: 0,
    }

    let scale = 1
    let rotate = 0
    let blur = 0

    switch (variant) {
      case 'fadeUp':
        translate.y = yOffsetPx
        break
      case 'fadeDown':
        translate.y = -yOffsetPx
        break
      case 'fadeLeft':
        translate.x = -xOffsetPx
        break
      case 'fadeRight':
        translate.x = xOffsetPx
        break
      case 'zoomIn':
        translate.y = Math.round(yOffsetPx * 0.5)
        scale = scaleFrom
        break
      case 'blurUp':
        translate.y = yOffsetPx
        blur = blurPx
        break
      case 'tiltUp':
        translate.y = yOffsetPx
        rotate = -rotateDeg
        scale = scaleFrom
        break
      default:
        translate.y = yOffsetPx
        break
    }

    const hidden = `translate3d(${translate.x}px,${translate.y}px,0) scale(${scale}) rotate(${rotate}deg)`
    const shown = 'translate3d(0,0,0) scale(1) rotate(0deg)'
    const hiddenF = blur > 0 ? `blur(${blur}px)` : 'blur(0px)'
    const shownF = 'blur(0px)'
    return [hidden, shown, hiddenF, shownF]
  }, [blurPx, rotateDeg, scaleFrom, variant, xOffsetPx, yOffsetPx])

  useEffect(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    if (reduceMotion) {
      setVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    if (resetTimerRef.current != null) {
      window.clearTimeout(resetTimerRef.current)
      resetTimerRef.current = null
    }

    const thresholds = Array.from(new Set([0, exitThreshold, enterThreshold])).sort((a, b) => a - b)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const ratio = entry.intersectionRatio

          if (ratio >= enterThreshold && entry.isIntersecting) {
            if (resetTimerRef.current != null) {
              window.clearTimeout(resetTimerRef.current)
              resetTimerRef.current = null
            }
            setVisible(true)
            if (triggerOnce) observer.unobserve(entry.target)
            continue
          }

          if (!triggerOnce && ratio <= exitThreshold) {
            if (resetDelayMs > 0) {
              if (resetTimerRef.current != null) window.clearTimeout(resetTimerRef.current)
              resetTimerRef.current = window.setTimeout(() => {
                setVisible(false)
                resetTimerRef.current = null
              }, resetDelayMs)
            } else {
              setVisible(false)
            }
          }
        }
      },
      {
        threshold: thresholds,
        root: null,
        rootMargin,
      },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (resetTimerRef.current != null) {
        window.clearTimeout(resetTimerRef.current)
        resetTimerRef.current = null
      }
    }
  }, [enterThreshold, exitThreshold, resetDelayMs, rootMargin, triggerOnce])

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform,filter] ${className ?? ''}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? visibleTransform : hiddenTransform,
        filter: visible ? visibleFilter : hiddenFilter,
        transitionDelay: `${delayMs}ms`,
        transitionDuration: `${durationMs}ms`,
        transitionTimingFunction: easing,
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
