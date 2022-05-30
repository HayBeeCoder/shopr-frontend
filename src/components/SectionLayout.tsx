
import React, { Children } from 'react'
interface Props { }
const SectionLayout: React.FC<Props> = ({ children }) => {
    return (
        <section className='py-20 px-[12px] lg:px-[28px]  '>
            {children}</section>
    )
}

export default SectionLayout