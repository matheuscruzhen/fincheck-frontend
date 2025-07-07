import type { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
  name: string;
}

export function Input({ id, placeholder, name, ...props }: InputProps) {
  const inputId = id ?? name;

  return (
    <div className='relative'>
      <input
        {...props}
        id={inputId}
        className='w-full bg-white rounded-lg border peer
        border-gray-500 pt-4 px-3 h-[52px] text-gray-800
        placeholder-shown:pt-0 focus:border-gray-800 outline-none'
        placeholder=''
      />
      <label
        htmlFor={inputId}
        className='absolute text-xs top-2 transition-all left-[13px]
        peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5  
        pointer-events-none text-gray-700'>
        {placeholder}
      </label>
    </div>
  );
}
