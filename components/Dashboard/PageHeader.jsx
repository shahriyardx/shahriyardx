import React from 'react'

const PageHeader = ({ children, className }) => {
  return (
    <h1 className={`text-3xl font-bold mb-5 ${className}`}>{children}</h1>
  )
}

export default PageHeader