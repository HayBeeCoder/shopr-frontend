import React, { useState } from 'react'
import Input from '../Input'
import SectionLayout from '../SectionLayout'


import { ReactComponent as Email } from '../../assets/svgs/email.svg'
import Button from '../Button'

const Checkout = () => {
  const [email, setEmail] = useState('')
  return (
    // <div> Checkout</div>
    <SectionLayout className=''>
      <div>
        <div className='flex gap-2 items-center'>
          <div className=' font-bold text-2xl  leading-none border-2 justify-center text-center items-center w-[35px] h-[35px] rounded-full inline-flex border-secondary-500 text-secondary-500 '>
            1
          </div>


          <h2 className='font-bold text-2xl'>
            Enter your email
          </h2>
        </div>
        <p className='pl-[43px] text-[10px] -mt-1 text-primary-100'>Already have an accout? <span className='underline text-primary-800'>Login</span></p>

        <div className='pl-[43px] my-3 space-y-5'>
          <Input
            value={email}
            labelFor="Email"
            placeholder='JohnDoe@gmail.com'
            type='text'
            label=''
            handleChange={(e) => setEmail('e')}
          >
            <Email />
          </Input>
          <Button>
            Continue Shopping 
          </Button>
        </div>
      </div>
    </SectionLayout>
  )
}

export default Checkout