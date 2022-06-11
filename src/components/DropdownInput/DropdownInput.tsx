import React, { ReducerAction } from 'react'
import Input from '../Input'
import { ReactComponent as ArrowDown } from "../../assets/svgs/arrowdown.svg"


interface Props {
  placeholder: string,
  label: string,
  labelFor: string,
  selectref?: React.RefObject<HTMLSelectElement>
  handleChange: (e: React.FormEvent) => void
  // handleChange: (e: React.FormEvent) => void,
  // icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  // type: "text" | "password",
  // value: string,


}

const DropdownInput: React.FC<Props> = ({ label, labelFor, children, selectref, handleChange }) => {
  return (
    <div>
      <label htmlFor={labelFor} className='text-left text-xs inline-block w-full'>
        {label}
        <p className='text-left relative'>
          <select

            id={labelFor}
            name={labelFor}
            // name={labelFor}
            ref={selectref}

            className='outline-none p-3 pr-10 border-solid border-[1px] appearance-none border-secondary-600 rounded-md  block text-xs w-full relative bg-white'
            onChange={e => handleChange(e)}
          >
            {children}
          </select>
          <button className='text-[32px] absolute right-0 top-1/2 -translate-y-1/2  px-1' type='button' >

            <ArrowDown />
          </button>

        </p>
      </label>
    </div>
  )
}

export default DropdownInput