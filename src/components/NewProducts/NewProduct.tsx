import React from 'react'


interface Props {
    image: string,
    name: string
    className?: string
}

const NewProduct: React.FC<Props> = ({ image, name ,className = " grid-cols-1"}) => {
    return (
        <div className={"bg-secondary-400/300 relative " + className}>
            <img src={image} alt={name} width="300" height="300"  className='w-full h-auto'/>
        </div>
    )
}

export default NewProduct