import type { ComponentProps } from 'react';
import { cn } from '../../app/utils/cn';
import { Spinner } from './Spinner';

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
}

export function Button({
  className,
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        `bg-teal-900 hover:bg-teal-800 text-white px-6 h-12 
           rounded-2xl font-medium disabled:bg-transparent transition-all
         disabled:text-gray-400 disabled:cursor-not-allowed flex justify-center items-center`,
        className
      )}>
      {!isLoading && <p>Entrar</p>}
      {isLoading && <Spinner className='w-6 h-6' />}
    </button>
  );
}
