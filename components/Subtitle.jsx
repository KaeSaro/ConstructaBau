export function Subtitle ({children, withDot}) {
    return (<h1 className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left mb-4">
    {children}{withDot? <span className="text-[#D0312D] -ml-[0.75px] sm:-ml-0.5 md:-ml-0.5 ]">.</span> : null}
  </h1>)
}