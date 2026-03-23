import { redirect } from 'next/navigation';
import { Content } from '../../components/Content';
import { Title } from '../../components/Title';
import { RegularText } from '../../components/RegularText';
import { maintenanceEnabled } from '../../lib/maintenance-mode';

export default function WartungPage() {
  if (!maintenanceEnabled()) {
    redirect('/');
  }

  return (
    <Content withoutTopMargin>
      <div className="flex min-h-[70vh] flex-col justify-center pb-32 pt-24">
        <div className="mb-1 flex items-center">
          <span className="ml-2 mr-1 h-2 w-2 rounded-full bg-[#D0312D]" />
          <p className="text-left font-['Montserrat',_sans-serif] text-[16px] uppercase leading-[1.1]">
            Wartung
          </p>
        </div>
        <Title withDot>Unsere Website wird gewartet</Title>
        <div className="mt-8 max-w-[48rem]">
          <RegularText withDot>
            Wir arbeiten gerade an der Seite und sind in Kürze wieder für Sie da. Bitte schauen Sie später noch einmal
            vorbei
          </RegularText>
        </div>
      </div>
    </Content>
  );
}
