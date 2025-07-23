import { useDashboard } from '../DashboardContext/useDashboard';

export function useTransactions() {
  const { areValuesVisible } = useDashboard();

  return { areValuesVisible, isLoading: false };
}
