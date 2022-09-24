import React, { useRef, ChangeEvent } from "react"
import TextareaMarkdown, { TextareaMarkdownRef } from "textarea-markdown-editor"
import TextareaAutosize from "react-textarea-autosize"
import Toolbar from "./Toolbar"

type Props = {
  value: string | undefined
  setValue: (value: string | undefined) => void
}

const TextEditor = ({ value, setValue }: Props) => {
  const mdref = useRef<TextareaMarkdownRef>(null)

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
  }

  const mdCommand = (command: string) => {
    mdref.current?.trigger(command)
  }

  return (
    <div className="rounded-md border-[1px] border-zinc-600 bg-zinc-800">
      <Toolbar mdCommand={mdCommand} />
      <TextareaMarkdown.Wrapper ref={mdref}>
        <TextareaAutosize
          value={value}
          rows={10}
          onChange={(e) => setValue(e.target.value)}
          className="text-white w-full outline-none border-none focus:ring-0 bg-zinc-800 p-4"
          placeholder="Start writing your content..."
        />
      </TextareaMarkdown.Wrapper>
    </div>
  )
}

export default TextEditor
