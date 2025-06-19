import { MenuIcon } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

const Header = () => {
   let navItem = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/",
      name: "About us",
    },
    {
      link: "/",
      name: "Features",
    },
    {
      link: "/",
      name: "Pricing",
    },
    {
      link: "/",
      name: "Contact Us",
    },
  ];
  return (
    <header className='flex w-full justify-between items-center h-full gap-3'>
        <a href="/" className='cursor-pointer'>
       <img src="/images/logo.png" alt="logo" className='w-auto h-auto' />
        </a>
         <nav className=" w-auto h-auto flex justify-center items-center p-2">
          <ul className="md:flex gap-4 lg:gap-7 hidden xl:gap-10 w-full h-auto">
            {navItem &&
              navItem.map(({ link, name }, index) => (
                <li key={index} className="flex text-white flex-col items-center gap-1 h-auto w-auto uppercase text-sm group hover:font-bold font-normal">
                  <a href={link}>{name}</a>
                </li>
              ))}
          </ul>
          <MenuIcon className="text-white text-xl md:hidden block"/>
        </nav>
    </header>
  )
}

export default Header