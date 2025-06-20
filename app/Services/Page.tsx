import Image from "next/image";
import React from "react";

const ServicePage = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center py-20">
      <div className="w-full h-auto flex flex-col gap-14 justify-center items-center">
        <h2 className="text-primary font-bold xl:text-6xl md:text-5xl max-xs:text-3xl text-center text-4xl font-sans">
          What We Offer
        </h2>

        <div className="flex justify-center items-center flex-col gap-0 w-full h-auto">
          <div className="w-full h-auto flex justify-center items-center bg-[#FFD70026]">
            <div className="w-[90%] h-auto flex justify-between md:flex-row flex-col gap-4">
                <div className="left flex flex-col gap-6 justify-center w-[50%] h-auto">
                        <h3 className="font-bold text-4xl text-secondary font-sans">Educational Programs</h3>
                        <div className="flex flex-col gap-3 w-auto h-auto">
<div className="flex ">
        <h4 className="text-primary font-bold text-xl w-[270px]">STEM Adventures:</h4>
        <p className="text-base">Hands-on activities in science, technology, engineering, and math to spark curiosity and innovation.</p>
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
