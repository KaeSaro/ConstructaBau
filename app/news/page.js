import { Title } from '@/components/Title';
import { Content } from '@/components/Content';

export default function Aktuelles() {
  return (
    <Content>
      <div className="flex flex-col mt-[304px]">
        {/* Punkt und Seitentitel */}
        <div className="flex items-center mb-1">
          <span className="w-2 h-2 rounded-full bg-[#D0312D] ml-2 mr-1"></span>
          <h1 className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
            News
          </h1>
        </div>

        {/* Hauptüberschrift - jetzt links ausgerichtet */}
        <Title withDot>Impulse für die Zukunft</Title>
      </div>
    </Content>
  );
}
