"use client"

import { Theme } from "@edust/types"
import ReactJsTipTapEditor from "reactjs-tiptap-editor"
// style
import "reactjs-tiptap-editor/style.css"

import { FC, useCallback, useRef, useState } from "react"

import extensions from "./extensions"

function debounce(func: any, wait: number) {
  let timeout: NodeJS.Timeout
  return function (...args: any[]) {
    clearTimeout(timeout)
    // @ts-ignore
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

type RichTextEditorProps = {
  setContentHtml: Function
  theme: Theme
  defaultValue?: string
  className?: string
}

export const RichTextEditor: FC<RichTextEditorProps> = ({
  setContentHtml,
  theme = "light",
  className = "",
  defaultValue = `<h1 dir="auto">Rich Text Editor</h1><p dir="auto"></p>`,
}) => {
  const [content, setContent] = useState(defaultValue)
  const refEditor = useRef<any>(null)

  const [disable, setDisable] = useState(false)

  const onValueChange = useCallback(
    debounce((value: any) => {
      setContent(value)
      setContentHtml(value)
    }, 300),
    [],
  )

  return (
    <div className={className}>
      <ReactJsTipTapEditor
        ref={refEditor}
        output="html"
        content={content}
        onChangeContent={onValueChange}
        extensions={extensions()}
        dark={theme == "dark"}
        disabled={disable}
      />
    </div>
  )
}
