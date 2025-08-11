import { useMemo, useState } from 'react';
import { useWindowWidth } from '../../../../../app/hooks/useWindowWitdth';
import { useDashboard } from '../DashboardContext/useDashboard';
import { useQuery } from '@tanstack/react-query';
import { bankAccountsService } from '../../../../../app/services/bankAccountService';

export function useAccountController() {
  const windowWidth = useWindowWidth();

  const { areValuesVisible, toggleValuesVisibility, openNewAccountModal } =
    useDashboard();

  const [sliderState, setSliderState] = useState({
    isBeginning: false,
    isEnd: false,
  });

  const { data, isFetching: isLoading } = useQuery({
    queryKey: ['bankAccounts'],
    queryFn: bankAccountsService.getAll,
  });

  const currentBalance = useMemo(() => {
    if (!data) return 0;

    return data.reduce((total, account) => total + account.currentBalance, 0);
  }, [data]);

  return {
    isLoading,
    sliderState,
    windowWidth,
    currentBalance,
    areValuesVisible,
    isInitialLoading: false,
    accounts: data ?? [],
    setSliderState,
    openNewAccountModal,
    toggleValuesVisibility,
  };
}
