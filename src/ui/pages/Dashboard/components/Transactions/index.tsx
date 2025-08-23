import { Swiper, SwiperSlide } from 'swiper/react';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { MONTHS } from '../../../../../app/config/constants';
import { FilterIcon } from '../../../../components/icons/FilterIcon';
import { CategoryIcon } from '../../../../components/icons/categories/CategoryIcon';
import { SliderOption } from './SlideOption';
import { SliderNavigation } from './SliderNavigation';
import { cn } from '../../../../../app/utils/cn';
import { useTransactionsController } from './useTransactionsController';
import { Spinner } from '../../../../components/Spinner';
import emptyStateImage from '../../../../../assets/empty-state.svg';
import { TransactionTypeDrowpdown } from './TransactionTypeDropdown';
import { FiltersModal } from './FiltersModal';
import { formatDate } from '../../../../../app/utils/formatDate';

export function Transactions() {
  const {
    areValuesVisible,
    isLoading,
    isInitialLoading,
    transactions,
    filters,
    isFiltersModalOpen,
    handleCloseFiltersModal,
    handleOpenFiltersModal,
    handleChangeFilters,
  } = useTransactionsController();

  const hasTransactions = transactions.length > 0;

  return (
    <div className='flex flex-col bg-gray-100 p-10 rounded-2xl w-full h-full'>
      {isInitialLoading && (
        <div className='flex justify-center items-center w-full h-full'>
          <Spinner className='w-10 h-10' />
        </div>
      )}
      {!isInitialLoading && (
        <>
          <FiltersModal
            open={isFiltersModalOpen}
            onClose={handleCloseFiltersModal}
          />
          <header>
            <div className='flex justify-between items-center'>
              <TransactionTypeDrowpdown
                selectedType={filters.type}
                onSelect={handleChangeFilters('type')}
              />
              <button onClick={handleOpenFiltersModal}>
                <FilterIcon />
              </button>
            </div>
            <div className='relative mt-6'>
              <Swiper
                slidesPerView={3}
                initialSlide={filters.month}
                centeredSlides
                onSlideChange={(swiper) => {
                  handleChangeFilters('month')(swiper.realIndex);
                }}>
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
            {isLoading && (
              <div className='flex flex-col justify-center items-center h-full'>
                <Spinner className='w-10 h-10' />
              </div>
            )}

            {!hasTransactions && !isLoading && (
              <div className='flex flex-col justify-center items-center h-full'>
                <img src={emptyStateImage} alt='Empty state' />
                <p className='text-gray-700'>
                  Não encontramos nenhuma transação!
                </p>
              </div>
            )}

            {hasTransactions &&
              !isLoading &&
              transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className='flex justify-between items-center gap-4 bg-white p-4 rounded-2xl'>
                  <div className='flex flex-1 items-center gap-3'>
                    <CategoryIcon
                      category={transaction.category?.icon}
                      type={
                        transaction.type === 'EXPENSE' ? 'expense' : 'income'
                      }
                    />
                    <div>
                      <strong className='block font-bold tracking-[-0.5px]'>
                        {transaction.name}
                      </strong>
                      <span className='text-gray-600 text-sm'>
                        {formatDate(new Date(transaction.date))}
                      </span>
                    </div>
                  </div>
                  <span
                    className={cn(
                      'font-medium tracking-[-0.5px]',
                      !areValuesVisible && 'blur-sm',
                      transaction.type === 'EXPENSE'
                        ? 'text-red-800'
                        : 'text-green-800'
                    )}>
                    {transaction.type === 'EXPENSE' ? '- ' : '+ '}
                    {formatCurrency(transaction.value)}
                  </span>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}
