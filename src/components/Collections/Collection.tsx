import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as RightArrow } from "../../assets/svgs/rightarrow.svg"
interface Props {
    forWho: string,
    linkTo: string,
    src: string
}

const Collection: React.FC<Props> = ({ src, linkTo, children, forWho }) => {
    return (
        <div className=''>
            <div className=' w-full bg-secondary-100'>

                <img src={src} alt="man" width="433" height="244" className='w-full h-auto' />
            </div>
            <p className='font-light text-xs'>{forWho}</p>

            <Link to={linkTo}>

                <button className='border-b-[1px] flex items-center gap-3 hover:scale-x-105 py-3 my-1'>
                    <span className='inline-block font-semibold'>
                        Shop Now
                    </span>

                    <span className='inline-block text-[24px]'>
                        <RightArrow/>
                    </span>
                </button>
            </Link>
        </div>
    )
}

export default Collection