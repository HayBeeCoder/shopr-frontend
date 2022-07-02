import React, { useCallback } from 'react'

interface Props {
    placeholder: string,
    label: string,
    labelFor: string,
    handleChange: (e: React.FormEvent) => void,
    // icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    type: "text"|"password",
    value: string,
    showRedBorder: boolean


}

let inputType:string

const Input:React.FC<Props> = ({placeholder,label,labelFor,children ,type , handleChange , value , showRedBorder} ) => {

const handleEyesClick = (e: React.FormEvent) => {
  const previousSibling = e.currentTarget.previousSibling as HTMLInputElement
  if(inputType === undefined && previousSibling.type == "password") inputType = previousSibling.type
  if(inputType){
    if(previousSibling.type == "password") {
      previousSibling.type = "text"
    }else previousSibling.type = "password"
  }
  // console.log(e)
  // console.log(e.currentTarget.children)
// console.log(children)
  // console.log(previousSibling.type)
  // console.log(previousSibling)
}

  return (
    <label htmlFor={labelFor} className='text-left text-xs inline-block w-full'>
    {label}
    <p className='text-left relative  mt-[0.25rem]'>
      <input
      id={labelFor}
      name= {labelFor}
       type={type}
        placeholder={placeholder}
         className={`outline-none p-3 pr-10 border-solid border-[1px]  rounded-md  block text-xs w-full focus:outline-none focus:border-primary-800 ${showRedBorder ? "border-red-400" : "border-secondary-600"}` }
         onChange={e => handleChange(e)}
         value={value}/>
      
      {
          children && (
            <button className='text-[32px] absolute right-0 top-1/2 -translate-y-1/2  px-1' type='button' onClick={handleEyesClick} tabIndex={-1}> 
            {children}
          </button>
          )
      }
     
    </p>
  </label>
  )
}

export default Input