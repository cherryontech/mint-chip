import React from 'react';

// Corrected from a function to a constant array
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
];

const Footer = () => {
  // Helper function to apply specific grid placement classes for desktop
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
    // 1. Main Footer Container
    <footer className="w-full relative bg-[linear-gradient(180deg,rgba(225,255,228,1)_0%,rgba(187,253,255,1)_100%)]">
      {/* 2. Responsive Navigation Container (The Core) */}
      <nav
        className="
          // Mobile Styles (Default: Stacked, Centered)
          flex flex-col items-center py-10 px-4 space-y-4

          // Desktop Styles (lg: breakpoint applies the Grid layout)
          lg:grid 
          lg:grid-cols-2 
          lg:grid-rows-3 
          
          // ******* CAMBIO CLAVE AQUI *******
          // Reducción del espaciado vertical (lg:gap-y-4 = 16px)
          lg:gap-x-[184px] lg:gap-y-4 
          
          lg:px-[104px] 
          lg:py-[40px] // Reducido el padding vertical de 66px a 40px
          lg:h-[250px] // Reducida la altura fija para reflejar el nuevo espaciado
          lg:mx-auto
          lg:max-w-[1440px] 
          lg:w-full
        "
        aria-label="Footer navigation"
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`
              relative h-[30px] font-medium text-[#1e1e1e] text-xl tracking-[0] leading-[normal] 
              
              
              // Grid Placement for Desktop
              lg:text-left
              lg:h-auto 
              ${getLinkGridClasses(link.id)}
            `}
            aria-label={link.text}
          >
            {link.text}
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
