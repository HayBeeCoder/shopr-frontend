import React from 'react'
import Header from "../components/Header"
import {Outlet} from "react-router-dom"
import Footer from '../components/Footer'

const PageLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default PageLayout