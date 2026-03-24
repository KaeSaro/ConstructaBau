export function Subtitle({ children, withDot, withLeadingSlash }) {
  return (
    <h2 className="mb-5 flex items-start text-left text-[24px] font-jazmin font-light uppercase leading-[1.08] tracking-wide text-foreground sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[42px]">
      {withLeadingSlash && (
        <span className="mr-2 shrink-0 pt-[0.12em] text-accent text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[30px]">
          /
        </span>
      )}
      <span className="min-w-0 break-words">
        {children}
        {withDot && <span className="text-accent -ml-[0.75px] sm:-ml-0.5 md:-ml-0.5">.</span>}
      </span>
    </h2>
  );
}
