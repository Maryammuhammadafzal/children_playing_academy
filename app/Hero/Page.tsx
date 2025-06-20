import Header from "@/components/Header";
import React from "react";
// import HeroBgVideo from '@/public/video/Hero-bg-video.mp4'
const HeroPage = () => {
  return (
    <div className="w-[96%] mx-auto my-6 h-auto rounded-3xl  flex justify-center items-center relative">
      <video autoPlay muted loop className="w-full rounded-[10px]">
        <source src="/video/Hero-bg-video.mp4" type="video/mp4" />
      </video>
      <div className="overlay w-full h-full bg-black/20 absolute top-0 rounded-[10px] left-0 z-10"></div>
      <div className="w-full h-full absolute top-0 left-0 flex justify-center">
        <div className="lg:w-[90%] h-auto flex flex-col gap-10 sm:gap-16 lg:gap-10 xl:gap-0 justify-between items-center w-full lg:px-0 px-3 py-10">
          <div className="header w-full h-[100px] flex justify-center items-center">
                <Header/>
          </div>
          <div className="w-full">
                <h1 className="xl:max-w-3xl lg:max-w-2xl xl:text-8xl xs:text-5xl text-3xl max-w-md lg:text-[80px] md:text-7xl sm:text-6xl sm:max-w-lg  md:max-w-xl md:leading-22 lg:leading-26 text-white uppercase font-bold xl:leading-30 font-sans">Unleashing Potential at Little Minds Academy</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
