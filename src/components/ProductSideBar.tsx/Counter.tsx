import React,{useState} from 'react'
import { ReactComponent as Plus } from "../../assets/svgs/plus.svg"

import { ReactComponent as Minus } from "../../assets/svgs/minus.svg"

const Counter = () => {
    const [count , setCount] = useState(1)
  return (
    <div className='flex gap-2 items-end '>
    <button className='text-18px p-2  rounded-md bg-primary-50' onClick={() => setCount(count+1)}>
        <Plus />
    </button>
    <p>{count}</p>
    <button className='text-18px p-2  rounded-md bg-primary-50' onClick={() => setCount( count == 1 ? 1 : count-1)} >
        <Minus />
    </button>

</div>
  )
}

export default Counter