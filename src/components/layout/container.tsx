import type React from "react"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  children: React.ReactNode | React.ReactNode[]
}

const Container = ({ className, children, ...props }: Props) => {
  return (
    <div className={cn("container px-5 mx-auto", className)} {...props}>
      {children}
    </div>
  )
}

export default Container
