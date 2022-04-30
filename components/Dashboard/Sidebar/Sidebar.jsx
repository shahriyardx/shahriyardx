import Link from 'next/link'
import React from 'react'
import { BiGridAlt, BiListOl, BiCodeAlt } from 'react-icons/bi'
import SidebarLink from './SidebarLink'

const Sidebar = () => {
  return (
    <div className='h-[calc(100vh-4rem)] w-full bg-zinc-800'>
      <SidebarLink Icon={BiGridAlt} text='Dashboard' href='/dashboard' />
      <SidebarLink Icon={BiCodeAlt} text='Projects' href='/dashboard/projects' active='projects'/>
      <SidebarLink Icon={BiListOl} text='Posts' href='/dashboard/posts' active='posts' />
    </div>
  )
}

export default Sidebar