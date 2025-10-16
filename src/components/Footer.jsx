import React from 'react';

const links = () => [
  {
    id: 'home',
    text: 'Home',
    href: '/',
    row: 'row-[1_/_2]',
    col: 'col-[1_/_2]',
    width: 'w-[60px]',
  },
  {
    id: 'dashboard',
    text: 'Dashboard',
    href: '/dashboard',
    row: 'row-[1_/_2]',
    col: 'col-[2_/_3]',
    width: 'w-[113px]',
  },
  {
    id: 'privacy-policy',
    text: 'Privacy Policy',
    href: '/privacy-policy',
    row: 'row-[2_/_3]',
    col: 'col-[1_/_2]',
    width: 'w-[138px]',
  },
  {
    id: 'sign-up',
    text: 'Sign Up',
    href: '/sign-up',
    row: 'row-[2_/_3]',
    col: 'col-[2_/_3]',
    width: 'w-[77px]',
  },
  {
    id: 'terms-of-service',
    text: 'Terms of Service',
    href: '/terms-of-service',
    row: 'row-[3_/_4]',
    col: 'col-[1_/_2]',
    width: 'w-[166px]',
  },
];

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 grid-rows-3 w-[1440px] h-[405px] gap-[16px_184px] px-[104px] py-[66px] relative bg-[linear-gradient(180deg,rgba(225,255,228,1)_0%,rgba(187,253,255,1)_100%)]">
      <nav className="contents" aria-label="Footer navigation">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`relative ${link.row} ${link.col} ${link.width} h-[30px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#1e1e1e] text-xl tracking-[0] leading-[normal] hover:underline focus:outline-2 focus:outline-offset-2 focus:outline-[#1e1e1e]`}
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
