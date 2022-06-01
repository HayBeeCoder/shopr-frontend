import React from 'react'
import {ReactComponent as LeftArrow} from "../../../assets/svgs/arrowleft.svg"
import {ReactComponent as RightArrow} from "../../../assets/svgs/arrowright.svg"

type dir = "left" | "right"
interface Props {
    direction: dir
    handleButtonClick: (direction: dir ) => void
}
const Button: React.FC<Props> = ({ direction , handleButtonClick }) => {

    return (
        <button className='text-[32px] rounded-full p-3 bg-secondary-100 ' onClick={() => handleButtonClick(direction)}>
            {
             direction == "left" ? 
            <LeftArrow /> :
            <RightArrow/>
            }
        </button>
    )
}

export default Button