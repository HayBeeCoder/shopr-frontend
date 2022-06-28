import React from 'react'
import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import Footer from '../components/Footer'

import { useLocation } from 'react-router-dom'

const PageLayout = () => {
  const { pathname } = useLocation()
  // console.log(pathname)
  return (
    <div className='flex flex-col'>
      
        <Header pathname={pathname} />
  
      <Outlet />
      <Footer />
    </div>
  )
}

export default PageLayout