import { Title } from '../../components/Title';
import { Content } from '../../components/Content';
import { ContactForm } from '../../components/ContactForm';

export default function Kontakt() {
  return (
    <Content>
      <div className="flex flex-col mt-[304px]">
        {/* Punkt und KONTAKT Text */}
        <div className="flex items-center mb-1">
          <span className="w-2 h-2 rounded-full bg-accent ml-2 mr-1"></span>
          <h1 className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[1.1] font-jazmin font-thin uppercase text-left">
            KONTAKT
          </h1>
        </div>

        {/* Haupttext */}
        <Title withDot>Schreiben Sie uns – wir melden uns bei Ihnen</Title>

        {/* Flexbox für Desktop: Text und Formular nebeneinander */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 mt-32">
          <div className="w-full md:w-1/2 flex flex-col space-y-4 md:pt-8">
            <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] leading-snug font-jazmin font-medium text-foreground uppercase">
              MÖCHTEN SIE MIT UNS KONTAKT AUFNEHMEN?
            </h2>
            <p className="text-[17px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[23px] leading-snug text-foreground font-jazmin font-light uppercase">
              Machen Sie sich keine Sorgen, wir versprechen, dass wir keine Brieftauben oder Rauchsignale verschicken!
            </p>
            <p className="text-[17px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[23px] leading-snug text-foreground font-jazmin font-light uppercase">
              Unser Team hat vielleicht keine Hotline zur Batcave, aber wir reagieren ziemlich schnell auf E-Mails.
            </p>
            <p className="text-[17px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[23px] leading-snug text-foreground font-jazmin font-light uppercase">
              Schreiben Sie uns also eine E-Mail und wir werden unser Bestes tun, Ihnen Schnellstmöglich zu antworten.
            </p>

            <div className="pt-8">
              {/* Zusätzlicher Wrapper mit Padding */}
              <h3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-snug font-jazmin font-medium text-foreground uppercase">
                Geschäftszeiten
              </h3>
              <p className="text-[17px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-snug text-foreground font-jazmin font-light uppercase mt-4">
                Montag - Donnerstag: 8:00 - 17:00 Uhr
              </p>
              <p className="text-[17px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-snug text-foreground font-jazmin font-light uppercase mt-4">
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
