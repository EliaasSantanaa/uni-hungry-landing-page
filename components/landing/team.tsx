"use client"

import { Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
  scaleIn,
} from "@/components/landing/section-reveal"

const team = [
  {
    name: "Elias Santana",
    image: "/foto-elias.jpeg",
    linkedin: "https://www.linkedin.com/in/elias-santana-santos/",
  },
  {
    name: "Gabriel Araújo",
    image: "/foto-gabriel.jpeg",
    linkedin: "https://www.linkedin.com/in/gabriel-saraujo-ars1108/",
  },
  {
    name: "Nathan Rodrigues",
    image: "/foto-nathan.jpeg",
    linkedin: "https://www.linkedin.com/in/nathan-rodrigues-de-freitas-9a0b60366/",
  },
  {
    name: "Thiago Brum",
    image: "/foto-thiago.jpeg",
    linkedin: "https://www.linkedin.com/in/thiago-brum-tech/",
  },
]

export function Team() {
  return (
    <section id="equipe" className="py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossa Equipe
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Conheça os desenvolvedores por trás do{" "}
            <span className="text-primary font-semibold">UniHungry</span>
          </p>
        </SectionReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {team.map((member) => (
            <StaggerItem key={member.name} variants={scaleIn}>
              <div className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-primary/30 group-hover:ring-primary transition-all duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="96px"
                    />
                  </div>
                </Link>

                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {member.name}
                </h3>

                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
