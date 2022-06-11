import React from 'react'

interface Props {
    classname?: string,
    disabled?: boolean,
    onClick?:  (e: React.FormEvent) => void
}

const Button: React.FC<Props> = ({children,classname = '' , disabled = false , onClick} ) => {
    return (
        <button className={'text-white py-3 bg-secondary-600 w-full block font-bold rounded-lg disabled:opacity-50 disabled:opacity-60 ' + classname} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button