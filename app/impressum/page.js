import { Title } from '../../components/Title';
import { RegularText } from '../../components/RegularText';
import { Content } from '../../components/Content';

export default function Impressum() {
  return (
    <Content>
      <div className="flex flex-col mt-[304px]">
        {/* Punkt und Seitentitel */}
        <div className="flex items-center mb-1">
          <span className="w-2 h-2 rounded-full bg-[#D0312D] ml-2 mr-1"></span>
          <h1 className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
            Impressum
          </h1>
        </div>
        <Title withDot>Transparenz ist uns wichtig</Title>
        <div className="mt-32 space-y-16">
          {/* Angaben gemäß § 5 TMG */}
          <section className=" [&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4">
            <Title withDot>Angaben gemäß § 5 TMG</Title>
            <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
              <RegularText className="text-[16px]">Constructa Bau GmbH</RegularText>
              <RegularText className="text-[16px]">Faule Birke 1</RegularText>
              <RegularText className="text-[16px]">57080 Siegen</RegularText>
            </div>
          </section>

          {/* Kontakt */}
          <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4">
            <Title withDot>Kontakt</Title>
            <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
              <RegularText className="text-[16px]">Telefon: +49 (0) 151 7022 0139</RegularText>
              <RegularText className="text-[16px]">E-Mail: info@c-bau.com</RegularText>
            </div>
          </section>

          {/* Registereintrag */}
          <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4">
            <Title withDot>Registereintrag</Title>
            <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
              <RegularText className="text-[16px]">Eintragung im Handelsregister</RegularText>
              <RegularText className="text-[16px]">Registergericht: Amtsgericht Siegen</RegularText>
              <RegularText className="text-[16px]">Registernummer: HRB 13712</RegularText>
            </div>
          </section>

          {/* Geschäftsführung */}
          <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4">
            <Title withDot>Geschäftsführung</Title>
            <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
              <RegularText className="text-[16px]">Nina Gerdes</RegularText>
            </div>
          </section>

          {/* Umsatzsteuer-ID */}
          <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4">
            <Title withDot>Umsatzsteuer-ID</Title>
            <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
              <RegularText className="text-[16px]">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              </RegularText>
              <RegularText className="text-[16px]">DE 365 839 088</RegularText>
            </div>
          </section>

          {/* Berufsrechtliche Angaben */}
          <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4">
            <Title withDot>Berufsrechtliche Angaben</Title>
            <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
              <RegularText className="text-[16px]">Berufskammer: Industrie- und Handelskammer Siegen</RegularText>
              <RegularText className="text-[16px]">Berufsbezeichnung: Bauunternehmen</RegularText>
              <RegularText className="text-[16px]">Berufsrechtliche Regelungen: Gewerbeordnung</RegularText>
            </div>
          </section>

          {/* EU-Streitschlichtung */}
          <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4">
            <Title withDot>EU-Streitschlichtung</Title>
            <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
              <RegularText>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              </RegularText>

              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg px-0 py-0 transition-all duration-300 ease-in-out cursor-pointer hover:bg-[#1a1a1a] hover:text-white [&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px]"
              >
                <RegularText>https://ec.europa.eu/consumers/odr/</RegularText>
              </a>
            </div>
          </section>

          {/* Verbraucherstreitbeilegung */}
          <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4 mb-16">
            <Title withDot>Streitbeilegung</Title>
            <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
              <RegularText className="text-[16px]">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </RegularText>
            </div>
          </section>
        </div>
      </div>
    </Content>
  );
}
