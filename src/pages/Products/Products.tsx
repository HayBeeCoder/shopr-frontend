import React from 'react'
import { Link, useParams,useSearchParams } from 'react-router-dom'
import Products_Category from '../../components/Products_Category'
import MenShirt from "../../assets/images/men-shirts.jpg"
import MenPants from "../../assets/images/men-pants.jpg"
import MenShoes from "../../assets/images/men-shoes.jpg"
import MenSweaters from "../../assets/images/men-sweaters.jpg"
import MenDenims from "../../assets/images/men-denims.jpg"


const Products = () => {
    const {category} = useParams()
    let [collection, setSearchParams] = useSearchParams();
    // searchParams is a URLSearchParams object
    // See https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParam
    // let user = searchParams.get("user");

const handleCollectionClick = (collection: string) => {
  setSearchParams({collection})
}



  return (
    <div className='py-24 px-5'> 
    <p className='text-primary-100  text-center'>
      <Link to="/">

      Home
      </Link>
       /
       <Link to={`/collections/${category}`}>
        {category}
       </Link>
      </p>
    <h2 className='font-light text-2xl text-center my-1'>  {category && category?.slice(0,1).toUpperCase() + category?.slice(1)}’s clothing & apparel</h2>
    {/* Products CATEGORY : {category} */}
    {/* ========================== */}
    <div className='flex overflow-x-scroll scroll-mx-0 scroll-my-0 scroll-smooth snap-center  md:grid grid-cols-5 my-3 gap-2 md:gap-3 remove-scrollbar'>
      {/* <div>
        <div className='bg-primary-100'>
          <img src={MenShirt}  alt="Shirt" width={200} height={300} className='w-full'/>
        </div>
        <button className='text-primary-800'>
          Shirts
        </button>
      </div> */}
      <Products_Category collectionName='Shirts' image={MenShirt} handleClick={handleCollectionClick}/>
      <Products_Category collectionName='Pants' image={MenPants} handleClick={handleCollectionClick}/>
      <Products_Category collectionName='Shoes' image={MenShoes} handleClick={handleCollectionClick}/>
      <Products_Category collectionName='Sweaters' image={MenSweaters} handleClick={handleCollectionClick}/>
      <Products_Category collectionName='Denims' image={MenDenims} handleClick={handleCollectionClick}/>
    </div>
    {/* ==================================== */}
    </div>
  )
}

export default Products