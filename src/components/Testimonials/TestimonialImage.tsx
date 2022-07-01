import React from 'react'
import { arrayBuffer } from 'stream/consumers'
interface Props {
  size: "large" | "medium" | "small"
  //remove number after you re ready for images
  // imageSrc: string 
  index: number,
  images: {
    name: string;
    title: string;
    image: string;
    ratings: number;
    testimonial: string;
  }[]
  count: number
}

let LENGTH: number
const TestimonialImage: React.FC<Props> = ({ size, index, images, count }) => {
  LENGTH = images.length
  let finalIndex = (index + count)
  if (finalIndex >= LENGTH) finalIndex = finalIndex % LENGTH
  // console.log("index: ",index)
  // console.log("finalIndex: ",finalIndex)
  let className = ''
  if (size == "large") {
    className = "w-32 h-32 md:w-60 md:h-60 border-2 md:border-8 self-end translate-y-1/2"
  } else if (size == "medium") {
    className = "w-14 h-14 md:w-32 md:h-32 border-2 md:border-4 self-center"
    // className = "w-20 h-20 border-2"
  } else if (size == "small") {
    className = "w-10 h-10 md:w-16 md:h-16 border-2 -translate-y-1/2 "
  }


  return (
    <div className={` rounded-full border-secondary-400 overflow-hidden relative ${className} `}>

      {/* <img src={imageSrc} alt="customer" width="400" height="400" className='absolute top-0 left-0 bottom-0 right-0 object-cover h-full '/>  */}
      <img  src={images[finalIndex].image} alt="customer" width="400" height="400" className={'relative md:absolute top-0 left-0 bottom-0 right-0 object-cover h-full scale-100 bg-secondary-100  rounded-full '} style={{ opacity: `${index == Math.floor(LENGTH / 2) ? "1" : "0.6"}` }} loading = "lazy"/>


      {/* <p>{imageSrc}</p> */}
    </div>
  )
}

export default TestimonialImage