export function ImageCard({ src, alt, title, date, width, height, span = "default" }) {
  const config = {
    default: {
      gridClass: "", 
      titleClass: "text-[12px]",
      aspectRatio: "aspect-square", // 1:1
      heightClass: "h-full", 
    },
    wide: {
      gridClass: "md:col-span-2",
      titleClass: "text-[12px] md:text-[16px] lg:text-[18px]",
      aspectRatio: "aspect-square", // 2:2
      heightClass: "h-full",
    },
    full: {
      gridClass: "md:col-span-3",
      titleClass: "text-[12px] md:text-[16px] lg:text-[18px]",
      aspectRatio: "aspect-[2/3]", // 2:3
      heightClass: "h-full",
    },
    landscape: {
      gridClass: "",
      titleClass: "text-[12px] md:text-[16px] lg:text-[18px]",
      aspectRatio: "aspect-[3/1]", // 1:3
      heightClass: "h-full",
    },
    halflandscape: {
      gridClass: "md:col-span-2",
      titleClass: "text-[12px] md:text-[16px] lg:text-[18px]",
      aspectRatio: "aspect-[2/1]", // 1:2
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
      <div className={`relative flex-1 overflow-hidden rounded-2xl ${config.aspectRatio}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-105"
        />
      </div>
    </div>
  );
}