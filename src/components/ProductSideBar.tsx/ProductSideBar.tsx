import React, { useState } from 'react'
import { ReactComponent as Bin } from "../../assets/svgs/bin.svg"
import { ReactComponent as Plus } from "../../assets/svgs/plus.svg"

import { ReactComponent as Minus } from "../../assets/svgs/minus.svg"
import Counter from './Counter'
import { useAppDispatch } from '../../app/hooks'
import { add, decrement, increment, remove } from '../../features/cart/cartSlice'

interface Props {
    name: string,
    size: string,
    color: string,
    quantity: number,
    id: string
    image: string
}

const ProductSideBar = ({ name, size, color, quantity ,id , image}: Props) => {
    const [count, setCount] = useState(quantity)
    const dispatch = useAppDispatch()
    


    const handleCounterClick = (direction: "left" | "right") => {
        console.log(direction)
        if (direction == "left") {
            // item quantity of zero is meaningless
            dispatch(decrement(id))
            count > 1 && setCount((count) => count - 1)
        } else if (direction == "right") {
            setCount((count) => count + 1)
            dispatch(increment(id))
        }
    }
    return (
        <div className='flex justify-between gap-1'>
            <div className='w-20 h-20 bg-slate-500'>
            <img src={image} width="80" height="80" className='w-full'/>
            </div>
            <div className='flex flex-col justify-between flex-grow'>
                <div className='flex justify-between items-start'>
                    <div>
                        <p className='leading-none'>{name}</p>
                        <p className='divide-x-[1px] divide divide-primary-100 text-primary-100  fle leading-[100%] text-xs'>
                            <p className='pr-1 leading-none inline-block'>{size}</p>
                            <p className='pl-1 leading-none inline-block '>{color}</p>

                        </p>
                    </div>
                    <button className='text-[28px] bg-green-300' onClick={() => dispatch(remove(id))}>

                        <Bin />
                    </button>
                </div>
                <div className='flex justify-between items-end '>
                    <p className='text-[16x] leading-none  p-0 ' ><span className='leading-[0.7] inline-block '>₦</span>42140</p>
                    <Counter count={count} handleClick={handleCounterClick} />
                </div>


            </div>
        </div>
    )
}

export default ProductSideBar