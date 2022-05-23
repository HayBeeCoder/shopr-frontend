import React, { useState} from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Cart } from "../../assets/svgs/bag.svg"
import { ReactComponent as Profile } from "../../assets/svgs/profile.svg"
import { ReactComponent as ProfileInactive } from "../../assets/svgs/profile-inactive.svg"

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
     /*
     A sub-component used exclusively by Header.js ( or other components
          in this directory)
     */

     return (
          <>
               <header className=" flex justify-between px-[28px] relative py-[30px] basis-2/6 flex-1 items-center">

                    <div className="  w-[330px]">

                         <Nav />
                    </div>

                    <div className=" flex-grow text-center ">

                         <Logo />
                    </div>

                    <div className="flex  w-[330px] gap-5 justify-end">
                         <button >
                              <span className="text-[32px]">
                                   {userLoggedIn ? <Profile/> : <ProfileInactive/>}
                              </span>
                         </button>
                         {/* <NavLink to="/profile"> */}
                         <div>

                              <NavLink to="/cart">
                                   <span className="text-[32px] relative">
                                        <span className="inline-block leading-[0.5rem] absolute transform translate-x-2 -translate-y-2 top-0 right-0 p-2 bg-secondary-600 rounded-full text-[10px]">3</span>
                                        <Cart />
                                   </span>
                              </NavLink>
                         </div>


                    </div>
               </header>
          </>
     )

}

export default Header;