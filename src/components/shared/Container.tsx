import React from "react"

type Props = {
  className?: string
  children: any
}

const Container = ({ className, children, ...props }: Props) => {
  return (
    <div className={`container px-5 mx-auto ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Container
