import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageHeader from '@/components/Dashboard/PageHeader'
import DashLayout from '@/components/Layout/DashLayout'

import { BiTrashAlt, BiPencil, BiX, BiCheck, BiLoaderAlt } from 'react-icons/bi'
import Link from 'next/link'
import { API_BASE } from '@/utils/api'
import { deletePost } from '@/redux/posts'
import SEO from '@/components/SEO'

const Posts = () => {
  const dispatch = useDispatch()
  const [deleteId, setDeleteId] = useState('')
  const [deleting, setDeleting] = useState(false)
  const posts = useSelector(state => state.posts.value)
  
  const ConfirmIcon = deleting ? BiLoaderAlt : BiCheck

  const delPost = () => {
    setDeleting(true)
    fetch(`${API_BASE}/posts/${deleteId}`, {method: "DELETE"})
      .then(response => response.json())
      .then((data => {
        dispatch(deletePost(deleteId))
      }))
    
    setDeleting(false)
  } 

  return (
    <DashLayout>
      <SEO title='Projects - Dashboard' />
      <PageHeader className='flex justify-between items-center'>
        Posts
        <Link href='/dashboard/posts/create'>
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
            {posts.map((post, index) => {
              return (
                <tr key={post._id}>
                  <td>{index + 1}</td>
                  <td>{post.title}</td>
                  <td className='flex gap-2 flex-wrap'>
                    {deleteId !== post._id && (
                      <>
                        <Link href={`/dashboard/posts/edit/${post._id}`}>
                          <a className='p-2 rounded-full'>
                            <BiPencil className='text-lg text-white' />
                          </a>
                        </Link>

                        <button className='p-2 bg-red-400 rounded-full' onClick={() => setDeleteId(post._id)}>
                          <BiTrashAlt className='text-lg text-zinc-900' />
                        </button>
                      </>
                      )
                    }

                    {deleteId == post._id && (
                      <>
                        <button className='p-2 bg-yellow-400 rounded-full' onClick={delPost}>
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

Posts.requireAuth = true
export default Posts