import Link from 'next/link';
import { Content } from '../components/Content';
import { RegularText } from '../components/RegularText';
import { Subtitle } from '../components/Subtitle';
import { Title } from '../components/Title';

/** Abstraktes Hero (Variante A): Wand-/Lichtstimmung in Markenfarben, ohne Foto. */
function HomeHeroAbstract() {
  return (
    <div
      className="relative w-full min-h-[280px] h-[42vw] max-h-[760px] overflow-hidden bg-hero"
      role="img"
      aria-label="Abstrakte Oberfläche in Pearl, Khaki und Taupe"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 85% at 15% 25%, #faf8f5 0%, transparent 52%), radial-gradient(ellipse 80% 70% at 88% 18%, #dfdacf 0%, transparent 48%), radial-gradient(ellipse 90% 55% at 50% 95%, #a3968d 0%, transparent 55%), linear-gradient(168deg, #faf8f5 0%, #dfdacf 38%, #a3968d 72%, #6d6058 100%)',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_65%_55%,rgba(77,64,58,0.22)_0%,transparent_55%)] mix-blend-multiply" />
      <div className="pointer-events-none absolute -left-[20%] -top-[30%] h-[70%] w-[55%] rounded-full bg-[#faf8f5]/45 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-[25%] -right-[15%] h-[65%] w-[60%] rounded-full bg-[#dfdacf]/55 blur-[90px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-soft-light bg-gradient-to-br from-white/20 via-transparent to-[#4d403a]/15" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(105deg, transparent, transparent 1px, rgba(77,64,58,0.12) 1px, rgba(77,64,58,0.12) 2px)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#262626] from-0% via-[#262626]/82 via-40% to-transparent to-68%" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="relative mt-[80px]">
        <HomeHeroAbstract />
        <div className="absolute bottom-0 w-full">
          <Content withoutMargin>
            <div className="text-hero-text">
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
              <span className="min-w-[8px] w-[8px] min-h-[8px] h-[8px] rounded-full bg-accent self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Maler- und Lackierarbeiten</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Spachtel- und Putzarbeiten</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Tapezierarbeiten</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Bodenbelagsarbeiten</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Bodenbeschichtungsarbeiten</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Sandstrahlarbeiten</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Parkplatz- und Hallenmarkierungen</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Trockenbau</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>OWA-Decken</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Graffitientfernung & Graffitischutz</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Taktile Leitsysteme und aufklebare Bodenindikatoren</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Tiefbau</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Baggerarbeiten</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Pflastergestaltung</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
              <Subtitle>Grünflächenpflege</Subtitle>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent self-start mt-[8px] sm:mt-[10px] md:mt-[14px] lg:mt-[18px] mr-1"></span>
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
                className="inline-block rounded-lg ml-[-8px] px-2 py-0 transition-all duration-300 ease-in-out cursor-pointer hover:bg-surface-dark hover:text-on-dark"
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
