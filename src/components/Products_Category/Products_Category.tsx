import React from 'react'

interface Props {
    image: string,
    collectionName: string,
    handleClick: (collection: string) => void

}


const Products_Category = ({ image, collectionName,handleClick }: Props) => {
    const handleOnClick = (e: React.FormEvent) => {
        handleClick(collectionName.toLowerCase())
    }
    return (
        <div className='cursor-pointer overflow-hidden' onClick={handleOnClick}>
            <div className='w-[250px] h-[300px] bg-primary-100 rounded-sm overflow-hidden md:h-80  '>
                <img src={image} alt="Shirt" width={200} height={300} className='w-full object-fill  hover:scale-105 transition-transform duration-200 ease-in' />
            </div>
            <button className='text-primary-800'>
                {collectionName}
            </button>
        </div>
    )
}

export default Products_Category