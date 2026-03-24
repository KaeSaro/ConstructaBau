'use client';

import Link from 'next/link';
import { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

/** Muss zu tailwind `screens.navdesk` passen — unter dieser Breite: Burger; darüber: horizontale Nav. */
const NAV_DESKTOP_MIN_PX = 880;
const LOGO_NAV_GAP_PX = 48;

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
  const barRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const [navLeftPx, setNavLeftPx] = useState(null);

  const updateNavPosition = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (window.innerWidth < NAV_DESKTOP_MIN_PX) {
      setNavLeftPx(null);
      return;
    }

    const bar = barRef.current;
    const logo = logoRef.current;
    const nav = navRef.current;
    if (!bar || !logo || !nav) return;

    const barRect = bar.getBoundingClientRect();
    const logoRect = logo.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    const navWidth = navRect.width;
    if (navWidth < 1) return;

    const logoRight = logoRect.right - barRect.left;
    const innerWidth = barRect.width;

    let left = (innerWidth - navWidth) / 2;
    if (left < logoRight + LOGO_NAV_GAP_PX) {
      left = logoRight + LOGO_NAV_GAP_PX;
    }

    const maxLeft = innerWidth - navWidth;
    if (left > maxLeft) {
      left = maxLeft;
    }

    setNavLeftPx(left);
  }, []);

  useLayoutEffect(() => {
    updateNavPosition();
  }, [updateNavPosition, pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= NAV_DESKTOP_MIN_PX) {
        setIsOpen(false);
      }
      updateNavPosition();
    };

    window.addEventListener('resize', onResize);

    const bar = barRef.current;
    const nav = navRef.current;
    const ro =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => {
            updateNavPosition();
          })
        : null;

    if (ro) {
      if (bar) ro.observe(bar);
      if (nav) ro.observe(nav);
    }

    return () => {
      window.removeEventListener('resize', onResize);
      ro?.disconnect();
    };
  }, [updateNavPosition]);

  const navPositionStyle =
    navLeftPx !== null
      ? { left: navLeftPx, transform: 'none' }
      : { left: '50%', transform: 'translateX(-50%)' };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-50">
      <div className="w-full">
        <div
          ref={barRef}
          className="relative flex h-[80px] w-full items-center justify-between px-8 sm:px-12 lg:px-16"
        >
          <Link
            ref={logoRef}
            href="/"
            prefetch={false}
            onClick={() => setIsOpen(false)}
            className={`relative z-20 shrink-0 whitespace-nowrap rounded-lg px-4 py-1 text-[24px] font-jazmin font-thin uppercase transition-colors duration-300 ease-in-out ${
              isOpen ? 'bg-elevated text-foreground' : 'bg-surface-dark text-on-dark'
            }`}
          >
            Constructa Bau<span className="text-accent">.</span>
          </Link>

          <nav
            ref={navRef}
            className="absolute top-0 z-10 hidden h-full items-center gap-x-5 xl:gap-x-10 navdesk:flex"
            style={navPositionStyle}
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                prefetch={false}
                className="group relative inline-flex items-center px-1 text-lg xl:text-xl font-medium font-jazmin text-foreground whitespace-nowrap"
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-foreground transition-all duration-300 ease-in-out
                      ${pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`}
                />
              </Link>
            ))}
          </nav>

          <div className="relative z-20 flex w-10 shrink-0 justify-end navdesk:w-0 navdesk:min-w-0 navdesk:overflow-hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex navdesk:hidden items-center justify-center w-10 h-10 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-7 h-2.5">
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

        <div className="px-8 sm:px-12 lg:px-16">
          <div className="h-px bg-border" />
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-surface-dark navdesk:hidden z-50 transition-all duration-300 ease-in-out transform ${
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
