import React from 'react';

interface HeaderProps {
  title: string;
}

export default function Header({title}: HeaderProps) {
  return (
    <header className="px-8 py-4.5 lg:fixed lg:top-0 lg:right-0 lg:left-55 border-b border-gray flex items-center justify-between bg-white">
        <h2 className="text-[21.28px] font-semibold leading-normal text-darkest">{title}</h2>

        {/*
        <div className="flex items-center gap-4">
          <div className="relative">
            <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-64 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full"/>
            <span className="text-sm font-medium text-green-600">Connected</span>
          </div>
        </div>
        */}

      </header>
  );
}
