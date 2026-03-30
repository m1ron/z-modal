'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Icons from '../ui/Icons';

import { navigation } from './Navigation.data';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="flex-1 py-4">
      {navigation.map((section, idx) => (
        <div key={idx} className="mb-6">
          {section.title && (
            <p className="px-2.5 mb-1 text-[11px] leading-3.5 text-gray-medium cursor-default">{section.title}</p>
          )}
          <menu>
            {section.items.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2.5 px-2.5 py-2 rounded-md text-[13px] leading-4 transition-colors ${isActive ? 'bg-gray-mid text-white font-semibold' : 'text-grayish font-medium hover:bg-white/5'}`}
                  >
                    <Icons icon={item.icon} className={isActive ? 'opacity-100' : 'opacity-80'}/>
                    {item.name}
                    {item.badge && (<span className={`ml-auto h-4 flex items-center text-[11px] leading-3.5 px-1.75 pt-px font-semibold rounded-full ${isActive ? 'bg-white/15 text-white' : 'bg-[#27272a] text-[#8f8fa4]'}`}>{item.badge}</span>)}
                  </Link>
                </li>
              );
            })}
          </menu>
        </div>
      ))}
    </div>
  );
}
