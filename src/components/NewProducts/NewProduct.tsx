import React from 'react'
import { Link } from 'react-router-dom'


interface Props {
    image: string,
    name: string
    className?: string
    category: string
    id: string
}

const NewProduct: React.FC<Props> = ({ image, name, category, id, className = " grid-cols-1" }) => {
    return (
        <Link to={`/collections/${category}/${id}`}>
            <div className={"bg-secondary-400/300 relative overflow-hidden hover:scale-105 cursor-pointer" + className}>
                <img src={image} alt={name} width="300" height="300" className='w-full h-auto lazyload' loading='lazy' />
                <p className='hover:no-underline text-[12px] underline text-primary-50'>{name}</p>
            </div>
        </Link>
    )
}

export default NewProduct