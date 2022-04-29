import { signOut } from 'next-auth/react'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

Dashboard.requireAuth = true

export default Dashboard