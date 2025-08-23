import { ChevronDownIcon } from '@radix-ui/react-icons';
import { TransactionsIcon } from '../../../../../components/icons/TransactionsIcon';
import { DropdownMenu } from '../../../../../components/DropdownMenu';
import { IncomeIcon } from '../../../../../components/icons/IncomeIcon';
import { ExpensesIcon } from '../../../../../components/icons/ExpensesIcon';
import type { TransactionType } from '../../../../../../app/types/TransactionType';

interface TransactionTypeDrowpdownProps {
  onSelect(type: TransactionType | undefined): void;
  selectedType: TransactionType | undefined;
}

export function TransactionTypeDrowpdown({
  onSelect,
  selectedType,
}: TransactionTypeDrowpdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className='flex items-center gap-2'>
          {selectedType === 'INCOME' && <IncomeIcon />}
          {selectedType === 'EXPENSE' && <ExpensesIcon />}
          {selectedType === undefined && <TransactionsIcon />}
          <span className='text-shadow-gray-800 font-medium text-sm tracking-[-0.5]'>
            {selectedType === 'INCOME' && 'Receitas'}
            {selectedType === 'EXPENSE' && 'Despesas'}
            {selectedType === undefined && 'Transações'}
          </span>
          <ChevronDownIcon className='text-gray-900' />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className='w-[279px]'>
        <DropdownMenu.Item
          className='gap-2'
          onSelect={() => {
            onSelect('INCOME');
          }}>
          <IncomeIcon />
          Receitas
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className='gap-2'
          onSelect={() => {
            onSelect('EXPENSE');
          }}>
          <ExpensesIcon />
          Despesas
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className='gap-2'
          onSelect={() => {
            onSelect(undefined);
          }}>
          <TransactionsIcon />
          Transações
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
