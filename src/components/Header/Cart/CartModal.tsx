import React from 'react'
import { useNavigate } from 'react-router-dom'
import Overlay from '../Overlay'
import CloseIcon from '../../CloseIcon'
import { ReactComponent as Cart } from "../../../assets/svgs/bag.svg"
import ProductSideBar from '../../ProductSideBar.tsx/ProductSideBar'

const CartModal = () => {
    const navigate = useNavigate()
    return (
        <section>
            <Overlay menuOpen={true} handleClick={() => navigate(-1)} />
            <div className='w-screen max-w-[400px]  fixed top-0 right-0 h-screen bg-white pt-[15px] md:[pt-30px] px-3 lg:px-7 z-[1100] py-[13px] md:py-[30px]'>
                <div className='flex justify-between items-center gap-4'>
                    <div className='flex-grow flex items-end gap-1'>
                        <span className='text-[32px] inline-block'>
                            <Cart />
                        </span>
                        <p className='font-bold text-2xl inline-block leading-5'>
                            Your Cart
                        </p>
                    </div>

                    <CloseIcon handleClick={() => navigate(-1)} />
                </div>
                <div className='mt-5 py-4 flex flex-col gap-10 justify-around  '>

                    {/* product  */}
                  <ProductSideBar/>
                  <ProductSideBar/>
                  <ProductSideBar/>
                {/* product  */}
                </div>
            </div>
        </section>
    )
}

export default CartModal