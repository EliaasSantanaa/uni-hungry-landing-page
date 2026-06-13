"use client"

import Link from "next/link"
import { MessageCircle, Github, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CHATBOT } from "@/lib/constants/chatbot"
import { fadeUp, SectionReveal } from "@/components/landing/section-reveal"

export function ChatbotSection() {
  return (
    <section id="assistente" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center justify-center size-16 rounded-2xl bg-primary/10 ring-1 ring-primary/20 mb-6"
          >
            <MessageCircle className="size-8 text-primary" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Assistente <span className="text-primary">UniHungry</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-8 text-pretty">
            Converse com nossa IA sobre mesas, cardápio, funcionários e vendas.
            Onboarding personalizado e respostas em tempo real via backend NestJS.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" className="gap-2 shadow-lg shadow-primary/20">
              <Link href={CHATBOT.url} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                Abrir chat
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href={CHATBOT.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="size-4" />
                Código no GitHub
              </Link>
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
