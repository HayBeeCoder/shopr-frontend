import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Button from "../Button";
import { PaymentIntent, StripeError } from "@stripe/stripe-js";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  // ['Poppins', 'sans-serif']
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://shopr-frontend.vercel.app/paymentstatus",
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage((error as StripeError).message as string);
      
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
       <PaymentElement id="payment-element" />
      <Button
        classname=" mx-auto mt-6  w-full"
        onClick={handleSubmit}
        disabled={!stripe}
      >
        {isLoading ? "...Placing Order" : "Place Order"}
      </Button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckOutForm;
