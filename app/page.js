import Link from 'next/link';
import { Content } from '../components/Content';
import { RegularText } from '../components/RegularText';
import { Subtitle } from '../components/Subtitle';
import { Title } from '../components/Title';
import Image from 'next/image';

export default function Home() {
  // You can replace this with an actual tiny base64 of your image
  const blurDataURL =
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0cHBwcHy8lHyUjJSk1LDArLTMzNTw5OTk5PDpFREVFRUdHR0dHR0dHR0dHR0dHR0f/2wBDARUXFyAeIBshIS03KjQqNDc2NjY2Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';

  return (
    <>
      {/* Hero Image Section with Blur Loading */}
      <div className="relative mt-[80px]">
        <div className="overflow-hidden bg-gray-900">
          {/* Added background color */}
          <Image
            src="/radlader.JPG"
            alt="Constructa Bau Hero Image"
            width={1200}
            height={676}
            priority
            quality={75}
            placeholder="blur"
            blurDataURL={blurDataURL}
            sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 100vw,
             100vw"
            className="w-full max-h-[980px] object-cover"
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

      <Content withoutTopMargin>
        <div className="flex flex-col items-start">
          <Title withDot>der Constructa Bau GmbH</Title>

          <div className="mt-32 space-y-16">
            <RegularText withDot>Ihr Partner für Maler- und Ausbauarbeiten, Tiefbau sowie Garten- und Landschaftsbau</RegularText>
            <RegularText>
              Von Anstrich und Putz über Bodenbeläge und Trockenbau bis zu Markierungen und taktilen Leitsystemen –
              wir übernehmen Ihr Projekt von der Vorbereitung bis zur fertigen Oberfläche
            </RegularText>
            <RegularText withDot>
              Malerarbeiten innen und außen, Spachtel- und Tapezierarbeiten, Bodenbeschichtungen und
              Parkplatzmarkierungen – fachgerecht und zuverlässig für Wohn- und Gewerbeimmobilien
            </RegularText>
            <RegularText withDot>
              Ergänzt durch Tiefbau, Pflasterarbeiten und Grünflächenpflege: Constructa Bau bringt
              alle Gewerke unter ein Dach – für private, gewerbliche und kommunale Projekte
            </RegularText>
          </div>
          <div className="mt-32 mb-32">
            <Title withDot>Unsere Leistungen auf einen Blick</Title>
          </div>

          <div className="flex flex-col space-y-3">
            <div className="flex items-center">
              <span className="min-w-[8px] w-[8px] min-h-[8px] h-[8px] rounded-full bg-[#D0312D] self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Maler- und Lackierarbeiten</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#D0312D] self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Spachtel- und Putzarbeiten</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#D0312D] self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Tapezierarbeiten</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#D0312D] self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Bodenbelagsarbeiten</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#D0312D] self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Bodenbeschichtungsarbeiten</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#D0312D] self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Sandstrahlarbeiten</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#D0312D] self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Parkplatz- und Hallenmarkierungen</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#D0312D] self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Trockenbau</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#D0312D] self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>OWA-Decken</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#D0312D] self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Graffitientfernung & Graffitischutz</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#D0312D] self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Taktile Leitsysteme und aufklebare Bodenindikatoren</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#D0312D] self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
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

          <div className="mt-32 mb-32">
            <Title withDot>CONSTRUCTA BAU – Wo Funktionalität und Ästhetik Hand in Hand gehen</Title>
          </div>
          <div className="text-[18px] sm:text-[20px] md:text-[28px] lg:text-[48px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-left">
            <RegularText>
              <Link
                href="/kontakt"
                prefetch={false}
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
