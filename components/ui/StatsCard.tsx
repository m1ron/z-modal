// components/ui/StatsCard.tsx
import React from 'react';

interface StatsCardProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  variant?: 'default' | 'success' | 'danger' | 'muted';
}

export default function StatsCard({value, label, icon, variant = 'default'}: StatsCardProps) {
  const borderColors = {
    default: 'border-gray-200',
    success: 'border-green-500',
    danger: 'border-red-500',
    muted: 'border-gray-200',
  };

  return (
      <div
          className={`bg-card-bg rounded-xl border-l-4 ${borderColors[variant]} p-5 flex items-center gap-4 shadow-sm`}>
        <div className="text-gray-400">{icon}</div>
        <div>
          <div className="text-3xl font-bold text-foreground">{value}</div>
          <div className="text-sm text-muted">{label}</div>
        </div>
      </div>
  );
}
