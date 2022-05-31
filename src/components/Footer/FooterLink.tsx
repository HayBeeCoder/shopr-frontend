import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    to: string
}

const FooterLink: React.FC<Props> = ({ children, to }) => {
    return (
        <Link to={to}>
            <li className='py-2 md:py-1'>
                {children}
            </li>
        </Link>
    )
}

export default FooterLink