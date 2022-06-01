import React from 'react'

import {ReactComponent as OutlineStar} from "../../assets/svgs/staroutline.svg"
import { ReactComponent as SolidStar} from "../../assets/svgs/starfilled.svg"
const ratings = [1,2,3,4,5]

interface Props{
    rating: number
}

const Ratings:React.FC<Props> = ({rating}) => {
  return (
    <div className='inline-flex '>
        {
            ratings.map((r,index) => {
                if(index < rating) return <SolidStar key={index}/>
                return <OutlineStar key={index}/>
            })
        }
    </div>
  )
}

export default Ratings