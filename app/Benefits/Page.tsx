import Image from "next/image";
import React from "react";

const BenefitsPage = () => {
  const benefits_data = [
    {
      icon:'/images/benefit-icon1.png',
      title: "Enhanced Cognitive Skills",
      description: "Problem-solving, logical reasoning, and critical thinking.",
    },
    {
      icon:'/images/benefit-icon2.png',
      title: "Improved Social Skills",
      description: "Teamwork, communication, and empathy.",
    },
    {
      icon:'/images/benefit-icon3.png',
      title: "Boosted Creativity",
      description: "Artistic expression and innovative thinking.",
    },
    {
      icon:'/images/benefit-icon4.png',
      title: "Physical Development",
      description: "Activities that promote coordination and overall health.",
    },
    {
      icon:'/images/benefit-icon5.png',
      title: "Confidence Building",
      description: "Celebrating achievements and encouraging self-expression.",
    },
  ];
  return (
    <div id="benefits" className="benefits w-full h-auto flex justify-center relative items-center py-20">
      <div className="vector absolute -right-0 -top-10 max-md:hidden w-auto h-auto z-50">
        <Image
          src="/images/vector-2.png"
          alt="vector"
          width={200}
          height={100}
          className="w-[200px]"
        />
      </div>
      <div className="w-full h-auto flex flex-col gap-16 justify-center items-center">
        <h2 className="text-primary font-bold xl:text-6xl md:text-5xl max-xs:text-3xl text-center text-4xl font-sans ">
          Benefits for Your Child
        </h2>

        <div className="flex justify-center items-center flex-wrap gap-16 w-full h-auto">
          {
            benefits_data.map((benefit, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                className="w-[340px] h-auto min-h-[190px] px-3 py-2 gap-3 flex justify-center flex-col  items-center"
              >
                <Image
                  src={benefit.icon}
                  alt="icon"
                  width={60}
                  height={60}
                />

                <div className="w-full h-full flex justify-center text-center flex-col gap-3 items-center">
                    <h2 className="text-primary font-mono font-bold text-2xl ">
                      {benefit.title}
                    </h2>
                    <p className="text-[#969696] font-mono text-lg ">
                      {benefit.description}
                    </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsPage;
