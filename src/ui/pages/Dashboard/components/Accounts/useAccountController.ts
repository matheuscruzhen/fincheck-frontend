import { useState } from 'react';
import { useWindowWidth } from '../../../../../app/hooks/useWindowWitdth';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useAccountController() {
  const windowWidth = useWindowWidth();

  const { areValuesVisible, toggleValuesVisibility, openNewAccountModal } =
    useDashboard();

  const [sliderState, setSliderState] = useState({
    isBeginning: false,
    isEnd: false,
  });

  return {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isInitialLoading: false,
    isLoading: false,
    accounts: [],
    openNewAccountModal,
  };
}
