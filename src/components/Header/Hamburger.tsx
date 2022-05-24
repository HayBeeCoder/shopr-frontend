import React from 'react'
import { ReactComponent as HamburgerIcon } from "../../assets/svgs/hamburger.svg"

interface Props {
    handleClick: (e: React.FormEvent) => void
}

const Hamburger:React.FC<Props> = ({handleClick}) => {
    return (
        <button className="text-[32px] p-1" onClick={handleClick}>
            <HamburgerIcon />
        </button>
    )
}

export default Hamburger
