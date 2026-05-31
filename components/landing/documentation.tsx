"use client"

import { FileText, Video, FolderOpen, Presentation, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { repositories } from "@/lib/constants/repos"
import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
  scaleIn,
} from "@/components/landing/section-reveal"

const documents = [
  {
    icon: FileText,
    title: "Documentação Técnica",
    description: "Especificações técnicas, arquitetura e diagramas do sistema",
    link: "https://drive.google.com/drive/folders/SEU_LINK_AQUI",
    badge: "PDF",
  },
  {
    icon: Video,
    title: "Vídeo de Demonstração",
    description: "Demonstração completa das funcionalidades do sistema",
    link: "https://drive.google.com/drive/folders/SEU_LINK_AQUI",
    badge: "MP4",
  },
  {
    icon: Presentation,
    title: "Slides da Apresentação",
    description: "Apresentação visual do projeto e suas funcionalidades",
    link: "https://drive.google.com/drive/folders/SEU_LINK_AQUI",
    badge: "PPTX",
  },
  {
    icon: Github,
    title: "Organização GitHub",
    description: "Todos os repositórios do ecossistema UniHungry",
    link: "https://github.com/EliaasSantanaa",
    badge: "GitHub",
  },
  {
    icon: FolderOpen,
    title: "Pasta Completa",
    description: "Acesso a todos os arquivos e materiais do projeto",
    link: "https://drive.google.com/drive/folders/SEU_LINK_AQUI",
    badge: "Drive",
  },
]

export function Documentation() {
  return (
    <section id="documentacao" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Documentação
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Acesse todos os materiais e documentos do projeto{" "}
            <span className="text-primary font-semibold">UniHungry</span>
          </p>
        </SectionReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {documents.map((doc) => (
            <StaggerItem key={doc.title} variants={scaleIn}>
              <div className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <doc.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="px-2 py-1 rounded-md bg-primary/10 text-xs font-medium text-primary">
                    {doc.badge}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {doc.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {doc.description}
                </p>

                <Button asChild variant="outline" className="w-full gap-2">
                  <Link href={doc.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Acessar
                  </Link>
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <SectionReveal delay={0.2} className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Repositórios individuais</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {repositories.map((repo) => (
              <Link
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Github className="w-4 h-4" />
                {repo.name}
              </Link>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
