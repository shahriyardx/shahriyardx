import React from 'react'
import { useSelector } from 'react-redux'
import CountCart from '../../components/Dashboard/CountCart/CountCart'
import DashLayout from '../../components/Layout/DashLayout'

const Dashboard = () => {
  const projects = useSelector(state => state.projects.value)
  return (
    <DashLayout>
      <div className='grid grid-cols-1 sm:grid-cols-4 gap-5'>
        <CountCart text="Posts" count={0} />
        <CountCart text="Projects" count={projects.length} />
      </div>
    </DashLayout>
  )
}

Dashboard.requireAuth = true

export default Dashboard