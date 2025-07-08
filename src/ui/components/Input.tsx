import { forwardRef, type ComponentProps } from 'react';
import { CrossCircledIcon } from '@radix-ui/react-icons';
import { cn } from '../../utils/cn';

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
            `w-full bg-white rounded-lg border peer 
              border-gray-500 pt-4 px-3 h-[52px] text-gray-800 
              placeholder-shown:pt-0 focus:border-gray-800 outline-none`,
            error && '!border-red-900',
            className
          )}
          placeholder=''
        />
        <label
          htmlFor={inputId}
          className={cn(
            `absolute text-xs top-2 transition-all left-[13px] 
                  peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5  
                  pointer-events-none text-gray-700`,
            className
          )}>
          {placeholder}
        </label>

        {error && (
          <div className='flex gap-2 items-center mt-2 text-xs text-red-900'>
            <CrossCircledIcon />
            <span>{error}</span>
          </div>
        )}
      </div>
    );
  }
);
