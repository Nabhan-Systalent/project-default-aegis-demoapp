import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class IngestDocumentDto {
  @ApiProperty({ description: 'The raw text or file content to process' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ description: 'The format of the document' })
  @IsString()
  @IsNotEmpty()
  format: 'pdf' | 'docx' | 'markdown';
}

export class IngestDocumentResponseDto {
  @ApiProperty({ description: 'The unique identifier for the ingested document' })
  id: string;

  @ApiProperty({ description: 'Accuracy score of the OCR/parsing process' })
  accuracyScore: number;

  @ApiProperty({ description: 'Status of the ingestion' })
  status: 'success' | 'failed';
}
