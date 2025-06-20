import { Facebook, Instagram, Linkedin, TwitterIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <div className="lg:w-[80%] md:w-[90%] flex py-20 px-3 gap-20 justify-evenly flex-wrap">
        <div className="logo flex flex-col gap-5">
          <Image src="/images/logo.png" alt="logo" width={200} height={200} />
          <p className="text-lg max-w-xs">
            Let’s nurture the next generation of thinkers, dreamers, and doers.
          </p>
          <div className="social-links text-primary text-xl flex gap-3">
            <FaFacebook />
            <FaXTwitter />
            <FaLinkedin />
            <FaInstagramSquare />
            <FaWhatsapp />
          </div>
        </div>

        <div className="flex flex-col gap-5 ">
          <h4 className="text-primary font-bold uppercase text-2xl ">Quick links</h4>
          <ul className="flex flex-col gap-2 font-mono text-black/60">
            <li>
              <a href="/" className="text-base">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="text-base">
                About us
              </a>
            </li>
            <li>
              <a href="/" className="text-base">
                Benefits
              </a>
            </li>
            <li>
              <a href="/" className="text-base">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5 ">
          <h4 className="text-primary uppercase font-bold text-2xl ">Contact us</h4>
          <ul className="flex flex-col gap-2 font-mono text-black/60">
            <li className="text-base">michelle.rivera@example.com</li>
            <li className="text-base">(808) 555-0111</li>
            <li className="text-base">
              1901 Thornridge Cir. Shiloh, Hawaii 81063
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright flex lg:w-[80%] md:w-[90%] py-7 px-3 justify-center items-center">
        <p className="md:text-lg text-base text-black/60">© 2021 all copyright reserved. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
