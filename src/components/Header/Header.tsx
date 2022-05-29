import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import Hamburger from "./Hamburger";
import Cart from "./Cart";
import Sidebar from "../Sidebar";

//import { ReactComponent as Cart } from "../../assets/svgs/bag.svg"
// import subcomponent named "widgetChild"
// import WidgetChild from "./WidgetChild"

// import helperfunctions if there are
// import {someHelperFn} from "./Header.helpers"

// import constants if there are
// import {SOME_CONSTANT} from "./Header.constants"

import Logo from "../Logo"
import Nav from "../Nav"
import Overlay from "./Overlay";
import { useSelector } from "react-redux"
import { RootState } from '../../app/store'

interface Props {
}

const Header: React.FC<Props> = ({ }) => {
     const { token, user } = useSelector((state: RootState) => state.auth)

     const [userLoggedIn, setUserLoggedIn] = useState(false)
     const [menuOpen, setMenuOpen] = useState(false)
     /*
     A sub-component used exclusively by Header.js ( or other components
          in this directory)
          */

     const handleHamburgerClick = (e: React.FormEvent) => setMenuOpen(true)
     const handleCloseClick = (e: React.FormEvent) => setMenuOpen(false)

     // console.log(menuOpen)
     return (
          <>
               <header className="flex justify-between px-[12px] lg:px-[28px] relative py-[13px] md:pt-[15px] items-center z-[1000] flex-grow-0 h-max flex-shrink">


                    {/* both div and Siidebar below will be controlled by hamburger state  */}
                    {/* {menuOpen && <div className="md:hidden w-screen left-0 top-0 h-screen z-[990] bg-black/50 fixed" handleClick={handleCloseClick}></div>} */}
                    <Sidebar menuOpen={menuOpen} handleCloseClick={handleCloseClick} />
                    <Overlay menuOpen={menuOpen} handleClick={handleCloseClick} />

                    <div className="md:hidden md:w-[330px] md:gap-10">
                         <Hamburger handleClick={handleHamburgerClick} />

                    </div>

                    <div className="hidden md:block md:w-[330px] ">
                         <Nav />

                    </div>

                    <div className="absolute flex justify-around items-center flex-grow text-center left-1/2 -translate-x-1/2">

                         <Logo />
                    </div>

                    <div className="flex  md:w-[330px] gap-5 justify-end ">

                         <Profile userLoggedIn={Boolean(token)} />
                         <Cart />

                    </div>
               </header>
          </>
     )

}

export default Header;
import ProfileInactive from "./"