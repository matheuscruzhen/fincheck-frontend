import { forwardRef, type ComponentProps } from 'react';
import { CrossCircledIcon } from '@radix-ui/react-icons';
import { cn } from '../../app/utils/cn';

interface InputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, placeholder, name, error, className, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className='relative'>
        <input
          {...props}
          ref={ref}
          name={name}
          id={inputId}
          className={cn(
            `peer bg-white px-3 pt-4 placeholder-shown:pt-0 border border-gray-500 focus:border-gray-800 rounded-lg outline-none w-full h-[52px] text-gray-800`,
            error && '!border-red-900',
            className
          )}
          placeholder=''
        />
        <label
          htmlFor={inputId}
          className={cn(
            `top-2 peer-placeholder-shown:top-3.5 left-[13px] absolute text-gray-700 text-xs peer-placeholder-shown:text-base transition-all pointer-events-none`,
            className
          )}>
          {placeholder}
        </label>

        {error && (
          <div className='flex items-center gap-2 mt-2 text-red-900 text-xs'>
            <CrossCircledIcon />
            <span>{error}</span>
          </div>
        )}
      </div>
    );
  }
);
