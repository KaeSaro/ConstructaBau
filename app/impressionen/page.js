import { Header } from '@/components/Header';
import Image from 'next/image';

export default function Impressionen() {
  return (
    <div className="flex flex-col space-y-32">
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
        <Image
          src="/pasi.JPG" // Hier später den echten Bildpfad einsetzen
          alt="Impressionen"
          width={1920}
          height={1080}
          quality={100}
          className="w-full h-full object-cover transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-105"
        />
      </div>
    </div>
  );
}
