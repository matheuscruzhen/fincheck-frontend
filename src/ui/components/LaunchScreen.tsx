import { Logo } from './Logo';
import { Spinner } from './Spinner';
import { Transition } from '@headlessui/react';

interface LaunchScreenProps {
  isLoading: boolean;
}

export function LaunchScreen({ isLoading }: LaunchScreenProps) {
  return (
    <Transition
      show={isLoading}
      enter='transition-opacity duration-75'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity duration-150'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'>
      <div className='top-0 left-0 z-50 fixed place-items-center grid bg-teal-900 w-full h-full'>
        <div className='flex flex-col items-center gap-4'>
          <Logo className='h-10 text-white' />
          <Spinner className='fill-white text-teal-900' />
        </div>
      </div>
    </Transition>
  );
}
