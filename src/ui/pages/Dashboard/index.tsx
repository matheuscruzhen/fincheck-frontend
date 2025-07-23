import { Logo } from '../../components/Logo';
import { UserMenu } from '../../components/UserMenu';
import { Accounts } from './components/Accounts';
import { Transactions } from './components/Transactions';

export function Dashboard() {
  return (
    <div className='flex flex-col gap-4 p-4 md:px-8 md:pt-6 md:pb-8 w-full h-full'>
      <header className='flex justify-between items-center h-12'>
        <Logo className='h-6 text-teal-900' />
        <UserMenu />
      </header>
      <main className='flex md:flex-row flex-col flex-1 gap-4 max-h-full'>
        <div className='w-full md:w-1/2'>
          <Accounts />
        </div>
        <div className='w-full md:w-1/2'>
          <Transactions />
        </div>
      </main>
    </div>
  );
}
