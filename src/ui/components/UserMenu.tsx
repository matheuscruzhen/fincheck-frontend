import { ExitIcon } from '@radix-ui/react-icons';
import { DropdownMenu } from './DropdownMenu';
import { useAuth } from '../../app/hooks/useAuth';

export function UserMenu() {
  const { signout } = useAuth();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className='flex justify-center items-center bg-teal-50 border border-teal-100 rounded-full w-12 h-12'>
          <span className='font-medium text-teal-900 text-sm tracking-[-0.5px]'>
            MA
          </span>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className='w-32'>
        <DropdownMenu.Item
          onSelect={signout}
          className='flex justify-between items-center'>
          <span>Sair</span>
          <ExitIcon className='w-4 h-4' />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
