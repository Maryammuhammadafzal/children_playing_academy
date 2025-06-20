import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full h-auto flex py-10 justify-center items-center">
      <div className="w-[90%] max-w-7xl flex md:flex-row flex-col gap-10 justify-between items-center h-auto">
        <div className="left md:w-1/2 w-full flex flex-col gap-6 ">
          <h3 className="font-bold text-primary xl:text-6xl text-5xl max-sm:text-4xl font-sans ">
            Contact US
          </h3>
          <p className="lg:text-lg md:text-base text-black">
            Ready to explore? Visit our website or download our app today. For
            inquiries, reach out to us at [email@example.com] or call us at
            [phone number]. Let’s nurture the next generation of thinkers,
            dreamers, and doers.
          </p>
          <div className="w-full h-auto py-4 ">
            <Button className="text-secondary bg-primary hover:bg-primary px-5 md:px-8 py-4 text-base md:text-lg drop-shadow-xl drop-shadow-[#DC143C59]">
              Reach us
            </Button>
          </div>
        </div>
        <div className="right flex justify-center items-center  md:w-1/2 w-full h-auto">
          <div className="w-[420px] h-[400px] max-xs:w-full p-7 flex flex-col gap-4  shadow-2xl bg-white shadow-[#00000040] rounded-xl">
                <div className="flex w-full h-auto flex-col gap-2">
                        <label htmlFor="name">Name:</label>
                        <Input type="text" id="name" />
                </div>
                <div className="flex w-full h-auto flex-col gap-2">
                        <label htmlFor="name">Age:</label>
                        <Input type="text" id="name" />
                </div>
                <div className="flex w-full h-auto flex-col gap-2">
                        <label htmlFor="name">Group:</label>
                        <Input type="text" id="name" />
                </div>
                <div className="flex w-full h-auto flex-col gap-2">
                        <label htmlFor="name">Phone Number:</label>
                        <Input type="text" id="name" />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
