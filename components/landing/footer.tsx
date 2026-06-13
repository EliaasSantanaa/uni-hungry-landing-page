import Link from "next/link"
import { Logo } from "@/components/landing/logo"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo size="sm" />

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link href="#equipe" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Equipe
            </Link>
            <Link href="#video" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Vídeo
            </Link>
            <Link href="#tecnologias" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Tecnologias
            </Link>
            <Link href="#assistente" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Assistente
            </Link>
            <Link href="#repositorios" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Repositórios
            </Link>
            <Link href="#documentacao" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Documentação
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} UniHungry. Projeto Acadêmico.
          </p>
        </div>
      </div>
    </footer>
  )
}
