'use client'
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState} from 'react';
import { usePathname } from 'next/navigation';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { link: '/', name: 'Home' },
    { link: '/about', name: 'About us' },
    { link: '/features', name: 'Features' },
    { link: '/benefits', name: 'Benefits' },
    { link: '/contact', name: 'Contact Us' },
  ];
 
  return (
    <header className="flex w-full justify-between items-center gap-3 py-4">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Company Logo"
          width={150}
          height={150}
          className="object-contain"
        />
      </Link>
      <nav className="flex items-center p-2">
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row gap-4 lg:gap-7 xl:gap-10 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0`}
        >
          {navItems.map(({ link, name }) => (
            <Link
            href="/"
              key={name}
              className="text-white uppercase cursor-pointer p-2 block text-sm font-normal"
            >
              {/* < href='/' className="block cursor-pointer w p-2 ">
              </> */}
              {name}
            </Link>
          ))}
        </ul>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden"
        >
          <MenuIcon className="text-white text-xl" />
        </button>
      </nav>
    </header>
  );
};

export default Header;