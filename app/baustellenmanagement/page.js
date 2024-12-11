import { Header } from '@/components/Header';
import { Title } from '@/components/Title';
import { RegularText } from '@/components/RegularText';

import Image from 'next/image';

export default function Baustellenmanagement() {
  return (
    <div className="flex flex-col">
      {/* Punkt und Seitentitel */}
      <div className="flex items-center mb-1">
        <span className="w-2 h-2 rounded-full bg-[#FF0000] mr-1"></span>
        <h1 className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
          Baustellenmanagement
        </h1>
      </div>

      {/* Hauptüberschrift - jetzt links ausgerichtet */}
      <Title withDot>Effizienz und Präzision auf jeder Baustelle</Title>

      {/* Text Abschnitte */}
      <div className="mt-32 space-y-16">
        <RegularText withDot>
          Ein erfolgreiches Bauprojekt beginnt mit einer klaren Planung und einem strukturierten Ablauf
        </RegularText>
        <RegularText withDot>
          Mit unserem professionellen Baustellenmanagement sorgen wir für eine reibungslose Koordination aller Gewerke,
          die Einhaltung von Zeitplänen und maximale Sicherheit vor Ort
        </RegularText>
      </div>
    </div>
  );
}
