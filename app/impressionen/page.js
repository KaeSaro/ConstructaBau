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
    src: '/Bad Endbach/4.jpg',
    alt: 'Bad Endbach',
    title: 'Bad Endbach',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Bad Endbach/2.JPG',
    alt: 'Bad Endbach',
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
    src: '/Bad Endbach/6.jpg',
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
    src: '/Gemuenden/1.jpg',
    alt: 'Gemünden',
    title: 'Gemünden',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Gemuenden/2.jpg',
    alt: 'Gemünden',
    title: 'Gemünden',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Gemuenden/3.jpg',
    alt: 'Gemünden',
    title: 'Gemünden',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Albstadt/1.jpg',
    alt: 'Albstadt',
    title: 'Albstadt',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Albstadt/6.jpg',
    alt: 'Albstadt',
    title: 'Albstadt',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Albstadt/3.jpg',
    alt: 'Albstadt',
    title: 'Albstadt',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Albstadt/4.jpg',
    alt: 'Albstadt',
    title: 'Albstadt',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Albstadt/5.jpg',
    alt: 'Albstadt',
    title: 'Albstadt',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Wuerzburg/1.jpg',
    alt: 'Würzburg',
    title: 'Würzburg',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Wuerzburg/2.jpg',
    alt: 'Würzburg',
    title: 'Würzburg',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Wuerzburg/3.jpg',
    alt: 'Würzburg',
    title: 'Würzburg',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Wuerzburg/4.jpg',
    alt: 'Würzburg',
    title: 'Würzburg',
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
    src: '/Wuerzburg/7.jpg',
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
    src: '/Alsbach/1.jpg',
    alt: 'Alsbach',
    title: 'Alsbach',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Alsbach/2.jpg',
    alt: 'Alsbach',
    title: 'Alsbach',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Alsbach/3.jpeg',
    alt: 'Alsbach',
    title: 'Alsbach',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Alsbach/4.jpeg',
    alt: 'Alsbach',
    title: 'Alsbach',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Alsbach/5.jpg',
    alt: 'Anfahrschutz',
    title: 'Alsbach',
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
    src: '/Bad Endbach/7.JPG',
    alt: 'Bad Endbach',
    title: 'Bad Endbach',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Bad Endbach/8.JPG',
    alt: 'Bad Endbach',
    title: 'Bad Endbach',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Bad Endbach/9.jpg',
    alt: 'Bad Endbach',
    title: 'Bad Endbach',
    date: '2024',
    span: 'full',
  },
  {
    src: '/Netphen/1.jpg',
    alt: 'Netphen',
    title: 'Netphen',
    date: '2025',
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
    src: '/Netphen/6.jpg',
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
    src: '/Netphen/10.jpg',
    alt: 'Netphen',
    title: 'Netphen',
    date: '2025',
    span: 'full',
  },
    {
    src: '/Netphen/11.jpg',
    alt: 'Netphen',
    title: 'Netphen',
    date: '2025',
    span: 'full',
  },
      {
    src: '/Netphen/12.jpg',
    alt: 'Netphen',
    title: 'Netphen',
    date: '2025',
    span: 'full',
  },
        {
    src: '/Wilnsdorf/1.jpg',
    alt: 'Wilnsdorf',
    title: 'Wilnsdorf',
    date: '2025',
    span: 'full',
  },
          {
    src: '/Wilnsdorf/2.jpg',
    alt: 'Wilnsdorf',
    title: 'Wilnsdorf',
    date: '2025',
    span: 'full',
  },
          {
    src: '/Wilnsdorf/3.jpg',
    alt: 'Wilnsdorf',
    title: 'Wilnsdorf',
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
    src: '/Wilnsdorf/5.jpg',
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
    src: '/Wilnsdorf/9.jpg',
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
    src: '/Wilnsdorf/11.jpg',
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
    src: '/Wilnsdorf/13.jpg',
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
    src: '/Netphen/13.jpg',
    alt: 'Netphen',
    title: 'Netphen',
    date: '2025',
    span: 'full',
  },
     {
    src: '/Netphen/14.jpg',
    alt: 'Netphen',
    title: 'Netphen',
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
  {
    src: '/Wilnsdorf/16.jpg',
    alt: 'Wilnsdorf',
    title: 'Wilnsdorf',
    date: '2025',
    span: 'full',
  },
];

export default function Impressionen() {
  return (
    <Content>
      <div className="flex flex-col mt-[304px]">
        {/* Header Sektion */}
        <div className="flex items-center mb-1">
          <span className="w-2 h-2 rounded-full bg-[#D0312D] ml-2 mr-1"></span>
          <h1 className="text-[16px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
            IMPRESSIONEN
          </h1>
        </div>
        <Title withDot>Von der Vision zur Realität – unsere Referenzen</Title>

        {/* Hauptcontainer für Bilder mit konsistentem Spacing */}
        <div className="mt-32">
          <div className="grid grid-cols-1 gap-12">


              {/* Wilnsdorf */}


              {/* Wide (2:2) + Default (1:1) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <ImageCard {...images[69]} span="wide" />
              </div>
              <div className="md:col-span-1">
                <ImageCard {...images[68]} span="default" />
              </div>
            </div>


 {/* Three Default (1:1) - Second Set */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <ImageCard {...images[73]} span="default" />
              <ImageCard {...images[70]} span="default" />
              <ImageCard {...images[88]} span="default" />
            </div>


  {/* Two Default (1:1) + Wide (2:2) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <div className="grid grid-cols-1 gap-12">
                  <ImageCard {...images[74]} span="default" />
                  <ImageCard {...images[87]} span="default" />
                </div>
              </div>
              <div className="md:col-span-2">
                <ImageCard {...images[75]} span="wide" />
              </div>
            </div>

    {/* Landscape (3:1) */}
            <div className="grid grid-cols-1 gap-12">
              <ImageCard {...images[71]} span="landscape" />
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <ImageCard {...images[78]} span="default" />
              </div>
              <div className="md:col-span-2">
                <ImageCard {...images[72]} span="wide" />
              </div>
            </div>

            {/* Wide (2:2) + Default (1:1) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <ImageCard {...images[77]} span="wide" />
              </div>
              <div className="md:col-span-1">
                <ImageCard {...images[76]} span="default" />
              </div>
            </div>

             {/* Portrait Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[86, 79, 80].map((index) => (
                <div key={index} className="md:col-span-1">
                  <div className="aspect-[1/2]">
                    <ImageCard {...images[index]} span="default" className="h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>

              {/* Emmerzhausen */}

              {/* Single Half Landscape */}
            <div className="grid grid-cols-1 gap-12">
              <ImageCard {...images[81]} span="halflandscape" />
            </div>

  {/* Single Half Landscape */}
            <div className="grid grid-cols-1 gap-12">
              <ImageCard {...images[82]} span="halflandscape" />
            </div>


            {/* Friedhoefe */}

            {/* Single Half Landscape */}
            <div className="grid grid-cols-1 gap-12">
              <ImageCard {...images[54]} span="halflandscape" />
            </div>

            {/* Two Default (1:1) + Wide (2:2) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <div className="grid grid-cols-1 gap-12">
                  <ImageCard {...images[55]} span="default" />
                  <ImageCard {...images[56]} span="default" />
                </div>
              </div>
              <div className="md:col-span-2">
                <ImageCard {...images[57]} span="wide" />
              </div>
            </div>

            {/* Portrait Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[58, 59, 60].map((index) => (
                <div key={index} className="md:col-span-1">
                  <div className="aspect-[1/2]">
                    <ImageCard {...images[index]} span="default" className="h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>

            {/* Landscape (3:1) */}
            <div className="grid grid-cols-1 gap-12">
              <ImageCard {...images[61]} span="landscape" />
            </div>

            {/* Netphen */}


              {/* Three Default (1:1) - Second Set */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <ImageCard {...images[64]} span="default" />
              <ImageCard {...images[85]} span="default" />
              <ImageCard {...images[66]} span="default" />
            </div>

            <div className="grid grid-cols-1 gap-12">
              <ImageCard {...images[47]} span="halflandscape" />
            </div>

              {/* Two Default (1:1) + Wide (2:2) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <div className="grid grid-cols-1 gap-12">
                  <ImageCard {...images[83]} span="default" />
                  <ImageCard {...images[46]} span="default" />
                </div>
              </div>
              <div className="md:col-span-2">
                <ImageCard {...images[65]} span="wide" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <ImageCard {...images[48]} span="default" />
              <ImageCard {...images[49]} span="default" />
              <ImageCard {...images[53]} span="default" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <ImageCard {...images[84]} span="default" />
              </div>
              <div className="md:col-span-2">
                <ImageCard {...images[51]} span="wide" />
              </div>
            </div>

            {/* Bad Endbach */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <ImageCard {...images[62]} span="default" />
              </div>
              <div className="md:col-span-2">
                <ImageCard {...images[63]} span="wide" />
              </div>
            </div>

            {/* Wide (2:2) + Default (1:1) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <ImageCard {...images[0]} span="wide" />
              </div>
              <div className="md:col-span-1">
                <ImageCard {...images[2]} span="default" />
              </div>
            </div>

            {/* Landscape (3:1) */}
            <div className="grid grid-cols-1 gap-12">
              <ImageCard {...images[3]} span="landscape" />
            </div>

            {/* Half Landscape (2:1) + Default (1:1) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <ImageCard {...images[4]} span="halflandscape" />
              </div>
              <div className="md:col-span-1">
                <ImageCard {...images[5]} span="default" />
              </div>
            </div>

            {/* Default (1:1) + Half Landscape (2:1) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <ImageCard {...images[43]} span="default" />
              </div>
              <div className="md:col-span-2">
                <ImageCard {...images[44]} span="halflandscape" />
              </div>
            </div>

            {/* Single Half Landscape */}
            <div className="grid grid-cols-1 gap-12">
              <ImageCard {...images[45]} span="halflandscape" />
            </div>

            {/* Neunkirchen */}

            {/* Three Default (1:1) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <ImageCard {...images[6]} span="default" />
              <ImageCard {...images[7]} span="default" />
              <ImageCard {...images[8]} span="default" />
            </div>

            {/* Single Half Landscape */}
            <div className="grid grid-cols-1 gap-12">
              <ImageCard {...images[9]} span="halflandscape" />
            </div>

            {/* Gemuenden */}

            {/* Default (1:1) + Half Landscape (2:1) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <ImageCard {...images[10]} span="default" />
              </div>
              <div className="md:col-span-2">
                <ImageCard {...images[11]} span="halflandscape" />
              </div>
            </div>

            {/* Single Half Landscape */}
            <div className="grid grid-cols-1 gap-12">
              <ImageCard {...images[12]} span="halflandscape" />
            </div>

            {/* Albstadt */}

            {/* Default (1:1) + Wide (2:2) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <ImageCard {...images[13]} span="default" />
              </div>
              <div className="md:col-span-2">
                <ImageCard {...images[14]} span="wide" />
              </div>
            </div>

            {/* Three Default (1:1) - First Set */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <ImageCard {...images[15]} span="default" />
              <ImageCard {...images[16]} span="default" />
              <ImageCard {...images[17]} span="default" />
            </div>

            {/* Wuerzburg */}

            {/* Three Default (1:1) - Second Set */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <ImageCard {...images[18]} span="default" />
              <ImageCard {...images[19]} span="default" />
              <ImageCard {...images[20]} span="default" />
            </div>

            {/* Wide (2:2) + Two Default (1:1) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <ImageCard {...images[21]} span="wide" />
              </div>
              <div className="md:col-span-1">
                <div className="grid grid-cols-1 gap-12">
                  <ImageCard {...images[22]} span="default" />
                  <ImageCard {...images[23]} span="default" />
                </div>
              </div>
            </div>

            {/* Two Default (1:1) + Wide (2:2) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <div className="grid grid-cols-1 gap-12">
                  <ImageCard {...images[24]} span="default" />
                  <ImageCard {...images[25]} span="default" />
                </div>
              </div>
              <div className="md:col-span-2">
                <ImageCard {...images[26]} span="wide" />
              </div>
            </div>

            {/* Taktiles Leitsystem */}

            {/* Default (1:1) + Wide (2:2) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <ImageCard {...images[27]} span="default" />
              </div>
              <div className="md:col-span-2">
                <ImageCard {...images[28]} span="wide" />
              </div>
            </div>

            {/* Landscape (3:1) */}
            <div className="grid grid-cols-1 gap-12">
              <ImageCard {...images[29]} span="landscape" />
            </div>

            {/* Kabelschachtabdeckung */}

            {/* Three Default (1:1) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <ImageCard {...images[30]} span="default" />
              <ImageCard {...images[31]} span="default" />
              <ImageCard {...images[32]} span="default" />
            </div>

            {/* Reinigung Plattenbelag */}

            {/* Portrait Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[33, 34, 35].map((index) => (
                <div key={index} className="md:col-span-1">
                  <div className="aspect-[1/2]">
                    <ImageCard {...images[index]} span="default" className="h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>

            {/* Alsbach */}

            {/* Wide (2:2) + Two Default (1:1) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <ImageCard {...images[36]} span="wide" />
              </div>
              <div className="md:col-span-1">
                <div className="grid grid-cols-1 gap-12">
                  <ImageCard {...images[37]} span="default" />
                  <ImageCard {...images[38]} span="default" />
                </div>
              </div>
            </div>

            {/* Single Half Landscape */}
            <div className="grid grid-cols-1 gap-12">
              <ImageCard {...images[39]} span="halflandscape" />
            </div>

            {/* Single Wide (2:2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ImageCard {...images[40]} span="wide" />
            </div>

            {/* Anfahrschutz */}

            {/* Wide (2:2) + Default (1:1) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <ImageCard {...images[41]} span="wide" />
              </div>
              <div className="md:col-span-1">
                <ImageCard {...images[42]} span="default" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </Content>
  );
}