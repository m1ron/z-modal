import React from 'react';
import StatsCard from '@/components/ui/StatsCard';
import Icons from '@/components/ui/Icons';

type Variant = 'default' | 'success' | 'danger' | 'muted';

interface StatItem {
  value: number;
  label: string;
  icon: string;
  iconClass?: string;
  variant?: Variant;
}

interface StatsProps {
  items: StatItem[];
}

export default function Stats({ items }: StatsProps) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {items.map((item, idx) => (
        <StatsCard
          key={idx}
          value={item.value}
          label={item.label}
          variant={item.variant}
          icon={
            <Icons
              icon={item.icon}
              className={`w-6 h-6 ${item.iconClass || ''}`.trim()}
            />
          }
        />
      ))}
    </div>
  );
}