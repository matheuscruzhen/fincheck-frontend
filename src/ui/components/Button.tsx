import type { ComponentProps } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        `bg-teal-900 hover:bg-teal-800 text-white px-6 h-12 
           rounded-2xl font-medium disabled:bg-gray-100 transition-all
         disabled:text-gray-400 disabled:cursor-not-allowed`,
        className
      )}
    />
  );
}
