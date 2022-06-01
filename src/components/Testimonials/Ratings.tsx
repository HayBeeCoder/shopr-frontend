import React from 'react'

import {ReactComponent as OutlineStar} from "../../assets/svgs/staroutline.svg"
import { ReactComponent as SolidStar} from "../../assets/svgs/starfilled.svg"
const ratings = [1,2,3,4,5]

interface Props{
    rating: number
    shouldShow: boolean
}

const Ratings:React.FC<Props> = ({rating,shouldShow}) => {

  return (
    <div className='inline-flex ' style={{display: `${shouldShow ? "inline-flex" : "none"}`}}>
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