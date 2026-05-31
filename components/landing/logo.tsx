"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const sizeMap = {
  sm: { image: 32, text: "text-lg" },
  md: { image: 40, text: "text-xl" },
  lg: { image: 56, text: "text-2xl" },
} as const

type LogoSize = keyof typeof sizeMap

interface LogoProps {
  size?: LogoSize
  showText?: boolean
}

export function Logo({ size = "md", showText = true }: LogoProps) {
  const { image, text } = sizeMap[size]

  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 3 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 400, damping: 12 }}
        className={cn(
          "relative rounded-xl overflow-hidden",
          "ring-2 ring-primary/20 group-hover:ring-primary/60",
          "shadow-md shadow-primary/10 group-hover:shadow-lg group-hover:shadow-primary/30",
          "transition-shadow duration-300"
        )}
      >
        <Image
          src="/logo.png"
          alt="UniHungry"
          width={image}
          height={image}
          className="object-cover"
          priority
        />
        <motion.div
          className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"
          aria-hidden
        />
      </motion.div>
      {showText && (
        <motion.span
          className={cn("font-bold text-primary", text)}
          whileHover={{ x: 2, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          UniHungry
        </motion.span>
      )}
    </Link>
  )
}
