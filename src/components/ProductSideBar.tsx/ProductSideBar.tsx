import React from 'react'
import { ReactComponent as Bin } from "../../assets/svgs/bin.svg"
import { ReactComponent as Plus } from "../../assets/svgs/plus.svg"

import { ReactComponent as Minus } from "../../assets/svgs/minus.svg"
import Counter from './Counter'

const ProductSideBar = () => {
    return (
        <div className='flex justify-between gap-1'>
            <div className='w-20 h-20 bg-slate-500'>

            </div>
            <div className='flex flex-col justify-between flex-grow'>
                <div className='flex justify-between items-start'>
                    <div>
                        <p className='leading-none'>The track pant</p>
                        <p className='divide-x-[1px] divide divide-primary-100 text-primary-100  fle leading-[100%] text-xs'>
                            <p className='pr-1 leading-none inline-block'>small</p>
                            <p className='pl-1 leading-none inline-block '>yellow</p>

                        </p>
                    </div>
                    <span className='text-[28px]'>
                        <Bin />
                    </span>
                </div>
                <div className='flex justify-between items-end '>
                    <p className='text-[16x] leading-none  p-0 ' style={{ lineHeight: '0.5' }}><pre className='inline-block text-inherit leading-[0.5]'>₦</pre>42140</p>
                   <Counter/>
                </div>


            </div>
        </div>
    )
}

export default ProductSideBar