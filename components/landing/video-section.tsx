"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SectionReveal, scaleIn } from "@/components/landing/section-reveal"
import { motion } from "framer-motion"

const VIDEO_CONFIG = {
  videoId: "8msJkhV47LI",
  type: "youtube" as "youtube" | "drive",
  watchUrl: "https://www.youtube.com/watch?v=8msJkhV47LI",
}

function getYoutubeThumbnails(videoId: string) {
  return [
    `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`,
    `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
  ]
}

function VideoPoster({
  videoId,
  onPlay,
}: {
  videoId: string
  onPlay: () => void
}) {
  const thumbnails = getYoutubeThumbnails(videoId)
  const [thumbnailIndex, setThumbnailIndex] = useState(0)

  return (
    <button
      type="button"
      onClick={onPlay}
      className="group absolute inset-0 w-full h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label="Reproduzir vídeo pitch"
    >
      <Image
        src={thumbnails[thumbnailIndex]}
        alt="Capa do vídeo pitch UniHungry"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        sizes="(max-width: 896px) 100vw, 896px"
        priority
        unoptimized
        onError={() => {
          setThumbnailIndex((current) =>
            current < thumbnails.length - 1 ? current + 1 : current
          )
        }}
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 transition-opacity duration-300 group-hover:via-black/35"
        aria-hidden
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/40 ring-4 ring-primary/30 transition-shadow duration-300 group-hover:shadow-primary/60"
        >
          <Play className="ml-1 h-7 w-7 sm:h-8 sm:w-8 fill-current" />
        </motion.span>
        <p className="mt-4 px-4 text-center text-sm font-medium text-white drop-shadow-md sm:text-base">
          Clique para reproduzir o vídeo pitch
        </p>
      </div>
    </button>
  )
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
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-colors duration-300 shadow-lg shadow-black/20">
            {!isPlaying ? (
              <VideoPoster
                videoId={VIDEO_CONFIG.videoId}
                onPlay={() => setIsPlaying(true)}
              />
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
              <Link
                href={VIDEO_CONFIG.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                Abrir no YouTube
              </Link>
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
