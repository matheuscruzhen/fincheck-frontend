import { useState } from 'react';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useTransactions() {
  const { areValuesVisible } = useDashboard();

  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

  function handleOpenFiltersModal() {
    setIsFiltersModalOpen(true);
  }
  function handleCloseFiltersModal() {
    setIsFiltersModalOpen(false);
  }

  return {
    areValuesVisible,
    isInitialLoading: false,
    isLoading: false,
    transactions: [],
    isFiltersModalOpen,
    handleCloseFiltersModal,
    handleOpenFiltersModal,
  };
}
