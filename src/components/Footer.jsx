import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Links logged out grid
const loggedOutLinks = [
  { id: 'home', text: 'Home', href: '/' },
  { id: 'dashboard', text: 'Dashboard', href: '/dashboard' },
  { id: 'privacy-policy', text: 'Privacy Policy', href: '/privacy-policy' },
  { id: 'sign-up', text: 'Sign Up', href: '/signup' },
  {
    id: 'terms-of-service',
    text: 'Terms of Service',
    href: '/terms-of-service',
  },
  
];

// Links logged in
const loggedInLinks = [
  { id: 'home', text: 'Home', href: '/' },
  { id: 'privacy-policy', text: 'Privacy Policy', href: '/privacy-policy' },
  {
    id: 'terms-of-service',
    text: 'Terms of Service',
    href: '/terms-of-service',
  },
];

const Footer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('authToken')
  );

  useEffect(() => {
    const checkAuth = () => {
      setIsLoggedIn(!!localStorage.getItem('authToken'));
    };

    window.addEventListener('storage', checkAuth);
    checkAuth();

    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const getLinkClasses = (isLoggedIn) =>
    `focus:outline-none focus-visible:ring-2 rounded-lg px-2 py-1 transition-colors whitespace-nowrap ${
      isLoggedIn
        ? `font-[Poppins] text-xl font-medium text-[#1E1E1E] leading-normal hover:font-bold focus:ring-persianblue `
        : 'font-medium text-xl text-[#1e1e1e]  hover:font-bold focus:ring-persianblue'
    }`;

  // Grid logged out state
  const getLoggedOutGridClasses = (id) => {
    switch (id) {
      case 'home':
        return 'lg:row-start-1 lg:col-start-1';
      case 'dashboard':
        return 'lg:row-start-1 lg:col-start-2';
      case 'privacy-policy':
        return 'lg:row-start-2 lg:col-start-1';
      case 'sign-up':
        return 'lg:row-start-2 lg:col-start-2';
      case 'terms-of-service':
        return 'lg:row-start-3 lg:col-start-1';
      default:
        return '';
    }
  };

  return (
    <footer
      className={`w-full relative bg-[linear-gradient(180deg,rgba(225,255,228,1)_0%,rgba(187,253,255,1)_100%)] font-poppins`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoggedIn ? (
          /* Footer for authenticated user */
          <nav
            className="flex flex-col items-center justify-center py-4 h-auto md:flex-row md:h-[100px] space-y-3 md:space-y-0 "
            aria-label="Logged-in Footer navigation"
          >
            {loggedInLinks.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                className={`
                  mx-6 sm:mx-8 md:mx-12 lg:mx-[135px] 
                  ${getLinkClasses(true)}
                `}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        ) : (
          /* Footer for NON-authenticated user */
          <nav
            className="
              // Mobile Styles: Centered column
              flex flex-col items-center py-5 px-2 space-y-4

              // Desktop Styles: 2-column Grid
              lg:grid
              lg:grid-cols-2
              lg:grid-rows-3
              lg:gap-x-40 lg:gap-y-4
              lg:px-10
              lg:py-10
              lg:max-w-[1000px]
              lg:mx-auto
            "
            aria-label="Logged-out Footer navigation"
          >
            {loggedOutLinks.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                className={`
                  text-center relative h-auto ${getLinkClasses(false)}
                  // Grid Placement for Desktop
                  lg:text-left ${getLoggedOutGridClasses(link.id)}
                `}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </footer>
  );
};

export default Footer;
