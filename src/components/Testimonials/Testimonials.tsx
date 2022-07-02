import React, { useState } from 'react'
import SectionLayout from '../SectionLayout'
import TestimonialImage from './TestimonialImage'
import { TESTIMONIALS } from './TestimonialsData'

import Ratings from './Ratings'
import Button from './Button'
import TestimonialWords from './TestimonialWords'
import TestimonialTitle from './TestimonialTitle'
//  handleButtonClick={handleButtonClick}n'

type sizes = "large" | "small" | "medium"
let size:sizes
// const Images = [
//     Customer1,
//     Customer2,
//     Customer3,
//     Customer4,
//     Customer5,
// ]

const TOTAL = 5
type dir = "left"|"right"
const Testimonials = () => {
    const [count,setCount] = useState(0)
// console.log(count)

    const handleButtonClick = (direction: dir) => {
        if(direction == "left"){
            if(count == 0) setCount(TOTAL -1)
            else setCount((count - 1)% TOTAL)
        }else setCount((count + 1) % TOTAL)
    }


  return (
    <SectionLayout>
        <div>
            <h3 className='text-xl text-center font-bold uppercase'>From <span className='text-secondary-600'>The People</span></h3>
            <p className='text-primary-100 font-light text-center text-xs'>Our customers share their experiences with us</p>
            <div> 
                <div  className=' flex justify-between h-48 md:h-72 py-4 md:py-12 my-6'>
                    {
                        TESTIMONIALS.map( (image,index,arr) => {

                            
                            if(index == 0 || index == 4 ) size = "small"
                            if(index == 1 || index == 3 ) size = "medium"
                            if(index == 2) size = "large"
                            return <TestimonialImage size= {size} images={arr} index={index} count={count} key={index}/>
                        })
                    }
                </div>
                <div className='mt-20 py-6 text-center'>
                    { TESTIMONIALS.map((testimonial,index) => <TestimonialTitle name={testimonial.name} title={testimonial.title}  shouldShow={count == index}/>)}
                      </div>
            <div className='flex flex-col items-stretch  max-w-[420px] mx-auto gap-2'>
                <div className='flex  items-center  justify-between md:gap-14 '>
                    <Button direction='left' handleButtonClick={handleButtonClick}/>
                  
                    <div className='flex flex-col'>
                        {
                            TESTIMONIALS.map((testimonial,index) =>   <Ratings rating={testimonial.ratings} shouldShow={count == index} key={index} /> )
                        }    

                         {/* <Ratings rating={4} count={count}/> */}
                        {/* <Ratings rating={5}/> */}
                        {/* <Ratings rating={4}/>  */}
                    </div>
                    <Button direction='right' handleButtonClick={handleButtonClick}/>
                  
                </div>
                <div className=''>
                    {
                        TESTIMONIALS.map((testimonial,index) => (
                            <TestimonialWords count={count} index={index} >
                          {testimonial.testimonial}
                             </TestimonialWords>   
                        ))
                    }
                  
                </div>
            </div>
            </div>
        </div>
    </SectionLayout>
  )
}

export default Testimonials