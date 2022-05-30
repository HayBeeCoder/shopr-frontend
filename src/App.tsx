import { Routes, useLocation } from "react-router-dom"
import { Route } from "react-router-dom"

// pages 
import Home from "./pages/Home"
import Product from "./pages/Product"
import CartModal from "./components/Header/Cart/CartModal"
import LogIn from "./features/auth/Login/Login"
import SignUp from "./features/auth/SignUp"
import Layout from "./features/auth/Layout"
import { Component } from "react"


function App() {
  
  const location = useLocation()
  let state = location.state as { backgroundLocation?: Location };

  
  return (
   <div>

    <Routes  location={state?.backgroundLocation || location}>
      <Route path="/" element= {<Home/>}>
        <Route index element={<Home/>}/>
        <Route path="collections" element={<Component/>} >
           <Route path=":user"  element={<Product/>}/>
        </Route>
      </Route>
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

 