import React from 'react'
import Main from '../components/Layout/Main'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import SEO from '../components/SEO'

const Login = () => {
  const router = useRouter()
  const { data, status } = useSession()
  const { to } = router.query

  if (data && status == 'authenticated') {
    router.push(to || '/dashboard')
  }

  const handleSignIn = () => {
    signIn('github', {
      callbackUrl: to || '/dashboard'
    })
  }
  return (
    <Main>
      <SEO title='Login - Md Shahriyar Alam' />
      <div className='min-h-[75vh] bg-zinc-800 flex flex-col items-center justify-center'>
        <h1 className='text-2xl text-white font-bold mb-5'>{status === 'loading' ? 'Loading...' : 'You are not signed in'}</h1>
        {['loading', 'unauthenticated'].includes(status) && (<button
          onClick={handleSignIn}
          className='bg-zinc-600 hover:bg-zinc-500 text-zinc-200 px-5 py-3 rounded-lg text-lg uppercase'
        >
          Sign In
        </button>)}
      </div>
    </Main>
  )
}

export default Login