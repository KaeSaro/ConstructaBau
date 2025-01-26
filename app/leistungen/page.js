import { Title } from '@/components/Title';
import { Subtitle } from '@/components/Subtitle';
import { RegularText } from '@/components/RegularText';

import Image from 'next/image';
import { Content } from '@/components/Content';

export default function Leistungen() {
  return (
    <Content>
      <div className="flex flex-col mt-[304px]">
        <div className="flex items-center mb-1">
          <span className="w-2 h-2 rounded-full bg-[#D0312D] ml-2 mr-1"></span>
          <h1 className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
            Leistungen
          </h1>
        </div>

        {/* Haupttext */}
        <Title withDot>LASSEN SIE UNS IHR TRAUMPROJEKT GESTALTEN</Title>

        {/* Tiefbau Section */}
        <div className="mt-32 text-left">
          <Subtitle withDot>Tiefbau</Subtitle>
          <RegularText withDot>vom Aushub bis zu komplexen Infrastruktur-projekten</RegularText>
          <RegularText withDot>Wir legen das Fundament</RegularText>
        </div>

        {/* Baggerarbeiten Section */}
        <div className="mt-16 text-left">
          <Subtitle withDot>Baggerarbeiten</Subtitle>

          <RegularText withDot>Präzise und effiziente Erdbewegungen für Neuprojekte{'\n'}jeder Größe</RegularText>
        </div>

        {/* Pflastergestaltung Section */}
        <div className="mt-16 text-left">
          <Subtitle withDot>Pflastergestaltung</Subtitle>
          <RegularText withDot>Hochwertige Gestaltung von Einfahrten{'\n'}Gehwegen und Außenflächen</RegularText>
        </div>

        {/* Grünflächenpflege Section */}
        <div className="mt-16 text-left">
          <Subtitle withDot>Grünflächenpflege</Subtitle>
          <RegularText withDot>
            Damit Ihr Garten das ganze Jahe über in voller Pracht erstrahlt,
            {'\n'}übernehmen wir alle Pflegearbeiten
          </RegularText>
        </div>
        {/* Baustellenmanagement Section */}
        <div className="mt-16 text-left">
          <Subtitle withDot>Baustellenmanagement</Subtitle>
          <RegularText withDot>
            Mit unserem professionellen Baustellenmanagement sorgen wir für eine reibungslose Koordination aller
            Gewerke, die Einhaltung von Zeitplänen und maximale Sicherheit vor Ort
          </RegularText>
        </div>

        {/* Warum*/}
        <div className="mt-32 text-left">
          <Title>Warum Constructa Bau?</Title>
        </div>
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
    </Content>
  );
}
