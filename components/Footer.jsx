export function Footer() {

    return <footer className="bg-[#1a1a1a] w-full py-16  flex flex-col md:flex-row justify-between items-start p-8">
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
  </footer>
}