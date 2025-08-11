import type { BankAccount } from '../../../../../app/entities/BankAccount';
import { cn } from '../../../../../app/utils/cn';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { BankAccountTypeIcon } from '../../../../components/icons/BankAccountTypeIcon';
import { useDashboard } from '../DashboardContext/useDashboard';

interface AccountCard {
  account: BankAccount;
}

export function AccountCard({ account }: AccountCard) {
  const { color, currentBalance, name, type } = account;
  const { areValuesVisible, openEditAccountModal } = useDashboard();

  return (
    <div
      className='flex flex-col justify-between bg-white p-4 border-teal-950 border-b-4 rounded-xl h-[200px] cursor-pointer'
      style={{ borderColor: color }}
      role='button'
      onClick={() => openEditAccountModal(account)}>
      <div>
        <BankAccountTypeIcon type={type} />
        <span className='block mt-4 font-medium text-gray-800 tracking-[-0.5px]'>
          {name}
        </span>
      </div>
      <div>
        <span
          className={cn(
            'block font-medium text-gray-800 tracking-[-0.5px]',
            !areValuesVisible && 'blur-sm'
          )}>
          {formatCurrency(currentBalance)}
        </span>
        <small className='text-gray-600 text-sm'>Saldo atual</small>
      </div>
    </div>
  );
}
