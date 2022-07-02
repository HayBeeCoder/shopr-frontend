import React, { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { IProduct } from "../../../types"

interface Props {
    item: IProduct
}

const Product = ({ item }: Props) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const { pathname } = useLocation()

    return (
        <Link to={`${pathname}/${item._id}`}>

            <div className=''>
                <div className='w-full  overflow-hidden'>

                    <img src={item.images[selectedIndex][0]} alt={item.title} width="300" height="300" className=' w-full hover:scale-110' />
                    {/* <img src={item.images[0][2]} alt={item.title} width="300" height="300" className='absolute z-10 left-0 top-0  w-full h-full'/> */}
                </div>

                <div className='flex justify-between  items-start my-2 gap-5'>
                    <p className='text-xs '>{item.title}</p>
                    <p className='flex-shrink-0 text-xs'>{`$${item.price}`}</p>

                </div>
                <div className='space-x-1z'>

                    {
                        item.color.map((color, index) => (
                            <button className={` p-1 rounded-full border-[1px] border-none border-primary-800 `}
                                key={index}
                                onClick={(e) => {

                                    e.preventDefault()
                                    setSelectedIndex(index)
                                }}
                                style={{ borderStyle: `${index == selectedIndex ? "solid" : " "}` }}>
                                <span className='w-5 h-5 rounded-full block' style={{ background: `${color}` }}></span>
                            </button>
                        ))
                    }
                </div>
            </div>
        </Link>
    )
}

export default Product