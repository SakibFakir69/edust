"use client"

import { Theme } from "@edust/types"
import ReactJsTipTapEditor, { useEditorState } from "reactjs-tiptap-editor"
// style
import "reactjs-tiptap-editor/style.css"

import { useCallback, useRef, useState } from "react"

import extensions from "./extensions"

const DEFAULT = `<h1 dir="auto">Rich Text Editor</h1><p dir="auto"></p>`

function debounce(func: any, wait: number) {
  let timeout: NodeJS.Timeout
  return function (...args: any[]) {
    clearTimeout(timeout)
    // @ts-ignore
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}
export const RichTextEditor = ({
  setContentHtml,
  theme = "light",
  className = "",
}: {
  setContentHtml: any
  theme: Theme
  className?: string
}) => {
  const [content, setContent] = useState(DEFAULT)
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
        content={DEFAULT}
        onChangeContent={onValueChange}
        extensions={extensions()}
        dark={theme == "dark"}
        disabled={disable}
      />
    </div>
  )
}
