import React from 'react'
import{useParams} from "react-router-dom"

const Product = () => {
    const {user} = useParams()
  return (
    <div>{user}</div>
  )
}

export default Product