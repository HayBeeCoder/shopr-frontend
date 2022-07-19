import { useEffect, useState } from 'react'
import { ReactComponent as Bin } from "../../assets/svgs/bin.svg"
import Counter from './Counter'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { decrement, increment, remove } from '../../features/cart/cartSlice'
import { useUpdateCartMutation } from '../../app/services/api'

interface Props {
    name: string,
    size: string,
    color: string,
    quantity: number,
    id: string
    image: string
    price: number

}

const ProductSideBar = ({ name, price, size, color, quantity, id, image }: Props) => {
    const [updateCart, result] = useUpdateCartMutation()
    const [count, setCount] = useState(quantity)
    const [userId, token] = useAppSelector(state => [state?.auth?.user?._id, state?.auth?.token]) as string[]

    const cart = useAppSelector(state => state?.cart)
    const dispatch = useAppDispatch()



    const handleCounterClick = async (direction: "left" | "right") => {
        if (direction == "left") {
            dispatch(decrement(id))
            count > 1 && setCount((count) => count - 1)
        } else if (direction == "right") {
            setCount((count) => count + 1)
            dispatch(increment(id))
        }
    }

  
    return (
        <div className='flex justify-between gap-1'>
            <div className='w-20 h-20 bg-slate-500 relative flex-shrink-0'>
                <img src={image} width="80" height="80" className='absolute top-0 left-0 right-0 bottom-0' />
            </div>
            <div className='flex flex-col justify-between flex-grow'>
                <div className='flex justify-between items-start'>
                    <div>
                        <p className='leading-none text-sm mr-2'>{name}</p>
                        <div className='divide-x-[1px]  divide-primary-100 text-primary-100   leading-[100%] text-xs'>
                            <p className='pr-1 leading-none inline-block '>{color}</p>
                            <p className='pl-1 leading-none inline-block'>{size}</p>

                        </div>
                    </div>
                    <button className='text-[28px]' onClick={() => dispatch(remove(id))}>

                        <Bin />
                    </button>
                </div>
                <div className='flex justify-between items-end '>
                    <p className='text-[16x] leading-none  p-0 ' >
                        {`$${price}`}</p>
                    <Counter count={count} handleClick={handleCounterClick} />
                </div>


            </div>
        </div>
    )
}

export default ProductSideBar