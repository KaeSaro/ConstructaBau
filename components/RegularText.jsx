export const regularTextStyles =
  'text-[18px] sm:text-[19px] md:text-[22px] lg:text-[26px] xl:text-[28px] leading-snug font-jazmin font-light uppercase text-left';

export function RegularText({ children, withQuotes, withDot }) {
  return (
    <p className={regularTextStyles}>
      {withQuotes ? <>&quot;</> : null}

      {children}

      {withDot ? (
        <span
          className={
            withQuotes
              ? `text-accent -ml-1 sm:-ml-1 md:-ml-1 lg:-ml-2 -mr-1 sm:-mr-1 md:-mr-2 lg:-mr-3`
              : `text-accent -ml-1 sm:-ml-1 md:-ml-1 lg:-ml-1.5`
          }
        >
          .
        </span>
      ) : null}

      {withQuotes ? <>&quot;</> : null}
    </p>
  );
}
