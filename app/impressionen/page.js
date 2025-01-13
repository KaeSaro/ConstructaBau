import { ImageCard } from '@/components/ImageCard';

const images = [
  {
    src: '/Bad Endbach/1.jpg',
    alt: 'Bad Endbach',
    title: 'Bad Endbach',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Bad Endbach/3.JPG',
    alt: 'Bad Endbach',
    title: 'Bad Endbach',
    date: '2024',
    width: 4284,
    height: 5712,
    span: 'full',
  },
  {
    src: '/Bad Endbach/4.jpg',
    alt: 'Bad Endbach',
    title: 'Bad Endbach',
    date: '2024',
    width: 2252,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Bad Endbach/2.JPG',
    alt: 'Bad Endbach',
    title: 'Bad Endbach',
    date: '2024',
    width: 5712,
    height: 4284,
    span: 'full',
  },
  {
    src: '/Bad Endbach/5.jpg',
    alt: 'Bad Endbach',
    title: 'Bad Endbach',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Bad Endbach/6.jpg',
    alt: 'Bad Endbach',
    title: 'Bad Endbach',
    date: '2024',
    width: 2252,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Rollrasen/1.jpg',
    alt: 'Rollrasen',
    title: 'Neunkirchen',
    date: '2024',
    width: 1440,
    height: 2560,
    span: 'full',
  },
  {
    src: '/Rollrasen/4.jpg',
    alt: 'Rollrasen',
    title: 'Neunkirchen',
    date: '2024',
    width: 2560,
    height: 1440,
    span: 'full',
  },
  {
    src: '/Rollrasen/3.jpg',
    alt: 'Rollrasen',
    title: 'Neunkirchen',
    date: '2024',
    width: 1440,
    height: 2560,
    span: 'full',
  },
  {
    src: '/Rollrasen/2.jpg',
    alt: 'Rollrasen',
    title: 'Neunkirchen',
    date: '2024',
    width: 1440,
    height: 2560,
    span: 'full',
  },
  {
    src: '/Gemuenden/1.jpg',
    alt: 'Gemünden',
    title: 'Gemünden',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Gemuenden/2.jpg',
    alt: 'Gemünden',
    title: 'Gemünden',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Gemuenden/3.jpg',
    alt: 'Gemünden',
    title: 'Gemünden',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Albstadt/1.jpg',
    alt: 'Albstadt',
    title: 'Albstadt',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },

  {
    src: '/Albstadt/2.jpg',
    alt: 'Albstadt',
    title: 'Albstadt',
    date: '2024',
    width: 1440,
    height: 2560,
    span: 'full',
  },

  {
    src: '/Albstadt/3.jpg',
    alt: 'Albstadt',
    title: 'Albstadt',
    date: '2024',
    width: 1440,
    height: 2560,
    span: 'full',
  },
  {
    src: '/Albstadt/4.jpg',
    alt: 'Albstadt',
    title: 'Albstadt',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Albstadt/5.jpg',
    alt: 'Albstadt',
    title: 'Albstadt',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Wuerzburg/1.jpg',
    alt: 'Würzburg',
    title: 'Würzburg',
    date: '2024',
    width: 4000,
    height: 3000,
    span: 'full',
  },
  {
    src: '/Wuerzburg/2.jpg',
    alt: 'Würzburg',
    title: 'Würzburg',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Wuerzburg/3.jpg',
    alt: 'Würzburg',
    title: 'Würzburg',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Wuerzburg/4.jpg',
    alt: 'Würzburg',
    title: 'Würzburg',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Wuerzburg/5.jpg',
    alt: 'Würzburg',
    title: 'Würzburg',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Wuerzburg/6.jpg',
    alt: 'Würzburg',
    title: 'Würzburg',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Wuerzburg/7.jpg',
    alt: 'Würzburg',
    title: 'Würzburg',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Wuerzburg/9.jpg',
    alt: 'Würzburg',
    title: 'Würzburg',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Wuerzburg/8.jpg',
    alt: 'Würzburg',
    title: 'Würzburg',
    date: '2024',
    width: 4000,
    height: 3000,
    span: 'full',
  },
  {
    src: '/Taktile/1.jpg',
    alt: 'Taktile',
    title: 'Taktiles Leitsystem',
    date: '2024',
    width: 2252,
    height: 4000,
    span: 'full',
  },

  {
    src: '/Taktile/2.jpg',
    alt: 'Taktile',
    title: 'Taktiles Leitsystem',
    date: '2024',
    width: 2252,
    height: 4000,
    span: 'full',
  },

  {
    src: '/Taktile/3.png',
    alt: 'Taktile',
    title: 'Taktiles Leitsystem',
    date: '2024',
    width: 4000,
    height: 3000,
    span: 'full',
  },
  {
    src: '/Schachtabdeckung/1.jpg',
    alt: 'Kabelschachtabdeckung',
    title: 'Kabelschachtabdeckung',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Schachtabdeckung/2.jpg',
    alt: 'Kabelschachtabdeckung',
    title: 'Kabelschachtabdeckung',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Schachtabdeckung/3.jpg',
    alt: 'Kabelschachtabdeckung',
    title: 'Kabelschachtabdeckung',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Neumarkierung/1.jpg',
    alt: 'Neumarkierung',
    title: 'Reinigung Plattenbelag',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Neumarkierung/2.jpg',
    alt: 'Reinigung',
    title: 'Reinigung Plattenbelag',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Neumarkierung/3.jpg',
    alt: 'Bahnsteigmarkierung',
    title: 'Bahnsteigmarkierung',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },

  {
    src: '/Alsbach/1.jpeg',
    alt: 'Alsbach',
    title: 'Alsbach',
    date: '2024',
    width: 2160,
    height: 3840,
    span: 'full',
  },
  {
    src: '/Alsbach/2.jpeg',
    alt: 'Alsbach',
    title: 'Alsbach',
    date: '2024',
    width: 2160,
    height: 3840,
    span: 'full',
  },
  {
    src: '/Alsbach/3.jpeg',
    alt: 'Alsbach',
    title: 'Alsbach',
    date: '2024',
    width: 2160,
    height: 3840,
    span: 'full',
  },
  {
    src: '/Alsbach/4.jpeg',
    alt: 'Alsbach',
    title: 'Alsbach',
    date: '2024',
    width: 3840,
    height: 2160,
    span: 'full',
  },
  {
    src: '/Alsbach/5.jpg',
    alt: 'Anfahrschutz',
    title: 'Alsbach',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Anfahrschutz/1.jpg',
    alt: 'Anfahrschutz',
    title: 'Anfahrschutz',
    date: '2024',
    width: 4000,
    height: 3000,
    span: 'full',
  },
  {
    src: '/Anfahrschutz/2.jpeg',
    alt: 'Anfahrschutz',
    title: 'Anfahrschutz',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
];

export default function Impressionen() {
  return (
    <div className="flex flex-col mt-[304px] space-y-20">
      {/* Punkt und Seitentitel */}
      <div className="flex items-center mb-1">
        <span className="w-2 h-2 rounded-full bg-[#D0312D] ml-2 mr-1"></span>
        <h1 className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
          IMPRESSIONEN
        </h1>
      </div>
      {/* Wide (2:2) + zwei Default (1:1) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
        <div className="md:col-span-2">
          <ImageCard {...images[0]} span="wide" />
        </div>
        <div className="md:col-span-1">
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            <ImageCard {...images[1]} span="default" />
            <ImageCard {...images[2]} span="default" />
          </div>
        </div>
      </div>
      {/* Landscape (3:1) */}
      <div className="mt-8 md:mt-12">
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          <ImageCard {...images[3]} span="landscape" />
        </div>
      </div>
      {/* Half Landscape (2:1) + Default (1:1) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
        <div className="md:col-span-2">
          <ImageCard {...images[4]} span="halflandscape" />
        </div>
        <div className="md:col-span-1">
          <ImageCard {...images[5]} span="default" />
        </div>
      </div>
      {/* Three Default (1:1) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
        <ImageCard {...images[6]} span="default" />
        <ImageCard {...images[7]} span="default" />
        <ImageCard {...images[8]} span="default" />
      </div>
      {/* Two Wide (2:2) nebeneinander */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12">
        <ImageCard {...images[9]} span="wide" />
      </div>
      {/* Default (1:1) + Half Landscape (2:1) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
        <div className="md:col-span-1">
          <ImageCard {...images[10]} span="default" />
        </div>
        <div className="md:col-span-2">
          <ImageCard {...images[11]} span="halflandscape" />
        </div>
      </div>
      {/* Two Half Landscape (2:1) untereinander */}
      <div className="grid grid-cols-1 gap-8 md:gap-12 mt-8 md:mt-12">
        <ImageCard {...images[12]} span="halflandscape" />
      </div>
      {/* Default (1:1) + Wide (2:2) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
        <div className="md:col-span-1">
          <ImageCard {...images[13]} span="default" />
        </div>
        <div className="md:col-span-2">
          <ImageCard {...images[14]} span="wide" />
        </div>
      </div>
      {/* Three Default (1:1) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
        <ImageCard {...images[15]} span="default" />
        <ImageCard {...images[16]} span="default" />
        <ImageCard {...images[17]} span="default" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
        <ImageCard {...images[18]} span="default" />
        <ImageCard {...images[19]} span="default" />
        <ImageCard {...images[20]} span="default" />
      </div>
      {/* Wide (2:2) + zwei Default (1:1) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
        <div className="md:col-span-2">
          <ImageCard {...images[21]} span="wide" />
        </div>
        <div className="md:col-span-1">
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            <ImageCard {...images[22]} span="default" />
            <ImageCard {...images[23]} span="default" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
        {/* Zwei kleine Bilder links */}
        <div className="md:col-span-1">
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            <ImageCard {...images[24]} span="default" />
            <ImageCard {...images[25]} span="default" />
          </div>
        </div>
        {/* Großes Bild rechts */}
        <div className="md:col-span-2">
          <ImageCard {...images[26]} span="wide" />
        </div>
      </div>
      {/* Default (1:1) + Wide (2:2) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
        <div className="md:col-span-1">
          <ImageCard {...images[27]} span="default" />
        </div>
        <div className="md:col-span-2">
          <ImageCard {...images[28]} span="wide" />
        </div>
      </div>
      {/* Landscape (3:1) */}
      <div className="mt-8 md:mt-12">
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          <ImageCard {...images[29]} span="landscape" />
        </div>
      </div>
      {/* Three Default (1:1) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
        <ImageCard {...images[30]} span="default" />
        <ImageCard {...images[31]} span="default" />
        <ImageCard {...images[32]} span="default" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
        <div className="md:col-span-1">
          <div className="aspect-[1/2]">
            <ImageCard {...images[33]} span="default" className="h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="aspect-[1/2]">
            <ImageCard {...images[34]} span="default" className="h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="aspect-[1/2]">
            <ImageCard {...images[35]} span="default" className="h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Wide (2:2) + zwei Default (1:1) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
        <div className="md:col-span-2">
          <ImageCard {...images[36]} span="wide" />
        </div>
        <div className="md:col-span-1">
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            <ImageCard {...images[37]} span="default" />
            <ImageCard {...images[38]} span="default" />
          </div>
        </div>
      </div>

      {/* Two Half Landscape (2:1) untereinander */}
      <div className="grid grid-cols-1 gap-8 md:gap-12 mt-8 md:mt-12">
        <ImageCard {...images[39]} span="halflandscape" />
      </div>
      {/* Two Wide (2:2) nebeneinander */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12">
        <ImageCard {...images[40]} span="wide" />
      </div>

      {/* Wide (2:2) + Default (1:1)   */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
        <div className="md:col-span-2">
          <ImageCard {...images[41]} span="wide" />
        </div>
        <div className="md:col-span-1">
          <ImageCard {...images[42]} span="default" />
        </div>
      </div>
    </div>
  );
}
