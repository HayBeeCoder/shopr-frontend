import React from 'react'

interface Props{
    index: number,
    count: number
    children: string
}
const TestimonialWords:React.FC<Props> = ({index,count,children}) => {
const shouldScale = index == count ? "scale(1)" : "scale(0)"
const shouldShow = index == count ? "block" : "none"
 
    return (
        <p className='text-center px-2 text-sm transform-gpu transition-transform duration-300 delay-200' style={{display: `${shouldShow}`}}>
           {children}
        </p>
    )
}

export default TestimonialWords