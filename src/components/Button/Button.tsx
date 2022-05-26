import React from 'react'

interface Props {
    classname?: string,
    disabled?: boolean
}

const Button: React.FC<Props> = ({children,classname = '' , disabled = false} ) => {
    return (
        <button className={'text-white py-3 bg-secondary-600 w-full block font-bold rounded-lg disabled:opacity-50 ' + classname} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button