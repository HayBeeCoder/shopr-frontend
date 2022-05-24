import React from 'react'
import { NavLink } from 'react-router-dom'
import {ReactComponent as CartIcon } from "../../assets/svgs/bag.svg"

const Cart = () => {
    return (
        <div>

            <NavLink to="/cart">
                <span className="text-[32px] relative ">
                    <p className="inline-block leading-[0.5rem] absolute transform translate-x-2 -translate-y-2 top-0 right-0 p-2 bg-secondary-600 rounded-full text-[10px] z-10">3</p>
                    <CartIcon />
                </span>
            </NavLink>
        </div>
    )
}

export default Cart