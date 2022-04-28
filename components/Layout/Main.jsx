import React from 'react'
import Footer from '../../Sections/Footer/Footer'
import Header from '../Header/Header'

const Main = (props) => {
  return (
    <div>
        <Header />
        {props.children}
        <Footer/>
    </div>
  )
}

export default Main