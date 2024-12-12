import { Header } from '@/components/Header';
import { Title } from '@/components/Title';
import { Subtitle } from '@/components/Subtitle';
import { RegularText } from '@/components/RegularText';

import Image from 'next/image';

export default function Leistungen() {
  return (
    <div className="flex flex-col mt-[608px]">
      <div className="flex items-center mb-1">
        <span className="w-2 h-2 rounded-full bg-[#FF0000] mr-1"></span>
        <h1 className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
          Leistungen
        </h1>
      </div>

      {/* Haupttext */}
      <Title withDot>LASSEN SIE UNS IHR TRAUMPROJEKT GESTALTEN</Title>

      {/* Tiefbau Section */}
      <div className="mt-32 text-left">
        <Subtitle withDot>Tiefbau</Subtitle>
        <RegularText withDot withQuotes>
          vom Aushub bis zu komplexen Infrastruktur-projekten
        </RegularText>
        <RegularText withDot withQuotes>
          Wir legen das Fundament
        </RegularText>
      </div>

      {/* Baggerarbeiten Section */}
      <div className="mt-16 text-left">
        <Subtitle withDot>Baggerarbeiten</Subtitle>

        <RegularText withDot>Präzise und effiziente Erdbewegungen für Neuprojekte{'\n'}jeder Größe</RegularText>
      </div>

      {/* Pflastergestaltung Section */}
      <div className="mt-16 text-left">
        <Subtitle withDot>Pflastergestaltung</Subtitle>
        <RegularText withDot withQuotes>
          Hochwertige Gestaltung von Einfahrten{'\n'}Gehwegen und Außenflächen
        </RegularText>
      </div>

      {/* Grünflächenpflege Section */}
      <div className="mt-16 text-left">
        <Subtitle withDot>Pflastergestaltung</Subtitle>
        <RegularText withDot withQuotes>
          Damit Ihr Garten das ganze Jahe über in voller Pracht erstrahlt,
          {'\n'}übernehmen wir alle Pflegearbeiten
        </RegularText>
      </div>

      {/* Warum*/}
      <h2 className="mt-32 text-[36px] sm:text-[46.8px] md:text-[56px] lg:text-[80px] xl:text-[112px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
        Warum Constructa Bau?<span className="text-[#FF0000]"></span>
      </h2>

      {/* Erfahrung und Kompetenz Section */}
      <div className="mt-32 text-left">
        <Subtitle withDot>Erfahrung und Kompetenz</Subtitle>
        <RegularText withDot>
          Unser erfahrenes Team bringt {'\n'}Fachwissen und Kreativität in jedes Projekt ein
        </RegularText>
      </div>

      {/* Individuelle Lösungen Section */}
      <div className="mt-16 text-left">
        <Subtitle withDot>Individuelle Lösungen</Subtitle>

        <RegularText withDot>
          Jedes Projekt ist einzigartig, {'\n'}deshalb entwickeln wir maßgeschneiderte Konzepte für unsere Kunden
        </RegularText>
      </div>

      {/* Zuverlässigkeit und Qualität Section */}
      <div className="mt-16 text-left">
        <Subtitle withDot>Zuverlässigkeit und Qualität</Subtitle>

        <RegularText withDot>
          Pünktlichkeit, Sorgfalt und hochwertige Arbeit sind für uns selbstverständlich
        </RegularText>
      </div>
    </div>
  );
}
