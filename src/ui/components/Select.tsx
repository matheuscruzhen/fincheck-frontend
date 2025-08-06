import { cn } from '../../app/utils/cn';
import * as RdxSelect from '@radix-ui/react-select';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  CrossCircledIcon,
} from '@radix-ui/react-icons';
import { useState } from 'react';

interface SelectProps {
  className?: string;
  error?: string;
  placeholder?: string;
  options: { value: string; label: string }[];
}

export function Select({
  options,
  className,
  error,
  placeholder,
}: SelectProps) {
  const [selectedValue, setSelectedValue] = useState<string>();

  function handleSelect(value: string) {
    setSelectedValue(value);
  }

  return (
    <div>
      <div className='relative'>
        <label
          className={cn(
            'top-1/2 left-3 z-10 absolute text-gray-700 -translate-y-1/2 pointer-events-none',
            selectedValue &&
              'left-[13px] text-xs top-2 transition-all translate-0'
          )}>
          {placeholder}
        </label>
        <RdxSelect.Root onValueChange={handleSelect}>
          <RdxSelect.Trigger
            className={cn(
              `relative bg-white px-3 pt-4 border border-gray-500 focus:border-gray-800 rounded-lg outline-none w-full h-[52px] text-gray-800 text-left`,
              error && '!border-red-900',
              className
            )}>
            <RdxSelect.Value />
            <RdxSelect.Icon className='top-1/2 right-3 absolute -translate-y-1/2'>
              <ChevronDownIcon className='w-6 h-6 text-gray-800' />
            </RdxSelect.Icon>
          </RdxSelect.Trigger>
          <RdxSelect.Portal>
            <RdxSelect.Content className='z-[99] bg-white shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] border border-gray-100 rounded-2xl overflow-hidden'>
              <RdxSelect.ScrollUpButton className='flex justify-center items-center bg-white h-[25px] text-gray-800 cursor-default'>
                <ChevronUpIcon />
              </RdxSelect.ScrollUpButton>
              <RdxSelect.Viewport className='p-2'>
                {options.map((option) => (
                  <RdxSelect.Item
                    key={option.value}
                    value={option.value}
                    className='data-[highlighted]:bg-gray-50 p-2 rounded-lg outline-none data-[state=checked]:font-bold text-gray-800 text-sm transition-colors'>
                    <RdxSelect.ItemText>{option.label}</RdxSelect.ItemText>
                  </RdxSelect.Item>
                ))}
              </RdxSelect.Viewport>
            </RdxSelect.Content>
          </RdxSelect.Portal>
        </RdxSelect.Root>

        {error && (
          <div className='flex items-center gap-2 mt-2 text-red-900 text-xs'>
            <CrossCircledIcon />
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
}
