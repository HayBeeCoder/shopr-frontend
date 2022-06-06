import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../app/services/api'
import Button from '../../components/Button'
import SectionLayout from '../../components/SectionLayout'
import ProductTemplate from "./ProductTemplate"


const capitalize = (word: string) => {
    const firstLetter = word.slice(0, 1)
    return firstLetter.toUpperCase() + word.slice(1)
}


const Product = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [images, setImages] = useState<Array<string>>()
    const { id } = useParams()
    const { pathname } = useLocation()
    console.log()

    const { data, error, isLoading } = useGetProductQuery(id as string)
    console.log(data)

    // useEffect(() => {
    //     if (!isLoading) (data?.data.images[0])
    // }, [data])
    // console.log(useParams())
    // console.log(id)
    return (

        <SectionLayout className='md:flex gap-3'>
            {
                isLoading ?
                    <ProductTemplate /> :
                    <>
                        <div className='w-full block md:w-2/3 flex-shrink-0  md:grid grid-cols-2 gap-4'>
                            {
                                data?.data.images[selectedIndex]?.map(image => (
                                    <div>
                                        <img src={image} alt={data?.data.title} width="300" height="300" className="bg-orange-300 w-full " />
                                    </div>
                                ))
                            }


                        </div>
                        <div className='flex-grow'>
                            <p className='text-xs text-primary-100'>
                                <Link to={`/collections/${pathname.split('/')[2]}`}>

                                    {pathname && capitalize(pathname?.split('/')[2] as string)}
                                    {/* {pathname?.split('/')[2]} */}
                                    {/* </span> */}
                                </Link>
                                /
                                <Link to={`/collectons/${pathname.split('/')[2]}?collections=${data?.data.category[1]}`}>
                                    {/* <span className='text-xs text-primary-100'> */}
                                    {
                                        data?.data && capitalize(data?.data?.category[1] as string)
                                        // data?.data?.category[1]
                                    }
                                    {/* </span> */}

                                </Link>
                            </p>
                            <div className='flex items-start gap-5 justify-between  my-3'>
                                <p className='text-lg  leading-snug'>{data?.data.title}</p>
                                <p className=' text-lg'>{`$${data?.data.price}`}</p>
                            </div>
                            <div className='my-4'>
                                <p className='font-bold text-xs'>Description:</p>
                                <p className='text-xs font-light'>{data?.data.description}</p>
                            </div>

                            <div>
                                <p >color: </p>
                                <div className='space-x-2 mt-2'>
                                    {
                                        data?.data.color.map((color, index) => (
                                            <button className={` p-1 rounded-full border-[1px] border-none border-primary-800 `}
                                                onClick={(e) => {

                                                    e.preventDefault()
                                                    setSelectedIndex(index)
                                                }}
                                                style={{ borderStyle: `${index == selectedIndex ? "solid" : " "}` }}>
                                                <span className='w-5 h-5 rounded-full block' style={{ background: `${color}` }}></span>
                                            </button>
                                            // <button key={index} className={"w-8 h-8 rounded-full"} style={{ background: `${c}` }}>
                                            // </button>
                                        ))
                                    }
                                </div>
                                <div>
                                    <p >size: </p>
                                    <div className='space-x-2 mt-2 flex justify-start'>
                                        {
                                            data?.data.size.map((size, index) => (
                                                <button className=' w-10 h-10 bg-primary-50'>
                                                    {size.size}
                                                </button>
                                            ))
                                        }
                                    </div>
                                    <div className='w-full flex my-16'>
                                        <Button classname='w-full'>
                                            Add to Cart
                                        </Button>
                                    </div>


                                </div>
                            </div>

                            <p>

                            </p>
                        </div>

                    </>


            }

        </SectionLayout>
    )
}

export default Product