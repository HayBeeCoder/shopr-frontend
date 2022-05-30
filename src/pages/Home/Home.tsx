import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Perks from '../../Perks'

const Home = () => {
  return (
    <>
    <div className='flex flex-col   md:h-screen overflow-hidden'>
       <Header /> 
      <Hero/>
    </div>
<main>
    <div className=''>
      <Perks/>
    </div>
</main>
    
    </>
    // <div>Home</div>
  )
}

export default Home