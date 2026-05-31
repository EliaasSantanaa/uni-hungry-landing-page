"use client"

import { useState } from "react"
import { FileText, ChevronRight } from "lucide-react"
import { projectDocuments } from "@/lib/constants/documents"
import { PdfViewerDialog } from "@/components/landing/pdf-viewer-dialog"
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

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 max-w-5xl mx-auto">
          {projectDocuments.map((doc) => (
            <StaggerItem key={doc.id} variants={scaleIn}>
              <button
                type="button"
                onClick={() => setActiveDocId(doc.id)}
                className={cn(
                  "group w-full text-left rounded-2xl bg-card border border-border",
                  "p-5 sm:p-6 transition-all duration-300",
                  "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
                  "active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <doc.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground leading-snug">
                        {doc.title}
                      </h3>
                      <span className="shrink-0 px-2 py-0.5 rounded-md bg-primary/10 text-[10px] sm:text-xs font-medium text-primary uppercase tracking-wide">
                        PDF
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {doc.description}
                    </p>
                    <p className="text-[11px] sm:text-xs font-mono text-muted-foreground truncate mb-4">
                      {doc.fileName}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all duration-300">
                      <FileText className="w-4 h-4 shrink-0" />
                      Visualizar PDF
                      <ChevronRight className="w-4 h-4 shrink-0 opacity-70" />
                    </span>
                  </div>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <PdfViewerDialog
        document={activeDoc}
        open={activeDocId !== null}
        onOpenChange={(open) => {
          if (!open) setActiveDocId(null)
        }}
      />
    </section>
  )
}
