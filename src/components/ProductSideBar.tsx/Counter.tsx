import React, { useState } from 'react'
import { ReactComponent as Plus } from "../../assets/svgs/plus.svg"

import { ReactComponent as Minus } from "../../assets/svgs/minus.svg"

interface Props {
  handleClick: (e: "left" | "right") => void
  count: number
}

const Counter = ({ handleClick, count }: Props) => {
  // const [count , setCount] = useState(1)
  return (
    <div className='flex gap-2 items-end '>
      <button className='text-18px p-2  rounded-md bg-primary-50' onClick={() => handleClick("left")}>
        <Minus />
      </button>
      <p>{count}</p>
      <button className='text-18px p-2  rounded-md bg-primary-50' onClick={() => handleClick("right")} >
        <Plus />
      </button>

    </div>
  )
}

export default Counter