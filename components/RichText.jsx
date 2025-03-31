'use client';

import { RichText as RichTextConverter, ParagraphJSXConverter } from '@payloadcms/richtext-lexical/react';
import { regularTextStyles } from '../components/RegularText';

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

const unorderedListStyles = '';

export function RichText(props) {
  return (
    <RichTextConverter
      {...props}
      converters={jsxConverters}
      className={`${regularTextStyles} [&>ul]:list-disc [&>ul]:pl-5`}
    />
  );
}
