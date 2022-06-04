import React from 'react'
import Header from "../components/Header"
import {Outlet} from "react-router-dom"
import Footer from '../components/Footer'

const PageLayout = () => {
  return (
    <div className='flex flex-col'>
      <Header/>
      <Outlet/>
      <Footer />
    </div>
  )
}

export default PageLayout