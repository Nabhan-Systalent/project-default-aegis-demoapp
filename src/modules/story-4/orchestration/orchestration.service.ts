import { Injectable } from '@nestjs/common';
import { WorkflowStatusDto } from './dto/workflow-status.dto';

@Injectable()
export class OrchestrationService {
  private activeWorkflows: WorkflowStatusDto[] = [
    { id: 'wf-1', name: 'Analysis-Bot', status: 'RUNNING', provider: 'GPT-4o' },
    { id: 'wf-2', name: 'Summary-Engine', status: 'PENDING', provider: 'Claude' },
  ];

  async getActiveWorkflows(): Promise<WorkflowStatusDto[]> {
    // In a real scenario, this would query a database or cache
    return this.activeWorkflows;
  }
}
