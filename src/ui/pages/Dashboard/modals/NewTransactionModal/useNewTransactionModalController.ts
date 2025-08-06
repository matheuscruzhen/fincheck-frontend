import { useDashboard } from '../../components/DashboardContext/useDashboard';

export function useNewTransactionModalController() {
  const {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
  } = useDashboard();

  return {
    newTransactionType,
    isNewTransactionModalOpen,
    closeNewTransactionModal,
  };
}
