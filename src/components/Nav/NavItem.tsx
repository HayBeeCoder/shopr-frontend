import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
    user: string
}


const NavItem: React.FC<Props> = ({ user }) => {

    const activeClassName = "text-secondary-600 text-2xl no-underline "


    return (
        <NavLink
            to={"collections/" + user.toLowerCase()}
            className={({ isActive }) =>
                isActive ? activeClassName : ""
            }
        >
            <li className='text-[18px] font-normal underline-offset-4 hover:underline no-underline ' >



                {user}
            </li>
        </NavLink>
    )
}

export default NavItem