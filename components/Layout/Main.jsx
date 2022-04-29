import React from 'react'
import Footer from '../../Sections/Footer/Footer'
import Header from '../Header/Header'

const Main = (props) => {
  return (
    <div>
        <Header />
        <div className='min-h-[75vh]'>
          {props.children}
        </div>
        <Footer/>
    </div>
  )
}

export default Main