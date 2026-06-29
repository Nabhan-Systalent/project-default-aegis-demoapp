'use client';

import React from 'react';
import { CostMetricsProps } from './CostMetrics.types';

export const CostMetrics: React.FC<CostMetricsProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div className="p-8 text-center">No cost data available.</div>;
  }

  return (
    <div className="p-6 bg-[var(--color-surface)] rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Project Spend</h2>
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.project} className="flex items-center gap-4">
            <div className="w-32 font-medium truncate">{item.project}</div>
            <div className="flex-1 h-4 bg-[var(--color-border)] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[var(--color-primary)]"
                style={{ width: `${Math.min(100, (item.cost / 100) * 100)}%` }}
              />
            </div>
            <div className="w-20 text-right font-mono">${item.cost.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
