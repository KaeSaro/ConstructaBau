import Link from 'next/link';
import { Content } from '../components/Content';
import { RegularText } from '../components/RegularText';
import { Subtitle } from '../components/Subtitle';
import { Title } from '../components/Title';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Bild */}
      <div className="relative mt-[80px]">
        <div className=" overflow-hidden">
          <Image
            src="/radlader.JPG"
            alt="Constructa Bau Hero Image"
            fill
            priority
            sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 100vw,
               100vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAA6AGcDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAABAMAAQIF/8QAGRABAQEBAQEAAAAAAAAAAAAAAAECAyEx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APqVLalqW6A/QbS/SjavoPWb6Tyomb6TyoHcqVgPlScUF45pyVzVBLY3RfdH3QR0zlYCrUd1S1HdBDpRd31fpRt0Hc69I5aEzfSOVB9DlonFD5UnFAiVy15la0HjdH3VtobBKs5WAipbUqWwG6DbJ6D6gPGZ6TyiOZ6TygE8isD8oViA9xq7I1gI7Q2RuIbBCs7WBapbVqWwH6IaX6IaBswnlB8/SeQF84TiD8ycA9yOV6jlBHaGyNj7BGs1YH//2Q=="
          />
        </div>
        <div className="absolute bottom-0 w-full">
          <Content withoutMargin>
            <div style={{ color: '#e5e5e5' }}>
              <Title>Willkommen bei</Title>
            </div>
          </Content>
        </div>
      </div>

      {/* Titel, der das Bild überlappt */}

      <Content withoutTopMargin>
        <div className="flex flex-col items-start">
          {/* Rest des Titels */}

          <Title withDot>der Constructa Bau GmbH</Title>

          <div className="mt-32 space-y-16">
            <RegularText withDot>Ihr Partner für Garten- und Landschaftsbau sowie Tiefbauarbeiten</RegularText>
            <RegularText>
              Sie suchen einen verlässlichen Partner, der Ihre Außenanlagen mit Kreativität gestaltet und
              Tiefbauprojekte präzise umsetzt?
            </RegularText>
            <RegularText withDot>
              Bei Constructa Bau haben wir es uns zur Aufgabe gemacht, Ihre individuellen Wünsche in die Realität
              umzusetzen – von präzisen Erdarbeiten bis hin zu grünen Oasen
            </RegularText>
            <RegularText withDot>
              Ob private Gärten, gewerbliche Außenanlagen oder kommunale Bauvorhaben: Wir verbinden Technik und
              Kreativität, um Ihre Vorstellungen Wirklichkeit werden zu lassen
            </RegularText>
          </div>
          <div className="mt-32 mb-32">
            <Title withDot>Unsere Leistungen auf einen Blick</Title>
          </div>

          <div className="flex flex-col space-y-3">
            <div className="flex items-center">
              <span className="min-w-[8px] w-[8px] min-h-[8px] h-[8px] rounded-full bg-[#D0312D]  self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Tiefbau</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#D0312D] self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Baggerarbeiten</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#D0312D] self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Pflastergestaltung</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#D0312D] self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Grünflächenpflege</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#D0312D] self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Baustellenmanagement</Subtitle>
            </div>
          </div>

          <div className="text-[18px] sm:text-[20px] md:text-[28px] lg:text-[48px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-left"></div>
          <div className="mt-32 mb-32">
            <Title withDot>CONSTRUCTA BAU – Wo Funktionalität und Ästhetik Hand in Hand gehen</Title>
          </div>
          <div className="text-[18px] sm:text-[20px] md:text-[28px] lg:text-[48px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-left">
            <RegularText>
              <Link
                href="/kontakt"
                className="inline-block rounded-lg ml-[-8px] px-2 py-0 transition-all duration-300 ease-in-out cursor-pointer hover:bg-[#1a1a1a] hover:text-white"
              >
                Kontaktieren
              </Link>
              Sie uns noch heute für eine individuelle Beratung!
            </RegularText>
            <RegularText withDot>Wir freuen uns darauf, Ihre Ideen zu realisieren</RegularText>
          </div>
        </div>
      </Content>
    </>
  );
}
