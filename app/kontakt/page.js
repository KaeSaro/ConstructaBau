import { Header } from '@/components/Header';
import Image from 'next/image';

export default function Kontakt() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="mt-[550px] w-full max-w-[1200px] px-8 sm:px-12 lg:px-16">
        {/* Punkt und KONTAKT Text */}
        <div className="flex items-center mb-1">
          <span className="w-1 h-1 rounded-full bg-[#e36800] mr-1"></span>
          <h1 className="text-[12px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[12px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
            KONTAKT
          </h1>
        </div>

        {/* Haupttext */}
        <h2 className="text-[36px] sm:text-[46.8px] md:text-[56px] lg:text-[80px] xl:text-[112px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left mt-2">
          Schreiben Sie uns – wir melden uns bei Ihnen<span className="text-[#e36800]">.</span>
        </h2>

        {/* Flexbox für Desktop: Text und Formular nebeneinander */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
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
              Schreiben Sie uns also eine E-Mail und wir werden unser Bestes tun, Ihre Fragen schneller zu beantworten,
              als Sie sagen können: „Ist das das wahre Leben oder ist das nur Fantasie?" Lass uns chatten!
            </p>
          </div>

          {/* Formular rechts */}
          <div className="w-full md:w-1/2 bg-[rgb(242,241,235)] p-8 rounded-lg">
            <form action="mailto:info@yourdomain.com" method="post" enctype="text/plain">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-4 border border-[#c7c7c7] rounded-md bg-[#f1f2eb] text-black"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="p-4 border border-[#c7c7c7] rounded-md bg-[#f1f2eb] text-black"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Nachricht"
                  className="p-4 border border-[#c7c7c7] rounded-md bg-[#f1f2eb] text-black"
                  rows="6"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#f1f2eb] text-black p-4 rounded-full mt-4 border-2 border-black transition-all duration-200 hover:bg-black hover:text-white"
                >
                  Senden
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Schwarze Box mit Links */}
        <div className="bg-[#1a1a1a] w-full mt-12 mb-[200px] rounded-lg flex flex-col md:flex-row justify-between items-start p-8">
          <div className="text-white w-full md:w-1/2">
            <div className="flex flex-col items-start">
              <h1 className="text-[40px] font-['Montserrat',_sans-serif] uppercase">
                Constructa<span className="text-[#e36800]">.</span> Bau
              </h1>
              <p className="text-[#999999] text-[16px] font-['Montserrat',_sans-serif]">
                Wir schaffen solide Grundlagen
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-right">
            <ul className="space-y-4">
              <li>
                <a href="#leistungen" className="text-[#c7c7c7] text-[24px] uppercase hover:text-white">
                  LEISTUNGEN
                </a>
              </li>
              <li>
                <a href="#karriere" className="text-[#c7c7c7] text-[24px] uppercase hover:text-white">
                  KARIERRE
                </a>
              </li>
              <li>
                <a href="#team" className="text-[#c7c7c7] text-[24px] uppercase hover:text-white">
                  TEAM
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-[#c7c7c7] text-[24px] uppercase hover:text-white">
                  KONTAKT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
