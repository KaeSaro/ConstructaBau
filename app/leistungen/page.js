import { Title } from '../../components/Title';
import { Subtitle } from '../../components/Subtitle';
import { RegularText, regularTextStyles } from '../../components/RegularText';
import { Content } from '../../components/Content';

export default function Leistungen() {
  return (
    <Content>
      <div className="flex flex-col mt-[304px]">
        <div className="flex items-center mb-1">
          <span className="w-2 h-2 rounded-full bg-accent ml-2 mr-1"></span>
          <h1 className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[1.1] font-jazmin font-thin uppercase text-left">
            Leistungen
          </h1>
        </div>

        {/* Haupttext */}
        <Title withDot>LASSEN SIE UNS IHR TRAUMPROJEKT GESTALTEN</Title>

        {/* Maler- und Ausbau-Leistungen (neu – oben) */}
        <div className="mt-32 text-left">
          <Subtitle>Maler- und Lackierarbeiten</Subtitle>
          <RegularText withDot>
            Innen und außen – vom klassischen Anstrich bis zu kreativen Techniken, fachgerecht umgesetzt
          </RegularText>
        </div>

        <div className="mt-16 text-left">
          <Subtitle>Spachtel- und Putzarbeiten</Subtitle>
          <RegularText withDot>
            Glatte Flächen oder dekorative Techniken – die richtige Grundlage für Ihre Wände
          </RegularText>
        </div>

        <div className="mt-16 text-left">
          <Subtitle>Tapezierarbeiten</Subtitle>
          <RegularText withDot>
            Präzises Verlegen von Raufaser, Vlies und individuellen Designs
          </RegularText>
        </div>

        <div className="mt-16 text-left">
          <Subtitle>Bodenbelagsarbeiten</Subtitle>
          <RegularText withDot>
            Linoleum, PVC, Teppich und mehr – verlegt für Funktion und Ästhetik
          </RegularText>
        </div>

        <div className="mt-16 text-left">
          <Subtitle>Bodenbeschichtungsarbeiten</Subtitle>
          <RegularText withDot>
            Robuste, pflegeleichte Beschichtungen für Gewerbe und Industrie
          </RegularText>
        </div>

        <div className="mt-16 text-left">
          <Subtitle>Sandstrahlarbeiten</Subtitle>
          <RegularText withDot>
            Reinigung und Vorbereitung von Oberflächen für die nächsten Arbeitsschritte
          </RegularText>
        </div>

        <div className="mt-16 text-left">
          <Subtitle>Parkplatz- und Hallenmarkierungen</Subtitle>
          <RegularText withDot>
            Klare, sichere Markierungen für Parkplätze, Hallen und Freiflächen
          </RegularText>
        </div>

        <div className="mt-16 text-left">
          <Subtitle>Trockenbau</Subtitle>
          <RegularText withDot>
            Trennwände, Deckenverkleidungen und Raumlösungen nach Maß
          </RegularText>
        </div>

        <div className="mt-16 text-left">
          <Subtitle>OWA-Decken</Subtitle>
          <RegularText withDot>
            Akustik und Brandschutz – OWA-Decken für Gewerbe und öffentliche Gebäude
          </RegularText>
        </div>

        <div className="mt-16 text-left">
          <Subtitle>Graffitientfernung & Graffitischutz</Subtitle>
          <RegularText withDot>
            Schonendes Entfernen und Schutzbeschichtungen, damit neue Graffitis leichter zu beseitigen sind
          </RegularText>
        </div>

        <div className="mt-16 text-left">
          <Subtitle>Taktile Leitsysteme und aufklebbare Bodenindikatoren</Subtitle>
          <RegularText withDot>
            Barrierefreie Orientierung mit dem PrefaTac-System – aufklebbare Rippen- und Noppenplatten für innen und
            außen, deutschlandweit fachgerecht verlegt in Verkehrsstationen, öffentlichen Gebäuden und Bestandsflächen
          </RegularText>
          <a
            href="/Constructa_Bau_PrefaTac_Broschuere.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${regularTextStyles} mt-4 inline-block rounded-lg ml-[-8px] px-2 py-1 transition-all duration-300 ease-in-out cursor-pointer bg-surface-dark text-on-dark hover:bg-background hover:text-foreground`}
          >
            <span
              aria-hidden="true"
              className="relative top-[-0.12em] mr-2 inline-block h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-current align-middle animate-pulse [animation-duration:3.5s]"
            />
            Broschüre herunterladen (PDF)
          </a>
        </div>

        {/* Außenarbeiten */}
        <div className="mt-16 text-left">
          <Subtitle>Grünflächenpflege</Subtitle>
          <RegularText withDot>
            Damit Ihr Garten das ganze Jahr über in voller Pracht erstrahlt,
            {'\n'}übernehmen wir alle Pflegearbeiten
          </RegularText>
        </div>

        <div className="mt-16 text-left">
          <Subtitle>Baustellenmanagement</Subtitle>
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
          <Subtitle>Erfahrung und Kompetenz</Subtitle>
          <RegularText withDot>
            Unser erfahrenes Team bringt {'\n'}Fachwissen und Kreativität in jedes Projekt ein
          </RegularText>
        </div>

        {/* Individuelle Lösungen Section */}
        <div className="mt-16 text-left">
          <Subtitle>Individuelle Lösungen</Subtitle>

          <RegularText withDot>
            Jedes Projekt ist einzigartig, {'\n'}deshalb entwickeln wir maßgeschneiderte Konzepte für unsere Kunden
          </RegularText>
        </div>

        {/* Zuverlässigkeit und Qualität Section */}
        <div className="mt-16 text-left">
          <Subtitle>Zuverlässigkeit und Qualität</Subtitle>

          <RegularText withDot>
            Pünktlichkeit, Sorgfalt und hochwertige Arbeit sind für uns selbstverständlich
          </RegularText>
        </div>
      </div>
    </Content>
  );
}
