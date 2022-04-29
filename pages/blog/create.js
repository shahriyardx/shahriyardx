import { getSession } from 'next-auth/react'
import React from 'react'

const Create = () => {
  return (
    <div>Create</div>
  )
}

export default Create

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  console.log(session)
  
  return {
    props: {}
  }
}