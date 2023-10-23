import Link from "next/link"
import { HTMLAttributes } from "react"

type Props = HTMLAttributes<HTMLHeadElement>

const H1 = ({ id, ...props }: Props) => {
  return (
    <Link href={`#${id}`}>
      <h1 {...props} />
    </Link>
  )
}

export default H1
