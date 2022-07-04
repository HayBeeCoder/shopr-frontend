import React, { useState, useLayoutEffect, useEffect, useRef } from 'react'
import Button from '../Button';
import Mobile from "../../assets/videos/mobile.mp4"
import Desktop from "../../assets/videos/desktop.mp4"
import PosterMobile from "../../assets/images/poster-mobile.jpg"
import PosterDesktop from "../../assets/images/twowomen.jpg"


const getVideoSrc = (width: number) => {
    if (width >= 768) return Desktop
    if (width < 768) return Mobile
}


const Hero = () => {


    const desktopRef = useRef<HTMLVideoElement | null>(null)
    const mobileRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {
        // document.addEventListener("DOMContentLoaded", function () {
// console.log("document loaded completely")
            let mobileSize2 = window.matchMedia("(max-width: 767px)")
            // console.log(mobileSize2)
            function display(mobileSize2: MediaQueryList) {
                // console.log("Hey! successfully entered this function.")
                if (mobileSize2.matches) {
                    // console.log("This is a mobile device!")
                    // if(mobileRef.current?.getAttribute("video-src")){

                    mobileRef.current?.setAttribute("poster", mobileRef.current?.getAttribute("video-poster") as string)
                    mobileRef.current?.setAttribute("src", mobileRef.current?.dataset.src as string)
                    mobileRef?.current?.load()
                    // mobileRef.current?.removeAttribute("video-src")
                    // }
                } else {
                    // console.log("This is a desktop device!")
                    desktopRef.current?.setAttribute("poster", desktopRef.current?.getAttribute("video-poster") as string)
                    desktopRef.current?.setAttribute('src', desktopRef.current?.dataset.src as string)
                    desktopRef?.current?.load()
                    // desktopRef.current?.removeAttribute("video-src")
                }
            }


            display(mobileSize2)
        // })

        // window.onload = () => {

        //     mobileRef?.current?.load()
        //     desktopRef?.current?.load()
        // }

    }, [])


    return (
        <div className={`md:flex-grow flex-shrink-0 bg-white relative overflow-hidden w-full aspect-[9/16] md:h-screen`}>

            {/* //correct code is below */}
            {/* <>
           <div className='w-full md:aspect-video lg:absolute top-0 left-0 right-0 bottom-0 h-screen md:object-contain lg:-translate-y-1/4 hidden md:block'>
                <video ref={desktopRef} src="https://res.cloudinary.com/abasscodes/video/upload/v1656449343/shopr/homepage-collections/mobile_xv66ic.mp4"  autoPlay muted loop className='video w-full' playsInline poster={PosterDesktop}/>


            </div>
            <div className='w-full h-full  block md:hidden bg-secondary-100'>

                <video ref={mobileRef} id="video" autoPlay muted loop className='w-full h-full' width="400" height="720" playsInline src="https://res.cloudinary.com/abasscodes/video/upload/v1656449362/shopr/homepage-collections/desktop_g3bwzb.mp4" poster={PosterMobile}/>
            </div>
            </> */}


            <>
                <div className='w-full h-full lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 block md:h-screen md:object-contain lg:-translate-y-1/4 md:aspect-video  bg-secondary-100'>
                    <video ref={desktopRef} data-src="https://res.cloudinary.com/abasscodes/video/upload/v1656449343/shopr/homepage-collections/mobile_xv66ic.mp4" autoPlay muted loop className='hidden md:block  w-full' playsInline video-poster={PosterDesktop}>
                        {/* <source type="video/mp4" video-src="https://res.cloudinary.com/abasscodes/video/upload/v1656449343/shopr/homepage-collections/mobile_xv66ic.mp4" /> */}
                    </video>
                    <video ref={mobileRef}  data-src="https://res.cloudinary.com/abasscodes/video/upload/v1656449362/shopr/homepage-collections/desktop_g3bwzb.mp4" autoPlay muted loop width="400" height="720" className='video w-full' playsInline video-poster={PosterMobile}>
                        {/* <source type="video/mp4" video-src="https://res.cloudinary.com/abasscodes/video/upload/v1656449362/shopr/homepage-collections/desktop_g3bwzb.mp4" /> */}
                    </video>


                    {/* // <video ref={videoRef} id="video" autoPlay muted loop className='w-full h-full' width="400" height="720" playsInline src="https://res.cloudinary.com/abasscodes/video/upload/v1656449362/shopr/homepage-collections/desktop_g3bwzb.mp4" poster={PosterMobile} /> */}

                </div>
            </>


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
