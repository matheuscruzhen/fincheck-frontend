import { useSwiper } from 'swiper/react';
import { cn } from '../../../../../app/utils/cn';

interface SliderOptionProps {
  isActive: boolean;
  month: string;
  index: number;
}

export function SliderOption({ isActive, month, index }: SliderOptionProps) {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideTo(index)}
      className={cn(
        'text-shadow-gray-800 rounded-full w-full h-12 font-medium text-sm tracking-[-0.5]',
        isActive && 'bg-white'
      )}>
      {month}
    </button>
  );
}
