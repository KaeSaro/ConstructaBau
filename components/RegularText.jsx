export function RegularText ({children, withQuotes, withDot}){
    
    return (<p className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-left">
        {withQuotes ? <>&quot;</> : null}

        {children}


        {withDot ? <span className = {withQuotes ? `text-[#D0312D] -ml-1 sm:-ml-1 md:-ml-1 lg:-ml-2 -mr-1 sm:-mr-1 md:-mr-2 lg:-mr-3` : `text-[#FF0000] -ml-1 sm:-ml-1 md:-ml-1 lg:-ml-2`}>.</span> : null}

        {withQuotes ? <>&quot;</> : null}
      </p>)

}