import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'

const Home = () => {
  return (
    <>
    <div className='flex flex-col   md:h-screen overflow-hidden'>
       <Header /> 
      <Hero/>
    </div>
<main>
    <div className='bg-purple-500'>
      Main
    </div>
</main>
    
    </>
    // <div>Home</div>
  )
}

export default Home