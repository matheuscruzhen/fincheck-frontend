import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useFiltersModal } from './useFiltersModal';
import { Button } from '../../../../../components/Button';
import { cn } from '../../../../../../app/utils/cn';
import Modal from '../../../../../components/Modal';

interface FiltersModalProps {
  open: boolean;
  onClose(): void;
}

const mockedAccounts = [
  { id: '123', name: 'Inter' },
  { id: '234', name: 'Nubank' },
  { id: '345', name: 'C6' },
];

export function FiltersModal({ open, onClose }: FiltersModalProps) {
  const {
    selectedYear,
    selectBankAccountId,
    handleChangeYear,
    handleSelectBankAccount,
  } = useFiltersModal();

  return (
    <Modal open={open} onClose={onClose} title='Filtros'>
      <div className='text-gray-800'>
        <span className='font-bold text-lg tracking-[-1px]'>Conta</span>
        <div className='space-y-2 mt-2'>
          {mockedAccounts.map((account) => (
            <button
              onClick={() => handleSelectBankAccount(account.id)}
              key={account.id}
              className={cn(
                'hover:bg-gray-50 p-2 rounded-2xl w-full text-left transition-colors',
                selectBankAccountId === account.id && '!bg-gray-200'
              )}>
              {account.name}
            </button>
          ))}
        </div>
      </div>
      <div className='mt-10 text-gray-800'>
        <span className='font-bold text-gray-800 text-lg tracking-[-1px]'>
          Ano
        </span>
        <div className='flex justify-between items-center mt-2 w-52'>
          <button
            onClick={() => handleChangeYear(-1)}
            className='flex justify-center items-center w-12 h-12'>
            <ChevronLeftIcon className='w-6 h-6' />
          </button>
          <div className='flex-1 text-center'>
            <span className='font-md text-sm tracking-[-0.5px]'>
              {selectedYear}
            </span>
          </div>
          <button
            onClick={() => handleChangeYear(1)}
            className='flex justify-center items-center w-12 h-12'>
            <ChevronRightIcon className='w-6 h-6' />
          </button>
        </div>
      </div>
      <Button className='mt-10 w-full'>Aplicar Filtros</Button>
    </Modal>
  );
}
