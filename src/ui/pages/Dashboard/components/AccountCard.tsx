import { formatCurrency } from '../../../../app/utils/formatCurrency';
import { BankAccountTypeIcon } from '../../../components/icons/BankAccountTypeIcon';

interface AccountCard {
  color: string;
  name: string;
  balance: number;
  type: 'CASH' | 'CHECKING' | 'INVESTMENT';
}

export function AccountCard({ balance, color, name, type }: AccountCard) {
  return (
    <div
      className='bg-white p-4 rounded-xl h-[200px] flex flex-col justify-between border-b-4 border-teal-950'
      style={{ borderColor: color }}>
      <div>
        <BankAccountTypeIcon type={type} />
        <span className='text-gray-800 font-medium tracking-[-0.5px] block mt-4'>
          {name}
        </span>
      </div>
      <div>
        <span className='text-gray-800 font-medium tracking-[-0.5px] block'>
          {formatCurrency(balance)}
        </span>
        <small className='text-gray-600 text-sm'>Saldo atual</small>
      </div>
    </div>
  );
}
