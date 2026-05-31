"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef } from "react"
import { fadeIn, fadeUp } from "@/components/landing/section-reveal"

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-background to-background" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 lg:px-8 relative z-10"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Projeto Acadêmico</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance mb-6"
          >
            <span className="text-primary">UniHungry</span>
            <br />
            <span className="text-foreground">
              Sistema de Gerenciamento para{" "}
              <span className="text-primary">Food Service</span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
          >
            Plataforma B2B completa para administração de restaurantes e lanchonetes,
            com aplicação web e mobile integradas.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="gap-2 shadow-lg shadow-primary/25">
              <Link href="#video">
                <Play className="w-4 h-4" />
                Assistir Pitch
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#repositorios">Ver Repositórios</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <Link
          href="#sobre"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Rolar para baixo</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}
