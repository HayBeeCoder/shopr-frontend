import React, { useState, useLayoutEffect, useEffect } from 'react'
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
    const [isLoadComplete, setIsLoadComplete] = useState(false)
    console.log(isLoadComplete)
    // const src = getVideoSrc(window.innerWidth)
    // const onLoadedData = () => {
    //     setIsVideoLoaded(true);
    // }

    // useLayoutEffect(() => {
    //     const w = window.matchMedia("(max-width: 700px)");
    //     const vid = document.getElementById("video") as HTMLVideoElement

    //     if (w.matches) {
    //         vid.pause();
    //         // source.removeAttribute("src");
    //         // source.setAttribute("src", "https://storage.googleapis.com/coverr-main/mp4/Love-Boat.mp4");
    //         vid.setAttribute("src", "https://ik.imagekit.io/haybececodes/mobile-hero-video_720x1280_2kqek7_j4.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1652387652871");
    //          vid.load();
    //         vid.play();
    //     } else {
    //          vid.pause();
    //         // source.removeAttribute("src");
    //         vid.setAttribute("src", "https://ik.imagekit.io/haybececodes/desktop-hero-video_854x480_bpPIjPIB9.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1652387638028");
    //          vid.load();
    //          vid.play();
    //     }
    // }, [])
    useEffect(() => {
        const w = window.matchMedia("(max-width: 700px)");
        const vid = document.querySelectorAll("video")
        vid.forEach(v => v.autoplay = true)

    }, [])



    return (
        <div className='md:flex-grow flex-shrink-0 bg-white relative overflow-hidden h-screen'>
            {/* <div className='w-full md:aspect-video lg:absolute top-0 left-0 right-0 bottom-0 h-full md:object-contain lg:-translate-y-1/4 hidden md:block'> */}
            <div className='w-full md:aspect-video lg:absolute top-0 left-0 right-0 bottom-0 h-screen md:object-contain lg:-translate-y-1/4 hidden md:block'>
                {/* <img src={Mobile} className="" /> */}
                <video src="https://res.cloudinary.com/abasscodes/video/upload/v1656449362/shopr/homepage-collections/desktop_g3bwzb.mp4"  autoPlay muted loop className='video w-full' playsInline onLoad={() => setIsLoadComplete(true)} poster={PosterMobile}/>
                {/* <video src={Mobile}  autoPlay muted loop className='video w-full' playsInline onLoad={() => setIsLoadComplete(true)} poster={PosterMobile}/> */}


            </div>
            <div className='w-full md:aspect-video lg:absolute top-0 left-0 right-0 bottom-0 h-full md:object-contain lg:-translate-y-1/4 block md:hidden'>
                {/* <video id="video" autoPlay muted loop   className='video w-full ' playsInline src={Desktop} onLoad={() => setIsLoadComplete(true)} poster={PosterMobile}/> */}
                <video id="video" autoPlay muted loop   className='video w-full ' playsInline src="https://res.cloudinary.com/abasscodes/video/upload/v1656449343/shopr/homepage-collections/mobile_xv66ic.mp4" onLoad={() => setIsLoadComplete(true)} poster={PosterMobile}/>
                {/* <img src={Desktop} className="" /> */}
            </div>
            <div>
                <div className='absolute top-0 left-0 right-0 bottom-0 z-[900] bg-black/25'>

                </div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 text-white -translate-y-1/2 z-[950] w-full text-center'>
                    <h1 className='font-extrabold text-5xl md:text-6xl lg:text-7xl'>Your body deserves better</h1>
                    <p className='font-light text-xs lg:text-sm '> Let's go get what you deserve , Dear.</p>
                    <div className='inline-block mt-3 lg:mt-10'>
                        <Button classname='inline-block px-16'>
                            Start Shopping
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
