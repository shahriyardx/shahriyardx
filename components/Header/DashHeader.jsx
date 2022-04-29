import React from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

const DashHeader = () => {
  return (
    <div className='h-16 bg-primary text-slate-200 flex items-center'>
      <div className='px-3 flex items-center justify-between w-full'>
        <div>
          <Link href="/dashboard">
            <a className='uppercase text-lg'>
              <span className='font-bold text-white'>Dashboard</span>
            </a>
          </Link>
        </div>

        <div className='flex gap-3'>
          <button className='text-red-500' onClick={signOut}>Logout</button>
          <Link href='/'>
            <a className='px-3 py-2 bg-zinc-700 rounded-md' target="_blank">Visit</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashHeader