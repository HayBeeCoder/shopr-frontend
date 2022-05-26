import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { fieldValidator } from "../../helpers/fieldValidator.signup"
import { Link } from 'react-router-dom'
import validateForm from './formValidator'


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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const fieldData = {
      username: info.first_name + ' ' + info.last_name,
      email: info.email,
      password: info.password
    }

    // console.log(fieldData)


    
  }


  return (
    <div className='w-full text-primary-800 text-center flex flex-col gap-6 '>
      <div >
        <h1 className='text-3xl font-bold leading-none'>Create An Account</h1>
        <p className='text-xs text-primary-100 leading-none'>Complete your sign up and start shopping</p>
      </div>
      <form action="" className='mx-auto w-11/12 md:w-9/12 flex flex-col items-stretch gap-3' onSubmit={handleSubmit}>
      
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
          <Button disabled={!validateForm(error,info  )}>
            Sign Up
          </Button>
          <p className='text-xs mt-1 text-primary-100'>Already have an account?
          <Link to="/auth/login">
           <span className='underline text-primary-800'> Log In</span> 
          </Link>
           </p>
        </div>
      </form>
    </div>
  )
}


export default SignUp