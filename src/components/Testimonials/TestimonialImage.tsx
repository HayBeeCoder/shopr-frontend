import React from 'react'
interface Props {
    size: "large" | "medium" | "small"
    //remove number after you re ready for images
    imageSrc: string
    images: string[]
}
const TestimonialImage:React.FC<Props> = ({size , imageSrc,images}) => {
    let className = ''
    if(size == "large"){
        className="w-60 h-60 border-8 self-end translate-y-1/2"   
    }else if(size == "medium"){
      className = "w-32 h-32 border-4 self-center"
      // className = "w-20 h-20 border-2"
    }else if(size == "small") {
      className = "w-20 h-20 border-2 -translate-y-1/2 "
    }


  return (
    <div className={` rounded-full border-secondary-400 overflow-hidden relative ${className} ` }>

        <img src={imageSrc} alt="customer" width="400" height="400" className='absolute top-0 left-0 bottom-0 right-0 object-cover h-full '/> 
        {
          images.map(image => {
            // if(image == imageSrc) lett scale = 1
            return  <img src={imageSrc} alt="customer" width="400" height="400" className={'absolute top-0 left-0 bottom-0 right-0 object-cover h-full scale-0 bg-secondary-100' + (image == imageSrc && " scale-1")}/> 
   
          })
          }
        {/* <p>{imageSrc}</p> */}
    </div>
  )
}

export default TestimonialImage