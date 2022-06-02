import React from 'react'
import NewProductTemplate from './NewProductTemplate'
import SectionLayout from '../SectionLayout'

import { useNewProductsHomeQuery } from '../../app/services/api'
import NewProduct from './NewProduct'

const NewProducts = () => {
    const { data, error, isLoading } = useNewProductsHomeQuery()

    console.log(error)
    return (
        <SectionLayout>
            <div className='-mx-[12px] px-[12px] lg:px-20 lg:-mx-[28px] grid grid-cols-2 lg:grid-cols-3 gap-4 py-36 -my-20 bg-gradient-to-b from-[#382e39]/20 via-[#382e39]/30 to-[#382e39]/20'>

                {isLoading ?
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((product, index) => {
                        return <NewProductTemplate />
                    })
                    :
                    <>
                        {data?.data.slice(0, 4).map(product => {
                            return <NewProduct name={product.title} image={product.images[0][0]} />
                        })}
                        <div className="col-span-2 lg:col-span-1 row-span-1 relative text-center flex items-center justify-center  ">
                            <h3 className='font-bold text-5xl py-50 lg:pb-0'>
                                <p className='text-secondary-500'>
                                    NEW
                                </p>
                                <p>

                                    ARRIVALS
                                </p>

                            </h3>
                        </div>
                        {data?.data.slice(4,).map(product => {
                            return <NewProduct name={product.title} image={product.images[0][0]} />
                        })}
                    </>

                }


            </div>
        </SectionLayout>
    )
}

export default NewProducts