import React from 'react'

const Container = ({ className, children, ...props}) => {
  return (
    <div className={`container mx-auto ${className}`} {...props}>
        {children}
    </div>
  )
}

export default Container