import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../../app/hooks'
import {ReactComponent as CartIcon } from "../../../assets/svgs/bag.svg"

const Cart = () => {
    const location = useLocation()
  const NumberOfCartItems  = useAppSelector(state => state.cart.length)
    return (
        <div>

            <Link to="/cart"  state={{ backgroundLocation: location }}>
                <span className="text-[32px] relative ">
                    <p className="inline-block leading-[0.5rem] absolute transform translate-x-2 -translate-y-2 top-0 right-0 p-2 bg-secondary-600 rounded-full text-[10px] z-10">{NumberOfCartItems}</p>
                    <CartIcon />
                </span>
            </Link>
        </div>
    )
}

export default Cart