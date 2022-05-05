import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageHeader from '@/components/Dashboard/PageHeader'
import DashLayout from '@/components/Layout/DashLayout'

import { BiTrashAlt, BiPencil, BiX, BiCheck, BiLoaderAlt } from 'react-icons/bi'
import Link from 'next/link'
import { API_BASE } from '@/utils/api'
import { deleteProject } from '@/redux/projects'
import SEO from '@/components/SEO'

const Projects = () => {
  const dispatch = useDispatch()
  const [deleteId, setDeleteId] = useState('')
  const [deleting, setDeleting] = useState(false)
  const projects = useSelector(state => state.projects.value)
  
  const ConfirmIcon = deleting ? BiLoaderAlt : BiCheck

  const delProject = () => {
    setDeleting(true)
    fetch(`${API_BASE}/projects/${deleteId}`, {method: "DELETE"})
      .then(response => response.json())
      .then((data => {
        dispatch(deleteProject(deleteId))
      }))
    
    setDeleting(false)
  } 

  return (
    <DashLayout>
      <SEO title='Projects - Dashboard' />
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
                    {deleteId !== project._id && (
                      <>
                        <Link href={`/dashboard/projects/edit/${project._id}`}>
                          <a className='p-2 rounded-full'>
                            <BiPencil className='text-lg text-white' />
                          </a>
                        </Link>

                        <button className='p-2 bg-red-400 rounded-full' onClick={() => setDeleteId(project._id)}>
                          <BiTrashAlt className='text-lg text-zinc-900' />
                        </button>
                      </>
                      )
                    }

                    {deleteId == project._id && (
                      <>
                        <button className='p-2 bg-yellow-400 rounded-full' onClick={delProject}>
                          <ConfirmIcon className={`text-lg text-zinc-900 ${deleting ? 'animate-spin' : ''}`} />
                        </button>

                        {!deleting && (<button className='p-2 bg-green-400 rounded-full' onClick={() => setDeleteId('')}>
                          <BiX className='text-lg text-zinc-900' />
                        </button>)}
                      </>
                      )
                    }
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