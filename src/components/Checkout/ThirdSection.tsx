
import { lazy, Suspense, useEffect, useState } from 'react'
import { CheckoutSectionLayout } from './CheckoutSectionLayout'
import { usePostTotalMutation } from '../../app/services/api'
import { Appearance, loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { StripeElementsOptions } from '@stripe/stripe-js'


const CheckOutForm = lazy(() => import('./CheckOutForm'))
const stripePromise = loadStripe('pk_test_51LAu75JVJ8U3GhGkLef2bRGnsgyzJSEbvS13F88rw2c18b1pi7R94tei5tx50vQjQVv2tpVY8ELhONt4W9V3o0cC005eUl1hXS')



const ThirdSection = ({ total, isSecondDone }: { total: number, isSecondDone: boolean }) => {

  const [clientSecret, setClientSecret] = useState("");
  const [postTotal, { isLoading }] = usePostTotalMutation()
  const doPost = async () => { return await postTotal({ total }) }


  useEffect(() => {

    doPost()
      .then((response) => {
        const payload = response as { data: { clientSecret: string } }
        console.log(response)
        setClientSecret(payload.data.clientSecret)
      })

  }, [])



  const appearance: Appearance = {
    theme: 'none',
    variables: {
      fontFamily: 'Poppins , sans-serif',
      fontSizeBase: "16px",
      colorText: "#221C23",

    },

    rules: {
      '.Input': {
        border: '1px solid #CDC087',
        fontSize: "0.75rem",
        outline: 'none'
      },
      '.Input:focus': {
        border: '1px solid #221C23',
        // fontSize: "0.75rem"
      },
      '.Error': {
        fontSize: "0.75em",
        paddingTop: "4px",
        paddingBottom: "8px"

      }
      ,
      '.Input--invalid': {
        border: '1px solid',
        fontSize: "0.75rem",
        // fontSize: "0.75rem"
      },
      '.Label': {
        border: '1px solid #CDC087',
        color: "#221C23",

        fontSize: "0.75rem"
      },
      '.Tab': {
        border: '1px solid #E0E6EB',
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(18, 42, 66, 0.02)',
      },

      '.Tab:hover': {
        color: 'var(--colorText)',
      },

      '.Tab--selected': {
        borderColor: '#E0E6EB',
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(18, 42, 66, 0.02), 0 0 0 2px var(--colorPrimary)',
      },

      // '.Input--invalid': {
      //   boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.07), 0 0 0 2px var(--colorDanger)',
      // },

      // See all supported class names and selector syntax below
    }
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
    fonts: [{
      cssSrc: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700"
    }],

  };


  // console.log(options)

  return (
    <CheckoutSectionLayout number={3} title='Payment Details' done={false}  >

      <>
        {isSecondDone && clientSecret && (
          <>
            <p className='text-xs text-red-300 ml-2' >
              You won't be able to edit these details once the button is clicked !!!
            </p>
            <div className='mt-7 pl-2 space-y-7'>

                <Suspense fallback={<div>Loading....</div>}>
              <Elements options={options} stripe={stripePromise}>

                  <CheckOutForm />
                  
              </Elements>
                </Suspense>
            </div>
          </>
        )}

      </>

    </CheckoutSectionLayout>
  )
}

export default ThirdSection