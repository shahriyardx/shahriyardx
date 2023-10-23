import Link from "next/link"
import { HTMLAttributes } from "react"

type Props = HTMLAttributes<HTMLHeadElement>

export const H1 = ({ id, ...props }: Props) => {
  return (
    <Link href={`#${id}`}>
      <h1 {...props}># {props.children}</h1>
    </Link>
  )
}

export const H2 = ({ id, ...props }: Props) => {
  return (
    <Link href={`#${id}`} className="no-underline hover:underline">
      <h2 {...props}># {props.children}</h2>
    </Link>
  )
}
