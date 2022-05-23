
import React from 'react'
import { NavLink } from 'react-router-dom'
import NavItem from './NavItem'

const LINKS = ["Men" , "Women" , "Children"]

const Nav = () => {

  return (
    <>
    <ul className='flex items-center gap-[70px]'>
        
          {
              LINKS.map((link,index) => <NavItem user={link} key={index}/>)
          }
    </ul>
    </>
  )
}

export default Nav