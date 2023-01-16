import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full absolute flex pt-4 items-center justify-between'>
      <h1 className='text-red-600 text-4xl md:text-6xl font-bold cursor-pointer pl-[40px] md:pl-[60px]'>NETFLIX</h1>
      <div className='text-white md:mr-7 mr-4'>
        <button className='pr-4 border-white'>Sign In</button>
        <button className='bg-red-600 px-6 py-2 rounded-lg'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar