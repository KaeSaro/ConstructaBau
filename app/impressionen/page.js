import { Content } from '../../components/Content';
import { ImageCard } from '../../components/ImageCard';
import { Title } from '../../components/Title';

const images = [
  {
    src: '/Bad Endbach/1.jpg',
    alt: 'Bad Endbach',
    decoding: 'async',
    title: 'Bad Endbach',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Bad Endbach/3.JPG',
    alt: 'Bad Endbach',
    decoding: 'async',
    title: 'Bad Endbach',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Bad Endbach/5.jpg',
    alt: 'Bad Endbach',
    title: 'Bad Endbach',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Rollrasen/1.jpg',
    alt: 'Rollrasen',
    title: 'Neunkirchen',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Rollrasen/4.jpg',
    alt: 'Rollrasen',
    title: 'Neunkirchen',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Rollrasen/3.jpg',
    alt: 'Rollrasen',
    title: 'Neunkirchen',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Rollrasen/2.jpg',
    alt: 'Rollrasen',
    title: 'Neunkirchen',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Wuerzburg/5.jpg',
    alt: 'Würzburg',
    title: 'Würzburg',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Wuerzburg/6.jpg',
    alt: 'Würzburg',
    title: 'Würzburg',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Wuerzburg/9.jpg',
    alt: 'Würzburg',
    title: 'Würzburg',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Wuerzburg/8.jpg',
    alt: 'Würzburg',
    title: 'Würzburg',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Taktile/1.jpg',
    alt: 'Taktile',
    title: 'Taktiles Leitsystem',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Taktile/2.jpg',
    alt: 'Taktile',
    title: 'Taktiles Leitsystem',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Taktile/3.jpg',
    alt: 'Taktile',
    title: 'Taktiles Leitsystem',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Schachtabdeckung/1.jpg',
    alt: 'Kabelschachtabdeckung',
    title: 'Kabelschachtabdeckung',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Schachtabdeckung/2.jpg',
    alt: 'Kabelschachtabdeckung',
    title: 'Kabelschachtabdeckung',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Schachtabdeckung/3.jpg',
    alt: 'Kabelschachtabdeckung',
    title: 'Kabelschachtabdeckung',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Neumarkierung/1.jpg',
    alt: 'Neumarkierung',
    title: 'Reinigung Plattenbelag',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Neumarkierung/2.jpg',
    alt: 'Reinigung',
    title: 'Reinigung Plattenbelag',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Neumarkierung/3.jpg',
    alt: 'Bahnsteigmarkierung',
    title: 'Bahnsteigmarkierung',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Anfahrschutz/1.jpg',
    alt: 'Anfahrschutz',
    title: 'Anfahrschutz',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Anfahrschutz/2.jpeg',
    alt: 'Anfahrschutz',
    title: 'Anfahrschutz',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Netphen/2.jpg',
    alt: 'Netphen',
    title: 'Netphen',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Netphen/3.jpg',
    alt: 'Netphen',
    title: 'Netphen',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Netphen/4.jpg',
    alt: 'Netphen',
    title: 'Netphen',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Netphen/5.jpg',
    alt: 'Netphen',
    title: 'Netphen',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Netphen/7.jpg',
    alt: 'Netphen',
    title: 'Netphen',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Netphen/8.jpg',
    alt: 'Netphen',
    title: 'Netphen',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Gruenpflege/1.jpg',
    alt: 'Gruenpflege',
    title: 'Grünpflege - Friedhöfe',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Gruenpflege/2.jpg',
    alt: 'Gruenpflege',
    title: 'Grünpflege - Friedhöfe',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Gruenpflege/3.jpg',
    alt: 'Gruenpflege',
    title: 'Grünpflege - Friedhöfe',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Gruenpflege/4.jpg',
    alt: 'Gruenpflege',
    title: 'Grünpflege - Friedhöfe',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Gruenpflege/5.jpg',
    alt: 'Gruenpflege',
    title: 'Grünpflege - Friedhöfe',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Gruenpflege/6.jpg',
    alt: 'Gruenpflege',
    title: 'Grünpflege - Friedhöfe',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Gruenpflege/7.jpg',
    alt: 'Gruenpflege',
    title: 'Grünpflege - Friedhöfe',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Gruenpflege/8.jpg',
    alt: 'Gruenpflege',
    title: 'Grünpflege - Friedhöfe',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Bad Endbach/10.jpg',
    alt: 'Bad Endbach',
    title: 'Bad Endbach',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Bad Endbach/11.jpg',
    alt: 'Bad Endbach',
    title: 'Bad Endbach',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Netphen/9.jpg',
    alt: 'Netphen',
    title: 'Netphen',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Wilnsdorf/4.jpg',
    alt: 'Wilnsdorf',
    title: 'Wilnsdorf',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Wilnsdorf/6.jpg',
    alt: 'Wilnsdorf',
    title: 'Wilnsdorf',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Wilnsdorf/7.jpg',
    alt: 'Wilnsdorf',
    title: 'Wilnsdorf',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Wilnsdorf/8.jpg',
    alt: 'Wilnsdorf',
    title: 'Wilnsdorf',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Wilnsdorf/10.jpg',
    alt: 'Wilnsdorf',
    title: 'Wilnsdorf',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Wilnsdorf/12.jpg',
    alt: 'Wilnsdorf',
    title: 'Wilnsdorf',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Elkenroth/1.jpg',
    alt: 'Elkenroth',
    title: 'Elkenroth',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Elkenroth/2.jpg',
    alt: 'Elkenroth',
    title: 'Elkenroth',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Netphen/15.jpg',
    alt: 'Netphen',
    title: 'Netphen',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Wilnsdorf/14.jpg',
    alt: 'Wilnsdorf',
    title: 'Wilnsdorf',
    date: '2025',
    span: 'full',
  },
  {
    src: '/Wilnsdorf/15.jpg',
    alt: 'Wilnsdorf',
    title: 'Wilnsdorf',
    date: '2025',
    span: 'full',
  },
  // Frankfurt (2025)
  { src: '/Frankfurt/1.jpeg', alt: 'Frankfurt', title: 'Frankfurt', date: '2025', span: 'full' },
  { src: '/Frankfurt/2.jpeg', alt: 'Frankfurt', title: 'Frankfurt', date: '2025', span: 'full' },
  { src: '/Frankfurt/3.jpeg', alt: 'Frankfurt', title: 'Frankfurt', date: '2025', span: 'full' },
  { src: '/Frankfurt/4.jpeg', alt: 'Frankfurt', title: 'Frankfurt', date: '2025', span: 'full' },
  { src: '/Frankfurt/5.jpeg', alt: 'Frankfurt', title: 'Frankfurt', date: '2025', span: 'full' },
  { src: '/Frankfurt/6.jpeg', alt: 'Frankfurt', title: 'Frankfurt', date: '2025', span: 'full' },
  // Frankfurt DF (2025)
  { src: '/Frankfurt DF/2.jpeg', alt: 'Frankfurt DF', title: 'Frankfurt DF', date: '2025', span: 'full' },
  { src: '/Frankfurt DF/3.jpeg', alt: 'Frankfurt DF', title: 'Frankfurt DF', date: '2025', span: 'full' },
  { src: '/Frankfurt DF/4.jpeg', alt: 'Frankfurt DF', title: 'Frankfurt DF', date: '2025', span: 'full' },
  { src: '/Frankfurt DF/5.jpeg', alt: 'Frankfurt DF', title: 'Frankfurt DF', date: '2025', span: 'full' },
  { src: '/Frankfurt DF/6.jpeg', alt: 'Frankfurt DF', title: 'Frankfurt DF', date: '2025', span: 'full' },
  // München (2025)
  { src: '/Muenchen/1.jpeg', alt: 'München', title: 'München', date: '2025', span: 'full' },
  { src: '/Muenchen/2.jpeg', alt: 'München', title: 'München', date: '2025', span: 'full' },
  { src: '/Muenchen/3.jpeg', alt: 'München', title: 'München', date: '2025', span: 'full' },
  // Niederlande (2025)
  { src: '/Niederlande/1.jpeg', alt: 'Niederlande', title: 'Niederlande', date: '2025', span: 'full' },
  { src: '/Niederlande/2.jpeg', alt: 'Niederlande', title: 'Niederlande', date: '2025', span: 'full' },
  { src: '/Niederlande/3.jpeg', alt: 'Niederlande', title: 'Niederlande', date: '2025', span: 'full' },
  { src: '/Niederlande/4.jpeg', alt: 'Niederlande', title: 'Niederlande', date: '2025', span: 'full' },
  { src: '/Niederlande/5.jpeg', alt: 'Niederlande', title: 'Niederlande', date: '2025', span: 'full' },
  { src: '/Niederlande/6.jpeg', alt: 'Niederlande', title: 'Niederlande', date: '2025', span: 'full' },
  { src: '/Niederlande/7.jpeg', alt: 'Niederlande', title: 'Niederlande', date: '2025', span: 'full' },
  { src: '/Niederlande/8.jpeg', alt: 'Niederlande', title: 'Niederlande', date: '2025', span: 'full' },
  // Stuttgart (2025)
  { src: '/Stuttgart/1.jpeg', alt: 'Stuttgart', title: 'Stuttgart', date: '2025', span: 'full' },
  { src: '/Stuttgart/2.jpeg', alt: 'Stuttgart', title: 'Stuttgart', date: '2025', span: 'full' },
  { src: '/Stuttgart/4.jpeg', alt: 'Stuttgart', title: 'Stuttgart', date: '2025', span: 'full' },
  { src: '/Stuttgart/5.jpeg', alt: 'Stuttgart', title: 'Stuttgart', date: '2025', span: 'full' },
];

export default function Impressionen() {
  return (
    <Content>
      <div className="flex flex-col mt-28 md:mt-[304px]">
        {/* Header Sektion */}
        <div className="flex items-center mb-1">
          <span className="w-2 h-2 rounded-full bg-accent ml-2 mr-1"></span>
          <h1 className="text-[16px] leading-[1.1] font-jazmin font-thin uppercase text-left">
            IMPRESSIONEN
          </h1>
        </div>
        <Title withDot>Von der Vision zur Realität – unsere Referenzen</Title>

        {/* Hauptcontainer für Bilder mit konsistentem Spacing */}
        <div className="mt-16 md:mt-32">
          <div className="grid grid-cols-1 gap-6 md:gap-12">

              {/* Frankfurt */}
            <div className="grid grid-cols-1 gap-6 md:gap-12">
              <ImageCard {...images[50]} span="halflandscape" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              <ImageCard {...images[51]} span="default" />
              <ImageCard {...images[52]} span="default" />
              <ImageCard {...images[53]} span="default" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              <div className="md:col-span-2">
                <ImageCard {...images[54]} span="wide" />
              </div>
              <div className="md:col-span-1">
                <div className="grid grid-cols-1 gap-6 md:gap-12">
                  <ImageCard {...images[55]} span="default" />
                </div>
              </div>
            </div>

              {/* Frankfurt DF */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              <div className="md:col-span-1">
                <div className="grid grid-cols-1 gap-6 md:gap-12">
                  <ImageCard {...images[56]} span="default" />
                  <ImageCard {...images[57]} span="default" />
                </div>
              </div>
              <div className="md:col-span-2">
                <ImageCard {...images[58]} span="wide" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:gap-12">
              <ImageCard {...images[59]} span="halflandscape" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:gap-12">
              <ImageCard {...images[60]} span="halflandscape" />
            </div>

              {/* München */}
            <div className="grid grid-cols-1 gap-6 md:gap-12">
              <ImageCard {...images[61]} span="halflandscape" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <ImageCard {...images[62]} span="default" />
              <ImageCard {...images[63]} span="default" />
            </div>

              {/* Niederlande */}
            <div className="grid grid-cols-1 gap-6 md:gap-12">
              <ImageCard {...images[64]} span="landscape" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              <div className="md:col-span-1">
                <div className="grid grid-cols-1 gap-6 md:gap-12">
                  <ImageCard {...images[65]} span="default" />
                  <ImageCard {...images[66]} span="default" />
                </div>
              </div>
              <div className="md:col-span-2">
                <ImageCard {...images[67]} span="wide" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              <ImageCard {...images[68]} span="default" />
              <ImageCard {...images[69]} span="default" />
              <ImageCard {...images[70]} span="default" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:gap-12">
              <ImageCard {...images[71]} span="halflandscape" />
            </div>

              {/* Stuttgart */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              <div className="md:col-span-2">
                <ImageCard {...images[72]} span="wide" />
              </div>
              <div className="md:col-span-1">
                <div className="grid grid-cols-1 gap-6 md:gap-12">
                  <ImageCard {...images[73]} span="default" />
                  <ImageCard {...images[74]} span="default" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <ImageCard {...images[75]} span="halflandscape" />
            </div>

              {/* Wilnsdorf */}


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              <ImageCard {...images[39]} span="default" />
            </div>


  {/* Two Default (1:1) + Wide (2:2) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              <div className="md:col-span-1">
                <div className="grid grid-cols-1 gap-6 md:gap-12">
                  <ImageCard {...images[39]} span="default" />
                  <ImageCard {...images[49]} span="default" />
                </div>
              </div>
              <div className="md:col-span-2">
                <ImageCard {...images[41]} span="wide" />
              </div>
            </div>

    {/* Landscape (3:1) */}
            <div className="grid grid-cols-1 gap-6 md:gap-12">
              <ImageCard {...images[39]} span="landscape" />
            </div>


            {/* Wide (2:2) + Default (1:1) */}
            <div className="grid grid-cols-1 gap-6 md:gap-12">
                <ImageCard {...images[42]} span="wide" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              {[48, 44].map((index) => (
                <div key={index} className="md:col-span-1">
                  <div className="aspect-[3/4] md:aspect-[1/2]">
                    <ImageCard {...images[index]} span="default" className="h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>

              {/* Emmerzhausen / Elkenroth */}

              {/* Single Half Landscape */}
            <div className="grid grid-cols-1 gap-6 md:gap-12">
              <ImageCard {...images[45]} span="halflandscape" />
            </div>

  {/* Single Half Landscape */}
            <div className="grid grid-cols-1 gap-6 md:gap-12">
              <ImageCard {...images[46]} span="halflandscape" />
            </div>


            {/* Friedhoefe */}

            {/* Single Half Landscape */}
            <div className="grid grid-cols-1 gap-6 md:gap-12">
              <ImageCard {...images[29]} span="halflandscape" />
            </div>

            {/* Two Default (1:1) + Wide (2:2) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              <div className="md:col-span-1">
                <div className="grid grid-cols-1 gap-6 md:gap-12">
                  <ImageCard {...images[30]} span="default" />
                  <ImageCard {...images[31]} span="default" />
                </div>
              </div>
              <div className="md:col-span-2">
                <ImageCard {...images[32]} span="wide" />
              </div>
            </div>

            {/* Portrait Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              {[33, 34, 35].map((index) => (
                <div key={index} className="md:col-span-1">
                  <div className="aspect-[3/4] md:aspect-[1/2]">
                    <ImageCard {...images[index]} span="default" className="h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>

            {/* Landscape (3:1) */}
            <div className="grid grid-cols-1 gap-6 md:gap-12">
              <ImageCard {...images[35]} span="landscape" />
            </div>

            {/* Netphen */}


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              <ImageCard {...images[38]} span="default" />
              <ImageCard {...images[47]} span="default" />
            </div>

            <div className="grid grid-cols-1 gap-6 md:gap-12">
              <ImageCard {...images[22]} span="halflandscape" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              <ImageCard {...images[23]} span="default" />
              <ImageCard {...images[24]} span="default" />
              <ImageCard {...images[26]} span="default" />
            </div>

            {/* Bad Endbach */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              <div className="md:col-span-1">
                <ImageCard {...images[37]} span="default" />
              </div>
              <div className="md:col-span-2">
                <ImageCard {...images[38]} span="wide" />
              </div>
            </div>

            {/* Wide (2:2) + Default (1:1) */}
            <div className="grid grid-cols-1 gap-6 md:gap-12">
                <ImageCard {...images[0]} span="wide" />
            </div>

            {/* Half Landscape (2:1) */}
            <div className="grid grid-cols-1 gap-6 md:gap-12">
                <ImageCard {...images[2]} span="halflandscape" />
            </div>

            {/* Neunkirchen */}

            {/* Three Default (1:1) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              <ImageCard {...images[4]} span="default" />
              <ImageCard {...images[5]} span="default" />
              <ImageCard {...images[6]} span="default" />
            </div>

            {/* Single Half Landscape */}
            <div className="grid grid-cols-1 gap-6 md:gap-12">
              <ImageCard {...images[7]} span="halflandscape" />
            </div>

            {/* Wuerzburg */}

            {/* Wide (2:2) + Two Default (1:1) – nur noch die beiden Standardformate */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                  <ImageCard {...images[8]} span="default" />
                  <ImageCard {...images[9]} span="default" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              <div className="md:col-span-1">
                <div className="grid grid-cols-1 gap-6 md:gap-12">
                  <ImageCard {...images[10]} span="default" />
                </div>
              </div>
              <div className="md:col-span-2">
                <ImageCard {...images[11]} span="wide" />
              </div>
            </div>

            {/* Taktiles Leitsystem */}

            {/* Default (1:1) + Wide (2:2) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              <div className="md:col-span-1">
                <ImageCard {...images[12]} span="default" />
              </div>
              <div className="md:col-span-2">
                <ImageCard {...images[13]} span="wide" />
              </div>
            </div>

            {/* Landscape (3:1) */}
            <div className="grid grid-cols-1 gap-6 md:gap-12">
              <ImageCard {...images[14]} span="landscape" />
            </div>

            {/* Kabelschachtabdeckung */}

            {/* Three Default (1:1) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              <ImageCard {...images[15]} span="default" />
              <ImageCard {...images[16]} span="default" />
              <ImageCard {...images[17]} span="default" />
            </div>

            {/* Reinigung Plattenbelag */}

            {/* Portrait Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              {[17, 18, 19].map((index) => (
                <div key={index} className="md:col-span-1">
                  <div className="aspect-[3/4] md:aspect-[1/2]">
                    <ImageCard {...images[index]} span="default" className="h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>

            {/* Anfahrschutz */}

            {/* Wide (2:2) + Default (1:1) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              <div className="md:col-span-2">
                <ImageCard {...images[20]} span="wide" />
              </div>
              <div className="md:col-span-1">
                <ImageCard {...images[21]} span="default" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </Content>
  );
}