import React, { lazy, Suspense, useState } from "react";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import Hamburger from "./Hamburger";
import Cart from "./Cart";


// import Sidebar from "../Sidebar";

const Sidebar = lazy(() => import("../Sidebar"))
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

     pathname?: string
}

const Header: React.FC<Props> = ({ pathname }) => {
     const { token, user } = useSelector((state: RootState) => state.auth)

     const [userLoggedIn, setUserLoggedIn] = useState(false)
     const [menuOpen, setMenuOpen] = useState(false)
     
    const translate = menuOpen ? " translate-x-0" : " -translate-x-full"
     /*
     A sub-component used exclusively by Header.js ( or other components
          in this directory)
          */

     const handleHamburgerClick = (e: React.FormEvent) => setMenuOpen(true)
     const handleCloseClick = (e: React.FormEvent) => setMenuOpen(false)

     // console.log(menuOpen)
     return (
          <>
               <header className="flex justify-between px-[12px] lg:px-[28px] relative py-[13px] md:pt-[15px] items-center z-[1000] flex-grow-0 h-max flex-shrink ">


                    {/* both div and Siidebar below will be controlled by hamburger state  */}
                    {/* {menuOpen && <div className="md:hidden w-screen left-0 top-0 h-screen z-[990] bg-black/50 fixed" handleClick={handleCloseClick}></div>} */}
                    {

                         <section className={'md:hidden  fixed w-5/6 bg-white h-screen px-[13px] pt-[15px]  z-[1000] left-0 top-0 transform-gpu duration-200 ease-out ' + translate}>
                                   <Suspense fallback={<div>Loading</div>}>

                                   <Sidebar menuOpen={menuOpen} handleCloseClick={handleCloseClick} />
                         </Suspense>
                              </section>
                    }
                    <Overlay menuOpen={menuOpen} handleClick={handleCloseClick} />


                    <Maybe test={pathname != "/checkout"}>

                         <div className="md:hidden md:w-[330px] md:gap-10">
                              <Hamburger handleClick={handleHamburgerClick} />

                         </div>
                    </Maybe>

                    {/* <span className="bg-orange-400"> adsfjklsda</span> */}

                    <div className={`hidden md:block md:w-[330px] ${pathname == "/checkout" ? " scale-0" : "scale-100"}`}>
                         <Nav />

                    </div>

                    <div className="absolute flex justify-around items-center flex-grow text-center left-1/2 -translate-x-1/2">

                         <Logo />
                    </div>


                    <Maybe test={pathname != "/checkout"}>

                         <div className="flex  md:w-[330px] gap-5 justify-end ">

                              <Profile userLoggedIn={Boolean(token)} />
                              <Cart />

                         </div>
                    </Maybe >
               </header>
          </>
     )

}

export default Header;
import ProfileInactive from "./"
import Maybe from "../Maybe";
