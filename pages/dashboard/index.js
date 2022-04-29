import { signOut } from 'next-auth/react'
import React from 'react'
import DashLayout from '../../components/Layout/DashLayout'

const Dashboard = () => {
  return (
    <DashLayout>
      
    </DashLayout>
  )
}

Dashboard.requireAuth = true

export default Dashboard