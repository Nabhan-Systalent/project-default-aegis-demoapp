'use client';

import React from 'react';
import { CostMetricsProps } from './CostMetrics.types';

export const CostMetrics = ({ data = [], isLoading = false, error = null }: CostMetricsProps) => {
  if (isLoading) return <div className="p-4">Loading analytics...</div>;
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;
  if (data.length === 0) return <div className="p-4 text-gray-500">No usage data available.</div>;

  return (
    <div className="bg-white p-6 rounded-xl border">
      <h2 className="text-xl font-bold mb-6">Spend per Project</h2>
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.projectName} className="grid grid-cols-3 items-center gap-4">
            <span className="font-medium">{item.projectName}</span>
            <div className="col-span-2 flex items-center gap-4">
              <div className="flex-1 bg-gray-100 h-4 rounded overflow-hidden">
                <div 
                  className="bg-indigo-500 h-full" 
                  style={{ width: `${Math.min(100, (item.spend / 100) * 100)}%` }} 
                />
              </div>
              <span className="text-sm font-mono w-20 text-right">${item.spend.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
