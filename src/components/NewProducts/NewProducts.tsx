import React from 'react'
import NewProductTemplate from './NewProductTemplate'
import SectionLayout from '../SectionLayout'

import { useNewProductsHomeQuery } from '../../app/services/api'
import NewProduct from './NewProduct'
import BackGroundMobile from "../../assets/images/new-arrival-mobile.jpg"
import BackGroundDesktop from "../../assets/images/new-arrival-desktop.jpg"

const NewProducts = () => {
    const { data, error, isLoading } = useNewProductsHomeQuery()


    return (
        <SectionLayout>
            <div className='-mx-[12px] px-[12px] lg:px-20 lg:-mx-[28px] grid grid-cols-2 lg:grid-cols-3 gap-8 py-36 -my-20 bg-gradient-to-b from-[#382e39]/40  via-[#382e39]/60 to-[#382e39]/40 relative'>
                {/* <div className='-mx-[12px] px-[12px] lg:px-20 lg:-mx-[28px] grid grid-cols-2 lg:grid-cols-3 gap-4 py-36 -my-20 bg-gradient-to-b from-[#382e39]/20 via-[#382e39]/70 to-[#382e39]/20'> */}
                <div className='absolute top-0 left-0 bottom-0 right-0 bg-green-300 -z-20 overflow-hidden'>
                  

                    {/* Optimization strategy  */}
                    <picture>
                        <source media="(max-width: 799px)" srcSet={BackGroundMobile}/>
                        <source media="(min-width: 800px)" srcSet={BackGroundDesktop}/>
                        <img src={BackGroundMobile} className="object-cover w-full h-full scale-150 -translate-y-1/4"/>

                    </picture>

                </div>

                {isLoading ?
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((product, index) => {
                        return <NewProductTemplate key={index} />
                    })
                    :
                    <>
                        {data?.data.slice(0, 4).map((product, index) => {
                            return <NewProduct
                                name={product.title}
                                image={product.images[0][0]}
                                key={index}
                                category={product.category[0]}
                                id={product._id} />

                        })}
                        <div className="col-span-2 lg:col-span-1 row-span-1 relative text-center flex items-center justify-center  ">
                            <div className='text-primary-50 '>

                                <h3 className='font-bold text-2xl lg:py-0 '>
                                    <span className='text-secondary-500 mr-2'>
                                        NEW
                                    </span>
                                    {/* <p className=''> */}

                                        ARRIVALS
                                    {/* </p> */}

                                </h3>
                                <p className='text-xs'>
                                   
                                Looking for new women's and men's clothes? Stay current with 2022 fashion and discover trendy clothes and shoes for both men and women . With our new arrivals, we feature chic, sophisticated looks to showcase your unique style, with new women’s and men's clothing that's constantly changing but always on-trend.
                                </p>
                            </div>
                        </div>
                        {data?.data.slice(4,).map((product,index) => {
                            return <NewProduct
                                name={product.title}
                                image={product.images[0][0]}
                                key={index}
                                category={product.category[0]}
                                id={product._id}

                            />


                        })}
                    </>

                }


            </div>
        </SectionLayout>
    )
}

export default NewProducts