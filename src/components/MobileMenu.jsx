// react
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { RiLayoutHorizontalFill, RiUser3Fill } from 'react-icons/ri';
import { MdForum } from "react-icons/md";
import { PiListBulletsFill } from 'react-icons/pi';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const navLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: PiListBulletsFill },
    {
      name: 'Detox Challenge',
      href: '/detoxChallenge',
      icon: RiLayoutHorizontalFill,
    },
    {
      name: 'Community Forum',
      href: '/community',
      icon: MdForum ,
    },
    
    { name: 'Profile', href: '/profile', icon: RiUser3Fill },
  ];

  return (
    <>
      {/* Side Menu*/}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-xl p-2 transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Main Navigation Menu"
        id="mobile-menu"
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="text-stone-900 text-3xl mt-8 mb-2 ml-8 rounded-full p-1"
          aria-label="Close Menu"
        >
          <AiOutlineClose />
        </button>

        {/* Links with Icons */}
        <nav>
          <ul className="flex flex-col space-y-3 ml-10 ">
            {navLinks.map((link) => (
              <li key={link.name} className="mb-4">
                <Link 
                  to={link.href} 
                  className="flex items-center text-stone-900 text-lg font-poppins font-semibold transition-colors hover:font-bold focus:outline-none focus:ring-2focus:outline-none  focus-visible:ring-2 focus-visible:ring-persianblue rounded-[5px]"
                  onClick={toggleMenu} 
                >
                  <link.icon
                    className="mr-2 text-2xl text-black w-5 h-6 "
                    aria-hidden="true"
                  />
                  {link.name}
                </Link> 
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;