import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] w-full py-8 p-8 relative">
      {/* Main container for logo and links */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16">
        {/* Left column with logo */}
        <div className="text-white w-full md:w-1/2">
          <div className="flex flex-col items-start">
            <h1 className="text-[35px] font-['Montserrat',_sans-serif] uppercase">
              Constructa Bau<span className="text-[#D0312D]">.</span>
            </h1>
            <p className="text-[#999999] text-[16px] font-['Montserrat',_sans-serif]">Wir schaffen solide Grundlagen</p>
          </div>
        </div>

        {/* Right column with links */}
        <div className="w-full md:w-1/2 text-right mt-8 md:mt-0">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="text-[#c7c7c7] text-[18px] uppercase hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/leistungen" className="text-[#c7c7c7] text-[18px] uppercase hover:text-white">
                LEISTUNGEN
              </Link>
            </li>
            <li>
              <Link href="/impressionen" className="text-[#c7c7c7] text-[18px] uppercase hover:text-white">
                IMPRESSIONEN
              </Link>
            </li>
            <li>
              <Link href="/team" className="text-[#c7c7c7] text-[18px] uppercase hover:text-white">
                TEAM
              </Link>
            </li>
            <li>
              <Link href="/impressum" className="text-[#c7c7c7] text-[18px] uppercase hover:text-white">
                IMPRESSUM
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-[#c7c7c7] text-[18px] uppercase hover:text-white">
                NEWS
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom with contact information */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start border-t border-[#D0312D] pt-2 space-y-4 md:space-y-0 md:space-x-8">
        {/* Copyright Text */}
        <div className="w-full md:w-auto text-center md:text-left">
          <p className="text-[12px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-[#999999] whitespace-nowrap">
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
              className="text-[12px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-[#999999] hover:text-white transition-colors duration-300"
            >
              +49 (0) 151 7022 0139
            </Link>
          </div>
          <div className="flex whitespace-nowrap justify-center">
            <Link
              href="mailto:info@c-bau.com"
              className="text-[12px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-[#999999] hover:text-white transition-colors duration-300"
            >
              info@c-bau.com
            </Link>
          </div>
        </div>

        <p className="text-[12px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-[#999999] inline-block">
          <span className="block custom:inline whitespace-nowrap">Faule Birke 1</span>
          <span className="hidden custom:inline">, </span>
          <span className="block custom:inline whitespace-nowrap">57080 Siegen</span>
        </p>
        {/* AGB Link */}
        <div className="flex w-full md:w-auto text-center md:text-right justify-center items-start">
          <Link
            href="/agb"
            className="text-[12px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-[#999999] hover:text-white transition-colors duration-300"
          >
            AGB
          </Link>
        </div>
        {/* Privacy Link */}
        <div className="flex w-full md:w-auto text-center md:text-right justify-center items-start">
          <Link
            href="/datenschutz"
            className="text-[12px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-[#999999] hover:text-white transition-colors duration-300"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
