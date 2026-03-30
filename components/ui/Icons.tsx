import React from 'react';
import type { ReactElement } from 'react';

interface IconsProps {
  icon: string;
  className?: string;
  fill?: string;
  iconClass?: string;
  pathClassName?: string;
  onClick?: () => void;
}

const Icons: React.FC<IconsProps> = ({ icon, className, pathClassName }) => {
  const iconList = {
    dashboard: (<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17"><path stroke="#fff" strokeWidth={2} d="M6.375 2.125H2.833a.71.71 0 0 0-.708.708v3.542c0 .391.317.708.708.708h3.542a.71.71 0 0 0 .708-.708V2.833a.71.71 0 0 0-.708-.708ZM14.167 2.125h-3.542a.71.71 0 0 0-.708.708v3.542c0 .391.317.708.708.708h3.542a.71.71 0 0 0 .708-.708V2.833a.71.71 0 0 0-.708-.708ZM6.375 9.917H2.833a.71.71 0 0 0-.708.708v3.541c0 .392.317.709.708.709h3.542a.71.71 0 0 0 .708-.709v-3.541a.71.71 0 0 0-.708-.709ZM14.167 9.917h-3.542a.71.71 0 0 0-.708.708v3.541c0 .392.317.709.708.709h3.542a.71.71 0 0 0 .708-.709v-3.541a.71.71 0 0 0-.708-.709Z" /></svg>),
    agents: (<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17"><g stroke="#fff" strokeWidth={2} clipPath="url(#a)"><path d="M8.5 10.625a2.125 2.125 0 1 0 0-4.25 2.125 2.125 0 0 0 0 4.25ZM8.5.708v1.417m0 12.75v1.417M2.99 2.989l1.005 1.006m9.01 9.01 1.006 1.006M.708 8.501h1.417m12.75 0h1.417M2.989 14.01l1.006-1.006m9.01-9.01 1.006-1.006" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h17v17H0z" /></clipPath></defs></svg>),
    models: (<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17"><path stroke="#fff" strokeWidth={2} d="M14.875 11.333V5.667a1.42 1.42 0 0 0-.708-1.226L9.208 1.608a1.42 1.42 0 0 0-1.416 0L2.833 4.44a1.42 1.42 0 0 0-.708 1.226v5.666a1.42 1.42 0 0 0 .708 1.226l4.959 2.833a1.42 1.42 0 0 0 1.416 0l4.959-2.833a1.42 1.42 0 0 0 .708-1.226Z" /></svg>),
    lifecycles: (<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17"><g clipPath="url(#a)"><path stroke="#fff" strokeWidth={2} d="M1.417 12.042 8.5 15.583l7.083-3.542M1.417 8.5 8.5 12.04 15.583 8.5M8.5 1.417 1.417 4.958 8.5 8.5l7.083-3.542z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h17v17H0z" /></clipPath></defs></svg>),
    deployments: (<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17"><g clipPath="url(#a)"><path stroke="#fff" strokeWidth={2} d="M15.583 8.5H12.75l-2.125 6.375-4.25-12.75L4.25 8.5H1.417" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h17v17H0z" /></clipPath></defs></svg>),
    auditLog: (<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17"><path stroke="#fff" strokeWidth={2} d="M9.917 1.417H4.25a1.417 1.417 0 0 0-1.417 1.416v11.334a1.416 1.416 0 0 0 1.417 1.416h8.5a1.416 1.416 0 0 0 1.417-1.417v-8.5z" /><path stroke="#fff" strokeWidth={2} d="M9.917 1.417v4.25h4.25" /></svg>),
    settings: (<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17"><g stroke="#fff" strokeWidth={2} clipPath="url(#a)"><path d="M8.5 10.625a2.125 2.125 0 1 0 0-4.25 2.125 2.125 0 0 0 0 4.25Z" /><path d="M13.742 10.625a1.17 1.17 0 0 0 .233 1.29l.043.042a1.417 1.417 0 1 1-2.005 2.004l-.042-.042a1.17 1.17 0 0 0-1.29-.234 1.17 1.17 0 0 0-.708 1.07v.12a1.417 1.417 0 0 1-2.833 0v-.064a1.17 1.17 0 0 0-.765-1.07 1.17 1.17 0 0 0-1.29.235l-.042.042a1.417 1.417 0 0 1-2.004-2.005l.042-.042a1.17 1.17 0 0 0 .234-1.346 1.17 1.17 0 0 0-1.07-.708h-.12a1.417 1.417 0 0 1 0-2.833h.064a1.17 1.17 0 0 0 1.07-.709 1.17 1.17 0 0 0-.234-1.289l-.043-.043A1.418 1.418 0 0 1 4.987 3.04l.042.042a1.17 1.17 0 0 0 1.346.234 1.17 1.17 0 0 0 .708-1.07v-.12a1.417 1.417 0 0 1 2.834 0v.064a1.17 1.17 0 0 0 .708 1.07 1.17 1.17 0 0 0 1.29-.234l.042-.043a1.417 1.417 0 1 1 2.004 2.005l-.042.042a1.17 1.17 0 0 0-.177 1.346 1.17 1.17 0 0 0 1.07.708h.063a1.416 1.416 0 1 1 0 2.834h-.064a1.17 1.17 0 0 0-1.07.708Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h17v17H0z" /></clipPath></defs></svg>),
    bolt: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>),
    warning: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>),
    trash: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3M4 7h16" /></svg>),
  } as const;

  const addClassName = (iconElement: ReactElement<SVGElement>): ReactElement<SVGElement> => {
    return React.cloneElement(iconElement, {
      className: `${className || ''} ${pathClassName || ''}`.trim(),
    });
  };

  const iconsNew = Object.fromEntries(
    Object.entries(iconList).map(([key, iconElement]) => [key, addClassName(iconElement)])
  );

  return iconsNew[icon] || null;
};

export default Icons;