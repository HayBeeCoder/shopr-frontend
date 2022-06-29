import React from 'react'
import { ReactComponent as AirPlane } from "../assets/svgs/airplane.svg"

interface Props {
    heading: string,
    description: string,
}

const Perk: React.FC<Props> = ({ heading, description, children }) => {
    return (
        <div className='text-primary-800 text-center  max-w-xl mx-auto'>
            {/* <div className='bg-orange-400 inline-block '> */}

            <span className='p-6 md:p-4 bg-secondary-100  inline-block text-[32px] md:text-[48px] rounded-full'>
                {children}
            </span>
            {/* </div> */}
            <p className='font-bold text-2xl mt-4 mb-2'>
                {heading}
            </p>
            <p className='text-sm '>
                {description}
            </p>
        </div>
    )
}

export default Perk