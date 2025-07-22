import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

interface AccountsSliderNavigationProps {
  isBeginning: boolean;
  isEnd: boolean;
}

export function AccountsSliderNavigation({
  isBeginning,
  isEnd,
}: AccountsSliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <div className='flex items-center'>
      <button
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
        className='p-3 disabled:opacity-40 rounded-full enabled:hover:bg-black/10 transition-colors'>
        <ChevronLeftIcon className='text-white w-6 h-6 transition-colors' />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
        className='p-3 disabled:opacity-40 rounded-full enabled:hover:bg-black/10 transition-colors'>
        <ChevronRightIcon className='text-white w-6 h-6' />
      </button>
    </div>
  );
}
