import type { LucideIcon } from "lucide-react"
import { Monitor, Smartphone, Server } from "lucide-react"

export type ProjectDocument = {
  id: string
  icon: LucideIcon
  title: string
  description: string
  fileName: string
  fileId: string
  viewUrl: string
  embedUrl: string
}

export const projectDocuments: ProjectDocument[] = [
  {
    id: "web",
    icon: Monitor,
    title: "Documentação Aplicação Web",
    description:
      "Especificação técnica do painel administrativo UniHungry Admin (Next.js).",
    fileName: "UniHungry_Admin_Doc.pdf",
    fileId: "1NtJJjYWKemgO-K_aY1dkDoOWKTbnbqNd",
    viewUrl:
      "https://drive.google.com/file/d/1NtJJjYWKemgO-K_aY1dkDoOWKTbnbqNd/view?usp=sharing",
    embedUrl:
      "https://drive.google.com/file/d/1NtJJjYWKemgO-K_aY1dkDoOWKTbnbqNd/preview",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Documentação Aplicação Mobile",
    description:
      "Especificação técnica do aplicativo mobile UniHungry (React Native + Expo).",
    fileName: "UniHungry_Mobile_Doc.pdf",
    fileId: "1RvXdMveCqrd5aZquuQQxLQ3hrWIChtDx",
    viewUrl:
      "https://drive.google.com/file/d/1RvXdMveCqrd5aZquuQQxLQ3hrWIChtDx/view?usp=sharing",
    embedUrl:
      "https://drive.google.com/file/d/1RvXdMveCqrd5aZquuQQxLQ3hrWIChtDx/preview",
  },
  {
    id: "backend",
    icon: Server,
    title: "Documentação Back-end",
    description:
      "Especificação técnica da API REST UniHungry Server (NestJS + Prisma).",
    fileName: "UniHungry_Backend_Doc.pdf",
    fileId: "1dPvn1UoTM2Gxd5lYKvw5Of8bg5jgccl4",
    viewUrl:
      "https://drive.google.com/file/d/1dPvn1UoTM2Gxd5lYKvw5Of8bg5jgccl4/view?usp=sharing",
    embedUrl:
      "https://drive.google.com/file/d/1dPvn1UoTM2Gxd5lYKvw5Of8bg5jgccl4/preview",
  },
]
