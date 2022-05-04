import React from 'react'
import { signOut } from 'next-auth/react'
import LinkButton from '../../Button/LinkButton'
import { BiMenu } from 'react-icons/bi'

const DashHeader = ({ toggleMenu }) => {
  return (
    <div className='h-16 bg-primary text-slate-200 flex items-center'>
      <div className='px-3 flex items-center justify-between w-full'>
        <div className='md:invisible'>
          <BiMenu className='text-2xl' onClick={toggleMenu} />
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