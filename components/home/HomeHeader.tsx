"use client"

import { InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { AlignRightIcon, FacebookIcon, Headset, Menu, SearchIcon, X, XCircle, YoutubeIcon } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const HomeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      // @ts-ignore
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu if clicked outside
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="flex items-center justify-between py-8 px-4 md:px-14 xl:px-20 w-full sticky top-0 bg-transparent text-white z-50">
      <Link href={`/`} className="logo text-md font-bold uppercase flex items-center">
        <img src="logo.png" alt="g" className="h-5 w-10 object-contain mr-2" /> Indian Realtor
      </Link>

      {/* Mobile Sliding Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-3/4 md:w-[20rem] bg-fixed bg-white bg-cover bg-no-repeat bg-start p-5 transition-transform duration-500 ease-in-out transform ${
          isMenuOpen ? '-translate-x-0' : 'translate-x-full'
        } z-50`}
        style={{ backgroundImage: `url('/sidebar-bg.png')` }}
      >
        <div className="flex items-center justify-between">
            <Link href={`/`} className="logo text-md font-bold uppercase flex items-center">
                <img src="logo.png" alt="g" className="h-5 w-10 object-contain mr-2" /> Indian Realtor
            </Link>
            <button
              className="block text-md"
              onClick={toggleMenu}
            >
              <XCircle />
            </button>
        </div>
        <ul className="space-y-8 mt-16 px-4">
          <li>
            <Link
              href="/properties"
              className="text-slate-100 text-md"
              onClick={toggleMenu}
            >
              Properties
            </Link>
          </li>
          <li>
            <Link
              href="/appartments"
              className="text-slate-100 text-md"
              onClick={toggleMenu}
            >
              Plot & Lands
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-slate-100 text-md"
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-slate-100 text-md"
              onClick={toggleMenu}
            >
              Contact us
            </Link>
          </li> 
          <li>
            <Link
              href="/about"
              className="text-slate-100 text-md"
              onClick={toggleMenu}
            >
              About us
            </Link>
          </li>
        </ul>


        <ul className="flex items-center justify-center space-x-10 mt-48">
            <li>
                <Link href={`/`}>
                    <img src="/icons/twitter-x.png" alt='SOCIAL' className="h-6 w-6" /> 
                </Link>
            </li>
            <li>
                <Link href={`/`}>
                    <img src="/icons/facebook.png" alt='SOCIAL' className="h-6 w-6" /> 
                </Link>
            </li>
            <li>
                <Link href={`/`}>
                    <img src="/icons/instagram.png" alt='SOCIAL' className="h-6 w-6" /> 
                </Link>
            </li>
            <li>
                <Link href={`/`}>
                    <img src="/icons/youtube.png" alt='SOCIAL' className="h-6 w-6" /> 
                </Link>
            </li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex items-center font-medium space-x-12">
          <li>
            <a
              href="/"
              className="text-white"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-slate-200 hover:text-white transition duration-100"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#hiring"
              className="text-slate-200 hover:text-white transition duration-100"
            >
              Queries
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-12">
        <div>
            <button className="text-3xl">
                <SearchIcon />
            </button>
        </div>
        <div>
            <button onClick={toggleMenu} className="text-3xl">
            {isMenuOpen ? <X /> : <AlignRightIcon />}
            </button>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;