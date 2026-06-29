import { ApiProperty } from '@nestjs/swagger';

export class WorkflowStatusDto {
  @ApiProperty({ description: 'The unique identifier of the workflow' })
  id: string;

  @ApiProperty({ description: 'The name of the workflow' })
  name: string;

  @ApiProperty({ description: 'Current status of the workflow', example: 'RUNNING' })
  status: 'RUNNING' | 'PENDING' | 'FAILED' | 'COMPLETED';

  @ApiProperty({ description: 'Provider used (Claude or GPT-4o)' })
  provider: 'Claude' | 'GPT-4o';
}
