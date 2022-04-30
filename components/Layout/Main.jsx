import React from 'react'
import Footer from '../../Sections/Footer/Footer'
import Header from '../Header/Header'
import SEO from '../SEO'

const Main = (props) => {
  return (
    <div>
      <Header />
      <div className='min-h-[75vh] bg-zinc-800'>
        {props.children}
      </div>
      <Footer/>
    </div>
  )
}

export default Main