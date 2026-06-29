import { Injectable } from '@nestjs/common';

export interface WorkflowStatus {
  id: string;
  name: string;
  status: 'active' | 'pending' | 'completed';
  lastUpdated: Date;
}

@Injectable()
export class OrchestrationService {
  private workflows: WorkflowStatus[] = [
    { id: 'wf-1', name: 'Jira Sync', status: 'active', lastUpdated: new Date() },
    { id: 'wf-2', name: 'User Provisioning', status: 'active', lastUpdated: new Date() },
  ];

  async getActiveWorkflows(): Promise<WorkflowStatus[]> {
    // In a real application, this would fetch from a DB or workflow engine
    return this.workflows.filter((w) => w.status === 'active');
  }
}
