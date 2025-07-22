import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

export function AccountsSliderNavigation() {
  const swiper = useSwiper();

  return (
    <div className='flex items-center'>
      <button
        onClick={() => swiper.slidePrev()}
        className='p-3 disabled:opacity-40 rounded-full enabled:hover:bg-black/10 transition-colors'>
        <ChevronLeftIcon className='text-white w-6 h-6 transition-colors' />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className='p-3 disabled:opacity-40 rounded-full enabled:hover:bg-black/10 transition-colors'>
        <ChevronRightIcon className='text-white w-6 h-6' />
      </button>
    </div>
  );
}
