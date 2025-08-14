import { CrossCircledIcon } from '@radix-ui/react-icons';
import { cn } from '../../app/utils/cn';
import { useState } from 'react';
import { formatDate } from '../../app/utils/formatDate';
import { Popover } from './Popover';
import { DatePicker } from './DatePicker';

interface DatePickerInputProps {
  error?: string;
  className?: boolean;
  value: Date;
  onChange?(date: Date): void;
}

export function DatePickerInput({
  className,
  value,
  error,
  onChange,
}: DatePickerInputProps) {
  const [selectedDate, setSelectedDate] = useState(value ?? new Date());

  function handleChangeDate(date: Date) {
    setSelectedDate(date);
    onChange?.(date);
  }

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger>
          <button
            type='button'
            className={cn(
              `relative bg-white px-3 pt-4 border border-gray-500 focus:border-gray-800 rounded-lg outline-none w-full h-[52px] text-gray-700 text-left`,
              error && '!border-red-900',
              className
            )}>
            <span className='top-2 left-[13px] absolute text-gray-700 text-xs pointer-events-none'>
              Data
            </span>
            <span>{formatDate(selectedDate)}</span>
          </button>
        </Popover.Trigger>
        <Popover.Content>
          <DatePicker
            value={selectedDate}
            onChange={(date) => handleChangeDate(date)}
          />
        </Popover.Content>

        {error && (
          <div className='flex items-center gap-2 mt-2 text-red-900 text-xs'>
            <CrossCircledIcon />
            <span>{error}</span>
          </div>
        )}
      </Popover.Root>
    </div>
  );
}
