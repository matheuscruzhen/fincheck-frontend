import { useDashboard } from '../DashboardContext/useDashboard';

export function useTransactions() {
  const { areValuesVisible } = useDashboard();

  return {
    areValuesVisible,
    isInitialLoading: false,
    isLoading: false,
    transactions: [],
  };
}
