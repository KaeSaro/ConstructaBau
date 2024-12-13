import { ImageCard } from '@/components/ImageCard';

const images = [
  {
    src: '/pasi.JPG',
    alt: 'pasi',
    title: 'Krankfurt Mitte',
    date: '2024',
    width: 1920,
    height: 1080,
    span: 'full',
  },
  {
    src: '/bagger.jpg',
    alt: 'Projekt 2',
    title: 'Renovation Stuttgart',
    date: '12.2023',
    width: 1600,
    height: 900,
    span: 'wide',
  },
  {
    src: '/caspers1.jpg',
    alt: 'Projekt 3',
    title: 'Neubau München',
    date: '11.2023',
    width: 2000,
    height: 1200,
    span: 'default',
  },
];

export default function Impressionen() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[120px]">
      {/* Full width (2:3) */}
      <div className="grid grid-cols-1 gap-8 md:gap-12">
        <ImageCard {...images[0]} span="full" />
      </div>

      {/* Wide (2:2) + zwei Default (1:1) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
        <div className="md:col-span-2">
          <ImageCard {...images[1]} span="wide" />
        </div>
        <div className="md:col-span-1">
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            <ImageCard {...images[2]} span="default" />
            <ImageCard {...images[2]} span="default" />
          </div>
        </div>
      </div>

      {/* Landscape (3:1) */}
      <div className="mt-8 md:mt-12">
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          <ImageCard {...images[0]} span="landscape" />
        </div>
      </div>

      {/* Half Landscape (2:1) + Default (1:1) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
        <div className="md:col-span-2">
          <ImageCard {...images[0]} span="halflandscape" />
        </div>
        <div className="md:col-span-1">
          <ImageCard {...images[2]} span="default" />
        </div>
      </div>

      {/* Three Default (1:1) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
        <ImageCard {...images[2]} span="default" />
        <ImageCard {...images[2]} span="default" />
        <ImageCard {...images[2]} span="default" />
      </div>

      {/* Two Wide (2:2) nebeneinander */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12">
        <ImageCard {...images[1]} span="wide" />
        <ImageCard {...images[1]} span="wide" />
      </div>

      {/* Default (1:1) + Half Landscape (2:1) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
        <div className="md:col-span-1">
          <ImageCard {...images[2]} span="default" />
        </div>
        <div className="md:col-span-2">
          <ImageCard {...images[0]} span="halflandscape" />
        </div>
      </div>

      {/* Two Half Landscape (2:1) untereinander */}
      <div className="grid grid-cols-1 gap-8 md:gap-12 mt-8 md:mt-12">
        <ImageCard {...images[0]} span="halflandscape" />
        <ImageCard {...images[0]} span="halflandscape" />
      </div>

      {/* Default (1:1) + Wide (2:2) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
        <div className="md:col-span-1">
          <ImageCard {...images[2]} span="default" />
        </div>
        <div className="md:col-span-2">
          <ImageCard {...images[1]} span="wide" />
        </div>
      </div>
    </div>
  );
}
