import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { fieldValidator } from "../../helpers/fieldValidator.signup"


import { ReactComponent as Email } from '../../assets/svgs/email.svg'
import { ReactComponent as Eyes } from '../../assets/svgs/eyes.svg'



interface IInfo {

  first_name: string,
  last_name: string,
  email: string,
  password: string
}

const INFO = {
  first_name: '',
  last_name: '',
  email: '',
  password: ''
}

const SignUp = () => {
  const [info, setInfo] = useState<IInfo>(INFO)
  //if error object properties is an empty string , then there is no error in input
  const [error, setError] = useState<IInfo>(INFO)

  const handleChange = (e: React.FormEvent) => {

    let { name, value } = e.target as HTMLInputElement
    setError({ ...error, [name]: fieldValidator(name, value) })
    setInfo({ ...info, [name]: value })

  }

  console.log(error)
  console.log(info)



  return (
    <div className='w-full text-primary-800 text-center flex flex-col gap-6 '>
      <div >
        <h1 className='text-3xl font-bold leading-none'>Create An Account</h1>
        <p className='text-xs text-primary-100 leading-none'>Complete your sign up and start shopping</p>
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
        <div className='flex flex-col gap-3 md:flex-row md:gap-4 w-full '>
          <Input label='First Name' labelFor='first_name' placeholder='John' type='text' value={info.first_name} handleChange={handleChange} />
          <Input label='Last Name' labelFor='last_name' placeholder='Doe' type='text' value={info.last_name} handleChange={handleChange} />

        </div>
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
        <div className='mt-7'>
          <Button>
            Sign Up
          </Button>
          <p className='text-xs'>Already have an account? <span className='underline'>Log In</span> </p>
        </div>
      </form>
    </div>
  )
}


export default SignUp