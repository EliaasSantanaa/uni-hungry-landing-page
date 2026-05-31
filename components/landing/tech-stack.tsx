"use client"

import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
  slideFromLeft,
} from "@/components/landing/section-reveal"

const technologies = [
  {
    category: "Frontend Web",
    items: [
      { name: "Next.js", description: "Framework React" },
      { name: "TypeScript", description: "Tipagem estática" },
      { name: "Tailwind CSS", description: "Estilização" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "React Native", description: "Framework mobile" },
      { name: "TypeScript", description: "Tipagem estática" },
      { name: "Expo", description: "Plataforma de desenvolvimento" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "NestJS", description: "Framework Node.js" },
      { name: "TypeScript", description: "Tipagem estática" },
      { name: "REST API", description: "Arquitetura" },
    ],
  },
  {
    category: "Infraestrutura",
    items: [
      { name: "Supabase", description: "Banco de dados" },
      { name: "Resend", description: "Envio de e-mails" },
      { name: "OTP Auth", description: "Autenticação" },
    ],
  },
]

export function TechStack() {
  return (
    <section id="tecnologias" className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Stack de Tecnologias
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tecnologias modernas para construir uma solução robusta e escalável
          </p>
        </SectionReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <StaggerItem key={tech.category} variants={slideFromLeft}>
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 transition-all duration-300 h-full">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {tech.category}
                </h3>
                <ul className="space-y-3">
                  {tech.items.map((item) => (
                    <li key={item.name} className="flex flex-col">
                      <span className="text-foreground font-medium">{item.name}</span>
                      <span className="text-sm text-muted-foreground">{item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
