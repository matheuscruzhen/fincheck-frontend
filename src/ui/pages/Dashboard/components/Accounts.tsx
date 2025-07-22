import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { EyeIcon } from '../../../components/icons/EyeIcon';
import { AccountCard } from './AccountCard';

import 'swiper/swiper-bundle.css';
import { AccountsSliderNavigation } from './AccountsSliderNavigation';

export function Accounts() {
  return (
    <div className='bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col'>
      <div>
        <span className='tracking-[-0.5px] text-white block'>Saldo Total</span>
        <div className='flex items-center'>
          <strong className='text-2xl tracking-[-1px] text-white'>
            R$ 100,00
          </strong>
          <button className='w-8 h-8 flex items-center justify-center'>
            <EyeIcon open />
          </button>
        </div>
      </div>

      <div className='flex-1 flex flex-col justify-end'>
        <div>
          <Swiper spaceBetween={16} slidesPerView={2.1}>
            <div
              slot='container-start'
              className='flex items-center justify-between'>
              <strong className='text-white tracking-[-1px] text-lg '>
                Minhas Contas
              </strong>
              <AccountsSliderNavigation />
            </div>
            <div className='mt-4'>
              <SwiperSlide>
                <AccountCard
                  balance={123}
                  color='#7950f2'
                  name='Nubank'
                  type='CASH'
                />
              </SwiperSlide>
              <SwiperSlide>
                <AccountCard
                  balance={145}
                  color='#f59f00'
                  name='Inter'
                  type='CASH'
                />
              </SwiperSlide>
              <SwiperSlide>
                <AccountCard
                  balance={123}
                  color='#888'
                  name='C6 Bank'
                  type='CASH'
                />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
