export interface DashboardProps {
  workflows: Array<{
    id: string;
    name: string;
    status: 'active' | 'idle' | 'error';
    taskCount: number;
    health: number;
  }>;
  isLoading?: boolean;
}
