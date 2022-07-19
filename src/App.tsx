import { Routes, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Products from "./pages/Products";

import LogIn from "./features/auth/Login/Login";
import SignUp from "./features/auth/SignUp";
import Layout from "./features/auth/Layout";
// import { Component } from "react"
import Component from "./pages/Component";
import PageLayout from "./layouts/PageLayout";
import Product from "./pages/Product";
import Checkout from "./components/Checkout";
import { lazy, Suspense } from "react";
import PaymentStatus from "./pages/PaymentStatus/PaymentStatus";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const CartModal = lazy(() => import("./components/Header/Cart/CartModal"));

const stripePromise = loadStripe('pk_test_51LAu75JVJ8U3GhGkLef2bRGnsgyzJSEbvS13F88rw2c18b1pi7R94tei5tx50vQjQVv2tpVY8ELhONt4W9V3o0cC005eUl1hXS')

function App() {
  const location = useLocation();
  let state = location.state as { backgroundLocation?: Location };
  // console.log(state)

  return (
    <div className="max-w-[1920px] mx-auto">
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<PageLayout />}>
          <Route path="checkout" element={<Checkout />} />
          {/* <Route index element={<Home/>}/> */}
          <Route path="collections" element={<Component />}>
            <Route path=":category/:id" element={<Product />} />
            <Route path=":category" element={<Products />} />
          </Route>
        </Route>
        <Route path="/product/:id" element={<Product />} />
        {/* <Route path="//collections"/> */}
        <Route path="/auth" element={<Layout />}>
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route
          path="/paymentstatus"
          element={

            <Elements stripe={stripePromise}>

              <PaymentStatus />
            </Elements>
          }
        />
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route
            path="/cart"
            element={
              <>
                <section className="relative w-screen max-w-[420px] h-screen">
                  <Suspense fallback={<div>Loading...</div>}>
                    <CartModal />
                  </Suspense>
                </section>
              </>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
