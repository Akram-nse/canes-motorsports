"use client"

import type React from "react"

import { useRef, useEffect, useState, memo, useMemo } from "react"
import { cn } from "@/lib/utils"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "zoom-in"
  delay?: number
  threshold?: number
  duration?: number
}

function ScrollAnimation({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  duration = 0.6,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: "100px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  const animationClasses = useMemo(() => {
    const baseClasses = "transition-all ease-out"
    const durationClass = `duration-${Math.round(duration * 1000)}`
    const delayClass = delay > 0 ? `delay-${delay * 1000}` : ""

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return `${baseClasses} opacity-0 translate-y-8`
        case "fade-in":
          return `${baseClasses} opacity-0`
        case "slide-in-left":
          return `${baseClasses} opacity-0 -translate-x-8`
        case "slide-in-right":
          return `${baseClasses} opacity-0 translate-x-8`
        case "zoom-in":
          return `${baseClasses} opacity-0 scale-95`
        default:
          return `${baseClasses} opacity-0`
      }
    }

    return `${baseClasses} ${durationClass} ${delayClass} opacity-100 translate-y-0 translate-x-0 scale-100`
  }, [isVisible, animation, duration, delay])

  return (
    <div ref={ref} className={cn(animationClasses, className)}>
      {children}
    </div>
  )
}

export default memo(ScrollAnimation)
