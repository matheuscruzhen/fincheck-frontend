import { CrossCircledIcon } from '@radix-ui/react-icons';
import { NumericFormat } from 'react-number-format';

interface InputCurrencyProps {
  error?: string;
  value?: string | number;
  onChange?(value: string): void;
}

export function InputCurrency({ error, value, onChange }: InputCurrencyProps) {
  return (
    <div>
      <NumericFormat
        thousandSeparator={'.'}
        decimalSeparator={','}
        decimalScale={2}
        value={value}
        onValueChange={(value) => onChange?.(value.value)}
        className='outline-none w-full font-bold text-[32px] text-gray-800 tracking-[-1px]'
        defaultValue='0'
      />

      {error && (
        <div className='flex items-center gap-2 mt-2 text-red-900 text-xs'>
          <CrossCircledIcon />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
