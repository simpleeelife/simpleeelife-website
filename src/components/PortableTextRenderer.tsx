'use client';

import { PortableText } from '@portabletext/react';

export default function PortableTextRenderer({ value }: { value: any }) {
  return (
    <PortableText 
      value={value} 
      components={{
        block: {
          normal: ({children}) => <p>{children}</p>,
          h2: ({children}) => <h2>{children}</h2>,
          h3: ({children}) => <h3>{children}</h3>
        },
        marks: {
          link: ({children, value}) => (
            <a href={value.href} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          )
        }
      }} 
    />
  );
}