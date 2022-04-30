import React from 'react'

const CountCart = ({ text, count }) => {
  return (
    <div className='rounded-md bg-zinc-700 p-4'>
      <h1 className='text-lg text-zinc-400 mb-5'>{text}</h1>
      <p className='text-5xl font-bold font-montserrat'>{count}</p>
    </div>
  )
}

export default CountCart