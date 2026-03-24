'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Leistungen', href: '/leistungen' },
  { name: 'Impressionen', href: '/impressionen' },
  { name: 'Team', href: '/team' },
  { name: 'Kontakt', href: '/kontakt' },
  { name: 'News', href: '/news' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      // Breakpoint auf 1024px erhöht
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-50">
      <div className="w-full">
        <div className="flex h-[80px]">
          <div className="w-full h-full px-8 sm:px-12 lg:px-16">
            {/* Logo */}
            <div className="absolute left-8 sm:left-12 lg:left-16 h-[80px] flex items-center z-[60]">
              <Link
                href="/"
                prefetch={false}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-4 py-1 text-[24px] font-jazmin font-thin uppercase transition-colors duration-300 ease-in-out ${
                  isOpen ? 'bg-elevated text-foreground' : 'bg-surface-dark text-on-dark'
                }`}
              >
                Constructa Bau<span className="text-accent">.</span>
              </Link>
            </div>

            {/* Desktop menu - md durch lg ersetzt */}
            <nav
              className="hidden lg:flex h-full flex-1 items-center relative"
              style={{ marginLeft: '340px', marginRight: '100px' }}
            >
              <div className="flex justify-center w-full space-x-6 lg:space-x-12">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    prefetch={false}
                    className="group relative inline-flex items-center px-1 text-lg lg:text-xl font-medium font-jazmin text-foreground whitespace-nowrap"
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-foreground transition-all duration-300 ease-in-out
                      ${pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    />
                  </Link>
                ))}
              </div>
            </nav>

            {/* Menu button - md durch lg ersetzt */}
            <div className="absolute right-8 sm:right-12 lg:right-16 h-[80px] flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex lg:hidden items-center w-10 h-10 rounded-md focus:outline-none z-[60]"
                aria-label="Toggle menu"
              >
                <div className="relative w-7 h-2.5 ml-auto">
                  <span
                    className={`
                    absolute left-0 w-full h-[2px] transform transition-all duration-300 ease-in-out
                    ${isOpen ? 'top-1 rotate-45 bg-foreground' : 'top-0 bg-foreground'}
                  `}
                  />
                  <span
                    className={`
                    absolute left-0 w-full h-[2px] transform transition-all duration-300 ease-in-out
                    ${isOpen ? 'top-1 -rotate-45 bg-foreground' : 'top-2.5 bg-foreground'}
                  `}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="px-8 sm:px-12 lg:px-16">
          <div className="h-px bg-border" />
        </div>
      </div>

      {/* Mobile menu - md durch lg ersetzt */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-surface-dark lg:hidden z-50 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col justify-end pb-32 px-8 sm:px-12 lg:px-16">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              prefetch={false}
              className={`block text-[28px] sm:text-[30px] font-jazmin font-medium transition-colors duration-200 mb-0.5 
                ${pathname === item.href ? 'text-on-dark' : 'text-nav-muted hover:text-on-dark'}`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-8 sm:px-12 lg:px-16 py-6 flex justify-between items-center border-t border-muted-on-dark">
          <span className="text-muted-on-dark font-['IBM_Plex_Mono',_sans-serif] text-sm uppercase">
            <span className="hidden min-[400px]:inline">BLEIBEN SIE IN KONTAKT</span>
            <span className="min-[400px]:hidden">KONTAKT</span>
          </span>
          <Link
            href="tel:+4915170220139"
            className="text-on-dark font-jazmin text-sm underline decoration-1 underline-offset-4 hover:text-muted-on-dark transition-colors duration-200"
          >
            +49 151 7022 0139
          </Link>
        </div>
      </div>
    </header>
  );
}
