import React from 'react'
import Main from '../components/Layout/Main'

import { signIn } from 'next-auth/react'

const Login = () => {
  const handleSignIn = () => {
    signIn('github')
  }
  return (
    <Main>
      <div className='min-h-[75vh] bg-zinc-800 flex flex-col items-center justify-center'>
        <h1 className='text-2xl text-white font-bold mb-5'>You are not signed in</h1>
        <button
          onClick={handleSignIn}
          className='bg-zinc-600 text-zinc-200 px-5 py-3 rounded-lg text-lg uppercase'
        >
          Sign In
        </button>
      </div>
    </Main>
  )
}

export default Login