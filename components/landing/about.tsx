"use client"

import { Monitor, Smartphone, Database, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"
import { repositories } from "@/lib/constants/repos"
import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
  scaleIn,
} from "@/components/landing/section-reveal"

const features = [
  {
    icon: Monitor,
    title: "Aplicação Web",
    description:
      "Plataforma administrativa para cadastro e gerenciamento das empresas, controle de acesso e supervisão geral.",
    tech: "Next.js + TypeScript",
    repoUrl: repositories[0].url,
  },
  {
    icon: Smartphone,
    title: "Aplicação Mobile",
    description:
      "App para proprietários gerenciarem informações cadastrais e operacionais de seus estabelecimentos.",
    tech: "React Native + Expo",
    repoUrl: repositories[1].url,
  },
  {
    icon: Database,
    title: "Backend API",
    description:
      "API REST com NestJS, Prisma e Supabase para persistência, autenticação e regras de negócio.",
    tech: "NestJS + Supabase",
    repoUrl: repositories[2].url,
  },
  {
    icon: Mail,
    title: "Comunicação",
    description:
      "Integração com Resend para envio de e-mails de autenticação OTP e notificações.",
    tech: "Resend API",
    repoUrl: repositories[2].url,
  },
]

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sobre o Projeto
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            O{" "}
            <span className="text-primary font-semibold">UniHungry</span>{" "}
            é um sistema B2B desenvolvido para facilitar o gerenciamento
            administrativo de estabelecimentos do setor alimentício.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature) => (
            <StaggerItem key={feature.title} variants={scaleIn}>
              <div className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">
                        {feature.tech}
                      </span>
                      <Link
                        href={feature.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Repositório
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
