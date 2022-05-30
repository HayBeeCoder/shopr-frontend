
import React, { Children } from 'react'
interface Props { 
    className?: string
}
const SectionLayout: React.FC<Props> = ({ children ,className}) => {
    const classname = "py-20 px-[12px] lg:px-[28px] " + className
    return (
        <section className={classname}>
            {children}</section>
    )
}

export default SectionLayout