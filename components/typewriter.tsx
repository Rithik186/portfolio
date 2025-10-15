"use client"

import { useEffect, useMemo, useState } from "react"

type TypewriterProps = {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseMs?: number
}

export function Typewriter({ words, typingSpeed = 60, deletingSpeed = 30, pauseMs = 1200 }: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  const currentWord = useMemo(() => words[index % words.length], [index, words])

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1))
        if (!deleting && subIndex === currentWord.length) {
          setDeleting(true)
        } else if (deleting && subIndex === 0) {
          setDeleting(false)
          setIndex((prev) => (prev + 1) % words.length)
        }
      },
      deleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, typingSpeed, deletingSpeed, currentWord.length, words.length])

  useEffect(() => {
    if (!deleting && subIndex === currentWord.length) {
      const pause = setTimeout(() => setDeleting(true), pauseMs)
      return () => clearTimeout(pause)
    }
  }, [subIndex, currentWord.length, deleting, pauseMs])

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 500)
    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <span>
      <span style={{ color: "var(--color-chart-2)" }}>{currentWord.substring(0, subIndex)}</span>
      <span aria-hidden="true" className="inline-block w-1">
        {blink ? "|" : " "}
      </span>
    </span>
  )
}
