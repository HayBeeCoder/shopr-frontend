import React, { useEffect, useState } from 'react'
import Input from '../Input'
import SectionLayout from '../SectionLayout'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import CheckoutForm from "./CheckOutForm"
import { useAppSelector } from '../../app/hooks'
import ProductSideBar from '../ProductSideBar.tsx/ProductSideBar'
import Button from '../Button'
import { ReactComponent as ArrowDown } from "../../assets/svgs/arrowdown.svg"
import { REGEX_EMAIL } from '../../constants'
import { useLocation, useNavigate } from 'react-router-dom'



// import { setCredentials } from '../../features/auth/authSlice'

const tax = Math.floor(Math.random() * 10)
const shipping_fee = 20


const Checkout = () => {

  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [isSecondDone, setIsSecondDone] = useState(false)
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)
  const userObject = useAppSelector(state => state.auth)
  const [showEmailError, setShowEmailError] = useState(false)
  const cartProducts = useAppSelector(state => state.cart)
  const [email, setEmail] = useState(userObject?.user?.email ? userObject?.user.email : '')
  // console.log("email: ", email )
  const [isEmailCorrect, setIsEmailCorrect] = useState(userObject?.user?.email ? true : false)
  const [edit, setEdit] = useState(userObject?.user?.email ? false : true)






  const totalProductsPrice = cartProducts.reduce((previousValue, currentItem) => (currentItem.quantity * currentItem?.price), 0)
  const total = totalProductsPrice + tax + shipping_fee
  // console.log(email)

  // const handleEmailInput =(e: React.FormEvent) => {
  //   setEmail()
  // }

  const handleFirstButtonClick = () => {

    if (isEmailCorrect) {
      setEdit(false)
      setShowEmailError(false)
      // navigate(pathname + "#shipping")
    }
    setShowEmailError(true)


  }

  const unEdit = () => {
    setEdit(true)
  }




  const handleEdit = (e: React.FormEvent) => {
    const { value } = e.currentTarget as HTMLInputElement
    if (REGEX_EMAIL.test(value)) {

      setIsEmailCorrect(true)
    } else {
      setIsEmailCorrect(false)
    }
    setEdit(true)
    setEmail(value)
  }

  return (
    // <div> Checkout</div>
    <SectionLayout className='md:flex justify-between flex-row-reverse md:py-3' >
      <div className='md:w-1/3 py-4 md:py-6 border-t-2 md:border-0 border-t-primary-100'>
        <div>

          <div className='font-semibold text-xl flex leading-none justify-between items-center'>
            <span>

              Your Cart ({cartProducts.reduce((previousValue, currentItem) => (currentItem.quantity + previousValue), 0)})
            </span>
            <div className='flex gap-3 md:block items-center'>

              <span className='font-medium'>{`$${total}`}</span>
              <button className='p-4 md:hidden' onClick={() => setOpen(open => !open)}>

              </button>
            </div>
          </div>
        </div>

        <div className={` md:block ${open ? "block" : "hidden"}`} >

          <div className='w-full py-8 space-y-6'>
            {
              cartProducts.map(product => (
                <ProductSideBar
                  name={product.name as string}
                  color={product.color}
                  quantity={product.quantity}
                  id={product.productId }
                  size={product.size as string}
                  key={product.productId}
                  //   images property is a multidimensional array
                  image={product.image}
                  price={product.price}

                />
              ))
            }
          </div>
          <div className='mt-5 space-y-3 '>
            <p className='flex justify-between '>
              <span>Subtotal</span>
              <span>
                {
                  `$${totalProductsPrice}`

                }
              </span>
            </p>
            <p className='flex justify-between'>
              <span>Tax</span>
              <span>${tax}</span>
            </p>
            <p className='flex justify-between'>
              <span>Shipping</span>
              <span>${shipping_fee}</span>
            </p>
            <p className='flex justify-between'>
              <span className="font-bold">Total</span>
              <span>${total}</span>
            </p>

            {/* <div className='space-y-2 my-4'>

              <Button classname='' disabled={!done}>
                Place Order
              </Button>
              <p className='text-center font-light text-xs'>
                Psst! get it now before it sells out.
              </p>
            </div> */}
          </div>

        </div>
      </div>
      <div className='space-y-7 md:w-3/5 '>

        <FirstSection
          showError={showEmailError}
          value={email}
          edit={edit}
          handleEdit={handleEdit}
          isEmailCorrect={isEmailCorrect}
          handleButtonClick={handleFirstButtonClick}
          unEdit={unEdit}
        >
          {userObject?.user?.email == ''
            ? <p className=' text-[10px] pl-2 -mt-1 text-primary-100'>Already have an accout? <span className='underline text-primary-800'>Login</span></p>
            : <span></span>
          }
        </FirstSection>
        <SecondSection
          isSecondDone={isSecondDone}
          setIsSecondDone={setIsSecondDone}
          //THIS EDIT is value for the first section 
          edit={edit}
          isEmailCorrect={isEmailCorrect}
        />


        <ThirdSection total={total} isSecondDone={isSecondDone} />
        <div>

          {/* {clientSecret && (
      
          <Elements options={options } stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )} */}
        </div>
      </div>
    </SectionLayout>
  )
}

export default Checkout