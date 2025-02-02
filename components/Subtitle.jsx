export function Subtitle({ children, withDot, withLeadingSlash }) {
  return (
    <h2 className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left mb-4 flex items-center">
      {withLeadingSlash && (
        <span className="text-[#D0312D] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] mr-2">/</span>
      )}
      {children}
      {withDot && <span className="text-[#D0312D] -ml-[0.75px] sm:-ml-0.5 md:-ml-0.5">.</span>}
    </h2>
  );
}
