import React from 'react'
import PageHeader from '../../../components/Dashboard/PageHeader'
import DashLayout from '../../../components/Layout/DashLayout'

const Posts = () => {
  return (
    <DashLayout>
      <PageHeader>Posts</PageHeader>
    </DashLayout>
  )
}

Posts.requireAuth = true
export default Posts