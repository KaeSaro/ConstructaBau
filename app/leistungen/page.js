import { Header } from '@/components/Header';
import Image from 'next/image';

export default function Leistungen() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mt-[550px] mb-[200px] w-full max-w-[1200px] px-8 sm:px-12 lg:px-16 mx-auto">
        {/* Haupttext */}
        <h2 className="text-[36px] sm:text-[46.8px] md:text-[56px] lg:text-[80px] xl:text-[112px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-center mt-2">
          Unsere Leistungen auf einen Blick<span className="text-[#e36800]">.</span>
        </h2>

        {/* Tiefbau Section */}
        <div className="mt-32 text-center">
          <h3 className="text-[32px] font-['Montserrat',_sans-serif] uppercase mb-2">
            Tiefbau<span className="text-[#e36800]">.</span>
          </h3>
          <p className="mt-2 text-[28px] font-['IBM_Plex_Mono',_sans-serif] uppercase">
            <span className="text-[#e36800]">-</span>vom Aushub bis zu komplexen Infrastrukturprojekten
            <span className="text-[#e36800]">-</span>
          </p>
          <p className="mt-4 text-[28px] font-['Montserrat',_sans-serif] uppercase">
            Wir legen das Fundament<span className="text-[#e36800]">.</span>
          </p>
        </div>

        {/* Baggerarbeiten Section */}
        <div className="mt-40 text-center">
          <h3 className="text-[32px] font-['Montserrat',_sans-serif] uppercase mb-2">
            Baggerarbeiten<span className="text-[#e36800]">.</span>
          </h3>
          <p className="mt-2 text-[28px] font-['IBM_Plex_Mono',_sans-serif] uppercase whitespace-pre-line">
            <span className="text-[#e36800]">-</span>Präzise und effiziente Erdbewegungen für Neuprojekte{'\n'}jeder
            Größe<span className="text-[#e36800]">-</span>
          </p>
        </div>

        {/* Pflastergestaltung Section */}
        <div className="mt-40 text-center">
          <h3 className="text-[32px] font-['Montserrat',_sans-serif] uppercase mb-2">
            Pflastergestaltung<span className="text-[#e36800]">.</span>
          </h3>
          <p className="mt-2 text-[28px] font-['IBM_Plex_Mono',_sans-serif] uppercase whitespace-pre-line">
            <span className="text-[#e36800]">-</span>Hochwertige Gestaltung von Einfahrten{'\n'}Gehwegen und
            Außenflächen<span className="text-[#e36800]">-</span>
          </p>
        </div>
      </div>
    </div>
  );
}
