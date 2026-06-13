"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Globe } from "lucide-react";
import type { Repository } from "@/lib/constants/repos";
import { Button } from "@/components/ui/button";

interface RepositoryCardProps {
  repo: Repository;
}

export function RepositoryCard({ repo }: RepositoryCardProps) {
  return (
    <article className="group h-full flex flex-col rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
      <Link
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[1200/630] overflow-hidden bg-secondary"
        aria-label={`Abrir repositório ${repo.title} no GitHub`}
      >
        <Image
          src={repo.previewUrl}
          alt={`Preview do repositório ${repo.name} no GitHub`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-background/80 backdrop-blur-sm text-xs font-mono text-muted-foreground">
            <Github className="w-3.5 h-3.5 text-primary" />
            {repo.owner}/{repo.name}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-primary/90 text-xs font-medium text-primary-foreground">
            {repo.language}
          </span>
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {repo.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1">
          {repo.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {repo.tech.map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button asChild className="flex-1 gap-2">
            <Link href={repo.url} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              Ver repositório
            </Link>
          </Button>
          {repo.liveUrl ? (
            <Button asChild variant="outline" className="flex-1 gap-2">
              <Link href={repo.liveUrl} target="_blank" rel="noopener noreferrer">
                <Globe className="w-4 h-4" />
                Ver demo
              </Link>
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
