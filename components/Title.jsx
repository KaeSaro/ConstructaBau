export function Title ({children, withDot}) {
    return (<h1 className="text-[36px] sm:text-[46.8px] md:text-[56px] lg:text-[80px] xl:text-[112px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
    {children}{withDot? <span className="text-[#D0312D] -ml-[0.75px] sm:-ml-0.5 md:-ml-0.5 lg:ml-[2px]">.</span> : null}
  </h1>)
}