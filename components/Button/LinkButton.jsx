import React from 'react'
import Link from 'next/link'

const LinkButton = ({ href, className, children, ...props }) => {
  return (
    <Link href={href}>
      <a className={`px-3 py-2 rounded-md ${className}`} {...props}>
        {children}
      </a>
    </Link>
  )
}

export default LinkButton