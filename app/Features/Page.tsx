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
    <div className="w-full h-auto flex justify-center items-center py-20">
      <div className="vector absolute -left-5 -top-40 w-auto h-auto z-50">
        <Image
          src="/images/vector-1.png"
          alt="vector"
          width={100}
          height={100}
          className="w-[100px]"
        />
      </div>
      <div className="w-full h-auto flex flex-col gap-14 justify-center items-center">
          <h2 className="text-primary font-bold xl:text-6xl sm:text-4xl text-3xl lg:text-5xl md:text-4xl font-sans ">
              Key Features
            </h2>

            <div className="flex justify-center items-center flex-wrap gap-0 xl:gap-14 w-full h-auto">
               {features_data && features_data.map((feature , index)=>(
                <div key={index} data-aos='zoom-in'
                      className="lg:w-[500px] w-[450px] md:w-[50%] md:h-auto md:my-43xs:my-2 my-1 lg:h-[300px] flex justify-center bg-cover bg-center relative"
                      // style={{ backgroundImage: `url('/images/texture.png')` }}
                    >
                      <Image src='/images/texture.png' alt="texture" width={500} height={300} />

                      <div className="absolute w-full h-full flex justify-center  top-0  left-0">
                        <div className="w-full h-full flex flex-col py-10 px-10 gap-3">
                          <h2 className="text-white font-mono font-bold lg:text-3xl md:text-2xl text-3xl  ">
                            {feature.title}
                          </h2>
                          <p className="text-white font-mono lg:text-xl text-lg ">
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
