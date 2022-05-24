import React from 'react'
import { useNavigate } from 'react-router-dom'
import Overlay from '../Overlay'
import CloseIcon from '../../CloseIcon'
import { ReactComponent as Cart } from "../../../assets/svgs/bag.svg"
import ProductSideBar from '../../ProductSideBar.tsx/ProductSideBar'

const CartModal = () => {
    const navigate = useNavigate()
    return (
        <section className='relative w-screen max-w-[420px] h-screen'>
            <Overlay menuOpen={true} handleClick={() => navigate(-1)} />
            <div className='w-screen max-w-[500px]  fixed top-0 right-0 overflow-scroll h-screen bg-white pt-[15px] md:[pt-30px]  z-[1100] py-[13px] md:py-[30px] flex flex-col '>

                <div className='flex justify-between items-center  gap-4 px-3 lg:px-7'>
                    <div className='flex-grow flex items-end gap-1'>
                        <span className='text-[32px] inline-block'>
                            <Cart />
                        </span>
                        <p className='font-bold text-2xl inline-block leading-none'>
                            Your Cart
                        </p>
                    </div>

                    <CloseIcon handleClick={() => navigate(-1)} />
                </div>

                <div className='flex-grow  top-0 bottom-0  pb-[140px] overflow-y-scroll'>
                    <div className='flex-shrink flex-grow-0  my-auto overflow-y-scroll mt-5 py-4 divide-y-[20px] divide-white px-3 lg:px-7  '>

                        {/* product  */}
                        <ProductSideBar />
                        <ProductSideBar />
                        <ProductSideBar />
                        <ProductSideBar />
                        <ProductSideBar />
                        <ProductSideBar />
                        <ProductSideBar />
                        {/* product  */}
                    </div>
<div className='flex flex-col  gap-4 shadow-[0_-2px_5px_0px_rgba(0,0,0,0.1)]  py-6 px-3 lg:px-7  w-full bg-white flex-grow flex-shrink-0 absolute bottom-0'>
                        <div className='flex justify-between '>

                            <p>subtotal</p>
                            <p className='text-[16x] leading-none  p-0 block ' >₦42140</p>
                        </div>
                        <button className='text-white py-3 bg-secondary-600 w-full block'>
                            Proceed to Checkout
                        </button>
                    </div> 

                </div>

            </div>

        </section>
    )
}

export default CartModal