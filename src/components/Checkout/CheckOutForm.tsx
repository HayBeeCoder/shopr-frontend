import React, { useState } from 'react'
import {
    PaymentElement,
    useStripe,
    useElements
  } from "@stripe/react-stripe-js";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    // ['Poppins', 'sans-serif']
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {

    }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
    <PaymentElement id="payment-element" />
    </form>
  )
}

export default CheckOutForm