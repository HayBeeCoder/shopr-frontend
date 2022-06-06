import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../app/services/api'
import SectionLayout from '../../components/SectionLayout'


const capitalize = (word: string) => {
    const firstLetter = word.slice(0, 1)
    return firstLetter.toUpperCase() + word.slice(1)
}


const Product = () => {

    return (
        <>
            <div className='md:w-2/3 grid grid-cols-2 gap-4'>
                {
                    [1, 2, 3, 4].map(image => (
                        <div className='pb-[100%] bg-primary-100'>
                            {/* <img src={image} alt={data?.data.title} width="300" height="300" className="bg-orange-300 w-full " /> */}
                        </div>
                    ))
                }


            </div>
            <div  className=' flex-shrink self-stretch w-[30%]' >
                <p className=' h-4 w-full bg-primary-100' >

                </p>
                <div className='  my-3 h-9 w-full bg-primary-100'>
                    {/* <p className='h-3 bg-primary-100 leading-snug'></p> */}
                    {/* <p className=' text-lg'>{`$${data?.data.price}`}</p> */}
                </div>

                <div>
                    <p>color: </p>
                    <div className='bg-primary-100 w-full h-9'>

                    </div>
                </div>

                <p>

                </p>
            </div>
        </>
    )
}

export default Product