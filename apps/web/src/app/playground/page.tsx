"use client"

import { useThemeStore } from "@/store"
import { RichTextEditor } from "@edust/rich-text-editor"
import { Typography } from "@edust/ui"

import { useState } from "react"

export default function Playground() {
  const [contentHtml, setContentHtml] = useState("")
  const { theme } = useThemeStore()
  console.log(contentHtml)
  return (
    <div className="container">
      <Typography variant="h1">Playground</Typography>
      <RichTextEditor
        className="my-5"
        theme={theme}
        setContentHtml={setContentHtml}
      />
    </div>
  )
}
