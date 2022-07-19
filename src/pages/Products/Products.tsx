import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import Products_Category from '../../components/Products_Category'

import { MenCollections, WomenCollections } from "./Product_Collections"

import { useGetProductsQuery } from '../../app/services/api'
import { IProduct  } from "../../../types"
import Product from './Product'

const TEMPLATE = [1,2,3,4,5,6,7,8,9,10]

const Products = () => {
  const {search} = useLocation()
  // console.log(search.split("=")[0])
  const [productsToDisplay, setProductsToDisplay] = useState<IProduct[]>()
  const { category } = useParams()
  const collections = category == "women" ? WomenCollections : MenCollections
  const { data, error, isLoading } = useGetProductsQuery(category as string)
  let [_, setSearchParams] = useSearchParams();


  useEffect(() => {
    if (search == "") {
      setProductsToDisplay(data?.data)
    }else {
       setProductsToDisplay(data?.data?.filter( product => product.category[1] == search.split("=")[1]))
    }

  }, [isLoading, data])
 
  const handleCollectionClick = (collection: string) => {
    setSearchParams({ collection })
    if(!isLoading && !error && data){
      setProductsToDisplay(data?.data?.filter( product => product.category[1] == collection))
    }
  }


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

      <div className='overflow-x-scroll  remove-scrollbar'>
      <div className='flex  scroll-smooth snap-center    md:grid grid-cols-5 my-10 gap-2 md:gap-3 w-max md:my-8' >

        {
          collections.map((collection, index) => (
            <React.Fragment key={index}>

              <Products_Category collectionName={collection.collections} image={collection.image} handleClick={handleCollectionClick} />
            </React.Fragment>
          ))
        }
            </div>

      </div>
      {/* ==================================== */}

      <div className='pt-28 '>
        <p>Products: {isLoading ? <span className='w-5 h-4 bg-primary-100 inline-block'></span> : productsToDisplay?.length}</p>
       
      </div>


      <div className=' grid grid-cols-2 gap-y-8  md:grid-cols-4 gap-2 md:gap-8 my-14  overflow-x-hidden'>
        {
          isLoading ?
          TEMPLATE.map((_,index) => 
            (
              <div className='bg-primary-50 pb-[100%]' key={index}>

            </div>
           )):
           (
             productsToDisplay?.map((item,index) => (
               <Product item={item} key={index}/>
            
             ))
           )

        }
       
      </div>
    </div>
  )
}

export default Products