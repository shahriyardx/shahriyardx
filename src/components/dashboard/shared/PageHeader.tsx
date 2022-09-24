import React from "react"

type Props = {
  title: string
  children: any
}

const DashPageHeader = ({ title, children }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold">{title}</h1>

      {children}
    </div>
  )
}

export default DashPageHeader
