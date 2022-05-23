import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"



// pages 
import Home from "./pages/Home"
import Product from "./pages/Home/Product"


function App() {
  
  return (
    <Routes>
      <Route path="/" element= {<Home/>}>
        <Route index element={<Home/>}/>
        <Route path="collections" >
           <Route path=":user"  element={<Product/>}/>
        </Route>
      </Route>
      
    </Routes>
  )
}

export default App
