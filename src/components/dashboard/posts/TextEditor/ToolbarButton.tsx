import React from "react"

type Props = {
  children: React.ReactElement | React.ReactElement[]
  mdCommand: (command: string) => void
  command: string
}

const ToolbarButton = ({ children, mdCommand, command }: Props) => {
  return (
    <button
      type="button"
      onClick={() => mdCommand(command)}
      className="hover:text-white hover:bg-zinc-700 focus:bg-zinc-900 focus:text-white"
    >
      {children}
    </button>
  )
}

export default ToolbarButton
