import React, { useState } from 'react'
import DashHeader from '../Dashboard/Header/DashHeader'
import Sidebar from '../Dashboard/Sidebar/Sidebar'

const DashLayout = (props) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='bg-zinc-900 text-zinc-200 grid grid-cols-1 md:grid-cols-dashboard'>
      <Sidebar open={menuOpen} toggleMenu={() => setMenuOpen(!menuOpen)} />
      <div className='h-screen max-h-screen overflow-y-auto scrollbar'>
        <DashHeader toggleMenu={() => setMenuOpen(!menuOpen)} />
        <div className='container mx-auto p-4'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default DashLayout