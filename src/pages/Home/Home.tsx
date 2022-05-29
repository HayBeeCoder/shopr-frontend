import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'

const Home = () => {
  return (
    <>
    <div className='flex flex-col  h-screen'>
      <Header />
      <Hero/>
    </div>
    </>
    // <div>Home</div>
  )
}

export default Home