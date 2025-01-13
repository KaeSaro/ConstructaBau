import { ImageCard } from '@/components/ImageCard';

const images = [
  {
    src: '/Bad Endbach/1.jpg',
    alt: 'pasi',
    title: 'Bad Endbach',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Bad Endbach/3.jpg',
    alt: 'pasi',
    title: 'Bad Endbach',
    date: '2024',
    width: 4284,
    height: 5712,
    span: 'full',
  },
  {
    src: '/Bad Endbach/4.jpg',
    alt: 'pasi',
    title: 'Bad Endbach',
    date: '2024',
    width: 2252,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Bad Endbach/2.jpg',
    alt: 'pasi',
    title: 'Bad Endbach',
    date: '2024',
    width: 5712,
    height: 4284,
    span: 'full',
  },
  {
    src: '/Bad Endbach/5.jpg',
    alt: 'pasi',
    title: 'Bad Endbach',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Bad Endbach/6.jpg',
    alt: 'pasi',
    title: 'Bad Endbach',
    date: '2024',
    width: 2252,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Rollrasen/1.jpg',
    alt: 'pasi',
    title: 'Neunkirchen',
    date: '2024',
    width: 1440,
    height: 2560,
    span: 'full',
  },
  {
    src: '/Rollrasen/4.jpg',
    alt: 'pasi',
    title: 'Neunkirchen',
    date: '2024',
    width: 2560,
    height: 1440,
    span: 'full',
  },
  {
    src: '/Rollrasen/3.jpg',
    alt: 'pasi',
    title: 'Neunkirchen',
    date: '2024',
    width: 1440,
    height: 2560,
    span: 'full',
  },
  {
    src: '/Rollrasen/2.jpg',
    alt: 'pasi',
    title: 'Neunkirchen',
    date: '2024',
    width: 1440,
    height: 2560,
    span: 'full',
  },
  {
    src: '/Gemuenden/1.jpg',
    alt: 'pasi',
    title: 'Gemünden',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Gemuenden/2.jpg',
    alt: 'pasi',
    title: 'Gemünden',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Gemuenden/3.jpg',
    alt: 'pasi',
    title: 'Gemünden',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Albstadt/1.jpg',
    alt: 'pasi',
    title: 'Albstadt',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },

  {
    src: '/Albstadt/2.jpg',
    alt: 'pasi',
    title: 'Albstadt',
    date: '2024',
    width: 1440,
    height: 2560,
    span: 'full',
  },

  {
    src: '/Albstadt/3.jpg',
    alt: 'pasi',
    title: 'Albstadt',
    date: '2024',
    width: 1440,
    height: 2560,
    span: 'full',
  },
  {
    src: '/Albstadt/4.jpg',
    alt: 'pasi',
    title: 'Albstadt',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Albstadt/5.jpg',
    alt: 'pasi',
    title: 'Albstadt',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Wuerzburg/1.jpg',
    alt: 'pasi',
    title: 'Würzburg',
    date: '2024',
    width: 4000,
    height: 3000,
    span: 'full',
  },
  {
    src: '/Wuerzburg/2.jpg',
    alt: 'pasi',
    title: 'Würzburg',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Wuerzburg/3.jpg',
    alt: 'pasi',
    title: 'Würzburg',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Wuerzburg/4.jpg',
    alt: 'pasi',
    title: 'Würzburg',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Wuerzburg/5.jpg',
    alt: 'pasi',
    title: 'Würzburg',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Wuerzburg/6.jpg',
    alt: 'pasi',
    title: 'Würzburg',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Wuerzburg/7.jpg',
    alt: 'pasi',
    title: 'Würzburg',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Wuerzburg/9.jpg',
    alt: 'pasi',
    title: 'Würzburg',
    date: '2024',
    width: 3000,
    height: 4000,
    span: 'full',
  },
  {
    src: '/Wuerzburg/8.jpg',
    alt: 'pasi',
    title: 'Würzburg',
    date: '2024',
    width: 4000,
    height: 3000,
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
    </div>
  );
}
