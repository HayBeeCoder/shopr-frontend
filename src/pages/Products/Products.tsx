import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import Products_Category from '../../components/Products_Category'

import { MenCollections, WomenCollections } from "./Product_Collections"

import { useGetProductsQuery } from '../../app/services/api'
import { NewProductsHome } from "../../../types"

const TEMPLATE = [1,2,3,4,5,6,7,8,9,10]

const Products = () => {
  const [productsToDisplay, setProductsToDisplay] = useState<NewProductsHome[]>()
  const { category } = useParams()
  const collections = category == "women" ? WomenCollections : MenCollections
  let [collection, setSearchParams] = useSearchParams();


  //the condition used in below expression becomes buggy , if category becomes non-binary
  // console.log(collections)
  const { data, error, isLoading } = useGetProductsQuery(category as string)
  console.log(category)

  useEffect(() => {
    if (!isLoading) {
      setProductsToDisplay(data?.data)
    }

  }, [isLoading, data])
  // const 
  // searchParams is a URLSearchParams object
  // See https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParam
  // let user = searchParams.get("user");

  const handleCollectionClick = (collection: string) => {
    setSearchParams({ collection })
  }


  // useEffect
  //  if(!isLoading){
  //    console.log("EMi Omowale")
  //  }
  // useEffect(() => {
  //   try{
  //     const products = await 

  //   }catch(e){
  //     console.log(e)
  //   }

  // },[category])

  console.log(data)


  return (
    <div className='py-8 px-5'>
      <p className='text-primary-100  text-center'>
        <Link to="/">

          Home
        </Link>
        /
        <Link to={`/collections/${category}`}>
          {category}
        </Link>
      </p>
      <h2 className='font-light text-2xl text-center my-1'>  {category && category?.slice(0, 1).toUpperCase() + category?.slice(1)}’s clothing & apparel</h2>
      {/* Products CATEGORY : {category} */}
      {/* ========================== */}
      <div className='flex  scroll-smooth snap-center  md:grid grid-cols-5 my-10 gap-2 md:gap-3 remove-scrollbar'>

        {
          collections.map((collection, index) => (
            <React.Fragment key={index}>

              <Products_Category collectionName={collection.collections} image={collection.image} handleClick={handleCollectionClick} />
            </React.Fragment>
          ))
        }

      </div>
      {/* ==================================== */}

      <div className='pt-28 flex justify-between'>
        <p>Products: {isLoading ? <span className='w-5 h-4 bg-primary-100 inline-block'></span> : productsToDisplay?.length}</p>
        <button>
          <span>
            Filter
          </span>
        </button>
      </div>


      <div className='grid gid-cols-2 md:grid-cols-4 gap-3 my-14'>
        {
          isLoading ?
          TEMPLATE.map(template => 
            (
              <div className='bg-primary-50 pb-[100%]'>

            </div>
           )):
           (
             productsToDisplay?.map((item,arr) => (
               <div className=''>
                 <div className='w-full pb-[100%]  relative group pointer-events-auto'>

                  <img src={item.images[0][0]} alt={item.title} width="300" height="300" className='absolute w-full h-full group-hover:-z-20 pointer-events-none'/> 
                 {/* <img src={item.images[0][2]} alt={item.title} width="300" height="300" className='absolute z-10 left-0 top-0  w-full h-full'/> */}
                 </div>
                 
                 <div>
                 <p className='text-xs my-2'>{item.title}</p>
                 <p className=''>{item.price}</p>

                 </div>
               </div>
             ))
           )

        }
       
      </div>
    </div>
  )
}

export default Products