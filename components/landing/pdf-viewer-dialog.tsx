"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ExternalLink, Loader2, X } from "lucide-react"
import type { ProjectDocument } from "@/lib/constants/documents"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PdfViewerDialogProps {
  document: ProjectDocument | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PdfViewerDialog({
  document,
  open,
  onOpenChange,
}: PdfViewerDialogProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (open && document) {
      setIsLoading(true)
    }
  }, [open, document?.id])

  if (!document) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className={cn(
          "flex flex-col gap-0 overflow-hidden p-0",
          "fixed inset-0 z-50 h-dvh max-h-dvh w-full max-w-full translate-x-0 translate-y-0 rounded-none border-0",
          "sm:inset-auto sm:top-[50%] sm:left-[50%] sm:h-[min(90vh,900px)] sm:w-[min(calc(100%-2rem),72rem)] sm:max-w-6xl",
          "sm:translate-x-[-50%] sm:translate-y-[-50%] sm:rounded-2xl sm:border sm:border-border",
          "data-[state=open]:slide-in-from-bottom-4 sm:data-[state=open]:slide-in-from-bottom-0",
          "data-[state=closed]:slide-out-to-bottom-4 sm:data-[state=closed]:slide-out-to-bottom-0"
        )}
      >
        <header className="flex shrink-0 items-start justify-between gap-3 border-b border-border bg-card px-4 py-3 sm:px-5 sm:py-4">
          <div className="min-w-0 flex-1 pr-2">
            <DialogTitle className="text-base font-semibold leading-snug sm:text-lg">
              {document.title}
            </DialogTitle>
            <DialogDescription className="mt-1 truncate text-xs sm:text-sm">
              {document.fileName}
            </DialogDescription>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden gap-2 sm:inline-flex"
            >
              <Link
                href={document.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Abrir no Drive
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon-sm"
              className="sm:hidden"
            >
              <Link
                href={document.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir no Google Drive"
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => onOpenChange(false)}
              aria-label="Fechar visualizador"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </header>

        <div className="relative min-h-0 flex-1 bg-secondary">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-background/80 backdrop-blur-sm">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">Carregando documento...</p>
            </div>
          )}

          <iframe
            key={document.id}
            src={document.embedUrl}
            title={document.title}
            allow="autoplay"
            onLoad={() => setIsLoading(false)}
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>

        <footer className="flex shrink-0 items-center justify-between gap-3 border-t border-border bg-card px-4 py-2.5 sm:hidden">
          <p className="truncate text-xs text-muted-foreground">{document.fileName}</p>
          <Button asChild variant="link" size="sm" className="h-auto shrink-0 px-0 text-primary">
            <Link
              href={document.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir no Drive
            </Link>
          </Button>
        </footer>
      </DialogContent>
    </Dialog>
  )
}
