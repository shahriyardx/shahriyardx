import React from 'react'

const Button = ({ className, children, ...props}) => {
  return (
    <button
      className={`px-3 py-2 rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button