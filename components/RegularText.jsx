export function RegularText ({children, withQuotes, withDot}){
    
    return (<p className="text-[18px] sm:text-[24px] md:text-[32px] lg:text-[48px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-left">
        {withQuotes ? <>&quot;</> : null}

        {children}


        {withDot ? <span className = {withQuotes ? `text-[#e36800] -ml-1 sm:-ml-1 md:-ml-2 lg:-ml-3 -mr-1 sm:-mr-1 md:-mr-2 lg:-mr-3` : `text-[#e36800] -ml-1 sm:-ml-1 md:-ml-2 lg:-ml-3`}>.</span> : null}

        {withQuotes ? <>&quot;</> : null}
      </p>)

}