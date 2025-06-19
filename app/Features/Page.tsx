import Image from "next/image";
import React from "react";

const FeaturesPage = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center p-9 relative">
      <div className="vector absolute left-0 top-0 w-[200px] h-[300px]">
        <Image
          src="/images/vector-1.png"
          alt="vector"
          width={200}
          height={1000}
          className="w-[200px]"
        />
      </div>
      <div className="w-full h-auto flex flex-col gap-6 justify-center items-center">
          <h2 className="text-primary font-bold xl:text-6xl sm:text-4xl text-3xl lg:text-5xl md:text-4xl font-sans ">
              Key Features
            </h2>
      </div>
    </div>
  );
};

export default FeaturesPage;
