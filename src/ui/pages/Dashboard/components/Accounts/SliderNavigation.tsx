import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

interface SliderNavigationProps {
  isBeginning: boolean;
  isEnd: boolean;
}

export function SliderNavigation({
  isBeginning,
  isEnd,
}: SliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <div className='flex items-center'>
      <button
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
        className='enabled:hover:bg-black/10 disabled:opacity-40 p-3 rounded-full transition-colors'>
        <ChevronLeftIcon className='w-6 h-6 text-white transition-colors' />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
        className='enabled:hover:bg-black/10 disabled:opacity-40 p-3 rounded-full transition-colors'>
        <ChevronRightIcon className='w-6 h-6 text-white' />
      </button>
    </div>
  );
}
