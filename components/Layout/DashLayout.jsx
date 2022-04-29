import React from 'react'
import DashHeader from '../Header/DashHeader'
import Sidebar from '../Sidebar/Sidebar'

const DashLayout = (props) => {
  return (
    <div>
      <DashHeader />
      <div className='bg-zinc-900 text-zinc-200 grid grid-cols-dashboard'>
        <Sidebar />
        {props.children}
      </div>
    </div>
  )
}

export default DashLayout