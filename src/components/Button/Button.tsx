import React from 'react'

interface Props {
    classname?: string
}

const Button: React.FC<Props> = ({children,classname = ''}) => {
    return (
        <button className={'text-white py-3 bg-secondary-600 w-full block font-bold rounded-lg ' + classname}>
            {children}
        </button>
    )
}

export default Button