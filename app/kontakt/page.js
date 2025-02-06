import { Title } from '../../components/Title';
import { Content } from '../../components/Content';
import { ContactForm } from '../../components/ContactForm';

export default function Kontakt() {
  return (
    <Content>
      <div className="flex flex-col mt-[304px]">
        {/* Punkt und KONTAKT Text */}
        <div className="flex items-center mb-1">
          <span className="w-2 h-2 rounded-full bg-[#D0312D] ml-2 mr-1"></span>
          <h1 className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
            KONTAKT
          </h1>
        </div>

        {/* Haupttext */}
        <Title withDot>Schreiben Sie uns – wir melden uns bei Ihnen</Title>

        {/* Flexbox für Desktop: Text und Formular nebeneinander */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 mt-32">
          <div className="w-full md:w-1/2 flex flex-col space-y-4 md:pt-8">
            <h2 className="text-xl font-bold font-['IBM_Plex_Mono',_sans-serif] text-black uppercase">
              MÖCHTEN SIE MIT UNS KONTAKT AUFNEHMEN?
            </h2>
            <p className="text-sm text-black font-['IBM_Plex_Mono',_sans-serif] uppercase">
              Machen Sie sich keine Sorgen, wir versprechen, dass wir keine Brieftauben oder Rauchsignale verschicken!
            </p>
            <p className="text-sm text-black font-['IBM_Plex_Mono',_sans-serif] uppercase">
              Unser Team hat vielleicht keine Hotline zur Batcave, aber wir reagieren ziemlich schnell auf E-Mails.
            </p>
            <p className="text-sm text-black font-['IBM_Plex_Mono',_sans-serif] uppercase">
              Schreiben Sie uns also eine E-Mail und wir werden unser Bestes tun, Ihnen Schnellstmöglich zu antworten.
            </p>

            <div className="pt-8">
              {/* Zusätzlicher Wrapper mit Padding */}
              <h3 className="text-xl font-bold font-['IBM_Plex_Mono',_sans-serif] text-black uppercase">
                Geschäftszeiten
              </h3>
              <p className="text-sm text-black font-['IBM_Plex_Mono',_sans-serif] uppercase mt-4">
                Montag - Donnerstag: 8:00 - 17:00 Uhr
              </p>
              <p className="text-sm text-black font-['IBM_Plex_Mono',_sans-serif] uppercase mt-4">
                Freitag: 8:00 - 12:00 Uhr
              </p>
            </div>
          </div>
          {/* Formular rechts */}
          <ContactForm />
        </div>
      </div>
    </Content>
  );
}
