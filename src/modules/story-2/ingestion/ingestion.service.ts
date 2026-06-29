import { Injectable } from '@nestjs/common';
import { IngestDocumentDto, IngestDocumentResponseDto } from './dto';

@Injectable()
export class IngestionService {
  async ingestDocument(data: IngestDocumentDto): Promise<IngestDocumentResponseDto> {
    // Simulate OCR/Parsing logic
    const accuracy = Math.random() * (1 - 0.8) + 0.8;
    
    return {
      id: Math.random().toString(36).substring(7),
      accuracyScore: parseFloat(accuracy.toFixed(2)),
      status: 'success',
    };
  }
}
