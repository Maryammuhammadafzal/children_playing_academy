import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="w-full h-auto flex py-10 justify-center items-center gap-12">
      <div className="bg-primary h-[400px] relative w-[760px] rounded-[10px] p-10 flex justify-center ">
        <p className="text-[32px] leading-10 text-white font-mono ">
          At Little Minds Academy, we believe that every child is unique and
          deserves a nurturing environment to learn, grow, and play. Our
          platform combines education and play to create a holistic development
          experience for children, fostering creativity, curiosity, and
          confidence.
        </p>
        <div className="absolute -bottom-20 -right-70">
          <Image
            src="/images/bat-image.png"
            alt="bat-image"
            width={650}
            height={300}
            className="-rotate-[100deg]"
          />
        </div>
      </div>
      <div
        className="w-[610px] h-[400px] flex justify-center items-center bg-cover bg-center relative"
        style={{ backgroundImage: `url('/images/texture.png')` }}
      >
        <div className="absolute w-full h-full flex justify-center items-center top-0 left-0"></div>
      </div>
    </div>
  );
};

export default AboutPage;
