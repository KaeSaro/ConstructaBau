export function Subtitle({ children, withDot, withLeadingSlash }) {
  return (
    <h2 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[42px] leading-[1.08] font-jazmin font-light uppercase tracking-wide text-foreground text-left mb-5 flex items-center">
      {withLeadingSlash && (
        <span className="text-accent text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[30px] mr-2 shrink-0">
          /
        </span>
      )}
      {children}
      {withDot && <span className="text-accent -ml-[0.75px] sm:-ml-0.5 md:-ml-0.5">.</span>}
    </h2>
  );
}
