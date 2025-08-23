import { useEffect, useState } from 'react';
import { useDashboard } from '../DashboardContext/useDashboard';
import { useTransactions } from '../../../../../app/hooks/useTransactions';
import type { TransactionFilters } from '../../../../../app/services/transactionsService/getAll';

export function useTransactionsController() {
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  const [filters, setFilters] = useState<TransactionFilters>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const { areValuesVisible } = useDashboard();
  const { transactions, isLoading, isInitialLoading, refetchTransactions } =
    useTransactions(filters);

  function handleOpenFiltersModal() {
    setIsFiltersModalOpen(true);
  }
  function handleCloseFiltersModal() {
    setIsFiltersModalOpen(false);
  }

  function handleChangeFilters<TFilter extends keyof TransactionFilters>(
    filter: TFilter
  ) {
    return (value: TransactionFilters[TFilter]) => {
      if (value === filters[filter]) return;
      setFilters((prevState) => ({ ...prevState, [filter]: value }));
    };
  }

  useEffect(() => {
    refetchTransactions();
  }, [filters, refetchTransactions]);

  return {
    areValuesVisible,
    isInitialLoading,
    isLoading,
    transactions,
    filters,
    isFiltersModalOpen,
    handleCloseFiltersModal,
    handleOpenFiltersModal,
    handleChangeFilters,
  };
}
