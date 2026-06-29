'use client';

import React, { useCallback } from 'react';
import { DocumentProcessorProps } from './DocumentProcessor.types';

export const DocumentProcessor: React.FC<DocumentProcessorProps> = ({ onUpload, isUploading }) => {
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files?.length) {
      onUpload(Array.from(e.dataTransfer.files));
    }
  }, [onUpload]);

  return (
    <div className="p-8 border-2 border-dashed rounded-xl flex flex-col items-center justify-center min-h-[300px]"
         onDragOver={(e) => e.preventDefault()}
         onDrop={handleDrop}>
      {isUploading ? (
        <div className="text-[var(--color-primary)] font-medium">Processing documents...</div>
      ) : (
        <div className="text-center">
          <p className="text-lg font-medium">Drop BRDs here</p>
          <p className="text-sm text-[var(--color-text-muted)]">or click to browse files</p>
        </div>
      )}
    </div>
  );
};
