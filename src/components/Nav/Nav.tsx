
import React from 'react'
import { NavLink } from 'react-router-dom'
import NavItem from './NavItem'

const LINKS = ["Men" , "Women" ]

const Nav = () => {

  return (
    <>
    <ul className='items-start md:items-center gap-[30px] lg:gap-[70px] flex flex-col md:flex-row '>
        
          {
              LINKS.map((link,index) => <NavItem user={link} key={index}/>)
          }
    </ul>
    </>
  )
}

export default Nav