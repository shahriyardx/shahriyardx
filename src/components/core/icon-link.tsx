import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import type { ComponentProps } from "react"

type Props = ComponentProps<"a"> & {
  icon: LucideIcon
  href: string
  children: React.ReactNode
  className?: string
}

const IconLink = ({ icon, href, children, className, ...props }: Props) => {
  const Icon = icon

  return (
    <a
      href={href}
      {...props}
      className={cn(`flex items-center gap-2 hover:text-accent`, className)}
      target="_blank"
      rel="noreferrer"
    >
      <Icon size={15} /> <span className="hidden lg:block">{children}</span>
    </a>
  )
}

export default IconLink
