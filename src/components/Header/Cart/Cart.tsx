import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../../app/hooks'
import {ReactComponent as CartIcon } from "../../../assets/svgs/bag.svg"

const Cart = () => {
    const location = useLocation()
  const cartProducts = useAppSelector(state => state.cart)
    return (
        <div>

            <Link to="/cart"  state={{ backgroundLocation: location }}>
                <span className="text-[32px] relative ">
                    <p className="inline-block  absolute transform translate-x-2 -translate-y-2 top-0 right-0 bg-secondary-600  text-[10px] leading-none p-2 rounded-full z-10">{cartProducts.reduce((previousValue, currentItem) => (currentItem.quantity + previousValue ), 0)}</p>
                    {/* <p>sdfjkalfdfj</p> */}
                    <CartIcon />
                </span>
            </Link>
        </div>
    )
}

export default Cart