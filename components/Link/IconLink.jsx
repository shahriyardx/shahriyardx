import React from 'react'

const IconLink = ({ icon, href, children, className }) => {
  const Icon = icon

  return (
    <a href={href} className={`flex items-center gap-2 ${className || ''} hover:text-accent`}>
      <Icon /> {children}
    </a>
  )
}

export default IconLink