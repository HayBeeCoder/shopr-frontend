import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../../components/Logo'

const Layout = () => {
  return (
    <div className='w-screen h-screen flex'>
      <div className='hidden md:block w-1/2 h-full bg-orange-400 relative right-0'>

      </div>
      <div className='w-full md:w-1/2'>
        <div className=' text-center mt-7 mb-12'>
          <Logo />
        </div>
        <div>

          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default Layout