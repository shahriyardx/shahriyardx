import React from "react"

type Props = {
  row?: boolean
  column?: boolean
  className?: string
  reverse?: boolean
  children: React.ReactNode | React.ReactNode[]
}

const Flex = ({
  row,
  column,
  className,
  children,
  reverse,
  ...props
}: Props) => {
  const classes = `flex ${
    row
      ? reverse
        ? "flex-row-reverse"
        : "flex-row"
      : column
      ? reverse
        ? "flex-col-reverse"
        : "flex-col"
      : reverse
      ? "flex-row-reverse"
      : "flex-row"
  } ${className}`

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Flex
