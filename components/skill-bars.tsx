"use client"

import type React from "react"

import { Progress } from "@/components/ui/progress"

type Skill = { name: string; level: number }
export function SkillBars({ skills }: { skills: Skill[] }) {
  return (
    <ul className="space-y-4">
      {skills.map((skill) => (
        <li key={skill.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{skill.name}</span>
            <span className="text-xs text-muted-foreground">{skill.level}%</span>
          </div>
          <Progress
            value={skill.level}
            className="h-2 overflow-hidden rounded-full"
            // style tokens keep color system consistent
            style={
              {
                // @ts-ignore - custom CSS var not typed
                "--progress-bg": "var(--color-muted)",
                "--progress-fg": "var(--color-chart-2)",
              } as React.CSSProperties
            }
          />
        </li>
      ))}
    </ul>
  )
}
