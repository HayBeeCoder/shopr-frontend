import React, { useState, useLayoutEffect, useEffect, useRef } from 'react'
import Button from '../Button';
import Mobile from "../../assets/videos/mobile.mp4"
import Desktop from "../../assets/videos/desktop.mp4"
import PosterMobile from "../../assets/images/men-shoes.jpg"
import PosterDesktop from "../../assets/images/twowomen.jpg"


const getVideoSrc = (width: number) => {
    if (width >= 768) return Desktop
    if (width < 768) return Mobile
}


const Hero = () => {


    const videoRef = useRef<HTMLVideoElement | null>(null)
  

    return (
        <div className={`md:flex-grow flex-shrink-0 bg-white relative overflow-hidden w-full aspect-[9/16] md:h-screen`}>
           <div className='w-full md:aspect-video lg:absolute top-0 left-0 right-0 bottom-0 h-screen md:object-contain lg:-translate-y-1/4 hidden md:block'>
                <video src="https://res.cloudinary.com/abasscodes/video/upload/v1656449343/shopr/homepage-collections/mobile_xv66ic.mp4"  autoPlay muted loop className='video w-full' playsInline poster={PosterDesktop}/>


            </div>
            <div className='w-full h-full  block md:hidden bg-secondary-100'>

                <video ref={videoRef} id="video" autoPlay muted loop className='w-full h-full' width="400" height="720" playsInline src="https://res.cloudinary.com/abasscodes/video/upload/v1656449362/shopr/homepage-collections/desktop_g3bwzb.mp4" poster={PosterMobile}/>
            </div>
            <div>
                <div className='absolute top-0 left-0 right-0 bottom-0 z-[900] bg-black/25'>

                </div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 text-white -translate-y-1/2 z-[950] w-full text-center'>
                    <h1 className='font-extrabold text-5xl md:text-6xl lg:text-7xl'>Your body deserves better</h1>
                    <p className='font-light text-xs lg:text-sm '> Let's go get what you deserve , Dear.</p>
                    <div className='inline-block mt-3 lg:mt-10'>
                        <a href="#collections">

                        <Button classname='inline-block px-16'>
                            Start Shopping
                        </Button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
