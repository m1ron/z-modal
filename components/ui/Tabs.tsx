'use client';

import React from 'react';

interface FilterTabsProps {
  tabs: string[];
  activeTab: string;
  className?: string;
}

export default function Tabs({ tabs, activeTab, className }: FilterTabsProps) {
  return (
    <div className={`flex gap-2 ${className || ''}`.trim()}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            activeTab === tab
              ? 'bg-primary text-white'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}