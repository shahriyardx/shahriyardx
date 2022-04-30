import React from 'react'
import PageHeader from '../../../components/Dashboard/PageHeader'
import DashLayout from '../../../components/Layout/DashLayout'
import SEO from '../../../components/SEO'

const Posts = () => {
  return (
    <DashLayout>
      <SEO title='Posts - Dashboard' />
      <PageHeader>Posts</PageHeader>
    </DashLayout>
  )
}

Posts.requireAuth = true
export default Posts