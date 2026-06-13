"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { CHATBOT } from "@/lib/constants/chatbot"
import { cn } from "@/lib/utils"

export function ChatbotWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="hidden sm:block max-w-[220px] rounded-xl border border-border bg-card/95 px-4 py-3 text-right shadow-lg backdrop-blur-sm"
      >
        <p className="text-sm font-medium text-foreground">{CHATBOT.label}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {CHATBOT.description}
        </p>
      </motion.div>

      <motion.a
        href={CHATBOT.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`${CHATBOT.label} — abrir chat em nova aba`}
        className={cn(
          "relative flex h-14 w-14 items-center justify-center rounded-full",
          "bg-primary text-primary-foreground shadow-lg shadow-primary/30",
          "transition-shadow hover:shadow-xl hover:shadow-primary/40",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        )}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"
        />
        <MessageCircle className="relative h-7 w-7" strokeWidth={2} />
      </motion.a>
    </div>
  )
}
