import React, { useState } from 'react'

import Button from '../../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../../components/Input'

import { useGetCartQuery, useLoginMutation } from '../../../app/services/api'
import { setCredentials } from '../authSlice'
import { ReactComponent as Eyes } from '../../../assets/svgs/eyes.svg'

import { fieldValidator } from "./validator"
import { useDispatch } from "react-redux"



interface IInfo {

  username: string,
  password: string
}

const INFO = {

  username: '',
  password: ''
}


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userId,setUserId] = useState('')
  // const {data} = userId != '' && useGetCartQuery(userId)
  const [login, { isLoading }] = useLoginMutation()
  const [badInput, setBadInput] = useState<boolean>(false)
  const [info, setInfo] = useState<IInfo>(INFO)
  const [error, setError] = useState<IInfo>(INFO)
  //if error object properties is an empty string , then there is no error in input
  // console.log(data)
  // console.log(useGetCartQuery(userId))
  const handleChange = (e: React.FormEvent) => {

    let { name, value } = e.target as HTMLInputElement
    setError({ ...error, [name]: fieldValidator(name, value) })
    setInfo({ ...info, [name]: value })

  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { username, password } = info
    const formState = {
      username,
      password
    }

    try {
      const user = await login(formState).unwrap()
      
      dispatch(setCredentials(user))
      localStorage.setItem("token", user?.token)
      //  console.log(user)
      navigate('/')

    } catch (err: any) {
      if (err.status == 400) {
        setBadInput(true)
      } else console.log(err)
      // if()

    }

    // const login = async () => {

  }




  return (
    <div className='w-full text-primary-800 text-center flex flex-col gap-6 '>
      <div >
        <h1 className='text-3xl font-bold leading-none mb-1'>Good to see you again.</h1>
        <p className='text-xs text-primary-100 leading-none'>Please login to your account</p>
      </div>
      <form className='mx-auto w-11/12 md:w-9/12 flex flex-col items-stretch gap-3' onSubmit={handleSubmit}>
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
        <div>

          <Input
            label='Username'
            labelFor='username'
            placeholder='Doe426'
            type='text'
            value={info.username}
            handleChange={handleChange}
            showRedBorder={false}
          />

        </div>


        {/* <Email /> */}

        {/* </div> */}
        <div>

          <Input
            label='Password'
            labelFor='password'
            placeholder='********'
            type='password'
            value={info.password}
            handleChange={handleChange}
            showRedBorder={false}
          >
            {/* <Input label='Password' labelFor='password' placeholder='********' type='password' value={info.password} handleChange={handleChange} > */}

            <Eyes />
          </Input>
          {/* </Input> */}
        </div>


        <div className='mt-3'>
          <Button>
            {isLoading ? "...Loggin In" : "Log In"}
          </Button>
          {
            badInput
            &&

            <p className='text-[#DA3B39] text-xs'>:&#40; Seems something is wrong with your inputs!</p>
          }
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