import { useMemo, useState } from 'react';
import { useWindowWidth } from '../../../../../app/hooks/useWindowWitdth';
import { useDashboard } from '../DashboardContext/useDashboard';
import { useBankAccounts } from '../../../../../app/hooks/useBankAccounts';
import { useCategories } from '../../../../../app/hooks/useCategories';

export function useAccountController() {
  const windowWidth = useWindowWidth();

  const { areValuesVisible, toggleValuesVisibility, openNewAccountModal } =
    useDashboard();

  const [sliderState, setSliderState] = useState({
    isBeginning: false,
    isEnd: false,
  });

  const { accounts, isLoadingAccounts } = useBankAccounts();

  const currentBalance = useMemo(() => {
    return accounts.reduce(
      (total, account) => total + account.currentBalance,
      0
    );
  }, [accounts]);

  return {
    sliderState,
    windowWidth,
    currentBalance,
    areValuesVisible,
    isLoadingAccounts,
    isInitialLoading: false,
    accounts: accounts ?? [],
    setSliderState,
    openNewAccountModal,
    toggleValuesVisibility,
  };
}
