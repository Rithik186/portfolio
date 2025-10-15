"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ContactCta() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-4 p-8 text-center md:p-10">
        <h3 className="text-pretty text-2xl font-semibold md:text-3xl">Let’s create something great</h3>
        <p className="text-muted-foreground max-w-2xl">
          I&apos;m available for roles and select freelance projects. If you have an interesting challenge, I&apos;d
          love to chat.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="shadow-sm"
            style={{ background: "var(--color-chart-2)", color: "white" }}
          >
            <a href="mailto:rithikkannaak23cys@srishakthi.ac.in" aria-label="Email me">
              Email Me
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href="https://www.linkedin.com/in/rithik-kannaa/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my LinkedIn"
            >
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com/Rithik186" target="_blank" rel="noreferrer" aria-label="Visit my GitHub">
              GitHub
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
