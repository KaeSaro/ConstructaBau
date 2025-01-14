import { Title } from '@/components/Title';
import { Subtitle } from '@/components/Subtitle';
import { RegularText } from '@/components/RegularText';
import Image from 'next/image';

export default function Datenschutz() {
  return (
    <div className="flex flex-col mt-[304px]">
      {/* Punkt und Seitentitel */}
      <div className="flex items-center mb-1">
        <span className="w-2 h-2 rounded-full bg-[#D0312D] ml-2 mr-1"></span>
        <h1 className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
          Datenschutz
        </h1>
      </div>
      <Title withDot>Vertrauen ist die Basis</Title>
      <div className="mt-32 space-y-16">
        {/* Einleitung */}
        <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4">
          <Title withDot>Datenschutzerklärung</Title>
          <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
            <RegularText>
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. In dieser Datenschutzerklärung
              informieren wir Sie über die Verarbeitung personenbezogener Daten bei der Nutzung unserer Website.
            </RegularText>
          </div>
        </section>

        {/* Verantwortliche Stelle */}
        <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4">
          <Title withDot>Verantwortliche Stelle</Title>
          <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
            <RegularText>Constructa Bau GmbH</RegularText>
            <RegularText>Faule Birke 1</RegularText>
            <RegularText>57080 Siegen</RegularText>
            <RegularText>E-Mail: info@c-bau.com</RegularText>
          </div>
        </section>

        {/* Kontaktformular */}
        <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4">
          <Title withDot>Kontaktformular</Title>
          <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
            <RegularText>
              Wenn Sie das Kontaktformular auf unserer Website nutzen, werden die von Ihnen eingegebenen Daten an uns
              übermittelt und gespeichert. Dies umfasst die von Ihnen im Formular angegebenen Daten.
            </RegularText>
            <RegularText>
              Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, da die Verarbeitung für die
              Bearbeitung Ihrer Anfrage erforderlich ist.
            </RegularText>
            <RegularText>
              Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr
              erforderlich sind. Dies ist der Fall, wenn die jeweilige Konversation beendet ist und keine gesetzlichen
              Aufbewahrungsfristen entgegenstehen.
            </RegularText>
          </div>
        </section>

        {/* Google Fonts */}
        <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4">
          <Title withDot>Google Fonts</Title>
          <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
            <RegularText>
              Wir nutzen Google Fonts auf unserer Website. Dies ist ein Dienst der Google Ireland Limited, Gordon House,
              Barrow Street, Dublin 4, Irland.
            </RegularText>
            <RegularText>
              Die Einbindung dieser Schriftarten erfolgt durch einen Serveraufruf, in der Regel bei einem Server von
              Google in den USA. Dabei werden Informationen wie Ihre IP-Adresse an Google übermittelt.
            </RegularText>
            <RegularText>
              Die Nutzung von Google Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung
              unserer Website. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
            </RegularText>
          </div>
        </section>

        {/* Ihre Rechte */}
        <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4">
          <Title withDot>Ihre Rechte</Title>
          <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
            <RegularText>Sie haben folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</RegularText>
            <RegularText>• Recht auf Auskunft</RegularText>
            <RegularText>• Recht auf Berichtigung oder Löschung</RegularText>
            <RegularText>• Recht auf Einschränkung der Verarbeitung</RegularText>
            <RegularText>• Recht auf Widerspruch gegen die Verarbeitung</RegularText>
            <RegularText>• Recht auf Datenübertragbarkeit</RegularText>
          </div>
        </section>

        {/* Beschwerderecht */}
        <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4 mb-16">
          <Title withDot>Beschwerderecht</Title>
          <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
            <RegularText>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
              personenbezogenen Daten durch uns zu beschweren.
            </RegularText>
          </div>
        </section>
      </div>
    </div>
  );
}
