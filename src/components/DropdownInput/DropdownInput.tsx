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
  value: string,


}

const DropdownInput: React.FC<Props> = ({ label, labelFor, children, selectref, handleChange,value }) => {
  return (
    <div>
      <label htmlFor={labelFor} className='text-left text-xs inline-block w-full '>
        {label}
        <p className='text-left relative  mt-[0.25rem]'>
          <select
            value={value}
            id={labelFor}
            name={labelFor}
            // name={labelFor}
            ref={selectref}

            className='outline-none p-3 pr-10 border-solid border-[1px] appearance-none border-secondary-600 rounded-md  block text-xs w-full relative bg-white focus:outline-noen focus:border-primary-800  '
            onChange={e => handleChange(e)}
          >
            {children}
          </select>
          <button className=' absolute right-0 top-1/2 -translate-y-1/2  p-3' type='button' tabIndex={-1} >

            <>

              <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" focusable="false" role="presentation" style= {{width: "0.8em", height: "0.8em"}}>
                {/* <path d="M10.193 3.97a.75.75 0 0 1 1.062 1.062L6.53 9.756a.75.75 0 0 1-1.06 0L.745 5.032A.75.75 0 0 1 1.807 3.97L6 8.163l4.193-4.193z" fill="#1A151A" fill-rule="evenodd"> */}

                <path d="M10.193 3.97a.75.75 0 0 1 1.062 1.062L6.53 9.756a.75.75 0 0 1-1.06 0L.745 5.032A.75.75 0 0 1 1.807 3.97L6 8.163l4.193-4.193z" fill="#1A151A" fill-rule="evenodd"></path>

              </svg>

            </>
            {/* <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" focusable="false" role="presentation" style="width: 0.8em; height: 0.8em;"><path d="M10.193 3.97a.75.75 0 0 1 1.062 1.062L6.53 9.756a.75.75 0 0 1-1.06 0L.745 5.032A.75.75 0 0 1 1.807 3.97L6 8.163l4.193-4.193z" fill="var(--colorIconChevronDown)" fill-rule="evenodd"></path></svg> */}
            {/* <ArrowDown /> */}


          </button>

        </p>
      </label>
    </div>
  )
}

export default DropdownInput