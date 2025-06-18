import Header from "@/components/Header";
import React from "react";
// import HeroBgVideo from '@/public/video/Hero-bg-video.mp4'
const HeroPage = () => {
  return (
    <div className="w-full h-auto rounded-3xl flex justify-center items-center relative">
      <video autoPlay muted loop className="w-full rounded-[10px]">
        <source src="/video/Hero-bg-video.mp4" type="video/mp4" />
      </video>
      <div className="overlay w-full h-full bg-black/20 absolute top-0 rounded-[10px] left-0 z-10"></div>
      <div className="w-full h-full absolute top-0 left-0 flex justify-center">
        <div className="lg:w-[90%] h-auto flex flex-col justify-between items-center w-full lg:px-0 px-3 py-10">
          <div className="header w-full h-[100px] flex justify-center items-center">
                <Header/>
          </div>
          <div className="w-full">
                <h1 className="max-w-3xl text-8xl text-white uppercase font-bold leading-30 font-sans">Unleashing Potential at Little Minds Academy</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
