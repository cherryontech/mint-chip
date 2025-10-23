import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { id: 'home', text: 'Home', href: '/' },
  { id: 'dashboard', text: 'Dashboard', href: '/dashboard' },
  { id: 'privacy-policy', text: 'Privacy Policy', href: '/privacy-policy' },
  { id: 'sign-up', text: 'Sign Up', href: '/signup' },
  {
    id: 'terms-of-service',
    text: 'Terms of Service',
    href: '/terms-of-service',
  },
  { id: 'onboarding', text: 'Onboarding', href: '/onboarding' },
];

const Footer = () => {
  const getLinkGridClasses = (id) => {
    switch (id) {
      case 'home':
        return 'row-start-1 col-start-1';
      case 'dashboard':
        return 'row-start-1 col-start-2';
      case 'privacy-policy':
        return 'row-start-2 col-start-1';
      case 'sign-up':
        return 'row-start-2 col-start-2';
      case 'terms-of-service':
        return 'row-start-3 col-start-1';
      default:
        return '';
    }
  };

  return (
    <footer className="w-full relative bg-[linear-gradient(180deg,rgba(225,255,228,1)_0%,rgba(187,253,255,1)_100%)]">
      {/*Responsive Navigation Container */}
      <nav
        className="
          // Mobile Styles 
          flex flex-col items-center py-5 px-2 space-y-4

          // Desktop Styles 
          lg:grid 
          lg:grid-cols-2 
          lg:grid-rows-3 
          
        
          lg:gap-x-[184px] lg:gap-y-4 
          
          lg:px-[104px] 
          lg:py-[40px] 
          lg:h-[250px] 
          lg:mx-auto
          lg:max-w-[1440px] 
          lg:w-full
        "
        aria-label="Footer navigation"
      >
        {links.map((link) => (
          <Link
            key={link.id}
            to={link.href}
            className={`
              relative h-[30px] font-medium text-[#1e1e1e] text-xl tracking-[0] leading-[normal]   focus:ring-2 focus:ring-persianblue rounded-[5px]  px-5
              
              
              // Grid Placement for Desktop
              lg:text-left lg:h-auto 
              ${getLinkGridClasses(link.id)}
            `}
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
