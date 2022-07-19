import React, { useState, useEffect } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { PaymentIntent } from "@stripe/stripe-js";
import { Link } from "react-router-dom";

const PaymentStatus = () => {
  const stripe = useStripe();
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the "payment_intent_client_secret" query parameter appended to
    // your return_url by Stripe.js
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    // Retrieve the PaymentIntent
    stripe
      .retrievePaymentIntent(clientSecret as string)
      .then(({ paymentIntent }) => {
        // Inspect the PaymentIntent `status` to indicate the status of the payment
        // to your customer.
        //
        // Some payment methods will [immediately succeed or fail][0] upon
        // confirmation, while others will first enter a `processing` state.
        //
        // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
        switch (paymentIntent?.status) {
          case "succeeded":
            setMessage("Success! Payment received.");
            break;

          case "processing":
            setMessage(
              "Payment processing. We'll update you when payment is received."
            );
            break;

          case "requires_payment_method":
            // Redirect your user back to your payment page to attempt collecting
            // payment again
            setMessage("Payment failed. Please try another payment method.");
            break;

          default:
            setMessage("Something went wrong.");
            break;
        }
      });
  }, [stripe]);

  return stripe ? (
    message && message === "Success! Payment received." ? (
      <div className="text-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-max  md:px-24  md:py-16  text-sm">
        <p>You have successfully made the order.</p>
        <p>Thanks for your patronage</p>
        Return to{" "}
        <Link to="/" className="underline text-secondary-500">
          Home Page
        </Link>
      </div>
    ) : (
      <p>{message}</p>
    )
  ) : (
    <p className="text-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">please wait......</p>
  );
};

export default PaymentStatus;
