export interface CostMetricsProps {
  data: Array<{
    projectName: string;
    spend: number;
    tokens: number;
  }>;
  isLoading?: boolean;
  error?: string | null;
}
