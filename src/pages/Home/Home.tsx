import React from 'react'
import Collections from '../../components/Collections'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Perks from '../../components/Perks'
import Testimonials from '../../components/Testimonials'
import NewProducts from '../../components/NewProducts'

const Home = () => {
  return (
    <>
      <div className='flex flex-col   md:min-h-screen overflow-hidden'>
        <Header />
        <Hero />
      </div>
      <main>
        
        <div className=''>
          <Perks />
          <Collections />
          <NewProducts/>
          <Testimonials/>
        </div>
      </main>

      <Footer />

    </>
    // <div>Home</div>
  )
}

export default Home