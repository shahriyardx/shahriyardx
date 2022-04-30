import React from 'react'
import { useSelector } from 'react-redux'
import PageHeader from '../../../components/Dashboard/PageHeader'
import DashLayout from '../../../components/Layout/DashLayout'

import { BiTrashAlt, BiPencil } from 'react-icons/bi'
import Link from 'next/link'

const Projects = () => {
  const { value: projects} = useSelector(state => state.projects)
  
  return (
    <DashLayout>
      <PageHeader className='flex justify-between items-center'>
        Projects
        <Link href='/dashboard/projects/create'>
          <a className='text-blue-300 text-base'>Create New</a>
        </Link>
      </PageHeader>

      <div>
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => {
              return (
                <tr key={project._id}>
                  <td>{index + 1}</td>
                  <td>{project.title}</td>
                  <td className='flex gap-2 flex-wrap'>
                    <Link href={`/dashboard/projects/edit/${project._id}`}>
                      <a className='p-2 rounded-full'>
                        <BiPencil className='text-lg text-white' />
                      </a>
                    </Link>

                    <button className='p-2 bg-red-400 rounded-full'>
                      <BiTrashAlt className='text-lg text-zinc-900' />
                    </button>
                  </td>
                </tr>
              )
            })}
            
          </tbody>
        </table>
      </div>
    </DashLayout>
  )
}

Projects.requireAuth = true
export default Projects