import React from 'react'
import DashHeader from '../Header/DashHeader'
import Sidebar from '../Dashboard/Sidebar/Sidebar'

const DashLayout = (props) => {
  return (
    <div>
      <DashHeader />
      <div className='bg-zinc-900 text-zinc-200 grid grid-cols-dashboard'>
        <Sidebar />
        <div className='container mx-auto p-4 max-h-[calc(100vh-4rem)] overflow-y-auto scrollbar'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default DashLayout