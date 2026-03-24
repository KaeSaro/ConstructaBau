import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface-dark w-full py-8 p-8 relative">
      {/* Main container for logo and links */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16">
        {/* Left column with logo */}
        <div className="text-on-dark w-full md:w-1/2">
          <div className="flex flex-col items-start">
            <h1 className="whitespace-nowrap text-[35px] font-jazmin font-thin uppercase">
              Constructa Bau<span className="text-accent">.</span>
            </h1>
            <p className="text-muted-on-dark text-[16px] font-jazmin">Wir schaffen solide Grundlagen</p>
          </div>
        </div>

        {/* Right column with links */}
        <div className="w-full md:w-1/2 text-right mt-8 md:mt-0">
          <ul className="space-y-4">
            <li>
              <Link href="/" prefetch={false} className="text-link-on-dark text-[18px] uppercase hover:text-on-dark">
                Home
              </Link>
            </li>
            <li>
              <Link href="/leistungen" prefetch={false} className="text-link-on-dark text-[18px] uppercase hover:text-on-dark">
                LEISTUNGEN
              </Link>
            </li>
            <li>
              <Link href="/impressionen" prefetch={false} className="text-link-on-dark text-[18px] uppercase hover:text-on-dark">
                IMPRESSIONEN
              </Link>
            </li>
            <li>
              <Link href="/team" prefetch={false} className="text-link-on-dark text-[18px] uppercase hover:text-on-dark">
                TEAM
              </Link>
            </li>
            <li>
              <Link href="/impressum" prefetch={false} className="text-link-on-dark text-[18px] uppercase hover:text-on-dark">
                IMPRESSUM
              </Link>
            </li>
            <li>
              <Link href="/kontakt" prefetch={false} className="text-link-on-dark text-[18px] uppercase hover:text-on-dark">
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/news" prefetch={false} className="text-link-on-dark text-[18px] uppercase hover:text-on-dark">
                NEWS
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom with contact information */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start border-t border-accent pt-2 space-y-4 md:space-y-0 md:space-x-8">
        {/* Copyright Text */}
        <div className="w-full md:w-auto text-center md:text-left">
          <p className="text-[12px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-muted-on-dark whitespace-nowrap">
            <span className="block custom:inline whitespace-nowrap">
              © {new Date().getFullYear()} Constructa Bau GmbH
            </span>
            <span className="hidden custom:inline"> – </span>
            <span className="block custom:inline whitespace-nowrap">Alle Rechte vorbehalten.</span>
          </p>
        </div>

        {/* Contact Info Container */}
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-0">
          <div className="flex whitespace-nowrap">
            <Link
              href="tel:+4915170220139"
              className="text-[12px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-muted-on-dark hover:text-on-dark transition-colors duration-300"
            >
              +49 (0) 151 7022 0139
            </Link>
          </div>
          <div className="flex whitespace-nowrap justify-center">
            <Link
              href="mailto:info@c-bau.com"
              className="text-[12px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-muted-on-dark hover:text-on-dark transition-colors duration-300"
            >
              info@c-bau.com
            </Link>
          </div>
        </div>

        <p className="text-[12px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-muted-on-dark inline-block">
          <span className="block custom:inline whitespace-nowrap">Faule Birke 1</span>
          <span className="hidden custom:inline">, </span>
          <span className="block custom:inline whitespace-nowrap">57080 Siegen</span>
        </p>
        {/* AGB Link */}
        <div className="flex w-full md:w-auto text-center md:text-right justify-center items-start">
          <Link
            href="/agb"
            prefetch={false}
            className="text-[12px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-muted-on-dark hover:text-on-dark transition-colors duration-300"
          >
            AGB
          </Link>
        </div>
        {/* Privacy Link */}
        <div className="flex w-full md:w-auto text-center md:text-right justify-center items-start">
          <Link
            href="/datenschutz"
            prefetch={false}
            className="text-[12px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-muted-on-dark hover:text-on-dark transition-colors duration-300"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
