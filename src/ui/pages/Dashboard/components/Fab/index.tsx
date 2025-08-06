import { PlusIcon } from '@radix-ui/react-icons';
import { DropdownMenu } from '../../../../components/DropdownMenu';
import { BankAccountIcon } from '../../../../components/icons/BankAccountIcon';
import { CategoryIcon } from '../../../../components/icons/categories/CategoryIcon';
import { useDashboard } from '../DashboardContext/useDashboard';

export function Fab() {
  const { openNewAccountModal, openNewTransactionModal } = useDashboard();

  return (
    <div className='right-4 bottom-4 fixed'>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button className='flex justify-center items-center bg-teal-900 rounded-full w-12 h-12'>
            <PlusIcon className='w-6 h-6 text-white' />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item
            className='gap-2'
            onSelect={() => openNewTransactionModal('EXPENSE')}>
            <CategoryIcon type='expense' />
            Nova Despesa
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className='gap-2'
            onSelect={() => openNewTransactionModal('INCOME')}>
            <CategoryIcon type='income' />
            Nova Receita
          </DropdownMenu.Item>
          <DropdownMenu.Item className='gap-2' onSelect={openNewAccountModal}>
            <BankAccountIcon />
            Nova Conta
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
