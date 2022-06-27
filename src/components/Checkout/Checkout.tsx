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
import { usePostTotalMutation } from '../../app/services/api'

import { Appearance, loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { StripeElementsOptions } from '@stripe/stripe-js'
// import { setCredentials } from '../../features/auth/authSlice'

const tax = Math.floor(Math.random() * 10)
const shipping_fee = 20

const stripePromise = loadStripe('pk_test_51LAu75JVJ8U3GhGkLef2bRGnsgyzJSEbvS13F88rw2c18b1pi7R94tei5tx50vQjQVv2tpVY8ELhONt4W9V3o0cC005eUl1hXS')

const Checkout = () => {
  const [postTotal, { isLoading }] = usePostTotalMutation()
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)
  const cartProducts = useAppSelector(state => state.cart)
  const [email, setEmail] = useState('')
  const [clientSecret, setClientSecret] = useState("");




  const totalProductsPrice = cartProducts.reduce((previousValue, currentItem) => (currentItem.quantity * currentItem?.product.price), 0)
  const total = totalProductsPrice + tax + shipping_fee
  // console.log(email)

  // const handleEmailInput =(e: React.FormEvent) => {
  //   setEmail()
  // }
  const doPost = async () => { return await postTotal({ total }) }
  // console.log(clientSecret)


  useEffect(() => {

    doPost()
      .then((response) => {
        const payload = response as { data: { clientSecret: string } }
        setClientSecret(payload.data.clientSecret)
      })

  }, [])



  const appearance: Appearance = {
    theme: 'stripe',
    variables: {
      fontFamily: 'Poppins',
      colorPrimary: '#0570de',
      // borderWidth: '1px',
      borderRadius: "6px",
      // borderColor: "#CDC087",
      // boxShadow: "0px"com

    }
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
    fonts: [{
      cssSrc: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700"
    }],

  };

  return (
    // <div> Checkout</div>
    <SectionLayout className='md:flex justify-between flex-row-reverse md:py-3' >
      <div className='md:w-1/3 py-4 md:py-6 border-t-2 md:border-0 border-t-primary-100'>
        <div>

          <p className='font-semibold text-xl flex leading-none justify-between items-center'>
            <span>

              Your Cart ({cartProducts.reduce((previousValue, currentItem) => (currentItem.quantity + previousValue), 0)})
            </span>
            <div className='flex gap-3 md:block items-center'>

              <span className='font-medium'>{`$${total}`}</span>
              <button className='p-4 md:hidden' onClick={() => setOpen(open => !open)}>
                <ArrowDown />
              </button>
            </div>
          </p>
        </div>

        <div className='hidden md:block' style={{ display: `${open ? "block" : "none"}` }}>

          <div className='w-full py-8 space-y-6'>
            {
              cartProducts.map(product => (
                <ProductSideBar
                  name={product.product.title}
                  color={product.color}
                  quantity={product.quantity}
                  id={product.product._id}
                  size={product.size as string}
                  key={product.product._id}
                  //   images property is a multidimensional array
                  image={product.product.images[0][0]}
                  price={product.product.price}

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

            <div className='space-y-2 my-4'>

              <Button classname='' disabled={!done}>
                Place Order
              </Button>
              <p className='text-center font-light text-xs'>
                Psst! get it now before it sells out.
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className='space-y-7 md:w-3/5 '>

        <FirstSection value={email} setEmail={setEmail} />
        <SecondSection />


        <ThirdSection />
      <div>

        {clientSecret && (
          <Elements options={options } stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
      </div>
    </SectionLayout>
  )
}

export default Checkout