import { Title } from '../components/Title';
import { RegularText } from '../components/RegularText';
import { Content } from '../components/Content';

export default function AGB() {
  return (
    <Content>
      <div className="flex flex-col mt-[304px]">
        <div className="flex items-center mb-1">
          <span className="w-2 h-2 rounded-full bg-[#D0312D] ml-2 mr-1"></span>
          <h1 className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
            AGB
          </h1>
        </div>
        <Title withDot>Allgemeine Geschäftsbedingungen</Title>
        <div className="mt-32 space-y-16">
          <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4">
            <Title withDot>§1 Geltungsbereich</Title>
            <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
              <RegularText>
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der Constructa Bau GmbH
                (nachfolgend &quot;Auftragnehmer&quot;) und ihren Kunden (nachfolgend &quot;Auftraggeber&quot;) über
                Garten- und Tiefbauarbeiten sowie damit zusammenhängende Dienstleistungen.
              </RegularText>
            </div>
          </section>

          <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4">
            <Title withDot>§2 Angebot und Vertragsschluss</Title>
            <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
              <RegularText>
                Angebote des Auftragnehmers sind freibleibend. Der Vertrag kommt durch schriftliche Auftragsbestätigung
                des Auftragnehmers oder durch Beginn der Ausführung der beauftragten Leistungen zustande.
              </RegularText>
            </div>
          </section>

          <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4">
            <Title withDot>§3 Widerrufsbelehrung für Verbraucher</Title>
            <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
              <RegularText>Verbrauchern steht ein Widerrufsrecht nach folgender Maßgabe zu:</RegularText>
              <RegularText>
                Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die
                Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
              </RegularText>
              <RegularText>
                Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Constructa Bau GmbH, Faule Birke 1, 57080 Siegen,
                E-Mail: info@c-bau.com) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder
                E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
              </RegularText>
              <RegularText>
                Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des
                Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
              </RegularText>
              <RegularText>
                Das Widerrufsrecht erlischt bei einem Vertrag zur Erbringung von Dienstleistungen auch dann, wenn der
                Unternehmer die Dienstleistung vollständig erbracht hat und mit der Ausführung der Dienstleistung erst
                begonnen hat, nachdem der Verbraucher dazu seine ausdrückliche Zustimmung gegeben hat und gleichzeitig
                seine Kenntnis davon bestätigt hat, dass er sein Widerrufsrecht bei vollständiger Vertragserfüllung
                durch den Unternehmer verliert.
              </RegularText>
            </div>
          </section>

          <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4">
            <Title withDot>Folgen des Widerrufs</Title>
            <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
              <RegularText>
                Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben,
                unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über
                Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
              </RegularText>
              <RegularText>
                Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie
                uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der
                Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten
                Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.
              </RegularText>
            </div>
          </section>

          <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4">
            <Title withDot>§4 Preise und Zahlung</Title>
            <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
              <RegularText>
                Die vereinbarten Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Rechnungen sind
                innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig.
              </RegularText>
              <RegularText>
                Bei größeren Aufträgen ist der Auftragnehmer berechtigt, angemessene Abschlagszahlungen zu verlangen.
              </RegularText>
            </div>
          </section>

          <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4">
            <Title withDot>§5 Ausführung und Abnahme</Title>
            <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
              <RegularText>
                Der Auftragnehmer führt die Arbeiten nach den allgemein anerkannten Regeln der Technik aus. Nach
                Fertigstellung der Arbeiten ist der Auftraggeber zur Abnahme verpflichtet.
              </RegularText>
              <RegularText>
                Die Abnahme erfolgt durch Unterzeichnung eines Abnahmeprotokolls oder durch schlüssiges Verhalten (z.B.
                Ingebrauchnahme).
              </RegularText>
            </div>
          </section>

          <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4">
            <Title withDot>§6 Gewährleistung</Title>
            <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
              <RegularText>
                Die Gewährleistungsfrist für die erbrachten Leistungen beträgt 5 Jahre, beginnend mit der Abnahme der
                Leistungen. Bei Pflanzenlieferungen beträgt die Gewährleistung eine Vegetationsperiode.
              </RegularText>
            </div>
          </section>

          <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4">
            <Title withDot>§7 Haftung</Title>
            <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
              <RegularText>
                Der Auftragnehmer haftet für Schäden, die durch vorsätzliches oder grob fahrlässiges Verhalten
                verursacht wurden. Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher
                Vertragspflichten.
              </RegularText>
            </div>
          </section>

          <section className="[&>h1]:!text-[24px] md:[&>h1]:!text-[40px] lg:[&>h1]:!text-[50px] space-y-4 mb-16">
            <Title withDot>§8 Schlussbestimmungen</Title>
            <div className="[&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px] space-y-1">
              <RegularText>
                Erfüllungsort und Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz des Auftragnehmers. Es gilt
                deutsches Recht.
              </RegularText>
              <RegularText>
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein, berührt dies die Wirksamkeit der übrigen
                Bestimmungen nicht.
              </RegularText>
            </div>
          </section>
        </div>
      </div>
    </Content>
  );
}
