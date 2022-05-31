import React, { useState } from 'react'
import { ReactComponent as WhitePlus } from "../../assets/svgs/pluswhite.svg"
import { ReactComponent as WhiteMinus } from "../../assets/svgs/minuswhite.svg"
import { Link } from "react-router-dom"

interface Props {
    title: string
}

const Accordion: React.FC<Props> = ({ title ,children}) => {
    const [open, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!open)
    }
    return (
        <div className=' inline-block '>
            <button onClick={handleClick} className="font-semibold flex justify-between items-center bg-secondary-600 text-white md:text-primary-800 w-full px-2 py-2 md:hidden">
                <span>
                    {title}

                </span>
                <span className=''>
                    {open ? <WhiteMinus /> : <WhitePlus />}
                </span>
            </button>
            <p className='font-bold hidden px-2  md:block md:leading-none'>{title}</p>
            <ul className={`md:flex-col md:gap-[5px] relative md:overflow-visible md:h-full md:scale-y-100 bg-secondary-600/60 text-white md:text-primary-800 origin-top flex flex-col gmd:items-start gap-1 px-2  duration-300 transition-transform overflow-hidden md:bg-transparent  ` + (open? " scale-y-1 h-full " : ' scale-y-0 h-0')}>
               {children}
            </ul>
   
        </div>
    )
}

export default Accordion