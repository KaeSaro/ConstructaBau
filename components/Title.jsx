export function Title ({children, withDot}) {
    return (<h1 className="text-[33px] sm:text-[33px] md:text-[40px] lg:text-[60px] xl:text-[80px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
    {children}{withDot? <span className="text-[#D0312D] -ml-[0.75px] sm:-ml-0.5 md:-ml-0.5 lg:ml-[2px]">.</span> : null}
  </h1>)
}