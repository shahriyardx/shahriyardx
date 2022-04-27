import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const TextLink = ({ href, children, className }) => {
  const { pathname } = useRouter()

  return (
    <Link href={href}>
      <a className={`text-base flex gap-1 ${className || ''} ${pathname == href && 'text-accent'} hover:text-accent`}>
        <span>
          {pathname == href && '<'}
        </span> 
        
        <span>
          {children}
        </span> 
        
        <span>
          {pathname == href && '>'}
        </span>
      </a>
    </Link>
  )
}

export default TextLink