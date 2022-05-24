import { Routes, useLocation } from "react-router-dom"
import { Route } from "react-router-dom"



// pages 
import Home from "./pages/Home"
import Product from "./pages/Home/Product"
import CartModal from "./components/Header/Cart/CartModal"


function App() {
  const location = useLocation()
  let state = location.state as { backgroundLocation?: Location };

  
  return (
   <div>

    <Routes  location={state?.backgroundLocation || location}>
      <Route path="/" element= {<Home/>}>
        <Route index element={<Home/>}/>
        <Route path="collections" >
           <Route path=":user"  element={<Product/>}/>
        </Route>
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

 