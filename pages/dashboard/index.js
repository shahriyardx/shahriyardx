import React from 'react'
import { useSelector } from 'react-redux'
import CountCart from '../../components/Dashboard/CountCart/CountCart'
import DashLayout from '../../components/Layout/DashLayout'
import SEO from '../../components/SEO'

const Dashboard = () => {
  const projects = useSelector(state => state.projects.value)
  const posts = useSelector(state => state.posts.value)

  return (
    <DashLayout>
      <SEO title='Dashboard' />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 gap-5'>
        <CountCart text="Posts" count={posts.length} />
        <CountCart text="Projects" count={projects.length} />
      </div>
    </DashLayout>
  )
}

Dashboard.requireAuth = true

export default Dashboard