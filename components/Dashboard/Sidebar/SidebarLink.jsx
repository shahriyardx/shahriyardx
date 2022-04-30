import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SidebarLink = ({Icon, text, href, active}) => {
  const router = useRouter()
  let _active = false
  
  if (!active) {
    _active = router.pathname === href
  } else {
    _active = router.pathname.includes(active)
  }

  return (
    <Link href={href}>
      <a 
        className={`
          flex items-center gap-2 text-lg p-3 hover:bg-zinc-700 
          ${_active && 'bg-zinc-700'}
        `}
      >
        <Icon />{text}
      </a>
    </Link>
  )
}

export default SidebarLink