import React, { useState } from 'react'

import Button from '../../../components/Button'
import { Link } from 'react-router-dom'
import Input from '../../../components/Input'


import { ReactComponent as Email } from '../../../assets/svgs/email.svg'
import { ReactComponent as Eyes } from '../../../assets/svgs/eyes.svg'

import { fieldValidator } from "./validator"


interface IInfo {

  email: string,
  password: string
}

const INFO = {

  email: '',
  password: ''
}



const Login = () => {

  const [info, setInfo] = useState<IInfo>(INFO)
  //if error object properties is an empty string , then there is no error in input
  const [error, setError] = useState<IInfo>(INFO)

  const handleChange = (e: React.FormEvent) => {

    let { name, value } = e.target as HTMLInputElement
    setError({ ...error, [name]: fieldValidator(name, value) })
    setInfo({ ...info, [name]: value })

  }

  // console.log(error)
  // console.log(info)



  return (
    <div className='w-full text-primary-800 text-center flex flex-col gap-6 '>
      <div >
        <h1 className='text-3xl font-bold leading-none mb-1'>Good to see you again.</h1>
        <p className='text-xs text-primary-100 leading-none'>Please login to your account</p>
      </div>
      <form action="" className='mx-auto w-11/12 md:w-9/12 flex flex-col items-stretch gap-3'>
        {/* <div> */}
        {/* <label htmlFor="first_name text-xs text-left">
          <p className='text-left text-xs'>First Name</p>
          <input type="text" placeholder='John' className='text-xs outline-none p-2  border-solid border-[1px] border-secondary-600 rounded-md  block' />
        </label> */}
        {/* <label htmlFor="first_name " className='text-left text-xs inline-block'>
          First Name
          <p className='text-left relative'>
            <input type="text" placeholder='John' className='outline-none p-2 pr-9 border-solid border-[1px] border-secondary-600 rounded-md  block text-xs' />

            <span className='text-[32px] absolute right-0 top-1/2 -translate-y-1/2 '>
              <Email />
            </span>
          </p>
        </label> */}
        {/* <div className='flex flex-col gap-3 md:flex-row md:gap-4 w-full '>
        <Input label='First Name' labelFor='first_name' placeholder='John' type='text' value={info.first_name} handleChange={handleChange} />
        <Input label='Last Name' labelFor='last_name' placeholder='Doe' type='text' value={info.last_name} handleChange={handleChange} />

      </div> */}
        {/* <div className=' bg-green-400 flex jus'> */}

        <Input label='Email' labelFor='email' placeholder='JohnDoe@gmail.com' type='text' value={info.email} handleChange={handleChange} >
          <Email />
        </Input>
        {/* </div> */}
        <Input label='Password' labelFor='password' placeholder='********' type='password' value={info.password} handleChange={handleChange} >

          <Eyes />
        </Input>
        {/* </div> */}
        {/* </div> */}
        <div className='mt-3'>
          <Button>
            Log In
          </Button>
          <p className='text-xs mt-1 font-light text-primary-100'>Do not have an account?
            <Link to="/auth/signup">
              <span className='underline text-primary-800'> Sign Up</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login