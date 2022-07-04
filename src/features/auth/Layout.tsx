import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../../components/Logo'
import Model from "../../assets/images/login-model.jpg"
import WomanJeans from "../../assets/images/woman-jeans.jpg"

const Layout = () => {
  return (
    <div className='w-screen h-screen flex'>
      <div className='hidden md:block w-1/2 h-full bg-secondary-400 relative right-0 overflow-hidden'>
    {/* <img src={WomanJeans} alt="" className='w-full object-cover relative -translate-y-1/4' /> */}
        <picture >
          <source srcSet={Model} media="(min-width: 768px)"/>
          <img src="" alt="" className='md:object-cover md:h-full w-full'/>
        </picture> 
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