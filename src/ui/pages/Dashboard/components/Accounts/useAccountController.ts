import { useState } from 'react';
import { useWindowWidth } from '../../../../../app/hooks/useWindowWitdth';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useAccountController() {
  const windowWidth = useWindowWidth();

  const { areValuesVisible, toggleValuesVisibility } = useDashboard();

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
    isLoading: false,
    accounts: [],
  };
}
