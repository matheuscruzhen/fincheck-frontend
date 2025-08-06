import { Swiper, SwiperSlide } from 'swiper/react';
import { EyeIcon } from '../../../../components/icons/EyeIcon';
import { AccountCard } from './AccountCard';
import { SliderNavigation } from './SliderNavigation';
import { useAccountController } from './useAccountController';
import { cn } from '../../../../../app/utils/cn';
import 'swiper/swiper-bundle.css';
import { Spinner } from '../../../../components/Spinner';
import { PlusIcon } from '@radix-ui/react-icons';

export function Accounts() {
  const {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading,
    isInitialLoading,
    accounts,
    openNewAccountModal,
  } = useAccountController();

  return (
    <div className='flex flex-col bg-teal-900 md:p-10 px-4 py-8 rounded-2xl w-full h-full'>
      {isInitialLoading && (
        <div className='flex justify-center items-center w-full h-full'>
          <Spinner className='fill-white w-10 h-10 text-teal-950/50' />
        </div>
      )}
      {!isInitialLoading && (
        <>
          <div>
            <span className='block text-white tracking-[-0.5px]'>
              Saldo Total
            </span>
            <div className='flex items-center'>
              <strong
                className={cn(
                  'text-white text-2xl tracking-[-1px]',
                  !areValuesVisible && 'blur-md'
                )}>
                R$ 1000,00
              </strong>
              <button
                onClick={toggleValuesVisibility}
                className='flex justify-center items-center w-8 h-8'>
                <EyeIcon open={areValuesVisible} />
              </button>
            </div>
          </div>

          <div className='flex flex-col flex-1 justify-end mt-10 md:mt-0'>
            {accounts.length === 0 && (
              <>
                <div slot='container-start'>
                  <strong className='text-white text-lg tracking-[-1px]'>
                    Minhas Contas
                  </strong>
                </div>
                <button
                  onClick={openNewAccountModal}
                  className='flex flex-col justify-center items-center gap-4 mt-4 border-2 border-teal-600 border-dashed rounded-2xl h-52 text-white'>
                  <div className='flex justify-center items-center border-2 border-white border-dashed rounded-full w-11 h-11'>
                    <PlusIcon className='w-6 h-6' />
                  </div>
                  <span className='block w-32 font-medium text-center tracking-[-0.5px]'>
                    Cadastre uma nova conta
                  </span>
                </button>
              </>
            )}
            {accounts.length > 0 && (
              <div>
                <Swiper
                  spaceBetween={16}
                  slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
                  onSlideChange={(swiper) => {
                    setSliderState({
                      isBeginning: swiper.isBeginning,
                      isEnd: swiper.isEnd,
                    });
                  }}>
                  <div
                    slot='container-start'
                    className='flex justify-between items-center'>
                    <strong className='text-white text-lg tracking-[-1px]'>
                      Minhas Contas
                    </strong>
                    <SliderNavigation
                      isBeginning={sliderState.isBeginning}
                      isEnd={sliderState.isEnd}
                    />
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
            )}
          </div>
        </>
      )}
    </div>
  );
}
