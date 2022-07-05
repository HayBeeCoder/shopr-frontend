import { Routes, useLocation } from "react-router-dom"
import { Route } from "react-router-dom"

// pages 
import Home from "./pages/Home"
import Products from "./pages/Products"

import LogIn from "./features/auth/Login/Login"
import SignUp from "./features/auth/SignUp"
import Layout from "./features/auth/Layout"
// import { Component } from "react"
import Component from "./pages/Component"
import PageLayout from "./layouts/PageLayout"
import Product from "./pages/Product"
import Checkout from "./components/Checkout"
import { lazy, Suspense } from "react"


const  CartModal  = lazy( () => import("./components/Header/Cart/CartModal"))

function App() {
  
  const location = useLocation()
  let state = location.state as { backgroundLocation?: Location };
  // console.log(state)

  
  return (
   <div className="max-w-[1920px] mx-auto">

    <Routes  location={state?.backgroundLocation || location}>
      <Route path="/" element= {<Home/>}/>
      <Route path="/" element= {<PageLayout/>}>
        <Route path="checkout" element={<Checkout/>}/>
        {/* <Route index element={<Home/>}/> */}
        <Route path="collections" element={<Component/>} >
           <Route path=":category/:id"  element={<Product/>}/>
           <Route path=":category"  element={<Products/>}/>
        </Route>
      </Route>
           <Route  path="/product/:id" element={<Product/>}/>
      <Route path="//collections"/>
      <Route path="/auth" element={<Layout/>}>
        <Route path="login" element= {<LogIn/>}/>
        <Route path="signup" element= {<SignUp/>}/>
        
      </Route>
      
    </Routes>
    {
      state?.backgroundLocation && 
      <Routes>
          <Route path="/cart" element={<>
            <section className='relative w-screen max-w-[420px] h-screen'>
              <Suspense fallback={<div>Loading...</div>}>

                <CartModal/>
              </Suspense>
              </section>
          </>} />
        </Routes>
    }
   </div>
  )
}

export default App

 