"use client"

import { useState } from "react"
import { FileText, ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { projectDocuments } from "@/lib/constants/documents"
import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
  scaleIn,
} from "@/components/landing/section-reveal"
import { cn } from "@/lib/utils"

export function Documentation() {
  const [activeDocId, setActiveDocId] = useState<string | null>(null)
  const activeDoc = projectDocuments.find((doc) => doc.id === activeDocId) ?? null

  return (
    <section id="documentacao" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Documentação
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Consulte a documentação técnica de cada parte do projeto{" "}
            <span className="text-primary font-semibold">UniHungry</span>
          </p>
        </SectionReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projectDocuments.map((doc) => {
            const isActive = activeDocId === doc.id

            return (
              <StaggerItem key={doc.id} variants={scaleIn}>
                <button
                  type="button"
                  onClick={() => setActiveDocId(doc.id)}
                  className={cn(
                    "group w-full text-left p-6 rounded-2xl bg-card border transition-all duration-300 h-full flex flex-col",
                    isActive
                      ? "border-primary shadow-lg shadow-primary/10"
                      : "border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                  )}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <doc.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="px-2 py-1 rounded-md bg-primary/10 text-xs font-medium text-primary">
                      PDF
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2 flex-1">
                    {doc.description}
                  </p>
                  <p className="text-xs font-mono text-muted-foreground mb-4">
                    {doc.fileName}
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    <FileText className="w-4 h-4" />
                    {isActive ? "Visualizando" : "Visualizar PDF"}
                  </span>
                </button>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {activeDoc && (
          <SectionReveal delay={0.1} className="max-w-5xl mx-auto mt-12">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border-b border-border">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {activeDoc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{activeDoc.fileName}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <Link
                      href={activeDoc.viewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Abrir no Drive
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setActiveDocId(null)}
                    aria-label="Fechar visualizador"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="relative w-full h-[75vh] min-h-[480px] bg-secondary">
                <iframe
                  src={activeDoc.embedUrl}
                  title={activeDoc.title}
                  allow="autoplay"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </SectionReveal>
        )}
      </div>
    </section>
  )
}
