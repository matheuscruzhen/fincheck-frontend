import { useState } from 'react';
import { useWindowWidth } from '../../../../../app/hooks/useWindowWitdth';

export function useAccountController() {
  const windowWidth = useWindowWidth();

  const [sliderState, setSliderState] = useState({
    isBeginning: false,
    isEnd: false,
  });

  return { sliderState, setSliderState, windowWidth };
}
