export type Repository = {
  name: string
  owner: string
  title: string
  description: string
  tech: string[]
  language: string
  url: string
  previewUrl: string
  liveUrl?: string
}

export const repositories: Repository[] = [
  {
    name: "uni-hungry-admin",
    owner: "EliaasSantanaa",
    title: "Painel Web",
    description:
      "Painel administrativo para gestão de usuários, restaurantes, cardápios, mesas, comandas e métricas do sistema.",
    tech: ["Next.js 16", "React 19", "TypeScript", "shadcn/ui"],
    language: "TypeScript",
    url: "https://github.com/EliaasSantanaa/uni-hungry-admin",
    previewUrl:
      "https://opengraph.githubassets.com/1/EliaasSantanaa/uni-hungry-admin",
    liveUrl: "https://uni-hungry-admin.vercel.app",
  },
  {
    name: "uni-hungry-app",
    owner: "EliaasSantanaa",
    title: "App Mobile",
    description:
      "Aplicativo mobile para gerentes e garçons com gestão de mesas, comandas, cardápio e funcionários.",
    tech: ["React Native", "Expo", "TypeScript", "NativeWind"],
    language: "TypeScript",
    url: "https://github.com/EliaasSantanaa/uni-hungry-app",
    previewUrl:
      "https://opengraph.githubassets.com/1/EliaasSantanaa/uni-hungry-app",
  },
  {
    name: "uni-hungry-server",
    owner: "EliaasSantanaa",
    title: "Backend",
    description:
      "API REST com autenticação JWT + OTP, Prisma, PostgreSQL (Supabase) e documentação Swagger.",
    tech: ["NestJS", "Prisma", "PostgreSQL", "Supabase"],
    language: "TypeScript",
    url: "https://github.com/EliaasSantanaa/uni-hungry-server",
    previewUrl:
      "https://opengraph.githubassets.com/1/EliaasSantanaa/uni-hungry-server",
  },
]

export function getRepositoryByName(name: string) {
  return repositories.find((repo) => repo.name === name)
}
