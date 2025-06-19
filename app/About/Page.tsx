import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="w-full h-auto flex py-10 justify-center items-center gap-3">
      <div className="bg-primary h-[400px] relative w-[750px] rounded-[10px] p-10 flex justify-center ">
        <p className="text-[32px] leading-10 text-white font-mono ">
                At Little Minds Academy, we believe that every child is unique and
        deserves a nurturing environment to learn, grow, and play. Our platform
        combines education and play to create a holistic development experience
        for children, fostering creativity, curiosity, and confidence.
        </p>
        <div className="absolute bottom-0 right-0">
                <Image 
                
                />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
