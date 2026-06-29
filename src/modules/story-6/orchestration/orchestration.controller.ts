import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { OrchestrationService } from './orchestration.service';
import { WorkflowStatusResponse } from './dto/workflow-status.dto';

@ApiTags('Orchestration')
@Controller('workflows')
export class OrchestrationController {
  constructor(private readonly orchestrationService: OrchestrationService) {}

  @Get()
  @ApiOkResponse({ type: [WorkflowStatusResponse] })
  async getWorkflowStatus(): Promise<WorkflowStatusResponse[]> {
    return await this.orchestrationService.getActiveWorkflows();
  }
}
