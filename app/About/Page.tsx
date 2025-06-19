'use client'
import Image from "next/image";
import React, { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
const AboutPage = () => {
  useEffect(()=> {
    Aos.init({
      duration: 1000,
      once: true,
    })
  })
  return (
    <div className="w-full h-auto flex md:flex-row flex-col py-10 justify-center items-center gap-10">
      <div data-aos='zoom-in' className="bg-primary md:h-[400px] relative max-w-[760px] md:w-[760px] rounded-[10px] p-10 flex justify-center ">
        <p className="xl:text-[32px] lg:text-3xl sm:text-xl md:text-2xl xl:leading-10 text-white font-mono ">
          At Little Minds Academy, we believe that every child is unique and
          deserves a nurturing environment to learn, grow, and play. Our
          platform combines education and play to create a holistic development
          experience for children, fostering creativity, curiosity, and
          confidence.
        </p>
        <div data-aos='fade-right' data-aos-duration='2000' className="absolute -bottom-20 z-10 -right-70">
          <Image
            src="/images/bat-image.png"
            alt="bat-image"
            width={650}
            height={300}
            className="-rotate-[100deg]"
          />
        </div>
      </div>
      <div data-aos='zoom-in'
        className="sm:w-[610px] w-full h-[400px] flex justify-center items-center bg-cover bg-center relative"
        style={{ backgroundImage: `url('/images/texture.png')` }}
      >
        <div className="absolute w-full h-full flex justify-center items-center top-0  left-0">
          <div className="w-full h-full flex flex-col relative xl:justify-center py-10 px-9 gap-4">
            <h2 className="text-primary font-bold xl:text-6xl sm:text-4xl text-3xl lg:text-5xl md:text-4xl font-sans max-w-96">
              Outdoor Exploration
            </h2>
            <p className="text-white font-mono xl:text-xl sm:text-lg text-base lg:text-lg max-w-96">
              Nature trails, scavenger hunts, and outdoor games that encourage
              teamwork and physical health.
            </p>
            <div data-aos='fade-left' data-aos-duration='2000' className="absolute bottom-0 right-0">
              <Image
                src="/images/basketball-image.png"
                alt="basketball-image"
                width={300}
                height={300}
                className="xl:max-w-3xs md:max-w-[200px] w-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
