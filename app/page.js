export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Abstände links angepasst wie im Header */}
      <div className="mt-[550px] w-full max-w-[1200px] px-8 sm:px-12 lg:px-16">
        <h1 className="text-[36px] sm:text-[46.8px] md:text-[56px] lg:text-[80px] xl:text-[112px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
          Wir schaffen solide Grundlagen<span className="text-[#e36800]">.</span>
        </h1>
        <p className="text-[18px] sm:text-[24px] md:text-[32px] lg:text-[48px] mt-24 leading-tight font-['Montserrat',_sans-serif] uppercase text-left">
          "Fundamente für die Zukunft - Präzision im Tiefbau, Baggerarbeiten und Pflastergestaltung
          <span className="text-[#e36800]">.</span>"
        </p>
      </div>
    </div>
  );
}
