import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { MONTHS } from '../../../../../app/config/constants';
import { TransactionsIcon } from '../../../../components/icons/TransactionsIcon';
import { FilterIcon } from '../../../../components/icons/FilterIcon';
import { CategoryIcon } from '../../../../components/icons/categories/CategoryIcon';
import { SliderOption } from './SlideOption';
import { SliderNavigation } from './SliderNavigation';
import { cn } from '../../../../../app/utils/cn';
import { useTransactions } from './useTransactions';

export function Transactions() {
  const { areValuesVisible } = useTransactions();

  return (
    <div className='flex flex-col bg-gray-100 p-10 rounded-2xl w-full h-full'>
      <header>
        <div className='flex justify-between items-center'>
          <button className='flex items-center gap-2'>
            <TransactionsIcon />
            <span className='text-shadow-gray-800 font-medium text-sm tracking-[-0.5]'>
              Transações
            </span>
            <ChevronDownIcon className='text-gray-900' />
          </button>
          <button>
            <FilterIcon />
          </button>
        </div>
        <div className='relative mt-6'>
          <Swiper slidesPerView={3} centeredSlides>
            <SliderNavigation />
            {MONTHS.map((month, index) => (
              <SwiperSlide key={month}>
                {({ isActive }) => (
                  <SliderOption
                    month={month}
                    index={index}
                    isActive={isActive}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>

      <div className='flex-1 space-y-2 mt-4 overflow-auto'>
        <div className='flex justify-between items-center gap-4 bg-white p-4 rounded-2xl'>
          <div className='flex flex-1 items-center gap-3'>
            <CategoryIcon type='income' />
            <div>
              <strong className='block font-bold tracking-[-0.5px]'>
                Almoço
              </strong>
              <span className='text-gray-600 text-sm'>04/06/2025</span>
            </div>
          </div>
          <span
            className={cn(
              'font-medium text-green-800 tracking-[-0.5px]',
              !areValuesVisible && 'blur-sm'
            )}>
            + {formatCurrency(1000)}
          </span>
        </div>
        <div className='flex justify-between items-center gap-4 bg-white p-4 rounded-2xl'>
          <div className='flex flex-1 items-center gap-3'>
            <CategoryIcon type='expense' />
            <div>
              <strong className='block font-bold tracking-[-0.5px]'>
                Almoço
              </strong>
              <span className='text-gray-600 text-sm'>04/06/2025</span>
            </div>
          </div>
          <span
            className={cn(
              'font-medium text-red-800 tracking-[-0.5px]',
              !areValuesVisible && 'blur-sm'
            )}>
            - {formatCurrency(1000)}
          </span>
        </div>
      </div>
    </div>
  );
}
