export const regularTextStyles =
  "text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-left";

export function RegularText({ children, withQuotes, withDot }) {
  return (
    <p className={regularTextStyles}>
      {withQuotes ? <>&quot;</> : null}

      {children}

      {withDot ? (
        <span
          className={
            withQuotes
              ? `text-[#D0312D] -ml-1 sm:-ml-1 md:-ml-1 lg:-ml-2 -mr-1 sm:-mr-1 md:-mr-2 lg:-mr-3`
              : `text-[#D0312D] -ml-1 sm:-ml-1 md:-ml-1 lg:-ml-1.5`
          }
        >
          .
        </span>
      ) : null}

      {withQuotes ? <>&quot;</> : null}
    </p>
  );
}
