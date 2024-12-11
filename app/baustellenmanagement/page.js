import { Header } from '@/components/Header';
import Image from 'next/image';

export default function Baustellenmanagement() {
  return (
    <div className="flex flex-col">
      {/* Punkt und Seitentitel */}
      <div className="flex items-center mb-1">
        <span className="w-2 h-2 rounded-full bg-[#e36800] mr-1"></span>
        <h1 className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
          Baustellenmanagement
        </h1>
      </div>

      {/* Hauptüberschrift - jetzt links ausgerichtet */}
      <h2 className="text-[36px] sm:text-[46.8px] md:text-[56px] lg:text-[80px] xl:text-[112px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left mt-2">
        Management<span className="text-[#e36800]">.</span>
      </h2>

      {/* Text Abschnitte */}
      <div className="text-[18px] sm:text-[20px] md:text-[28px] lg:text-[48px] mt-24 leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-left space-y-12">
        <p>
          Effizienz und Präzision auf jeder Baustelle<span className="text-[#e36800] -ml-3">.</span>
        </p>

        <p>
          Ein erfolgreiches Bauprojekt beginnt mit einer klaren Planung und einem strukturierten Ablauf
          <span className="text-[#e36800] -ml-3">.</span>
        </p>
        <p>
          Mit unserem professionellen Baustellenmanagement sorgen wir für eine reibungslose Koordination aller Gewerke,
          die Einhaltung von Zeitplänen und maximale Sicherheit vor Ort<span className="text-[#e36800] -ml-3">.</span>
        </p>
      </div>
    </div>
  );
}
