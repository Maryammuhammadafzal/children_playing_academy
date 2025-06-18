import React from 'react'
// import HeroBgVideo from '@/public/video/Hero-bg-video.mp4'
const HeroPage = () => {
  return (
    <div className='w-full h-auto rounded-3xl flex justify-center items-center relative'>
<video autoPlay muted loop className='w-full rounded-[10px]'>
  <source src="/video/Hero-bg-video.mp4" type="video/mp4" />
</video>
  <div className='overlay w-full h-full bg-black/20 absolute top-0 left-0 z-10'></div>


    </div>
  )
}

export default HeroPage