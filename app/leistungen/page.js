import { Header } from '@/components/Header';
import { Title } from '@/components/Title';
import { RegularText } from '@/components/RegularText';

import Image from 'next/image';

export default function Leistungen() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-1">
        <span className="w-2 h-2 rounded-full bg-[#e36800] mr-1"></span>
        <h1 className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
          Leistungen
        </h1>
      </div>

      {/* Haupttext */}
      <Title withDot>Unsere Leistungen auf einen Blick</Title>

      {/* Tiefbau Section */}
      <div className="mt-32 text-left">
        <h3 className="text-[32px] font-['Montserrat',_sans-serif] uppercase mb-2">
          Tiefbau<span className="text-[#e36800]">.</span>
        </h3>
        <p className="mt-2 text-[24px] font-['IBM_Plex_Mono',_sans-serif] uppercase">
          <span className="text-[#e36800]">-</span>vom Aushub bis zu komplexen Infrastruktur-projekten
          <span className="text-[#e36800]">-</span>
        </p>
        <p className="mt-4 text-[24px] font-['IBM_Plex_Mono',_sans-serif] uppercase">
          &quot;Wir legen das Fundament<span className="text-[#e36800] -ml-2 -mr-1">.</span>&quot;
        </p>
      </div>

      {/* Baggerarbeiten Section */}
      <div className="mt-16 text-left">
        <h3 className="text-[32px] font-['Montserrat',_sans-serif] uppercase mb-2">
          Baggerarbeiten<span className="text-[#e36800]">.</span>
        </h3>
        <p className="mt-2 text-[24px] font-['IBM_Plex_Mono',_sans-serif] uppercase whitespace-pre-line">
          <span className="text-[#e36800]">-</span>Präzise und effiziente Erdbewegungen für Neuprojekte{'\n'}jeder Größe
          <span className="text-[#e36800]">-</span>
        </p>
      </div>

      {/* Pflastergestaltung Section */}
      <div className="mt-16 text-left">
        <h3 className="text-[32px] font-['Montserrat',_sans-serif] uppercase mb-2">
          Pflastergestaltung<span className="text-[#e36800]">.</span>
        </h3>
        <p className="mt-2 text-[24px] font-['IBM_Plex_Mono',_sans-serif] uppercase whitespace-pre-line">
          <span className="text-[#e36800]">-</span>Hochwertige Gestaltung von Einfahrten{'\n'}Gehwegen und Außenflächen
          <span className="text-[#e36800]">-</span>
        </p>
      </div>

      {/* Grünflächenpflege Section */}
      <div className="mt-16 text-left">
        <h3 className="text-[32px] font-['Montserrat',_sans-serif] uppercase mb-2">
          Grünflächenpflege<span className="text-[#e36800]">.</span>
        </h3>
        <p className="mt-2 text-[24px] font-['IBM_Plex_Mono',_sans-serif] uppercase whitespace-pre-line">
          <span className="text-[#e36800]">-</span>Damit Ihr Garten das ganze Jahe über in voller Pracht erstrahlt,
          {'\n'}übernehmen wir alle Pflegearbeiten
          <span className="text-[#e36800]">-</span>
        </p>
      </div>

      {/* Warum*/}
      <h2 className="mt-32 text-[36px] sm:text-[46.8px] md:text-[56px] lg:text-[80px] xl:text-[112px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
        Warum Constructa Bau?<span className="text-[#e36800]"></span>
      </h2>

      {/* Erfahrung und Kompetenz Section */}
      <div className="mt-32 text-left">
        <h3 className="text-[32px] font-['Montserrat',_sans-serif] uppercase mb-2">
          Erfahrung und Kompetenz<span className="text-[#e36800]">.</span>
        </h3>
        <p className="mt-2 text-[24px] font-['IBM_Plex_Mono',_sans-serif] uppercase whitespace-pre-line">
          Unser erfahrenes Team bringt {'\n'}Fachwissen und Kreativität in jedes Projekt ein
          <span className="text-[#e36800] -ml-1.5">.</span>
        </p>
      </div>

      {/* Individuelle Lösungen Section */}
      <div className="mt-16 text-left">
        <h3 className="text-[32px] font-['Montserrat',_sans-serif] uppercase mb-2">
          Individuelle Lösungen<span className="text-[#e36800]">.</span>
        </h3>
        <p className="mt-2 text-[24px] font-['IBM_Plex_Mono',_sans-serif] uppercase whitespace-pre-line">
          Jedes Projekt ist einzigartig, {'\n'}deshalb entwickeln wir maßgeschneiderte Konzepte für unsere Kunden
          <span className="text-[#e36800] -ml-1.5">.</span>
        </p>
      </div>

      {/* Zuverlässigkeit und Qualität Section */}
      <div className="mt-16 text-left">
        <h3 className="text-[32px] font-['Montserrat',_sans-serif] uppercase mb-2">
          Zuverlässigkeit und Qualität<span className="text-[#e36800]">.</span>
        </h3>
        <p className="mt-2 text-[24px] font-['IBM_Plex_Mono',_sans-serif] uppercase whitespace-pre-line">
          Pünktlichkeit, Sorgfalt und hochwertige Arbeit sind für uns selbstverständlich
          <span className="text-[#e36800] -ml-1.5">.</span>
        </p>
      </div>

      <div className="flex flex-col">
        {/* Traumprojekt */}
        <h2 className="mt-32 text-[36px] sm:text-[46.8px] md:text-[56px] lg:text-[80px] xl:text-[112px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
          LASSEN SIE UNS IHR TRAUMPROJEKT GESTALTEN<span className="text-[#e36800] -ml-1">.</span>
        </h2>
      </div>
    </div>
  );
}
