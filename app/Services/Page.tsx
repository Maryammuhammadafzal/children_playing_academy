import Image from "next/image";
import React from "react";

const ServicePage = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center py-20">
      <div className="w-full h-auto flex flex-col gap-14 justify-center items-center">
        <h2 className="text-primary font-bold xl:text-6xl md:text-5xl max-xs:text-3xl text-center text-4xl font-sans">
          What We Offer
        </h2>

        <div className="flex  justify-center items-center flex-col gap-0 w-full h-auto">
          <div className="w-full  py-6 h-auto flex justify-center items-center bg-[#FFD70026]">
            <div className="w-[90%] max-w-7xl h-auto flex justify-between md:flex-row flex-col gap-4">
              <div className="left flex flex-col gap-6 justify-center w-[50%] h-auto">
                <h3 className="font-bold text-4xl text-secondary font-sans">
                  Educational Programs
                </h3>
                <div className="flex flex-col gap-3 w-auto h-auto">
                  <div className="flex ">
                    <h4 className="text-primary font-bold text-xl w-fit">
                      STEM Adventures:{" "}
                      <span className="text-base text-neutral-800 font-mono font-normal">
                        Hands-on activities in science, technology, engineering,
                        and math to spark curiosity and innovation.
                      </span>
                    </h4>
                  </div>
                  <div className="flex ">
                    <h4 className="text-primary font-bold text-xl w-fit">
                      Language and Literacy:{" "}
                      <span className="text-base text-neutral-800 font-mono font-normal">
                        Storytelling, reading exercises, and phonics games to
                        enhance communication skills.
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="right w-[50%]  flex justify-center items-center h-auto">
                <div className="relative w-full flex justify-center items-center min-h-[360px]">
                       <div className="w-[230px] h-[260px] object-cover border-4 absolute top-0 lg:right-20 right-0 border-[#FFD70026] ">
                         <Image src='/images/image1.jpg' alt="image" width={200} height={200} className="object-cover w-full h-full object-center"/>
                       </div>
                       <div className="w-[230px] h-[260px] object-cover border-4 absolute top-20 z-20 lg:right-60 right-40 border-[#FFD70026] ">
                         <Image src='/images/image2.jpg' alt="image" width={200} height={200} className="object-cover w-full h-full object-center"/>
                       </div>
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
