"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

type SkillsChartProps = {
  data: { name: string; value: number }[]
}

export function SkillsChart({ data }: SkillsChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Skills Radar</CardTitle>
        <CardDescription>Proficiency out of 100</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            value: { label: "Level", color: "hsl(var(--chart-2))" },
          }}
          className="h-[260px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barSize={24}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis domain={[0, 100]} tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="value" fill="var(--color-chart-2)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
