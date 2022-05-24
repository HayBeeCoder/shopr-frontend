import React, { useState} from "react";
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


interface Props {
}

const Header: React.FC<Props> = ({ }) => {
     const [userLoggedIn , setUserLoggedIn] = useState(false)
     const [menuOpen , setMenuOpen] = useState(false)
     /*
     A sub-component used exclusively by Header.js ( or other components
          in this directory)
     */

          const handleHamburgerClick = (e: React.FormEvent) => setMenuOpen(true)
          const handleCloseClick = (e: React.FormEvent) => setMenuOpen(false)
          
          // console.log(menuOpen)
     return (
          <>
               <header className="flex justify-between px-[12px] lg:px-[28px] relative py-[30px] basis-2/6 flex-1 items-center z-[1000]">
               

                    {/* both div and Siidebar below will be controlled by hamburger state  */}
                    {menuOpen && <div className="md:hidden w-screen left-0 top-0 h-screen z-[990] bg-black/50 fixed"></div>}
                    <Sidebar menuOpen={menuOpen} handleCloseClick={handleCloseClick}/>

                    <div className="md:hidden md:w-[330px] md:gap-10">
                        <Hamburger handleClick={handleHamburgerClick} />

                    </div>

                    <div className="hidden md:block md:w-[330px] ">
                         <Nav />

                    </div>

                    <div className="flex justify-around items-center flex-grow text-center relative z-[500]">

                         <Logo />
                    </div>

                    <div className="flex  md:w-[330px] gap-5 justify-end ">
                         {/* <button >
                              <span className="text-[32px]">
                                   {userLoggedIn ? <Profile/> : <ProfileInactive/>}
                              </span>
                         </button> */}
                         <Profile/>
                         <Cart/>
                         {/* <div>

                              <NavLink to="/cart">
                                   <span className="text-[32px] relative">
                                        <span className="inline-block leading-[0.5rem] absolute transform translate-x-2 -translate-y-2 top-0 right-0 p-2 bg-secondary-600 rounded-full text-[10px]">3</span>
                                        <Cart />
                                   </span>
                              </NavLink>
                         </div> */}


                    </div>
               </header>
          </>
     )

}

export default Header;