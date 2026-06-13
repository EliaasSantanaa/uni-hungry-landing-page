import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { About } from "@/components/landing/about"
import { Team } from "@/components/landing/team"
import { VideoSection } from "@/components/landing/video-section"
import { TechStack } from "@/components/landing/tech-stack"
import { ChatbotSection } from "@/components/landing/chatbot-section"
import { Repositories } from "@/components/landing/repositories"
import { Documentation } from "@/components/landing/documentation"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Team />
      <VideoSection />
      <TechStack />
      <ChatbotSection />
      <Repositories />
      <Documentation />
      <Footer />
    </main>
  )
}
