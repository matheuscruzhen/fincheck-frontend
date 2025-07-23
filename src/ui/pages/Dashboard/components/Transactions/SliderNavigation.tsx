import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

export function SliderNavigation() {
  const swiper = useSwiper();
  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className='top-1/2 left-0 z-10 absolute flex justify-center items-center bg-gradient-to-r from-gray-100 to-transparent w-12 h-12 -translate-y-1/2'>
        <ChevronLeftIcon className='w-6 h-6 text-gray-800' />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className='top-1/2 right-0 z-10 absolute flex justify-center items-center bg-gradient-to-l from-gray-100 to-transparent w-12 h-12 -translate-y-1/2'>
        <ChevronRightIcon className='w-6 h-6 text-gray-800' />
      </button>
    </>
  );
}
