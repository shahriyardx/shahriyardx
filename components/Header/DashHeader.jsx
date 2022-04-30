import React from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import LinkButton from '../Button/LinkButton'

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
          <LinkButton href='/' target='_blank' className='bg-zinc-700'>
            Visit
          </LinkButton>
        </div>
      </div>
    </div>
  )
}

export default DashHeader