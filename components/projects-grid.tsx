"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { useRef } from "react"

type Project = {
  title: string
  description: string
  tags: string[]
  image?: string // make image optional so we can render image-less glass cards
  href: string
}

function useCardTilt() {
  const ref = useRef<HTMLDivElement | null>(null)

  function handleMouseMove(e: React.MouseEvent) {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    const rotateY = ((x - midX) / midX) * 6
    const rotateX = -((y - midY) / midY) * 6
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`
  }

  function reset() {
    const card = ref.current
    if (!card) return
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
  }

  return { ref, handleMouseMove, reset }
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const { ref, handleMouseMove, reset } = useCardTilt()

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
      aria-label={`Open project ${project.title}`}
    >
      <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={reset} className="transition-transform duration-200">
        <Card className="overflow-hidden border border-white/10 bg-background/50 backdrop-blur-lg shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-white/20">
          {project.image ? (
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} preview`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={false}
              />
            </div>
          ) : null}
          <CardHeader className="space-y-2">
            <CardTitle className="text-balance text-lg">{project.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{project.description}</p>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2 pb-6">
            {project.tags.map((t) => (
              <Badge key={t} variant="secondary" className="rounded-full">
                {t}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </div>
    </a>
  )
}
