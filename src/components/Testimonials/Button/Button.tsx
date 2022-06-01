import React from 'react'
import {ReactComponent as LeftArrow} from "../../../assets/svgs/arrowleft.svg"
import {ReactComponent as RightArrow} from "../../../assets/svgs/arrowright.svg"


interface Props {
    direction: "left" | "right"
}
const Button: React.FC<Props> = ({ direction }) => {
    return (
        <button className='text-[32px] rounded-full p-3 bg-secondary-100 ' onClick={() => { }}>
            {
             direction == "left" ? 
            <LeftArrow /> :
            <RightArrow/>
            }
        </button>
    )
}

export default Button