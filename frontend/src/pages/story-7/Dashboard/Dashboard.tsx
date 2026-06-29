'use client';

import React from 'react';
import { DashboardProps } from './Dashboard.types';

export const Dashboard: React.FC<DashboardProps> = ({ workflows, isLoading, error }) => {
  if (isLoading) {
    return <div className="p-8 text-center text-[var(--color-text-muted)]">Loading orchestrator status...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-[var(--color-error)]">Error loading workflows: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {workflows.length === 0 ? (
        <div className="col-span-full p-8 border border-dashed rounded-lg text-center">
          No active agent workflows found.
        </div>
      ) : (
        workflows.map((wf) => (
          <div key={wf.id} className="p-4 border rounded-lg shadow-sm bg-[var(--color-surface)]">
            <h3 className="font-semibold text-lg">{wf.name}</h3>
            <div className={`mt-2 text-sm font-medium ${
              wf.status === 'active' ? 'text-[var(--color-success)]' : 
              wf.status === 'error' ? 'text-[var(--color-error)]' : 'text-[var(--color-text-muted)]'
            }`}>
              Status: {wf.status.toUpperCase()}
            </div>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">Last active: {wf.lastActive}</p>
          </div>
        ))
      )}
    </div>
  );
};
