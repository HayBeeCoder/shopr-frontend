import React from 'react'

interface Props {
    placeholder: string,
    label: string,
    labelFor: string,
    handleChange: (e: React.FormEvent) => void,
    // icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    type: "text"|"password",
    value: string,


}

const Input:React.FC<Props> = ({placeholder,label,labelFor,children ,type , handleChange , value} ) => {
  return (
    <label htmlFor={labelFor} className='text-left text-xs inline-block w-full'>
    {label}
    <p className='text-left relative'>
      <input
      id={labelFor}
      name= {labelFor}
       type={type}
        placeholder={placeholder}
         className='outline-none p-3 pr-10 border-solid border-[1px] border-secondary-600 rounded-md  block text-xs w-full' 
         onChange={e => handleChange(e)}
         value={value}/>
      
      {
          children && (
            <button className='text-[32px] absolute right-0 top-1/2 -translate-y-1/2  px-1'>
            {children}
          </button>
          )
      }
     
    </p>
  </label>
  )
}

export default Input