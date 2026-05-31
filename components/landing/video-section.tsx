"use client"

import { useState } from "react"
import { Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  SectionReveal,
  scaleIn,
} from "@/components/landing/section-reveal"
import { motion } from "framer-motion"

const VIDEO_CONFIG = {
  videoId: "COLOQUE_O_ID_DO_VIDEO_AQUI",
  type: "youtube" as "youtube" | "drive",
  driveLink: "https://drive.google.com/drive/folders/SEU_LINK_AQUI",
}

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const getEmbedUrl = () => {
    if (VIDEO_CONFIG.type === "youtube") {
      return `https://www.youtube.com/embed/${VIDEO_CONFIG.videoId}?autoplay=1&rel=0`
    }
    return `https://drive.google.com/file/d/${VIDEO_CONFIG.videoId}/preview`
  }

  return (
    <section id="video" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Vídeo Pitch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Assista nossa apresentação completa do projeto{" "}
            <span className="text-primary font-semibold">UniHungry</span>
          </p>
        </SectionReveal>

        <SectionReveal delay={0.15} variants={scaleIn} className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-colors duration-300">
            {!isPlaying ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-card to-background">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30"
                  aria-label="Reproduzir vídeo"
                >
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </motion.button>
                <p className="mt-4 text-muted-foreground text-sm">
                  Clique para reproduzir o vídeo pitch
                </p>
              </div>
            ) : (
              <iframe
                src={getEmbedUrl()}
                title="UniHungry - Vídeo Pitch"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="outline" className="gap-2">
              <Link href={VIDEO_CONFIG.driveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Abrir no Google Drive
              </Link>
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
