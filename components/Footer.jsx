export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] w-full py-8 p-8 relative">
      {/* Hauptcontainer für Logo und Links */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16">
        {/* Linke Spalte mit Logo */}
        <div className="text-white w-full md:w-1/2">
          <div className="flex flex-col items-start">
            <h1 className="text-[35px] font-['Montserrat',_sans-serif] uppercase">
              Constructa Bau<span className="text-[#FF0000]">.</span>
            </h1>
            <p className="text-[#999999] text-[16px] font-['Montserrat',_sans-serif]">
              Wir schaffen solide Grundlagen
            </p>
          </div>
        </div>

        {/* Rechte Spalte mit Links */}
        <div className="w-full md:w-1/2 text-right mt-8 md:mt-0">
          <ul className="space-y-4">
            <li><a href="/home" className="text-[#c7c7c7] text-[18px] uppercase hover:text-white">Home</a></li>
            <li><a href="/leistungen" className="text-[#c7c7c7] text-[18px] uppercase hover:text-white">LEISTUNGEN</a></li>
            <li><a href="/baustellenmanagement" className="text-[#c7c7c7] text-[18px] uppercase hover:text-white">Baustellenmanagement</a></li>
            <li><a href="/impressionen" className="text-[#c7c7c7] text-[18px] uppercase hover:text-white">IMPRESSIONEN</a></li>
            <li><a href="/team" className="text-[#c7c7c7] text-[18px] uppercase hover:text-white">TEAM</a></li>
            <li><a href="/impressum" className="text-[#c7c7c7] text-[18px] uppercase hover:text-white">IMPRESSUM</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom mit Kontaktinformationen */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-[#D0312D] pt-4 space-y-4 md:space-y-0">
        {/* Copyright Text */}
        <div className="w-full md:w-auto text-center md:text-left">
          <p className="text-[12px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-[#999999]">
            © {new Date().getFullYear()} Constructa Bau GmbH – Alle Rechte vorbehalten.
          </p>
        </div>

        {/* Mittlerer Bereich mit Kontaktinfos */}
        <div className="w-full md:w-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <a href="tel:+4915170220139" className="text-[12px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-[#999999] hover:text-white transition-colors duration-300">
            +49 (0) 151 7022 0139
          </a>
          <a href="mailto:info@c-bau.com" className="text-[12px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-[#999999] hover:text-white transition-colors duration-300">
            info@c-bau.com
          </a>
          <p className="text-[12px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-[#999999] inline-block">
            Faule Birke 1
            <span className="hidden custom:inline">, </span>
            <span className="block custom:inline">57080 Siegen</span>
          </p>
        </div>

        {/* Datenschutz Link */}
        <div className="w-full md:w-auto text-center md:text-right">
          <a href="/datenschutz" className="text-[12px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-[#999999] hover:text-white transition-colors duration-300">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}