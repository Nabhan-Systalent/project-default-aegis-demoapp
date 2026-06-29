import { ApiProperty } from '@nestjs/swagger';

export class WorkflowStatusResponse {
  @ApiProperty({ example: 'wf-1' })
  id: string;

  @ApiProperty({ example: 'Jira Sync' })
  name: string;

  @ApiProperty({ example: 'active' })
  status: 'active' | 'pending' | 'completed';

  @ApiProperty({ example: '2026-06-28T09:00:00Z' })
  lastUpdated: Date;
}
