import { Routes, useLocation } from "react-router-dom"
import { Route } from "react-router-dom"

// pages 
import Home from "./pages/Home"
import Products from "./pages/Products"
import CartModal from "./components/Header/Cart/CartModal"
import LogIn from "./features/auth/Login/Login"
import SignUp from "./features/auth/SignUp"
import Layout from "./features/auth/Layout"
// import { Component } from "react"
import Component from "./pages/Component"
import PageLayout from "./layouts/PageLayout"
import Product from "./pages/Product"
import Checkout from "./components/Checkout"



function App() {
  
  const location = useLocation()
  let state = location.state as { backgroundLocation?: Location };
  // console.log(state)

  
  return (
   <div>

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
          <Route path="/cart" element={<CartModal />} />
        </Routes>
    }
   </div>
  )
}

export default App

 