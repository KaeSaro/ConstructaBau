import { RegularText } from '@/components/RegularText';
import { Title } from '@/components/Title';

export default function Home() {
  return (
    <div className="flex flex-col items-start">
      {/* Container für Bild und überlappenden Titel */}
      <div className="relative left-[50%] -translate-x-1/2 w-screen">
        {/* Bild */}
        <div className="aspect-video relative overflow-hidden">
          <img src="/radlader.JPG" alt="Constructa Bau Hero Image" className="w-full h-full object-cover" />
        </div>

        {/* Titel, der das Bild überlappt */}
        <div className="absolute bottom-0 w-full">
          <div className="relative w-full max-w-[1215px] mx-auto">
            <div
              style={{ color: '#e5e5e5' }}
              className="absolute left-10 sm:left-14 md:left-14 lg:left-[76px] xl:left-20 2xl:left-20 bottom-0"
            >
              <Title>Willkommen bei</Title>
            </div>
          </div>
        </div>
      </div>

      {/* Rest des Titels */}

      <Title withDot>der Constructa Bau GmbH</Title>

      <div className="mt-32 space-y-16">
        <RegularText withDot withQuotes>
          Ihr Partner für Garten- und Landschaftsbau sowie Tiefbauarbeiten
        </RegularText>
        <RegularText>
          Sie suchen einen verlässlichen Partner, der Ihre Außenanlagen mit Kreativität gestaltet und Tiefbauprojekte
          präzise umsetzt?
        </RegularText>
        <RegularText withDot>
          Bei Constructa Bau haben wir es uns zur Aufgabe gemacht, Ihre individuellen Wünsche in die Realität umzusetzen
          – von präzisen Erdarbeiten bis hin zu grünen Oasen
        </RegularText>
        <RegularText withDot>
          Ob private Gärten, gewerbliche Außenanlagen oder kommunale Bauvorhaben: Wir verbinden Technik und Kreativität,
          um Ihre Vorstellungen Wirklichkeit werden zu lassen
        </RegularText>
      </div>
      <div className="mt-32 mb-32">
        <Title withDot>Unsere Leistungen auf einen Blick</Title>
      </div>

      <div className="flex flex-col space-y-6">
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-[#D0312D] mr-1"></span>
          <h3 className="text-[28px] sm:text-[28px] md:text-[28px] lg:text-[28px] xl:text-[36px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase">
            Tiefbau
          </h3>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-[#D0312D] mr-1"></span>
          <h3 className="text-[28px] sm:text-[28px] md:text-[28px] lg:text-[28px] xl:text-[36px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase">
            Baggerarbeiten
          </h3>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-[#D0312D] mr-1"></span>
          <h3 className="text-[28px] sm:text-[28px] md:text-[28px] lg:text-[28px] xl:text-[36px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase">
            Pflastergestaltung
          </h3>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 rounded-full bg-[#D0312D] mr-1"></span>
          <h3 className="text-[28px] sm:text-[28px] md:text-[28px] lg:text-[28px] xl:text-[36px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase">
            Grünflächenpflege
          </h3>
        </div>
      </div>

      <div className="text-[18px] sm:text-[20px] md:text-[28px] lg:text-[48px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-left"></div>
      <div className="mt-32 mb-32">
        <Title withDot>CONSTRUCTA BAU – Wo Funktionalität und Ästhetik Hand in Hand gehen</Title>
      </div>
      <div className="text-[18px] sm:text-[20px] md:text-[28px] lg:text-[48px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-left">
        <RegularText>
          <a
            href="/kontakt"
            className="inline-block rounded-lg px-2 py-0 transition-all duration-300 ease-in-out cursor-pointer hover:bg-[#1a1a1a] hover:text-white"
          >
            Kontaktieren
          </a>
          Sie uns noch heute für eine individuelle Beratung!
        </RegularText>
        <RegularText withDot>Wir freuen uns darauf, Ihre Ideen zu realisieren</RegularText>
      </div>
    </div>
  );
}
