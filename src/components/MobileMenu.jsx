// react
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RiLayoutHorizontalFill, RiUser3Fill } from 'react-icons/ri';
import { PiListBulletsFill } from 'react-icons/pi';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const navLinks = [
    { name: 'Dashboard', href: '/Dashboard', icon: PiListBulletsFill },
    {
      name: 'Detox Challenge',
      href: '/DetoxChallenge',
      icon: RiLayoutHorizontalFill,
    },
    { name: 'Profile', href: '/Profile', icon: RiUser3Fill },
  ];

  return (
    <>
      {/* Side Menu*/}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-xl p-6 transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Main Navigation Menu"
        id="mobile-menu"
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="text-stone-900 text-3xl  mt-10 mb-8 ml-8 focus:outline-none focus:ring-2 focus:ring-persianblue rounded-full p-1"
          aria-label="Close Menu"
        >
          <AiOutlineClose />
        </button>

        {/* Links with Icons */}
        <nav>
          <ul className="flex flex-col space-y-6 ml-10 ">
            {navLinks.map((link) => (
              <li key={link.name} className="mb-6">
                <a
                  href={link.href}
                  className="flex items-center text-stone-900 text-lg font-poppins font-semibold hover:text-persianblue transition-colors focus:outline-none focus:ring-2 focus:ring-persianblue rounded-[5px]"
                  onClick={toggleMenu}
                >
                  <link.icon
                    className="mr-3 text-2xl text-black w-5 h-6 "
                    aria-hidden="true"
                  />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;