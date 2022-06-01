import React from 'react'

interface Props{
    name: string,
    title: string
    shouldShow: boolean
}

const TestimonialTitle:React.FC<Props> = ({name,title,shouldShow}) => {
    return (
        <div style={{display: `${shouldShow ?"block" : "none"}`}}>
            <h3 className='text-primary-800 font-bold text-lg'>{name}</h3>
            <p className='text-primary-100 text-xs'>{title}</p>
        </div>
    )
}

export default TestimonialTitle