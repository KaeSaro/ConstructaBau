'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export function ImageCard({ src, alt, title, date, description, width, height, span = "default" }) {
  const [isFirefox, setIsFirefox] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsFirefox(window.navigator.userAgent.toLowerCase().includes('firefox'));
    }
  }, []);

  const config = {
    default: {
      gridClass: "", 
      titleClass: "text-[12px]",
      aspectRatio: "aspect-square",
      heightClass: "h-full",
    },
    wide: {
      gridClass: "md:col-span-2",
      titleClass: "text-[12px] md:text-[16px] lg:text-[18px]",
      aspectRatio: "aspect-square",
      heightClass: "h-full",
    },
    full: {
      gridClass: "md:col-span-3",
      titleClass: "text-[12px] md:text-[16px] lg:text-[18px]",
      aspectRatio: "aspect-[2/3]",
      heightClass: "h-full",
    },
    landscape: {
      gridClass: "",
      titleClass: "text-[12px] md:text-[16px] lg:text-[18px]",
      aspectRatio: "aspect-[3/1]",
      heightClass: "h-full",
    },
    halflandscape: {
      gridClass: "md:col-span-2",
      titleClass: "text-[12px] md:text-[16px] lg:text-[18px]",
      aspectRatio: "aspect-[2/1]",
      heightClass: "h-full",
    }
  }[span];

  return (
    <div className={`flex flex-col ${config.gridClass} ${config.heightClass}`}>
      <div className="h-[30px] md:h-[40px] flex items-center justify-between px-1 mb-3">
        <h3 className={`font-['IBM_Plex_Mono',_sans-serif] ${config.titleClass} leading-none font-normal text-[#1a1a1a]`}>
          <span className="text-[#D0312D]">/</span> {title}
        </h3>
        <span className={`font-['IBM_Plex_Mono',_sans-serif] ${config.titleClass} leading-none font-normal text-right`}>
          ({date})
        </span>
      </div>
      <div 
        className={`relative flex-1 overflow-hidden rounded-2xl ${config.aspectRatio} group`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Description Overlay */}
        {description && (
          <div className={`flex items-center justify-center`}>
            <p className={`font-['IBM_Plex_Mono',_sans-serif] ${config.titleClass} text-[#1a1a1a] text-center px-10 `}>
              {description}
            </p>
          </div>
        )}
        
        {isFirefox ? (
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            className="w-full h-full object-cover transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-105"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            quality={100}
            className="w-full h-full object-cover transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-105"
          />
        )}
      </div>
    </div>
  );
}