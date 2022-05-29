import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { fieldValidator } from "../../helpers/fieldValidator.signup"
import { Link } from 'react-router-dom'
import validateForm from './formValidator'


import { ReactComponent as Email } from '../../assets/svgs/email.svg'
import { ReactComponent as Eyes } from '../../assets/svgs/eyes.svg'

import { useDispatch } from "react-redux"
import { useSignupMutation } from "../../app/services/auth"

interface IInfo {
  // first_name: string,
  // last_name: string,
  username: string,
  email: string,
  password: string
  
}

const INFO = {
  // first_name: '',
  // last_name: '',
  username: '',
  email: '',
  password: ''
}

interface responseA {
  message: string
}
interface responseB {
  err: string
}

const SignUp = () => {
  const dispatch = useDispatch()
  const [signup, { isLoading }] = useSignupMutation()
  const [info, setInfo] = useState<IInfo>(INFO)
  const [userExists, setUserExists] = useState(false)
  const [successfulSignUp, setsucessfulSignUp] = useState(false)
  //if error object properties is an empty string , then there is no error in input
  const [error, setError] = useState<IInfo>(INFO)
  console.log(info)
  const handleChange = (e: React.FormEvent) => {

    let { name, value } = e.target as HTMLInputElement
    setError({ ...error, [name]: fieldValidator(name, value) })
    setInfo({ ...info, [name]: value })

  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const {username , email,password} = info
    const formState = {
      username,
      email,
      password
    }


    try {
      type User = | { message: string } | { err: string }
      const user: { message?: string, err?: string } = await signup(formState).unwrap()

      if (user.message) {
        // document.body.append(user.message)
        setsucessfulSignUp(true)
console.log(user.message)

        setUserExists(false)
      } else if (user?.err) {
        setsucessfulSignUp(false)
        setUserExists(true)
      }



      // dispatch(setCredentials(user))
      // console.log(user)
      // push('/')
    } catch (err) {
       console.log("error: ", err)
      // toast({
      //   status: 'error',
      //   title: 'Error',
      //   description: 'Oh no, there was an error!',
      //   isClosable: true,
      // })
    }

    // console.log(fieldData)



  }


  return (
    <div className='w-full text-primary-800 text-center flex flex-col gap-6 '>
      {
        !successfulSignUp
        &&

        <div >
          <h1 className='text-3xl font-bold leading-none'>Create An Account</h1>
          <p className='text-xs text-primary-100 leading-none'>Complete your sign up and start shopping</p>
        </div>
      }
      <form className='mx-auto w-11/12 md:w-9/12 flex flex-col items-stretch gap-3' onSubmit={handleSubmit}>
        {
          successfulSignUp ?
            <div>

              <p>You were able to sign up successfully.</p>
              <Link to="/auth/login">

                <Button>Proceed to Log In</Button>
              </Link>
            </div>
            :
            <>
              {/* <div className='flex flex-col gap-3 md:flex-row md:gap-4 w-full '> */}
                {/* <Input label='First Name' labelFor='first_name' placeholder='John' type='text' value={info.first_name} handleChange={handleChange} /> */}
                {/* <Input label='Last Name' labelFor='last_name' placeholder='Doe' type='text' value={info.last_name} handleChange={handleChange} /> */}

              {/* </div> */}
                <Input label='Username' labelFor='username' placeholder='Doe426' type='text' value={info.username} handleChange={handleChange} />

              {/* <dniv className=' bg-green-400 flex jus'> */}

              <Input label='Email' labelFor='email' placeholder='JohnDoe@gmail.com' type='text' value={info.email} handleChange={handleChange} >
                <Email />
              </Input>
              <Input label='Password' labelFor='password' placeholder='********' type='password' value={info.password} handleChange={handleChange} >

                <Eyes />
              </Input>

              <div className='mt-7'>

                <Button disabled={!validateForm(error, info)}>
                  {isLoading ? "...." : "Sign Up"}
                </Button>

                {userExists && <p className='text-[#DA3B39]'>User with entered email exists already!</p>}
                <p className='text-xs mt-1 text-primary-100'>Already have an account?
                  <Link to="/auth/login">
                    <span className='underline text-primary-800'> Log In</span>
                  </Link>
                </p>
              </div>
            </>
        }
      </form>
    </div>
  )
}


export default SignUp