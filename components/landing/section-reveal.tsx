"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

export const easeOut = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
}

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
}

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
}

interface SectionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  variants?: Variants
  once?: boolean
}

export function SectionReveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  variants = fadeUp,
  once = true,
}: SectionRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  stagger?: number
  delayChildren?: number
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.12,
  delayChildren = 0.1,
}: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  variants = fadeUp,
}: {
  children: ReactNode
  className?: string
  variants?: Variants
}) {
  return (
    <motion.div
      variants={variants}
      transition={{ duration: 0.65, ease: easeOut }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
