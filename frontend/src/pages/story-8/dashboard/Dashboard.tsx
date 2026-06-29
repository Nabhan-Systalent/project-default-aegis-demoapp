'use client';

import React from 'react';
import { DashboardProps } from './Dashboard.types';

export const Dashboard = ({ workflows = [], isLoading = false }: DashboardProps) => {
  if (isLoading) {
    return <div className="p-8 text-center text-gray-500">Loading orchestrator dashboard...</div>;
  }

  if (workflows.length === 0) {
    return <div className="p-8 text-center border border-dashed rounded-lg">No active workflows found.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {workflows.map((wf) => (
        <div key={wf.id} className="p-6 border rounded-xl shadow-sm bg-white">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-lg">{wf.name}</h3>
            <span className={`px-2 py-1 rounded-full text-xs ${
              wf.status === 'active' ? 'bg-green-100 text-green-800' : 
              wf.status === 'error' ? 'bg-red-100 text-red-800' : 'bg-gray-100'
            }`}>
              {wf.status}
            </span>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <p>Tasks: {wf.taskCount}</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${wf.health}%` }}
              />
            </div>
            <p className="text-xs">Health Score: {wf.health}%</p>
          </div>
        </div>
      ))}
    </div>
  );
};
