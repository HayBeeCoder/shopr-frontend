import React, { useEffect } from 'react'




const Hero = () => {

    useEffect(() => {
        const w = window.matchMedia("(max-width: 700px)");
        const vid = document.getElementById("video") as HTMLVideoElement

        if (w.matches) {
            vid.pause();
            // source.removeAttribute("src");
            // source.setAttribute("src", "https://storage.googleapis.com/coverr-main/mp4/Love-Boat.mp4");
            vid.setAttribute("src", "https://ik.imagekit.io/haybececodes/mobile-hero-video_720x1280_2kqek7_j4.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1652387652871");
            vid.load();
            vid.play();
          } else {
            vid.pause();
            // source.removeAttribute("src");
            vid.setAttribute("src", "https://ik.imagekit.io/haybececodes/desktop-hero-video_854x480_bpPIjPIB9.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1652387638028");
            vid.load();
            vid.play();
          }
    },[])
    return (
        <div className='flex-grow  flex-shrink-0 bg-secondary-600 relative overflow-hidden h-full'>
            <div className='w-full aspect-video absolute top-0 left-0 right-0 bottom-0 h-full object-contain -translate-y-1/4'>
                <video id="video" autoPlay={true} preload="auto" src="https://ik.imagekit.io/haybececodes/mobile-hero-video_720x1280_2kqek7_j4.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1652387652871" loop className='w-full'></video>
            </div>
            <div>
                <div className='absolute top-0 left-0 right-0 bottom-0 z-[1300] bg-black/50'>
                    
                </div>
             <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> 

             </div>
            </div>

        </div>
    )
}

export default Hero