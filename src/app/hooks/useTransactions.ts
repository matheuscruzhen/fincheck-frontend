import { useQuery } from '@tanstack/react-query';
import { transactionsService } from '../services/transactionsService';
import type { TransactionFilters } from '../services/transactionsService/getAll';

export function useTransactions(filters: TransactionFilters) {
  const { data, isFetching, isLoading, refetch } = useQuery({
    queryKey: ['transactions'],
    queryFn: () => transactionsService.getAll(filters),
  });

  return {
    transactions: data ?? [],
    isLoading: isFetching,
    isInitialLoading: isLoading,
    refetchTransactions: refetch,
  };
}
