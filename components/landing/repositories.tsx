"use client"

import { repositories } from "@/lib/constants/repos"
import { RepositoryCard } from "@/components/landing/repository-card"
import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
  slideFromLeft,
  slideFromRight,
} from "@/components/landing/section-reveal"

export function Repositories() {
  return (
    <section id="repositorios" className="py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Repositórios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore o código-fonte de cada parte do ecossistema{" "}
            <span className="text-primary font-semibold">UniHungry</span> no GitHub
          </p>
        </SectionReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {repositories.map((repo, index) => (
            <StaggerItem
              key={repo.name}
              variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
            >
              <RepositoryCard repo={repo} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
