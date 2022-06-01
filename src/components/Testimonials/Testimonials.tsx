import React from 'react'
import SectionLayout from '../SectionLayout'
import TestimonialImage from './TestimonialImage'
import Customer1 from "../../assets/images/customer1.jpg"
import Customer2 from "../../assets/images/customer2.jpg"
import Customer3 from "../../assets/images/customer3.jpg"
import Customer4 from "../../assets/images/customer4.jpg"
import Customer5 from "../../assets/images/customer5.jpg"

import Ratings from './Ratings'
import Button from './Button'

type sizes = "large" | "small" | "medium"
let size:sizes
const Images = [
    Customer1,
    Customer2,
    Customer3,
    Customer4,
    Customer5,
]

const Testimonials = () => {
  return (
    <SectionLayout>
        <div>
            <h3 className='text-xl text-center font-bold uppercase'>From <span className='text-secondary-600'>The People</span></h3>
            <p className='text-primary-100 font-light text-center text-xs'>Our customers share their experiences with us</p>
            <div> 
                <div  className=' flex justify-between md:h-72 py-12 my-6'>
                    {
                        Images.map( (image,index,arr) => {

                            
                            if(index == 0 || index == 4 ) size = "small"
                            if(index == 1 || index == 3 ) size = "medium"
                            if(index == 2) size = "large"
                            return <TestimonialImage imageSrc={image} size= {size} images={arr}/>
                        })
                    }
                </div>
                <div className='mt-20 py-6 text-center'>
                    <h3 className='text-primary-800 font-bold text-lg'>Tyler McTominay</h3>
                    <p className='text-primary-100 text-xs'>Sydney,Australia</p>
                </div>
            <div className='flex flex-col items-stretch  max-w-[420px] mx-auto gap-2'>
                <div className='flex  items-center  justify-between md:gap-14 '>
                    <Button direction='left'/>
                  
                    <div className='flex flex-col'>
                        <Ratings rating={3}/>
                        {/* <Ratings rating={4}/>
                        <Ratings rating={5}/>
                        <Ratings rating={6}/> */}
                    </div>
                    <Button direction='right'/>
                  
                </div>
                <div className=''>
                    <p className='text-center px-2 text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices volutpat amet, turpis habitasse id cras. Facilisis morbi donec arcu egestas condimentum congue eleifend. Natoque posuere sollicitudin volutpat eget rutrum faucibus sed.
                    </p>
                </div>
            </div>
            </div>
        </div>
    </SectionLayout>
  )
}

export default Testimonials