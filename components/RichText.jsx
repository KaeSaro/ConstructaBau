'use client';

import { RichText as RichTextConverter, ParagraphJSXConverter } from '@payloadcms/richtext-lexical/react';
import { RegularText } from '../components/RegularText';

// Create custom JSX converters with the paragraph override
const jsxConverters = ({ defaultConverters }) => {
  return {
    ...defaultConverters,
    // Override the default paragraph converter
    // paragraph: ({ children, node }) => {
    //   console.log(node, children);
    //   return <RegularText node={node}>{children}</RegularText>;
    // },
  };
};

export function RichText(props) {
  return (
    <RichTextConverter
      {...props}
      converters={jsxConverters}
      className="text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] leading-tight font-['IBM_Plex_Mono',_sans-serif] uppercase text-left"
    />
  );
}
