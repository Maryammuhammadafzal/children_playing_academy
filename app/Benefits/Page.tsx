import Image from "next/image";
import React from "react";

const BenefitsPage = () => {
  let benefits_data = [
    {
      icon:'/images/benefit-icon1',
      title: "Enhanced Cognitive Skills",
      description: "Problem-solving, logical reasoning, and critical thinking.",
    },
    {
      icon:'/images/benefit-icon2',
      title: "Improved Social Skills",
      description: "Teamwork, communication, and empathy.",
    },
    {
      icon:'/images/benefit-icon3',
      title: "Boosted Creativity",
      description: "Artistic expression and innovative thinking.",
    },
    {
      icon:'/images/benefit-icon4',
      title: "Physical Development",
      description: "Activities that promote coordination and overall health.",
    },
    {
      icon:'/images/benefit-icon5',
      title: "Confidence Building",
      description: "Celebrating achievements and encouraging self-expression.",
    },
  ];
  return (
    <div className="w-full h-auto flex justify-center items-center py-20">
      <div className="vector absolute -right-5 -top-40 w-auto h-auto z-50">
        <Image
          src="/images/vector-1.png"
          alt="vector"
          width={200}
          height={100}
          className="w-[200px]"
        />
      </div>
      <div className="w-full h-auto flex flex-col gap-14 justify-center items-center">
        <h2 className="text-primary font-bold xl:text-6xl sm:text-4xl text-3xl lg:text-5xl md:text-4xl font-sans ">
          Benefits for Your Child
        </h2>

        <div className="flex justify-center items-center flex-wrap gap-16 w-full h-auto">
          {benefits_data &&
            benefits_data.map((benefit, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                className="w-[340px] h-auto min-h-[190px] px-3 py-2 flex justify-center items-center"
              >
                <Image
                  src={benefit.icon}
                  alt="icon"
                  width={70}
                  height={70}
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
