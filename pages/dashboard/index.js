import React from 'react'
import CountCart from '../../components/Dashboard/CountCart/CountCart'
import DashLayout from '../../components/Layout/DashLayout'

const Dashboard = () => {
  return (
    <DashLayout>
      <div className='grid grid-cols-1 sm:grid-cols-4 gap-5'>
        <CountCart text="Posts" count={0} />
        <CountCart text="Projects" count={6} />
      </div>
    </DashLayout>
  )
}

Dashboard.requireAuth = true

export default Dashboard