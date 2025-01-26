import Image from 'next/image';
import { Title } from '@/components/Title';
import { Content } from '@/components/Content';

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
          {/* Text links */}
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
          </div>

          {/* Formular rechts */}
          <div className="w-full md:w-1/2 p-8 rounded-lg">
            <form action="mailto:ek@c-bau.com" method="post" encType="text/plain">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-4 border border-[#1a1a1a] rounded-md bg-[#e5e5e5] text-black"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="p-4 border border-[#1a1a1a] rounded-md bg-[#e5e5e5] text-black"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Nachricht"
                  className="p-4 border border-[#1a1a1a] rounded-md bg-[#e5e5e5] text-black"
                  rows="6"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#e5e5e5] text-black p-4 rounded-full mt-4 border-2 border-black transition-all duration-200 hover:bg-black hover:text-white"
                >
                  Senden
                </button>
                {/* Neuer Anrufen Button */}
                <a
                  href="tel:+4915170220139"
                  className="bg-[#e5e5e5] text-black p-4 rounded-full border-2 border-black transition-all duration-200 hover:bg-black hover:text-white text-center"
                >
                  Anrufen
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* Schwarze Box mit Links */}
        {/* <div className="bg-[#1a1a1a] w-full mt-16 rounded-lg flex flex-col md:flex-row justify-between items-start p-8">
        <div className="text-white w-full md:w-1/2">
          <div className="flex flex-col items-start">
            <h1 className="text-[35px] font-['Montserrat',_sans-serif] uppercase">
              Constructa Bau<span className="text-[#FF0000]">.</span>
            </h1>
            <p className="text-[#999999] text-[16px] font-['Montserrat',_sans-serif]">Wir schaffen solide Grundlagen</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-right mt-8">
          <ul className="space-y-4">
            <li>
              <a href="/home" className="text-[#c7c7c7] text-[18px] uppercase hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/leistungen" className="text-[#c7c7c7] text-[18px] uppercase hover:text-white">
                LEISTUNGEN
              </a>
            </li>
            <li>
              <a href="/baustellenmanagement" className="text-[#c7c7c7] text-[18px] uppercase hover:text-white">
                Baustellenmanagement
              </a>
            </li>
            <li>
              <a href="/impressionen" className="text-[#c7c7c7] text-[18px] uppercase hover:text-white">
                IMPRESSIONEN
              </a>
            </li>
            <li>
              <a href="/team" className="text-[#c7c7c7] text-[18px] uppercase hover:text-white">
                TEAM
              </a>
            </li>
          </ul>
        </div>
      </div> */}
      </div>
    </Content>
  );
}
