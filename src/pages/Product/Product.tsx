import React, { useEffect, useState } from 'react'
// import { useDispatch ,} from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useGetProductQuery} from '../../app/services/api'
import Button from '../../components/Button'
import SectionLayout from '../../components/SectionLayout'
import ProductTemplate from "./ProductTemplate"
import { add } from "../../features/cart/cartSlice"
import { GetColorName } from 'hex-color-to-color-name'
import Counter from '../../components/ProductSideBar.tsx/Counter'
import { capitalize } from '../../helpers/capitalize'



const Product = () => {
    const dispatch = useAppDispatch()
    const cartProducts = useAppSelector(state => state.cart)
    const [showCartModal, setShowCartModal] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedSizeIndex, setSelectedSizeIndex] = useState<number | null>()
    const [selectedQuantity, setSelectedQuantity] = useState(1)
    const [showPlead, setShowPlead] = useState(false)
    const { id } = useParams()
    const { pathname } = useLocation()

    const isProductInCart = cartProducts?.some(product => product.productId == id)
    



    const handleCounterClick = (direction: "left" | "right") => {     
        if (direction == "left") {
            selectedQuantity > 1 && setSelectedQuantity((selectedQuantity) => selectedQuantity - 1)
        } else if (direction == "right") {
            setSelectedQuantity((selectedQuantity) => selectedQuantity + 1)
        }
    }

    const handleAddToCartButton = async (e: React.FormEvent) => {
        const payload = {
            name: data?.data.title,
            productId: data?.data._id as string,
            image: data?.data.images[0][0] as string,
            color: GetColorName(data?.data.color[selectedIndex] as string) as string,
            size: selectedSizeIndex as number,
            quantity: selectedQuantity ,
            price: data?.data.price as number 
        }
        // console.log(data?.data.price as number )
        if (selectedSizeIndex != null) {
            setShowPlead(false)
            dispatch(add(payload))
            setShowCartModal(true)

        } else {
            setShowPlead(true)
        }
    }

    useEffect(() => {
        if (showCartModal) {
            var timeout = setTimeout(() => {
                setShowCartModal(false)
            }, 2000)

        }

        return () => clearInterval(timeout)
    }, [showCartModal])

    const { data, isLoading } = useGetProductQuery(id as string)
    const handleSizeClick = (localSizeIndex: number) => {
        if (localSizeIndex != selectedSizeIndex) setSelectedSizeIndex(localSizeIndex)
        setShowPlead(false)

    }

   
    return (

        <SectionLayout className='md:flex gap-3'>
            <div className='bg-secondary-400 text-xs text-white border-[1px] px-4 py-2 rounded-sm border-solid border-secondary-600 fixed right-0 top-16 translate-x-full ease-out duration-150 pr-9 -zmr-6' style={{ transform: `${showCartModal ? "translateX(0)" : "translateX(100%)"}` }} >
                {/* <div className='bg-secondary-400 text-xs text-white border-[1px] px-4 py-2 rounded-sm border-solid border-secondary-600 fixed right-0 top-16 translate-x-full' style={ {transform: `${showCartModal ? "translateX(0)" : "translateX(100%)"}`}} > */}
                item added to cart!
            </div>
            {
                isLoading ?
                    <ProductTemplate /> :
                    <>
                        <div className='w-full block md:w-2/3 flex-shrink-0  md:grid grid-cols-2 gap-4'>
                            {
                                data?.data?.images[selectedIndex]?.map((image,index) => (
                                    <div key={index}>
                                        <img src={image} alt={data?.data.title} width="300" height="300" className="bg-orange-300 w-full " />
                                    </div>
                                ))
                            }


                        </div>
                        <div className='flex-grow'>
                            <p className='text-xs text-primary-100'>
                                <Link to={`/collections/${pathname.split('/')[2]}`}>

                                    {pathname.includes("collections") && capitalize(pathname?.split('/')[2] as string)}
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
                                <p className=' text-lg'>{`$${data?.data.price || "0.00"}`}</p>
                            </div>
                            <div className='my-4'>
                                <p className='font-bold text-xs'>Description:</p>
                                <p className='text-xs font-light'>{data?.data.description}</p>
                            </div>

                            <div className='space-y-6'>
                                <div>

                                    <p >Color: </p>
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

                                            ))
                                        }
                                    </div>
                                </div>
                                <div>
                                    <p>Quantity: </p>
                                    <>
                                        <Counter handleClick={handleCounterClick} count={selectedQuantity}/>
                                    </>
                                </div>
                                <div>
                                    <p >Size: </p>
                                    <div className='space-x-2 mt-2 flex justify-start'>
                                        {
                                            data?.data.size.map((size, index) => (
                                                <button className=' w-10 h-10 bg-primary-50 border-2 border-primary-800 border-none' style={{ borderStyle: `${selectedSizeIndex == index ? "solid" : ''}` }} onClick={(e) => handleSizeClick(index)} >
                                                    {size.size}
                                                </button>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex my-16 flex-col '>
                                {
                                    isProductInCart ?
                                        <Button classname='w-full ' >
                                            Added to Cart
                                        </Button> :
                                        <>
                                            {showPlead && <p className='text-xs text-center'>Please, select a size</p>}
                                            <Button classname='w-full' onClick={handleAddToCartButton}>
                                                Add to Cart
                                            </Button>
                                        </>
                                }
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