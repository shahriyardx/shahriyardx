import React from 'react'
import Header from '../Header/Header'

const Main = (props) => {
  return (
    <div>
        <Header />
        {props.children}
    </div>
  )
}

export default Main