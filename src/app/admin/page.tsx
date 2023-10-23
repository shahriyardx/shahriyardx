"use client"

import Link from 'next/link'
import React from 'react'

const AdminDashboard = () => {
  return (
    <div className='grid place-items-center'>
        <div className='grid grid-cols-2 gap-5'>
            <Link href="/admin/blog"></Link>
        </div>
    </div>
  )
}

export default AdminDashboard