import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { fieldValidator } from "../../helpers/fieldValidator.signup"
import { Link } from 'react-router-dom'
import validateForm from './formValidator'


import { ReactComponent as Email } from '../../assets/svgs/email.svg'
import { ReactComponent as Eyes } from '../../assets/svgs/eyes.svg'

import { useDispatch } from "react-redux"
import { useSignupMutation } from "../../app/services/api"
import { PASSWORD_MESSAGE } from '../../constants'


// interface UserResponse{
//   _id: string
// }
interface IInfo {
  // first_name: string,
  // last_name: string,
  username: string,
  email: string,
  password: string

}


const INFO:IInfo = {
  // first_name: '',
  // last_name: '',
  username: '',
  email: '',
  password: ''
} 

const ERROR = {
  username: "Enter a valid username",
  email: "Enter a valid email",
  password: PASSWORD_MESSAGE
}

interface responseA {
  message: string
}
interface responseB {
  err: string
}

const SignUp = () => {
  const dispatch = useDispatch()
  const [showError, setShowError] = useState(false)
  const [errOnInitialSubmit ,SetErrorOnInitialSubmit] = useState(true)
  const [signup, { isLoading }] = useSignupMutation()
  const [info, setInfo] = useState<IInfo>(INFO)
  const [userExists, setUserExists] = useState(false)
  const [successfulSignUp, setsucessfulSignUp] = useState(false)
  //if error object properties is an empty string , then there is no error in input
  const [error, setError] = useState<IInfo>(INFO)
  const [serverError, setServerError] = useState("")
  
  // console.log(info)
  const handleChange = (e: React.FormEvent) => {  
    if(errOnInitialSubmit) SetErrorOnInitialSubmit(false)
    let { name, value } = e.target as HTMLInputElement
    let errorValue =  fieldValidator(name, value)
    e.target.addEventListener('blur' ,function(){
      // if(error[name] =="") setShowError()
    } )



    if(errorValue ==  "" && errorValue.length === 0){
      setShowError(true)
    }else setShowError(false)
    e.preventDefault()
    setError({ ...error, [name]: errorValue })
    setInfo({ ...info, [name]: value })

  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if(errOnInitialSubmit) setError(ERROR)
    if (!validateForm(error, info)) {
      setShowError(true)
    } else {

      setShowError(false)
      const { username, email, password } = info
      const formState = {
        username,
        email,
        password
      }
      
      
      try {
        // type User = | { message: string } | { err: string }
        console.log(formState)
        const user: { data?: {_id: string} , err?: string } = await signup(formState).unwrap()
        if(user.err){
          // console.log(user.err)
              setServerError(user.err)
        }else{

          // const {_id} = user?.data as
          
        if (user?.data?._id) {
          // document.body.append(user.message)
          fetch("https://shopr-server.herokuapp.com/api/cart",
          {
      
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify({userId: user?.data?._id,products: [] })
          }
          )
          .then(res => res.json())
          .then(data => {

            // console.log(data)
            setsucessfulSignUp(true)
          })
          // console.log(user.message)
          
          setUserExists(false)
        } else if (user?.err) {
          setsucessfulSignUp(false)
          setUserExists(true)
        }
        
      }
        
        
        // dispatch(setCredentials(user))
        // console.log(user)
        // push('/')
      } catch (err: any) {
        // console.log(err )
        if(err.status == 400){
          setServerError(err.data.err)
        }
        //  console.log("error: ", err)
        // toast({
          //   status: 'error',
          //   title: 'Error',
          //   description: 'Oh no, there was an error!',
          //   isClosable: true,
          // })
        }
        
        // console.log(fieldData)
        
        
        
      }
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
          <div>

              <Input
                label='Username'
                labelFor='username'
                placeholder='Doe426'
                type='text'
                value={info.username}
                handleChange={handleChange}
                showRedBorder={error.username != ''}
                />
                    {error.username != '' && (<p className='text-left text-[10px] text-red-400 mt-1'> {error.username} </p>)}
                                          
                </div>


              {/* <dniv className=' bg-green-400 flex jus'> */}
          <div>

              <Input
                showRedBorder={error.email != ''}
                label='Email'
                labelFor='email'
                placeholder='JohnDoe@gmail.com'
                type='text'
                value={info.email}
                handleChange={handleChange} >
                <Email />
              </Input>
              { error.email != '' && (<p className='text-left text-[10px] text-red-400 mt-1]'> {error.email} </p>)}
               
                  </div>


              <div>
                <Input
                  showRedBorder={error.password != ''}
                  label='Password'
                  labelFor='password'
                  placeholder='********'
                  type='password'
                  value={info.password}
                  handleChange={handleChange} >

                  <Eyes />
                </Input>

                {/* Instruction for password format */}
                 {
                   error.password == '' &&
                   <p className='text-[10px] text-left text-primary-800/50 tracking-wide mt-1'>{PASSWORD_MESSAGE}</p>
                 }
                {/* Error message when user goes against what's required for a valid password */}
                {error.password != '' && 

                (<p className='text-left text-[10px] text-red-400 mt-1'> {error.password} </p>)
                }
               
              </div>


              <div className='mt-7'>

                <Button>
                  {isLoading ? "....Signing you up" : "Sign Up"}
                </Button>
                {
                  serverError.length > 0 && serverError !== ''
                  && <p className='text-[10px] mt-1 text-red-400'>{serverError}</p>
                }
                {userExists && <p className='text-[10px] mt-1 text-red-400'>User with entered email exists already!</p>}
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