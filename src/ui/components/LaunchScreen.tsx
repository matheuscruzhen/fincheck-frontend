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
      <h1 className='bg-teal-900 fixed top-0 left-0 h-full w-full grid place-items-center'>
        <div className='flex flex-col items-center gap-4'>
          <Logo className='h-10 text-white' />
          <Spinner className='fill-white text-teal-900' />
        </div>
      </h1>
    </Transition>
  );
}
