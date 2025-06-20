"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Aos from "aos";
import "aos/dist/aos.css";
const ServicePage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  });
  return (
    <div id="services" className="services w-full h-auto flex justify-center items-center py-20">
      <div className="w-full h-auto flex flex-col gap-14 justify-center items-center">
        <h2 className="text-primary font-bold xl:text-6xl md:text-5xl max-xs:text-3xl text-center text-4xl font-sans">
          What We Offer
        </h2>

        <div className="flex  justify-center items-center flex-col gap-0 w-full h-auto">
          <div className="w-full  py-6 h-auto flex justify-center items-center bg-[#FFD70026]">
            <div className="lg:w-[90%] w-full lg:px-0 px-3 max-w-7xl h-auto flex justify-between md:flex-row flex-col gap-4">
              <div className="left flex flex-col gap-6 justify-center w-full md:w-[50%] h-auto">
                <h3
                  data-aos="fade-right"
                  className="font-bold lg:text-4xl text-3xl max-xs:text-[28px] text-secondary font-sans"
                >
                  Educational Programs
                </h3>
                <div
                  data-aos="fade-right"
                  className="flex flex-col gap-3 w-auto h-auto"
                >
                  <div className="flex ">
                    <h4 className="text-primary font-bold text-xl w-fit">
                      STEM Adventures:
                      <span className="text-base text-neutral-800 font-mono font-normal">
                        Hands-on activities in science, technology, engineering,
                        and math to spark curiosity and innovation.
                      </span>
                    </h4>
                  </div>
                  <div className="flex ">
                    <h4 className="text-primary font-bold text-xl w-fit">
                      Language and Literacy:
                      <span className="text-base text-neutral-800 font-mono font-normal">
                        Storytelling, reading exercises, and phonics games to
                        enhance communication skills.
                      </span>
                    </h4>
                  </div>
                </div>

                <div data-aos="fade-right" className="w-full h-auto py-4">
                  <Button className="text-primary bg-secondary/60 hover:bg-secondary/70 drop-shadow-xl drop-shadow-[#ffd900b1]">
                    {`Let's Discover`}
                  </Button>
                </div>
              </div>
              <div className="right md:w-[50%] w-full flex justify-center items-center h-auto">
                <div className="relative w-full flex justify-center items-center min-h-[360px]">
                  <div
                    data-aos="zoom-in"
                    className="w-[230px] h-[260px] object-cover border-8 absolute top-0 lg:right-20 md:right-0 max-sm:left-[30%] border-[#FFD70026] "
                  >
                    <Image
                      src="/images/image1.jpg"
                      alt="image"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full object-center"
                    />
                  </div>
                  <div
                    data-aos="zoom-in"
                    className="w-[230px] h-[260px] object-cover border-8 absolute top-20 z-20 lg:right-60 md:right-40 right-90 max-sm:left-[10%] border-[#FFD70026] "
                  >
                    <Image
                      src="/images/image2.jpg"
                      alt="image"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full  py-6 h-auto flex justify-center items-center bg-[#DC143C14]">
            <div className="lg:w-[90%] w-full lg:px-0 px-3 max-w-7xl h-auto flex justify-between md:flex-row flex-col gap-4">
              <div className="left md:w-[50%] w-full flex justify-center items-center h-auto max-md:order-2">
                <div className="relative w-full flex justify-center items-center min-h-[360px]">
                  <div
                    data-aos="zoom-in"
                    className="w-[230px] h-[260px] object-cover border-8 absolute top-0 lg:right-20 md:right-0 max-sm:left-[30%] border-[#DC143C14] "
                  >
                    <Image
                      src="/images/image3.jpg"
                      alt="image"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full object-center"
                    />
                  </div>
                  <div
                    data-aos="zoom-in"
                    className="w-[230px] h-[260px] object-cover border-8 absolute top-20 z-20 lg:right-60 md:right-40 right-90 max-sm:left-[10%] border-[#DC143C14] "
                  >
                    <Image
                      src="/images/image4.jpg"
                      alt="image"
                      width={200}
                      height={200}
                      className="object-cover w-full h-full object-center"
                    />
                  </div>
                </div>
              </div>

              <div className="right flex flex-col gap-6 justify-center w-full md:w-[50%] h-auto max-md:order-1">
                <h3
                  data-aos="fade-left"
                  className="font-bold lg:text-4xl text-3xl max-xs:text-[28px] text-primary font-sans"
                >
                  Play Activities
                </h3>
                <div
                  data-aos="fade-left"
                  className="flex flex-col gap-3 w-auto h-auto"
                >
                  <div className="flex ">
                    <h4 className="text-secondary font-bold text-xl w-fit">
                      Outdoor Exploration:
                      <span className="text-base text-neutral-800 font-mono font-normal">
                        Hands-on activities in science, technology, engineering,
                        and math to spark curiosity and innovation.
                      </span>
                    </h4>
                  </div>
                  <div className="flex ">
                    <h4 className="text-secondary font-bold text-xl w-fit">
                      Interactive Games:
                      <span className="text-base text-neutral-800 font-mono font-normal">
                        Online and offline games designed to build cognitive and
                        motor skills.
                      </span>
                    </h4>
                  </div>
                </div>
                <div data-aos="fade-left" className="w-full h-auto py-4 ">
                  <Button className="text-secondary bg-primary hover:bg-primary drop-shadow-xl drop-shadow-[#DC143C59]">
                    {`Let's Discover`}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="w-full h-[560px] bg-cover bg-center flex justify-center relative items-center"
            style={{ backgroundImage: `url('/images/banner-image.jpg')` }}
          >
            <div className="overlay bg-black/35 w-full h-full absolute top-0 left-0 z-10"></div>
            <div className="w-full h-full absolute top-0 left-0 z-20 flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-8 p-3 max-w-4xl h-auto">
                <h2 className="text-secondary text-6xl font-bold max-sm:text-5xl max-xs:text-4xl font-sans text-center">
                  Join the Little Minds Family
                </h2>
                <p className="text-white text-lg text-center max-xs:text-base">
                  At Little Minds Academy, we believe that every child is unique
                  and deserves a nurturing environment to learn, grow, and play.
                  Our platform combines education and play to create a holistic
                  development experience for children, fostering creativity,
                  curiosity, and confidence.
                </p>
                <div className="w-full flex justify-center items-center h-auto ">
                  <Button className="text-secondary bg-primary hover:bg-primary drop-shadow-xl text-lg px-8 py-6 drop-shadow-[#DC143C59]">
                    Join Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
