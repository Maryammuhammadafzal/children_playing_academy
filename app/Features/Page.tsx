import Image from "next/image";
import React from "react";

const FeaturesPage = () => {
  let features_data = [
    {
      title : 'Safe and Secure Environment',
      description : 'Your child’s safety is our priority. Our platform is designed to provide a protected and monitored space for learning and play.'
    },
    {
      title : 'Expert-Led Content',
      description : 'Developed by educators, child psychologists, and play experts to ensure quality and relevance.'
    },
    {
      title : 'Parent Involvement',
      description : 'Tools and resources to help parents stay connected with their child’s progress.'
    },
    {
      title : 'Inclusive Approach',
      description : 'Activities and content that cater to children of all abilities and backgrounds.'
    },
  ]
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

            <div className="flex justify-center items-center flex-wrap gap-14 w-full h-auto">
               {features_data && features_data.map((feature , index)=>(
                <div data-aos='zoom-in'
                      className="sm:w-[500px] w-full h-[260px] flex justify-center items-center bg-cover bg-center relative"
                      // style={{ backgroundImage: `url('/images/texture.png')` }}
                    >
                      <Image src='/images/texture.png' alt="texture" width={500} height={250} />

                      <div className="absolute w-full h-full flex justify-center items-center top-0  left-0">
                        <div className="w-full h-full flex flex-col justify-center py-10 px-9 gap-4">
                          <h2 className="text-white font-bold xl:text-3xl sm:text-xl text-lg lg:text-2xl md:text-4xl font-sans ">
                            {feature.title}
                          </h2>
                          <p className="text-white font-mono xl:text-2xl sm:text-xl text-base lg:text-lg ">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
               ))}
            </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
