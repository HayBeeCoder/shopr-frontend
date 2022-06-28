
import React, { Children } from 'react'
interface Props {
    className?: string
}
//imported into the Collections component
const SectionLayout: React.FC<Props> = ({ children, className }) => {
    const classname = "py-20 relative px-[12px] lg:px-[28px] " + className
    return (
        <section className={classname}>
            {children}</section>
    )
}

export default SectionLayout